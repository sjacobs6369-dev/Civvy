import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { repById } from '../data/representatives'
import type { Party } from '../types'

const avatarColor: Record<Party, string> = { D: '#1d4ed8', R: '#b91c1c', I: '#6d28d9' }

const TABS = ['Background', 'Record', 'Promises', 'Donors', 'Posts', 'Give'] as const
type Tab = (typeof TABS)[number]

const fmt = (n: number) => '$' + n.toLocaleString('en-US')

function initials(name: string) {
  return name.split(' ').map((n) => n[0]).slice(0, 2).join('')
}

export default function RepProfile() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [tab, setTab] = useState<Tab>('Background')
  const rep = id ? repById(id) : undefined

  if (!rep) return <p className="empty-note">Representative not found.</p>

  const totalDonations = rep.donors.reduce((s, d) => s + d.amount, 0)

  return (
    <div className="reader">
      <div className="profile-hero">
        <button className="profile-back" onClick={() => navigate(-1)}>
          ← My Reps
        </button>
        <div className="profile-id">
          <div className="rep-avatar" style={{ background: avatarColor[rep.party], width: 56, height: 56, fontSize: 20 }}>
            {initials(rep.name)}
          </div>
          <div>
            <div className="profile-name">
              {rep.name}
              <span className={`party-pill party-${rep.party}`}>{rep.party}</span>
            </div>
            <div className="profile-sub">{rep.office}</div>
            <div className="profile-sub">Next election: {rep.nextElection}</div>
          </div>
        </div>
      </div>

      <div className="profile-tabs">
        {TABS.map((t) => (
          <button key={t} className={'pst' + (tab === t ? ' active' : '')} onClick={() => setTab(t)}>
            {t}
          </button>
        ))}
      </div>

      <div className="feed">
        {tab === 'Background' && (
          <>
            <div className="card">
              <div className="card-body">
                <div className="fact-row">
                  <span className="fact-icon">📍</span>
                  <div>
                    <div className="fact-label">Hometown</div>
                    <div className="fact-val">{rep.hometown}</div>
                  </div>
                </div>
                <div className="fact-row">
                  <span className="fact-icon">🏛</span>
                  <div>
                    <div className="fact-label">Committees</div>
                    <div className="fact-val">{rep.committees.join(' · ')}</div>
                  </div>
                </div>
                <div className="fact-row" style={{ borderBottom: 'none' }}>
                  <span className="fact-icon">🗳</span>
                  <div>
                    <div className="fact-label">Next election</div>
                    <div className="fact-val">{rep.nextElection}</div>
                  </div>
                </div>
              </div>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.6, color: '#2b2b3a', padding: '0 2px' }}>{rep.background}</p>
            {rep.dataNote && <p className="disclosure">ℹ️ {rep.dataNote}</p>}
          </>
        )}

        {tab === 'Record' && (
          <>
            {rep.votes.map((v, i) => (
              <div className="card" key={i}>
                <div className="card-body">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span
                      className="promise-status"
                      style={{
                        background: v.vote === 'Yea' ? 'var(--green-light)' : v.vote === 'Nay' ? '#fde8e8' : '#f3f4f6',
                        color: v.vote === 'Yea' ? 'var(--green)' : v.vote === 'Nay' ? 'var(--red)' : 'var(--muted)',
                      }}
                    >
                      {v.vote}
                    </span>
                    <span style={{ fontSize: 11, color: 'var(--muted)' }}>{v.date}</span>
                    {v.alignsWithValues && <span className="tag" style={{ marginLeft: 'auto' }}>matches your values</span>}
                  </div>
                  <div className="card-title" style={{ marginTop: 8, fontSize: 14 }}>{v.bill}</div>
                  {v.note && <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 4 }}>{v.note}</p>}
                </div>
              </div>
            ))}
          </>
        )}

        {tab === 'Promises' && (
          <>
            {rep.promises.map((p, i) => (
              <div className="promise-card" key={i}>
                <div className="promise-head">
                  <span
                    className={
                      'promise-status ' +
                      (p.status === 'kept' ? 'status-kept' : p.status === 'broken' ? 'status-broken' : 'status-mixed')
                    }
                  >
                    {p.status}
                  </span>
                  <span className="promise-title">{p.title}</span>
                </div>
                <div className="promise-detail">{p.detail}</div>
              </div>
            ))}
          </>
        )}

        {tab === 'Donors' && (
          <>
            <div className="card">
              <div className="card-body">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
                  <span className="feed-section-label" style={{ margin: 0 }}>By sector</span>
                  <strong style={{ fontSize: 13, color: 'var(--navy)' }}>{fmt(totalDonations)} total</strong>
                </div>
                {rep.donors.map((d, i) => {
                  const pct = Math.round((d.amount / totalDonations) * 100)
                  return (
                    <div key={i} style={{ marginBottom: 12 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 4 }}>
                        <span style={{ fontWeight: 600 }}>{d.sector}</span>
                        <span style={{ color: 'var(--muted)' }}>{fmt(d.amount)}</span>
                      </div>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: `${pct}%` }} />
                      </div>
                      {d.note && <p style={{ fontSize: 11, color: 'var(--muted)', marginTop: 4 }}>{d.note}</p>}
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="feed-section-label">The connection Civvy tracks</div>
            <div className="donor-connection">{rep.donorConnection}</div>
            <p className="disclosure">
              Civvy presents documented facts from public filings. We make no allegation of wrongdoing.
              You draw the conclusion.
            </p>
          </>
        )}

        {tab === 'Posts' && (
          <p className="empty-note">
            When {rep.name.split(' ')[0]} claims a verified Civvy account, official statements,
            Q&amp;A answers, and pre-vote feedback requests will appear here.
          </p>
        )}

        {tab === 'Give' && (
          <>
            <div className="card">
              <div className="card-body">
                <div className="card-title">Contact {rep.name.split(' ')[0]}</div>
                <p style={{ fontSize: 12, color: 'var(--muted)', margin: '6px 0 12px' }}>
                  One-tap scripts for the moments when constituent pressure actually matters.
                </p>
                <button className="btn-primary" style={{ marginTop: 0 }}>📞 Call with a script</button>
                <button className="btn-outline" style={{ width: '100%', marginTop: 8 }}>✉️ Email with a script</button>
                <button className="btn-outline" style={{ width: '100%', marginTop: 8 }}>❓ Ask a public question (Polis)</button>
              </div>
            </div>
            <p className="disclosure">
              Direct small-dollar donations to candidates whose values match yours run through Civvy’s
              nonpartisan donation infrastructure. Candidate visibility is always free and equal — Civvy
              never charges for placement.
            </p>
          </>
        )}
      </div>
    </div>
  )
}
