import { PLAYERS } from '../data/players'
import { ChampionsSection } from './ChampionsSection'

const TEAM_LABELS = { 1: 'Tasting Group 1', 2: 'Tasting Group 2', 3: 'Tasting Group 3', 4: 'Tasting Group 4' }

export function PlayerSelect({ onSelect }) {
  const teams = [1, 2, 3, 4].map(t => ({
    id: t,
    label: TEAM_LABELS[t],
    players: PLAYERS.filter(p => p.team === t),
  }))

  return (
    <div className="player-select">
      <div className="player-select-inner">
        <h1>4th Annual Tasting Party</h1>

        <ChampionsSection />

        <div className="player-grid-section">
          <p className="section-label" style={{ textAlign: 'center', marginBottom: 14 }}>Choose your character:</p>
          {teams.map(team => (
            <div key={team.id} className={`team-group team-group--${team.id}`}>
              <div className="team-label">{team.label}</div>
              <div className="player-grid">
                {team.players.map(player => (
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
          ))}
        </div>
      </div>
    </div>
  )
}
