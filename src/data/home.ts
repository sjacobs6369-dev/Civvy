import type { WinItem, Race } from '../types'

export interface FeedCard {
  id: string
  type: 'rep-voted' | 'bill-update' | 'article' | 'poll' | 'win' | 'everyday' | 'tracker'
  badge: string
  title: string
  detail?: string
  link?: { label: string; to: string }
}

// Personalized activity feed — "you only see updates about things you
// have explicitly chosen to follow," plus always-on district wins and
// election reminders. (Product Overview, Tab 1.)
export const homeFeed: FeedCard[] = [
  {
    id: 'f-tracker',
    type: 'tracker',
    badge: 'LIVE CHALLENGE',
    title: 'Call your state rep before the drug-price-transparency committee vote',
    detail: 'Your neighbors are contacting Rep. Okafor’s office ahead of the FL House committee vote.',
  },
  {
    id: 'f-vote',
    type: 'rep-voted',
    badge: 'YOUR REP VOTED',
    title: 'Rep. Tom Bennett (FL-15) voted YES on the FY25 defense authorization',
    detail: 'A stock-timing flag is attached: a defense-contractor purchase 9 days before the vote.',
    link: { label: 'See the full picture', to: '/reps/us-house-bennett' },
  },
  {
    id: 'f-article',
    type: 'article',
    badge: '4-LAYER EXPLAINER',
    title: 'Medicare Can Now Negotiate Some Drug Prices. Here’s the Catch.',
    detail: 'On a topic you follow: Health.',
    link: { label: 'Read What / Why / Power / Act', to: '/learn/article/medicare-drug-negotiation' },
  },
  {
    id: 'f-poll',
    type: 'poll',
    badge: 'NEW POLL · YOUR DISTRICT',
    title: 'Should Hillsborough schools push high-school start times later?',
    link: { label: 'Vote in Polis', to: '/polis' },
  },
]

export const wins: WinItem[] = [
  {
    id: 'w-1',
    kind: 'civic-win',
    text: 'After 1,200+ verified residents weighed in, the Hillsborough board restored arts funding in the FY25 budget.',
  },
  {
    id: 'w-2',
    kind: 'community',
    text: 'East Tampa Mutual Aid hit 500 registered drivers for election-day rides.',
  },
  {
    id: 'w-3',
    kind: 'progress',
    text: 'Drug-price negotiation: blocked for two decades, now law for ten drugs. The arc is moving.',
  },
  {
    id: 'w-4',
    kind: 'everyday',
    text: 'A retired teacher in Brandon showed up to her first county meeting in 30 years — and three neighbors came with her.',
  },
]

// Ballot / upcoming elections (Passport → Ballot sub-tab).
export const races: Race[] = [
  {
    id: 'race-school-board',
    office: 'Hillsborough County School Board, District 5',
    date: '2026-08-18',
    isPrimary: true,
    candidates: [
      { name: 'Daniela Vega (incumbent)', party: 'I', note: 'Budget transparency; restored arts funding.', matchPct: 88 },
      { name: 'Robert Hale', party: 'R', note: 'Curriculum focus; endorsed by county GOP.', matchPct: 41 },
      { name: 'Priya Anand', party: 'D', note: 'Teacher pay and mental-health counselors.', matchPct: 72 },
    ],
  },
  {
    id: 'race-state-house',
    office: 'Florida House, District 64',
    date: '2026-11-03',
    isPrimary: false,
    candidates: [
      { name: 'Marcus Okafor (incumbent)', party: 'R', note: 'Small-business focus; voted to table drug-price bill.', matchPct: 39 },
      { name: 'Lena Brooks', party: 'D', note: 'Health-cost transparency; paid family leave.', matchPct: 76 },
    ],
  },
]
