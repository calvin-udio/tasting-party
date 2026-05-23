import { useState, useEffect } from 'react'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'
import { PLAYERS } from '../data/players'

const MEDALS = ['🥇', '🥈', '🥉']
const PODIUM_CLASS = ['rank-gold', 'rank-silver', 'rank-bronze']

export function Leaderboard({ highlightPlayerId, finalMode = false }) {
  const [scores, setScores] = useState([])

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'scores'), snap => {
      const scoreMap = Object.fromEntries(snap.docs.map(d => [d.id, d.data()]))
      // Drive from PLAYERS so adds/removes in players.js are reflected immediately
      const data = PLAYERS.map(p => ({
        id: p.id,
        name: p.name,
        totalScore: scoreMap[p.id]?.totalScore ?? 0,
        roundScores: scoreMap[p.id]?.roundScores ?? {},
      }))
      data.sort((a, b) => b.totalScore - a.totalScore)
      setScores(data)
    })
    return unsub
  }, [])

  if (scores.length === 0) return null

  // Standard competition ranking: tied players share the same rank, next rank skips
  const ranked = scores.map((player, i, arr) => {
    const rank = arr.findIndex(p => p.totalScore === player.totalScore) + 1
    return { ...player, rank }
  })

  const winners = ranked.filter(p => p.rank === 1)

  return (
    <div className="leaderboard">
      {!finalMode && (
        <div className="standings-label">
          <span className="live-dot" />
          Live Standings
        </div>
      )}

      {finalMode && (
        <div className="winner-card">
          <div className="winner-trophy">🏆</div>
          <div className="winner-label">{winners.length > 1 ? 'Winners' : 'Winner'}</div>
          <div className="winner-name">{winners.map(p => p.name).join(' & ')}</div>
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
          {ranked.map(player => (
            <tr
              key={player.id}
              className={[
                finalMode ? (PODIUM_CLASS[player.rank - 1] ?? '') : '',
                player.id === highlightPlayerId ? 'highlight' : '',
              ].filter(Boolean).join(' ')}
            >
              <td className="rank">{finalMode ? (MEDALS[player.rank - 1] ?? player.rank) : player.rank}</td>
              <td className="player-name">{player.name}</td>
              <td className="total-score">{player.totalScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
