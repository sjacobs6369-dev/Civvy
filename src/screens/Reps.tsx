import { useState } from 'react'
import { Link } from 'react-router-dom'
import { representatives } from '../data/representatives'
import type { Level, Party } from '../types'

const avatarColor: Record<Party, string> = {
  D: '#1d4ed8',
  R: '#b91c1c',
  I: '#6d28d9',
}

const tierMeta: Record<Level, { label: string; color: string }> = {
  local: { label: 'Local — closest to your daily life', color: 'var(--gold)' },
  state: { label: 'State', color: 'var(--green)' },
  federal: { label: 'Federal', color: 'var(--accent)' },
}

const FILTERS: { key: 'all' | Level; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'local', label: 'Local' },
  { key: 'state', label: 'State' },
  { key: 'federal', label: 'Federal' },
]

function initials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
}

export default function Reps() {
  const [filter, setFilter] = useState<'all' | Level>('all')

  // Ordered by proximity to daily life (school board first), per the
  // design principle: "Your state rep is more prominent than your US senator."
  const reps = [...representatives].sort((a, b) => a.proximity - b.proximity)
  const tiers: Level[] = ['local', 'state', 'federal']

  return (
    <>
      <header className="screen-header">
        <h2 className="serif">My Reps</h2>
        <p>Every official who represents you — local to federal — and whose money influences them.</p>
        <span className="location-pill">📍 Hillsborough District 5 · FL House 64 · FL Senate 38 · FL-15</span>
        <div className="sub-tabs">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              className={'sub-tab' + (filter === f.key ? ' active' : '')}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </header>

      <div className="feed">
        {tiers
          .filter((t) => filter === 'all' || filter === t)
          .map((tier) => {
            const tierReps = reps.filter((r) => r.level === tier)
            if (!tierReps.length) return null
            return (
              <div key={tier}>
                <div
                  className="feed-section-label"
                  style={{ color: tierMeta[tier].color }}
                >
                  {tierMeta[tier].label}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 8 }}>
                  {tierReps.map((r) => (
                    <Link key={r.id} to={`/reps/${r.id}`} style={{ textDecoration: 'none' }}>
                      <button className="rep-row">
                        <div className="rep-avatar" style={{ background: avatarColor[r.party] }}>
                          {initials(r.name)}
                        </div>
                        <div className="rep-meta">
                          <div className="rep-name">
                            {r.name}
                            <span className={`party-pill party-${r.party}`}>{r.party}</span>
                          </div>
                          <div className="rep-role">{r.office}</div>
                        </div>
                        <span className="rep-chevron">›</span>
                      </button>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
      </div>
    </>
  )
}
