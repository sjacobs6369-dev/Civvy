import { useState } from 'react'
import { races } from '../data/home'
import type { Party } from '../types'

type Sub = 'actions' | 'journey' | 'ballot'

const partyClass: Record<Party, string> = { D: 'party-D', R: 'party-R', I: 'party-I' }

const dimensions = [
  {
    title: '📚 Civic Learning',
    count: '8 completed',
    items: ['Watched “How a Bill Actually Dies”', 'Looked up 5 representatives', 'Read the Medicare 4-layer explainer'],
  },
  {
    title: '🗣 Civic Voice',
    count: '4 actions',
    items: ['Called Rep. Okafor about drug pricing', 'Voted in 2 Polis polls', 'Signed 1 district petition'],
  },
  {
    title: '🤝 Civic Contribution',
    count: '6 hours',
    items: ['Volunteered with East Tampa Mutual Aid', 'Attended a school-board meeting'],
  },
  {
    title: '🎯 Civic Impact',
    count: '1 connected outcome',
    items: ['Called about the arts-funding budget line — it was restored in FY25'],
  },
]

export default function Passport() {
  const [sub, setSub] = useState<Sub>('ballot')

  return (
    <>
      <header className="screen-header">
        <h2 className="serif">Passport</h2>
        <p>Your civic record — private to you. It never judges or scores you against anyone.</p>
        <div className="sub-tabs">
          {([
            ['actions', 'Actions'],
            ['journey', 'Journey'],
            ['ballot', 'Ballot'],
          ] as [Sub, string][]).map(([key, label]) => (
            <button key={key} className={'sub-tab' + (sub === key ? ' active' : '')} onClick={() => setSub(key)}>
              {label}
            </button>
          ))}
        </div>
      </header>

      <div className="feed">
        {sub === 'ballot' && (
          <>
            <div className="win-card" style={{ borderLeftColor: 'var(--green)' }}>
              <div className="win-tag">Registration</div>
              <div className="win-text">✓ You’re registered to vote in Hillsborough County.</div>
            </div>

            <p className="feed-section-label">Upcoming on your ballot</p>
            {races.map((race) => (
              <div className="card" key={race.id}>
                <div className="card-body">
                  <div style={{ display: 'flex', gap: 6, marginBottom: 6 }}>
                    <span className="tag">{race.isPrimary ? 'Primary' : 'General'}</span>
                    <span style={{ fontSize: 11, color: 'var(--muted)' }}>{race.date}</span>
                  </div>
                  <div className="card-title" style={{ fontSize: 14, marginBottom: 10 }}>{race.office}</div>
                  {race.candidates.map((c, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        padding: '8px 0',
                        borderTop: i ? '1px solid #f3f4f6' : 'none',
                      }}
                    >
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 13, fontWeight: 600 }}>
                          {c.name}
                          <span className={`party-pill ${partyClass[c.party]}`}>{c.party}</span>
                        </div>
                        <div style={{ fontSize: 11, color: 'var(--muted)' }}>{c.note}</div>
                      </div>
                      {c.matchPct != null && (
                        <div style={{ textAlign: 'center', minWidth: 48 }}>
                          <div style={{ fontSize: 16, fontWeight: 700, color: c.matchPct >= 60 ? 'var(--green)' : 'var(--muted)' }}>
                            {c.matchPct}%
                          </div>
                          <div style={{ fontSize: 9, color: 'var(--muted)' }}>match</div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="everyday-card">
              <div className="everyday-tag">Often missed</div>
              <div className="everyday-text" style={{ fontStyle: 'normal', fontFamily: 'DM Sans', fontSize: 13 }}>
                People skip these every cycle: school board, community-college trustee, water authority.
                The last Hillsborough school-board seat was decided by a few hundred votes.
              </div>
            </div>
          </>
        )}

        {sub === 'journey' && (
          <>
            <p className="feed-section-label">Four dimensions of your civic life</p>
            {dimensions.map((d) => (
              <div className="dim-card" key={d.title}>
                <div className="dim-header">
                  <span className="dim-title">{d.title}</span>
                  <span className="dim-count">{d.count}</span>
                </div>
                {d.items.map((it, i) => (
                  <div className="dim-item" key={i}>
                    <span className="dim-check">✓</span>
                    {it}
                  </div>
                ))}
              </div>
            ))}
            <p className="disclosure">
              The Passport turns information into identity. It shows what you’ve done and what you can
              explore next — never a grade, never compared to others.
            </p>
          </>
        )}

        {sub === 'actions' && (
          <>
            <p className="feed-section-label">Suggested for you — election items first</p>
            <div className="card">
              <div className="card-body">
                <div className="card-title" style={{ fontSize: 14 }}>Register the Aug 18 primary on your ballot</div>
                <p style={{ fontSize: 12, color: 'var(--muted)', margin: '6px 0' }}>
                  Your school-board seat is on it — one of the lowest-turnout, highest-impact races you can vote in.
                </p>
                <button className="btn-primary" style={{ marginTop: 0 }}>Add reminder</button>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="card-title" style={{ fontSize: 14 }}>Follow up with Rep. Okafor’s office</div>
                <p style={{ fontSize: 12, color: 'var(--muted)', margin: '6px 0' }}>
                  You called on Jun 14 about drug-price transparency. No response logged yet.
                </p>
                <button className="btn-outline" style={{ width: '100%' }}>Set a follow-up reminder</button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}
