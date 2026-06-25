import type { CommonGroundIssue, Poll, CivicOrg } from '../types'

export const commonGround: CommonGroundIssue[] = [
  {
    id: 'cg-medicare',
    issue: 'Let Medicare negotiate prescription drug prices',
    support: 83,
    breakdown: [
      { party: 'D', pct: 91 },
      { party: 'R', pct: 77 },
      { party: 'I', pct: 82 },
    ],
    source: 'Aggregated national polling, multiple nonpartisan pollsters.',
    blocked: 'Earlier negotiation bills were blocked by legislators who received six- and seven-figure totals from pharmaceutical PACs.',
    status: 'First negotiations are now underway for ten drugs; expansion is pending.',
  },
  {
    id: 'cg-background-checks',
    issue: 'Background checks for all gun purchases',
    support: 85,
    breakdown: [
      { party: 'D', pct: 92 },
      { party: 'R', pct: 79 },
      { party: 'I', pct: 84 },
    ],
    source: 'Aggregated national polling; majority support among gun owners.',
    blocked: 'Universal background-check bills have repeatedly failed to reach a floor vote.',
    status: 'No federal floor vote scheduled.',
  },
  {
    id: 'cg-term-limits',
    issue: 'Term limits for Congress',
    support: 78,
    breakdown: [
      { party: 'D', pct: 76 },
      { party: 'R', pct: 82 },
      { party: 'I', pct: 80 },
    ],
    source: 'Aggregated national polling across affiliations.',
    blocked: 'Would require action by the same incumbents it limits.',
    status: 'Proposed amendments introduced; none advanced.',
  },
  {
    id: 'cg-fl-counselors',
    issue: 'Require mental-health counselors in Florida public schools',
    support: 74,
    breakdown: [
      { party: 'D', pct: 81 },
      { party: 'R', pct: 68 },
      { party: 'I', pct: 73 },
    ],
    source: 'Statewide Florida polling (illustrative).',
    blocked: 'Funding stalled in committee during the last session.',
    status: 'Pilot funded in three districts; statewide bill pending.',
  },
]

export const polls: Poll[] = [
  {
    id: 'poll-school-start',
    question: 'Should Hillsborough schools push high-school start times later?',
    type: 'verified-constituent',
    options: [
      { label: 'Yes, later starts', pct: 64 },
      { label: 'Keep current times', pct: 26 },
      { label: 'Unsure', pct: 10 },
    ],
    context:
      'Verified residents of Hillsborough District 5. Results can be sent directly to your school-board member’s office.',
    sampleNote: 'n = 1,204 verified district residents · ±2.8% · preference poll, not strategic intent.',
  },
  {
    id: 'poll-drug-prices',
    question: 'How important is lowering prescription costs to your vote?',
    type: 'preference',
    options: [
      { label: 'Top issue', pct: 48 },
      { label: 'Important', pct: 39 },
      { label: 'Minor', pct: 13 },
    ],
    context: 'Community poll. After you vote you can compare your district, state, and national results.',
    sampleNote: 'Community poll · self-selected respondents · shown with full methodology.',
  },
]

export const organizations: CivicOrg[] = [
  {
    id: 'org-lwv-tampa',
    name: 'League of Women Voters — Tampa Bay',
    mission: 'Nonpartisan voter registration, candidate forums, and plain-language ballot guides.',
    district: 'Hillsborough County',
    needs: 'Volunteers for fall voter-registration drives.',
  },
  {
    id: 'org-mutual-aid',
    name: 'East Tampa Mutual Aid Network',
    mission: 'Neighbor-to-neighbor support: food, rides to the polls, hurricane prep.',
    district: 'East Tampa',
    needs: 'Drivers and Saturday-morning volunteers.',
  },
]
