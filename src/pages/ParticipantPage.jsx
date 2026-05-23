import { useState, useEffect } from 'react'
import confetti from 'canvas-confetti'
import { useGameState } from '../hooks/useGameState'
import { PlayerSelect } from '../components/PlayerSelect'
import { TastingRound } from '../components/TastingRound'
import { RoundResults } from '../components/RoundResults'
import { Leaderboard } from '../components/Leaderboard'
import { ChampionsSection } from '../components/ChampionsSection'
import { PLAYERS } from '../data/players'
import { ROUNDS } from '../data/rounds'

export function ParticipantPage() {
  const [playerId, setPlayerId] = useState(() => localStorage.getItem('tp-player'))
  const { gameState, loading, error } = useGameState()

  function selectPlayer(id) {
    localStorage.setItem('tp-player', id)
    setPlayerId(id)
  }

  function clearPlayer() {
    localStorage.removeItem('tp-player')
    setPlayerId(null)
  }

  useEffect(() => {
    if (gameState?.phase === 'complete') {
      confetti({ particleCount: 220, spread: 100, origin: { y: 0.5 } })
      setTimeout(() => confetti({ particleCount: 120, spread: 80, origin: { x: 0.2, y: 0.6 } }), 400)
      setTimeout(() => confetti({ particleCount: 120, spread: 80, origin: { x: 0.8, y: 0.6 } }), 700)
    }
  }, [gameState?.phase])

  const player = PLAYERS.find(p => p.id === playerId)

  if (playerId && !player) {
    clearPlayer()
    return <PlayerSelect onSelect={selectPlayer} />
  }

  if (!playerId) return <PlayerSelect onSelect={selectPlayer} />

  if (loading) return <div className="screen-center"><div className="spinner" /></div>
  if (error) return <div className="screen-center"><p className="waiting-text">Connection error — check your network and reload.</p></div>

  return (
    <div className="page">
      <header className="page-header">
        <span className="logo-text">Tasting Party</span>
        <button className="change-player-btn" onClick={clearPlayer}>
          {player.name} ✕
        </button>
      </header>

      <main className="page-main">
        {!gameState && (
          <div className="screen-center">
            <p className="waiting-text">Waiting for the host to set up the game…</p>
          </div>
        )}

        {gameState?.phase === 'lobby' && (
          <div className="lobby-waiting">
            <h1 className="lobby-title">4th Annual Tasting Party</h1>
            <ChampionsSection />
            <div className="lobby-status">
              <h2 className="welcome-heading">Welcome, {player.name}!</h2>
              <p className="waiting-text">The party hasn't started yet. Hang tight…</p>
            </div>
            <div className="lobby-rounds">
              <p className="section-label">Tonight's lineup</p>
              <ol className="lobby-round-list">
                {ROUNDS.map((round, i) => (
                  <li key={i} className="lobby-round-item">
                    <span className="lobby-round-category">{round.category}</span>
                    <span className="lobby-round-nominator">by {round.nominatedBy}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}

        {gameState?.phase === 'tasting' && (
          <TastingRound
            roundIndex={gameState.currentRound}
            playerId={playerId}
          />
        )}

        {gameState?.phase === 'scored' && (
          <RoundResults
            roundIndex={gameState.currentRound}
            playerId={playerId}
          />
        )}

        {gameState?.phase === 'complete' && (
          <div className="final-screen">
            <h2 className="final-heading">Game Complete!</h2>
            <Leaderboard highlightPlayerId={playerId} finalMode />
          </div>
        )}
      </main>
    </div>
  )
}
