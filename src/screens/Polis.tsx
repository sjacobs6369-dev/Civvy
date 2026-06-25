import { useState } from 'react'
import { commonGround, organizations, polls } from '../data/polis'
import type { CommonGroundIssue, Party } from '../types'

type Sub = 'discuss' | 'polls' | 'common' | 'events' | 'community'

const partyColor: Record<Party, string> = { D: '#1d4ed8', R: '#b91c1c', I: '#6d28d9' }

// Common Ground's defining mechanic: you commit your own position
// BEFORE the partisan breakdown is revealed. (Product Overview, Polis.)
function CommonGroundCard({ issue }: { issue: CommonGroundIssue }) {
  const [voted, setVoted] = useState(false)

  return (
    <div className="cg-card">
      <div style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.35, marginBottom: 6 }}>{issue.issue}</div>
      <div>
        <span className="cg-support">{issue.support}%</span>
        <span className="cg-support-label"> of Americans agree</span>
      </div>

      {!voted ? (
        <>
          <p style={{ fontSize: 12, color: 'var(--muted)', margin: '10px 0' }}>
            Where do you stand? Vote to reveal the cross-party breakdown.
          </p>
          <div style={{ display: 'flex', gap: 8 }}>
            {['Agree', 'Disagree', 'Unsure'].map((opt) => (
              <button key={opt} className="btn-outline" style={{ flex: 1 }} onClick={() => setVoted(true)}>
                {opt}
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="cg-breakdown">
            {issue.breakdown.map((b) => (
              <div
                key={b.party}
                className="cg-seg"
                style={{ background: partyColor[b.party], flex: b.pct }}
                title={`${b.party}: ${b.pct}%`}
              >
                {b.party} {b.pct}%
              </div>
            ))}
          </div>
          <div className="flag-row" style={{ marginTop: 8 }}>
            <span className="flag-icon">⛔</span>
            <span className="flag-text">
              <strong>Why it’s stuck:</strong> {issue.blocked}
            </span>
          </div>
          <p style={{ fontSize: 11, color: 'var(--muted)', marginTop: 8 }}>
            Status: {issue.status} · Source: {issue.source}
          </p>
        </>
      )}
    </div>
  )
}

export default function Polis() {
  const [sub, setSub] = useState<Sub>('common')

  return (
    <>
      <header className="screen-header">
        <h2 className="serif">Polis</h2>
        <p>The public square — organized by geography, moderated for facts, not opinion.</p>
        <span className="location-pill">📍 Verified Hillsborough resident · posting unlocked</span>
        <div className="sub-tabs">
          {([
            ['discuss', 'Discuss'],
            ['polls', 'Polls'],
            ['common', 'Common Ground'],
            ['events', 'Events'],
            ['community', 'Community'],
          ] as [Sub, string][]).map(([key, label]) => (
            <button key={key} className={'sub-tab' + (sub === key ? ' active' : '')} onClick={() => setSub(key)}>
              {label}
            </button>
          ))}
        </div>
      </header>

      <div className="feed">
        {sub === 'common' && (
          <>
            <p className="feed-section-label">Where a supermajority already agrees</p>
            {commonGround.map((i) => (
              <CommonGroundCard key={i.id} issue={i} />
            ))}
            <p className="disclosure">
              Civvy is not advocating these positions. It documents that a supermajority across party
              lines holds them — and the gap between that and what government has done.
            </p>
          </>
        )}

        {sub === 'polls' && (
          <>
            {polls.map((p) => (
              <div className="poll-card" key={p.id}>
                <div style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
                  <span className="tag" style={p.type === 'verified-constituent' ? { background: 'var(--green-light)', color: 'var(--green)' } : undefined}>
                    {p.type === 'verified-constituent' ? '✓ Verified constituent' : 'Community poll'}
                  </span>
                </div>
                <div className="poll-q">{p.question}</div>
                {p.options.map((o, i) => (
                  <div className="poll-option" key={i}>
                    <div className="poll-option-bar">
                      <div className={'poll-option-fill' + (i === 0 ? ' lead' : '')} style={{ width: `${o.pct}%` }} />
                      <span className="poll-option-label">{o.label}</span>
                      <span className="poll-option-pct">{o.pct}%</span>
                    </div>
                  </div>
                ))}
                <div className="poll-context">{p.context}</div>
                <p style={{ fontSize: 10, color: 'var(--muted)', marginTop: 6 }}>{p.sampleNote}</p>
                {p.type === 'verified-constituent' && (
                  <button className="btn-primary">📨 Send these results to your rep’s office</button>
                )}
              </div>
            ))}
          </>
        )}

        {sub === 'community' && (
          <>
            <p className="feed-section-label">Organizations in your district</p>
            {organizations.map((o) => (
              <div className="card" key={o.id}>
                <div className="card-body">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                    <span className="badge-verified">✓ Verified org</span>
                    <span style={{ fontSize: 11, color: 'var(--muted)' }}>{o.district}</span>
                  </div>
                  <div className="card-title" style={{ fontSize: 14 }}>{o.name}</div>
                  <p style={{ fontSize: 12, color: 'var(--muted)', margin: '6px 0' }}>{o.mission}</p>
                  <div className="flag-row" style={{ background: 'var(--green-light)', border: '1px solid #cce9df' }}>
                    <span className="flag-icon">🙋</span>
                    <span className="flag-text" style={{ color: 'var(--green)' }}>{o.needs}</span>
                  </div>
                </div>
              </div>
            ))}
            <p className="disclosure">
              Vetted by an independent, cross-partisan review committee. Visibility is by relevance to
              your location and values — never by how much an organization contributes.
            </p>
          </>
        )}

        {sub === 'discuss' && (
          <p className="empty-note">
            Chronological, scope-tagged threads from verified district members — no algorithmic ranking.
            Coming in this draft’s next iteration.
          </p>
        )}
        {sub === 'events' && (
          <p className="empty-note">
            User-hosted events, Talk Across the Table sessions, volunteer days, and council-meeting
            reminders. Coming in this draft’s next iteration.
          </p>
        )}
      </div>
    </>
  )
}
