import { PLAYERS } from '../data/players'
import { ChampionsSection } from './ChampionsSection'

export function PlayerSelect({ onSelect }) {
  return (
    <div className="player-select">
      <div className="player-select-inner">
        <h1>4th Annual Tasting Party</h1>

        <ChampionsSection />

        <div className="player-grid-section">
          <p className="section-label" style={{ textAlign: 'center', marginBottom: 14 }}>Choose your character:</p>
          <div className="player-grid">
            {PLAYERS.map(player => (
              <button
                key={player.id}
                className="player-btn"
                onClick={() => onSelect(player.id)}
              >
                {player.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
