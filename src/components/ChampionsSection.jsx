const CHAMPIONS = [
  { year: 2023, name: 'Grace' },
  { year: 2024, name: 'Bengel' },
  { year: 2025, name: 'Sami' },
]

export function ChampionsSection() {
  return (
    <div className="champions-section">
      <p className="section-label">Hall of Champions</p>
      <div className="champions-row">
        {CHAMPIONS.map(c => (
          <div key={c.year} className="champion-card">
            <div className="champion-photo-wrap">
              <img
                src={`${import.meta.env.BASE_URL}winner-${c.name.toLowerCase()}.jpg`}
                alt={c.name}
                className="champion-photo"
                onError={e => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextElementSibling.style.display = 'flex'
                }}
              />
              <div className="champion-initial" style={{ display: 'none' }}>{c.name[0]}</div>
            </div>
            <div className="champion-year">{c.year}</div>
            <div className="champion-name">{c.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
