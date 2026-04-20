import { useState, useEffect } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'

export function useGameState() {
  const [gameState, setGameState] = useState(undefined)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'game', 'state'), (snap) => {
      setGameState(snap.exists() ? snap.data() : null)
      setLoading(false)
    })
    return unsub
  }, [])

  return { gameState, loading }
}
