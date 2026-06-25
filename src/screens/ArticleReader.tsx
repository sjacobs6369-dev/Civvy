import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { articleById } from '../data/articles'

const TABS = [
  { key: 'what', label: 'What', color: 'var(--layer-what-fg)', bg: 'var(--layer-what-bg)' },
  { key: 'why', label: 'Why', color: 'var(--layer-why-fg)', bg: 'var(--layer-why-bg)' },
  { key: 'power', label: 'Power', color: 'var(--layer-power-fg)', bg: 'var(--layer-power-bg)' },
  { key: 'act', label: 'Act', color: 'var(--layer-act-fg)', bg: 'var(--layer-act-bg)' },
] as const

type LayerKey = (typeof TABS)[number]['key']

export default function ArticleReader() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [active, setActive] = useState<LayerKey>('what')
  const article = id ? articleById(id) : undefined

  if (!article) {
    return (
      <div className="reader">
        <p className="empty-note">Article not found.</p>
      </div>
    )
  }

  const layer = article.layers[active]
  const activeTab = TABS.find((t) => t.key === active)!

  return (
    <div className="reader">
      <div className="reader-hero">
        <button className="profile-back" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <div className="reader-kicker">{article.kicker}</div>
        <h1 className="reader-title">{article.title}</h1>
        <div className="reader-meta">{article.date} · 4-layer explainer</div>
      </div>

      <div className="profile-tabs">
        {TABS.map((t) => (
          <button
            key={t.key}
            className={'pst' + (active === t.key ? ' active' : '')}
            style={active === t.key ? { background: t.color } : undefined}
            onClick={() => setActive(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="layer-block">
        <div className="layer-head">
          <span className="layer-num" style={{ background: activeTab.color }}>
            {TABS.findIndex((t) => t.key === active) + 1}
          </span>
          <span className="layer-name" style={{ color: activeTab.color }}>
            {activeTab.label}
          </span>
        </div>
        <div className="layer-body">
          {layer.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', gap: 8, padding: '0 16px 24px' }}>
        <button className="btn-outline" style={{ flex: 1 }}>
          💾 Save
        </button>
        <button className="btn-outline" style={{ flex: 1 }}>
          🗣 Discuss
        </button>
        <button className="btn-outline" style={{ flex: 1 }}>
          ↗ Share
        </button>
      </div>
    </div>
  )
}
