import type { Article } from '../types'

// ============================================================
// SAMPLE 4-layer articles. The Medicare piece mirrors the
// prototype article called out in the Product Overview as the
// reference for tone and depth at each layer.
// ============================================================

export const articles: Article[] = [
  {
    id: 'medicare-drug-negotiation',
    kicker: 'Current Events · Health',
    title: 'Medicare Can Now Negotiate Some Drug Prices. Here’s the Catch.',
    summary:
      'A long-blocked idea finally became law — but the list is short, the timeline is long, and the fight over who pays isn’t over.',
    date: '2026-06-18',
    emoji: '💊',
    tags: ['Health', 'Money', 'National'],
    layers: {
      what: {
        body: [
          'For the first time, Medicare is allowed to negotiate the price it pays for a small set of high-cost prescription drugs, rather than paying whatever price is set by the manufacturer.',
          'The first round covers ten drugs. Negotiated prices phase in over several years. Most drugs Americans take are not on the list, and won’t be for a while.',
        ],
      },
      why: {
        body: [
          'For decades, federal law explicitly prohibited Medicare — the largest single buyer of prescription drugs in the country — from negotiating prices, a restriction no other major buyer operates under.',
          'Polls have shown supermajority support across party lines for letting Medicare negotiate. The gap between that consensus and the law is the story: it is not that people disagreed, it is that the consensus was blocked.',
        ],
      },
      power: {
        body: [
          'The pharmaceutical industry is one of the largest lobbying forces in the country, spending hundreds of millions per cycle and employing more registered lobbyists than there are members of Congress.',
          'Several legislators who voted against earlier negotiation bills received six- and seven-figure totals from pharmaceutical PACs in the same periods. Civvy surfaces those donor relationships next to the votes. It makes no allegation of wrongdoing — the filings are public and you draw the conclusion.',
        ],
      },
      act: {
        body: [
          'Track the bill expanding the negotiated-drug list — it determines whether your medication is ever covered.',
          'Look up how your specific representatives voted in My Reps, then use the one-tap call or email script if their record doesn’t match what you want.',
          'See the Common Ground entry for this issue in Polis — it shows how much cross-party agreement already exists, which is the strongest argument when you contact an office.',
        ],
      },
    },
  },
  {
    id: 'fl-school-board-budget',
    kicker: 'Local · Education',
    title: 'A Tuesday-Night Vote Just Changed Your School District’s Budget',
    summary:
      'Most residents never hear about school-board budget votes. They decide more about local schools than almost anything in Tallahassee.',
    date: '2026-06-12',
    emoji: '🏫',
    tags: ['Education', 'Local', 'Florida'],
    layers: {
      what: {
        body: [
          'Your county school board approved its annual budget at a regular meeting. The budget sets teacher pay, which programs survive, and how facilities money is spent.',
          'Turnout for these meetings — and for the elections that decide who sits on the board — is typically a small fraction of the residents affected.',
        ],
      },
      why: {
        body: [
          'School boards control budgets in the billions and decisions on curriculum and boundaries, yet they are among the lowest-turnout elections in the country.',
          'Low turnout means a small, organized group can decide outcomes for an entire district — which is exactly why these races have become national flashpoints.',
        ],
      },
      power: {
        body: [
          'Board members raise money too. Development and real-estate interests sometimes contribute where school-boundary or facilities decisions are pending.',
          'Civvy shows local donor data alongside votes where filings are available, with an honest note when county-level data lags or is incomplete.',
        ],
      },
      act: {
        body: [
          'Find your school-board member in My Reps and see their record and donors.',
          'Add the next school-board election to your Passport ballot so you get a reminder — these are the races people most often miss.',
          'Check Polis for your district to see what neighbors are organizing around the next budget cycle.',
        ],
      },
    },
  },
]

export const articleById = (id: string) => articles.find((a) => a.id === id)
