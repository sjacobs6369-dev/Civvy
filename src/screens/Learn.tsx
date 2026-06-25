import { useState } from 'react'
import { Link } from 'react-router-dom'
import LayerPills from '../components/LayerPills'
import { learnSeries, learnVideos } from '../data/learn'
import { articles } from '../data/articles'

type View = 'feed' | 'library' | 'current'

export default function Learn() {
  const [view, setView] = useState<View>('feed')

  return (
    <>
      <header className="screen-header">
        <h2 className="serif">Learn</h2>
        <p>Civic confidence is the first product Civvy delivers.</p>
        <div className="learn-toggle">
          {(['feed', 'library', 'current'] as View[]).map((v) => (
            <button
              key={v}
              className={'learn-toggle-btn' + (view === v ? ' active' : '')}
              onClick={() => setView(v)}
            >
              {v === 'feed' ? '▶ Feed' : v === 'library' ? '📚 Library' : '📰 Current Events'}
            </button>
          ))}
        </div>
      </header>

      {view === 'feed' && (
        <div className="learn-feed">
          {learnVideos.map((v) => (
            <div className="learn-card" key={v.id}>
              <div className={`learn-bg learn-bg-${v.bg}`} />
              <div className="learn-content">
                <div className="learn-series">{v.series}</div>
                <div className="learn-title">{v.title}</div>
                <div className="learn-desc">{v.description}</div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span className="learn-duration">▶ {v.duration}</span>
                  <button className="learn-watch">Watch</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {view === 'library' && (
        <div className="feed">
          {learnSeries.map((s) => (
            <div className="card" key={s.name}>
              <div
                className="lib-series-banner"
                style={{ background: s.color, height: 58, display: 'flex', alignItems: 'center', padding: '0 16px', gap: 12 }}
              >
                <span style={{ fontSize: 22 }}>{s.emoji}</span>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: 'white' }}>{s.name}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)' }}>{s.lessons.length} lessons</div>
                </div>
              </div>
              <div style={{ padding: '4px 14px 10px' }}>
                {s.lessons.map((l) => (
                  <div
                    key={l.num}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      padding: '8px 0',
                      borderBottom: '1px solid #f3f4f6',
                    }}
                  >
                    <span style={{ fontWeight: 700, color: 'var(--accent)', fontSize: 13, width: 16 }}>{l.num}</span>
                    <span style={{ fontSize: 13, flex: 1 }}>{l.title}</span>
                    <span style={{ fontSize: 11, color: 'var(--muted)' }}>{l.duration}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {view === 'current' && (
        <div className="feed">
          <p className="feed-section-label">4-layer explainers — newest first</p>
          {articles.map((a) => (
            <Link key={a.id} to={`/learn/article/${a.id}`} style={{ textDecoration: 'none' }}>
              <div className="card">
                <div className="card-img">{a.emoji}</div>
                <div className="card-body">
                  <div className="source-row">
                    <span className="source-dot" />
                    <span className="source-name">{a.kicker} · {a.date}</span>
                  </div>
                  <div className="card-title">{a.title}</div>
                  <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 6, lineHeight: 1.45 }}>{a.summary}</p>
                  <LayerPills />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
