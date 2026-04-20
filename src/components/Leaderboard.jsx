import { useState, useEffect } from 'react'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'

const MEDALS = ['🥇', '🥈', '🥉']
const PODIUM_CLASS = ['rank-gold', 'rank-silver', 'rank-bronze']

export function Leaderboard({ highlightPlayerId, finalMode = false }) {
  const [scores, setScores] = useState([])

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'scores'), snap => {
      const data = snap.docs.map(d => ({ id: d.id, ...d.data() }))
      data.sort((a, b) => b.totalScore - a.totalScore)
      setScores(data)
    })
    return unsub
  }, [])

  if (scores.length === 0) return null

  return (
    <div className="leaderboard">
      {!finalMode && (
        <div className="standings-label">
          <span className="live-dot" />
          Live Standings
        </div>
      )}

      {finalMode && scores.length > 0 && (
        <div className="winner-card">
          <div className="winner-trophy">🏆</div>
          <div className="winner-label">Winner</div>
          <div className="winner-name">{scores[0].name}</div>
        </div>
      )}

      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Player</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((player, i) => (
            <tr
              key={player.id}
              className={[
                finalMode ? (PODIUM_CLASS[i] ?? '') : '',
                player.id === highlightPlayerId ? 'highlight' : '',
              ].filter(Boolean).join(' ')}
            >
              <td className="rank">{finalMode ? (MEDALS[i] ?? i + 1) : i + 1}</td>
              <td className="player-name">{player.name}</td>
              <td className="total-score">{player.totalScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
