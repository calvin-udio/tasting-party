import { useState, useEffect } from 'react'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'
import { useGameState } from '../hooks/useGameState'
import { initGame, startRound, endRound, nextRound } from '../gameActions'
import { Leaderboard } from '../components/Leaderboard'
import { PLAYERS } from '../data/players'
import { ROUNDS } from '../data/rounds'

// Griffin, don't hack this please
export function AdminPage() {
  const { gameState, loading } = useGameState()
  const [submissionCount, setSubmissionCount] = useState(0)
  const [working, setWorking] = useState(false)

  useEffect(() => {
    if (!gameState || gameState.phase !== 'tasting') {
      setSubmissionCount(0)
      return
    }
    const unsub = onSnapshot(
      collection(db, 'rounds', String(gameState.currentRound), 'submissions'),
      snap => setSubmissionCount(snap.size)
    )
    return unsub
  }, [gameState?.currentRound, gameState?.phase])

  async function run(fn) {
    setWorking(true)
    try { await fn() } finally { setWorking(false) }
  }

  if (loading) return <div className="screen-center"><div className="spinner" /></div>

  const round = gameState ? ROUNDS[gameState.currentRound] : null
  const isLastRound = gameState && gameState.currentRound >= ROUNDS.length - 1

  return (
    <div className="page admin-page">
      <header className="page-header">
        <span className="logo-text">Tasting Party</span>
        <span className="admin-badge">ADMIN</span>
      </header>

      <main className="page-main admin-main">
        {!gameState && (
          <div className="admin-section">
            <h2>No game in progress</h2>
            <p>Initialize a new game to get started. This resets all scores.</p>
            <button
              className="admin-btn primary"
              onClick={() => run(initGame)}
              disabled={working}
            >
              Initialize Game
            </button>
          </div>
        )}

        {gameState && (
          <>
            <div className="admin-section">
              <div className="game-status">
                <div className="status-item">
                  <span className="status-label">Round</span>
                  <span className="status-value">{gameState.currentRound + 1} / {ROUNDS.length}</span>
                </div>
                <div className="status-item">
                  <span className="status-label">Phase</span>
                  <span className={`status-value phase-${gameState.phase}`}>{gameState.phase}</span>
                </div>
                {gameState.phase === 'tasting' && (
                  <div className="status-item">
                    <span className="status-label">Submitted</span>
                    <span className="status-value">{submissionCount} / {PLAYERS.length}</span>
                  </div>
                )}
              </div>
            </div>

            {round && (
              <div className="admin-section round-info">
                <h3>{round.category}</h3>
                <p className="nominated-by">Nominated by {round.nominatedBy}</p>
                <div className="answer-key">
                  <p className="answer-key-label">Answer key</p>
                  {round.correctOrder.map((typeIdx, sampleIdx) => (
                    <div key={sampleIdx} className="answer-key-row">
                      Sample {sampleIdx + 1} → {round.types[typeIdx].name}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="admin-controls">
              {gameState.phase === 'lobby' && (
                <button
                  className="admin-btn primary"
                  onClick={() => run(startRound)}
                  disabled={working}
                >
                  Start Round 1
                </button>
              )}

              {gameState.phase === 'tasting' && (
                <button
                  className="admin-btn danger"
                  onClick={() => run(() => endRound(gameState.currentRound))}
                  disabled={working}
                >
                  End Round & Score ({submissionCount}/{PLAYERS.length} submitted)
                </button>
              )}

              {gameState.phase === 'scored' && !isLastRound && (
                <button
                  className="admin-btn primary"
                  onClick={() => run(nextRound)}
                  disabled={working}
                >
                  Next Round →
                </button>
              )}

              {gameState.phase === 'complete' && (
                <div className="complete-banner">Game complete!</div>
              )}

              {(gameState.phase === 'scored' || gameState.phase === 'complete') && (
                <button
                  className="admin-btn reset"
                  onClick={() => { if (window.confirm('Reset and start a new game? This clears all scores.')) run(initGame) }}
                  disabled={working}
                >
                  Reset Game
                </button>
              )}
            </div>

            <Leaderboard />
          </>
        )}
      </main>
    </div>
  )
}
