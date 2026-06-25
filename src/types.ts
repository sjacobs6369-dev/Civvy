// ============================================================
// Civvy — Core data model
// These types mirror the public-data domain the real product
// will ingest (FEC, Congress.gov, FL Division of Elections, etc.)
// and the editorial domain (4-layer articles, Learn series).
// All seed data in src/data/* conforms to these shapes so the UI
// is already wired to the real model, not throwaway mockup props.
// ============================================================

export type Party = 'D' | 'R' | 'I'
export type Level = 'federal' | 'state' | 'local'

/** A campaign promise scored against the actual record. */
export interface Promise {
  status: 'kept' | 'broken' | 'mixed'
  title: string
  detail: string
}

/** A donor sector and the votes Civvy connects it to. */
export interface DonorSector {
  sector: string
  amount: number // USD, from FEC / state filings
  note: string
}

export interface VoteRecord {
  bill: string
  vote: 'Yea' | 'Nay' | 'Did not vote'
  date: string
  note?: string
  alignsWithValues?: boolean
}

export interface Representative {
  id: string
  name: string
  party: Party
  level: Level
  office: string // e.g. "U.S. Senator", "FL State Senate, District 38"
  district: string // e.g. "Florida", "FL Senate 38"
  proximity: number // 1 = closest to daily life (school board) ... higher = farther (US Senate)
  hometown: string
  nextElection: string
  committees: string[]
  background: string
  promises: Promise[]
  donors: DonorSector[]
  donorConnection: string // the plain-language cause/effect Civvy surfaces
  votes: VoteRecord[]
  /** Honest disclosure when data coverage is partial (esp. local). */
  dataNote?: string
}

/** The 4 layers every Civvy current-events story is built on. */
export interface ArticleLayer {
  body: string[] // paragraphs
}

export interface Article {
  id: string
  kicker: string
  title: string
  summary: string
  date: string
  emoji: string
  tags: string[]
  layers: {
    what: ArticleLayer
    why: ArticleLayer
    power: ArticleLayer
    act: ArticleLayer
  }
}

export interface LearnVideo {
  id: string
  series: string
  title: string
  description: string
  duration: string
  bg: 1 | 2 | 3 | 4
}

export interface LearnSeries {
  name: string
  emoji: string
  color: string
  lessons: { num: number; title: string; duration: string }[]
}

/** A Common Ground issue: documented supermajority cross-partisan support. */
export interface CommonGroundIssue {
  id: string
  issue: string
  support: number // overall %
  breakdown: { party: Party; pct: number }[]
  source: string
  blocked: string // who has blocked action + documented donor relationship
  status: string
}

export interface Poll {
  id: string
  question: string
  type: 'preference' | 'verified-constituent'
  options: { label: string; pct: number }[]
  context: string
  sampleNote: string
}

export interface WinItem {
  id: string
  kind: 'civic-win' | 'community' | 'everyday' | 'progress'
  text: string
}

export interface Race {
  id: string
  office: string
  date: string
  isPrimary: boolean
  candidates: { name: string; party: Party; note: string; matchPct?: number }[]
}

export interface CivicOrg {
  id: string
  name: string
  mission: string
  district: string
  needs: string
}
