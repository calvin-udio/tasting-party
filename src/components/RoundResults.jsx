import { useState, useEffect } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { ROUNDS } from '../data/rounds'
import { Leaderboard } from './Leaderboard'

export function RoundResults({ roundIndex, playerId }) {
  const round = ROUNDS[roundIndex]
  const [submission, setSubmission] = useState(undefined)

  useEffect(() => {
    getDoc(doc(db, 'rounds', String(roundIndex), 'submissions', playerId))
      .then(snap => setSubmission(snap.exists() ? snap.data() : null))
  }, [roundIndex, playerId])

  if (submission === undefined) {
    return <div className="screen-center"><div className="spinner" /></div>
  }

  return (
    <div className="round-results">
      <div className="round-header">
        <span className="round-badge">Round {roundIndex + 1} Results</span>
        <h2 className="round-category">{round.category}</h2>
      </div>

      <div className="correct-answers">
        <p className="section-label">The Answers</p>
        {round.correctOrder.map((typeIdx, sampleIdx) => {
          const type = round.types[typeIdx]
          const playerTypeIdx = submission?.answers?.[sampleIdx]
          const didSubmit = submission && !submission.cantParticipate && submission.answers
          const isCorrect = didSubmit && playerTypeIdx === typeIdx
          const isWrong = didSubmit && playerTypeIdx !== typeIdx

          return (
            <div
              key={sampleIdx}
              className={`answer-row${isCorrect ? ' correct' : isWrong ? ' wrong' : ''}`}
            >
              <div className="answer-row-main">
                <span className="answer-sample">Sample {sampleIdx + 1}</span>
                <span className="answer-type">{type.name}</span>
                {isCorrect && <span className="verdict correct-icon">✓</span>}
                {isWrong && <span className="verdict wrong-icon">✗</span>}
              </div>
              {isWrong && (
                <div className="answer-row-sub">
                  you guessed: {round.types[playerTypeIdx]?.name ?? '—'}
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="your-round-score">
        {!submission && <p>You didn't submit — <strong>0 pts</strong></p>}
        {submission?.cantParticipate && <p>You sat this one out — <strong className="score-num">1 pt</strong></p>}
        {submission && !submission.cantParticipate && (
          <p>Your score this round: <strong className="score-num">{submission.score ?? '—'} pts</strong></p>
        )}
      </div>

      <Leaderboard highlightPlayerId={playerId} />
    </div>
  )
}
