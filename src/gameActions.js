import {
  doc, setDoc, updateDoc, getDocs, collection,
  writeBatch, increment, serverTimestamp,
} from 'firebase/firestore'
import { db } from './firebase'
import { PLAYERS } from './data/players'
import { ROUNDS } from './data/rounds'

export function calculateScore(answers, correctOrder, cantParticipate) {
  if (cantParticipate) return 1
  if (!answers || answers.length !== 4) return 0
  let correct = 0
  for (let i = 0; i < 4; i++) {
    if (answers[i] === correctOrder[i]) correct++
  }
  // Getting exactly 3 correct is impossible in a bijection, so scores are: 0,1,2,4
  return correct
}

export async function initGame() {
  // Reset game state and scores
  await setDoc(doc(db, 'game', 'state'), { currentRound: 0, phase: 'lobby' })
  const scoreBatch = writeBatch(db)
  PLAYERS.forEach(player => {
    scoreBatch.set(doc(db, 'scores', player.id), {
      name: player.name,
      totalScore: 0,
      roundScores: {},
    })
  })
  await scoreBatch.commit()

  // Clear all submissions from previous runs
  const subBatch = writeBatch(db)
  for (let i = 0; i < ROUNDS.length; i++) {
    const snap = await getDocs(collection(db, 'rounds', String(i), 'submissions'))
    snap.docs.forEach(d => subBatch.delete(d.ref))
  }
  await subBatch.commit()
}

export async function startRound() {
  await updateDoc(doc(db, 'game', 'state'), { phase: 'tasting' })
}

export async function endRound(currentRound) {
  const snapshot = await getDocs(
    collection(db, 'rounds', String(currentRound), 'submissions')
  )
  const batch = writeBatch(db)
  const correctOrder = ROUNDS[currentRound].correctOrder

  snapshot.docs.forEach(subDoc => {
    const { answers, cantParticipate } = subDoc.data()
    const score = calculateScore(answers, correctOrder, cantParticipate)
    batch.update(subDoc.ref, { score })
    batch.update(doc(db, 'scores', subDoc.id), {
      totalScore: increment(score),
      [`roundScores.${currentRound}`]: score,
    })
  })

  const isLast = currentRound >= ROUNDS.length - 1
  batch.update(doc(db, 'game', 'state'), {
    phase: isLast ? 'complete' : 'scored',
  })
  await batch.commit()
}

export async function nextRound() {
  await updateDoc(doc(db, 'game', 'state'), {
    currentRound: increment(1),
    phase: 'tasting',
  })
}
