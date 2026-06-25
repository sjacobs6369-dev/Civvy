import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LayerPills from '../components/LayerPills'
import { homeFeed, wins } from '../data/home'

function LiveTracker() {
  // The social-proof mechanic: a live-incrementing contact counter.
  const [count, setCount] = useState(312)
  useEffect(() => {
    const t = setInterval(() => setCount((c) => c + Math.round(Math.random() * 2)), 2500)
    return () => clearInterval(t)
  }, [])
  const goal = 500
  const pct = Math.min(100, Math.round((count / goal) * 100))

  return (
    <div className="live-tracker">
      <div className="tracker-header">
        <div className="tracker-title-row">
          <span className="live-dot" />
          <span className="live-label">LIVE · FL HOUSE 64</span>
        </div>
        <div className="tracker-issue">
          Call before the drug-price-transparency committee vote
        </div>
      </div>
      <div className="tracker-body">
        <div className="tracker-stat-row">
          <div className="tracker-stat">
            <span className="t-val">{count}</span>
            <span className="t-label">neighbors called</span>
          </div>
          <div className="tracker-stat">
            <span className="t-val">2</span>
            <span className="t-label">days left</span>
          </div>
        </div>
        <div className="progress-label">
          <span>District goal</span>
          <strong>{pct}%</strong>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${pct}%` }} />
        </div>
        <button className="btn-primary">Join them — open the call script</button>
      </div>
    </div>
  )
}

const badgeColor: Record<string, string> = {
  'rep-voted': '#fde8e8',
  'bill-update': '#eff6ff',
  article: '#fdf2f8',
  poll: '#f0fdf4',
}

export default function Home() {
  return (
    <>
      <header className="screen-header">
        <h2 className="serif">Your Briefing</h2>
        <p>One or two things you can actually do today — not fifteen you should know about.</p>
        <span className="location-pill">📍 Tampa, FL · Hillsborough District 5</span>
      </header>

      <div className="feed">
        <LiveTracker />

        <div className="feed-section-label">Following</div>
        {homeFeed
          .filter((c) => c.type !== 'tracker')
          .map((card) => (
            <div className="card" key={card.id}>
              <div className="card-body">
                <span
                  className="party-pill"
                  style={{ marginLeft: 0, background: badgeColor[card.type] ?? '#eef2ff', color: '#374151' }}
                >
                  {card.badge}
                </span>
                <div className="card-title" style={{ marginTop: 8 }}>
                  {card.title}
                </div>
                {card.detail && (
                  <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 6, lineHeight: 1.45 }}>
                    {card.detail}
                  </p>
                )}
                {card.type === 'article' && <LayerPills />}
                {card.link && (
                  <Link to={card.link.to} style={{ textDecoration: 'none' }}>
                    <button className="btn-ghost" style={{ marginTop: 10 }}>
                      {card.link.label} →
                    </button>
                  </Link>
                )}
              </div>
            </div>
          ))}

        <div className="feed-section-label">Wins in your district</div>
        {wins.map((w) =>
          w.kind === 'everyday' ? (
            <div className="everyday-card" key={w.id}>
              <div className="everyday-tag">The everyday story</div>
              <div className="everyday-text">{w.text}</div>
            </div>
          ) : (
            <div className="win-card" key={w.id}>
              <div className="win-tag">
                {w.kind === 'civic-win' ? 'Civic win' : w.kind === 'community' ? 'Community' : 'Progress'}
              </div>
              <div className="win-text">{w.text}</div>
            </div>
          ),
        )}

        <p className="disclosure">
          The feed shows only what you follow, plus district wins and election reminders. It is not
          ranked by outrage or engagement — by design.
        </p>
      </div>
    </>
  )
}
