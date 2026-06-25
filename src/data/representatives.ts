import type { Representative } from '../types'

// ============================================================
// SAMPLE DATA — illustrative only.
// In production every figure here is ingested + verified from
// public sources (FEC, Congress.gov, STOCK Act, FL Division of
// Elections) and reviewed before publishing. The names below are
// composite/fictional placeholders for the Florida pilot so the
// UI and data model can be exercised end to end.
// ============================================================

export const representatives: Representative[] = [
  {
    id: 'school-board-vega',
    name: 'Daniela Vega',
    party: 'I',
    level: 'local',
    office: 'Hillsborough County School Board, District 5',
    district: 'Hillsborough School Bd 5',
    proximity: 1,
    hometown: 'Tampa, FL',
    nextElection: 'Aug 2026 (Primary)',
    committees: ['Budget & Finance', 'Curriculum'],
    background:
      'Former public-school teacher elected in 2022. Controls a $3.4B district budget and decisions on curriculum, school boundaries, and book policy that directly shape ~220,000 students.',
    promises: [
      {
        status: 'kept',
        title: 'Publish the district budget in plain language',
        detail: 'Campaigned on budget transparency in 2022. District now posts an annual plain-language budget summary; first edition released Oct 2024.',
      },
      {
        status: 'mixed',
        title: 'Protect teacher planning time',
        detail: 'Voted for the 2024 measure preserving planning periods, but supported a 2025 calendar change that reduced them at three pilot schools.',
      },
    ],
    donors: [
      { sector: 'Local educators / small donors', amount: 41200, note: 'Median contribution $35.' },
      { sector: 'Real estate / development', amount: 12500, note: 'Rezoning near three school sites pending.' },
    ],
    donorConnection:
      'Roughly 75% of funds came from small local donors. The development contributions coincide with three pending school-boundary rezonings — Civvy flags the overlap; it does not assert causation.',
    votes: [
      { bill: 'FY25 District Budget', vote: 'Yea', date: '2024-09-10', note: 'Restored arts funding.', alignsWithValues: true },
      { bill: 'School boundary redraw (NW Tampa)', vote: 'Nay', date: '2025-02-18', note: 'Cited equity concerns.' },
    ],
    dataNote:
      'Local campaign-finance data for school-board races is filed with the county and is less standardized than federal data. Figures shown are from the latest available county filing and may lag by one reporting period.',
  },
  {
    id: 'state-house-okafor',
    name: 'Marcus Okafor',
    party: 'R',
    level: 'state',
    office: 'Florida House of Representatives, District 64',
    district: 'FL House 64',
    proximity: 2,
    hometown: 'Brandon, FL',
    nextElection: 'Nov 2026',
    committees: ['Health & Human Services', 'Insurance & Banking'],
    background:
      'Small-business owner, second term. Sits on the committee that decides whether health-cost bills reach the House floor — an invisible chokepoint where most legislation quietly dies.',
    promises: [
      {
        status: 'broken',
        title: 'Lower prescription costs for Floridians',
        detail:
          'Campaign promise, 2022. Voted to table the state drug-price-transparency bill twice in committee (2024, 2025). Received $58K from pharmaceutical and insurance PACs over the same period.',
      },
      {
        status: 'kept',
        title: 'Cut small-business licensing fees',
        detail: 'Sponsored and passed HB 411 (2024) reducing several occupational license fees.',
      },
    ],
    donors: [
      { sector: 'Insurance industry', amount: 92000, note: 'Top sector. Multiple HMO and P&C PACs.' },
      { sector: 'Pharmaceutical / health products', amount: 58000, note: 'Donations cluster around the 2024–25 sessions.' },
      { sector: 'Small business / retail', amount: 33000, note: 'Aligned with his licensing-fee work.' },
    ],
    donorConnection:
      'Received $58K from pharmaceutical donors and $92K from insurance interests, then voted to keep the drug-price-transparency bill from reaching a floor vote — twice. All amounts from FL Division of Elections filings.',
    votes: [
      { bill: 'HB 411 — Occupational license fee cut', vote: 'Yea', date: '2024-03-04' },
      { bill: 'SB 1620 — Drug price transparency (committee)', vote: 'Nay', date: '2025-02-11', note: 'Motion to table.' },
      { bill: 'HB 7 — Insurance liability limits', vote: 'Yea', date: '2024-04-22', note: 'Backed by top donor sector.' },
    ],
  },
  {
    id: 'state-senate-reyes',
    name: 'Carmen Reyes',
    party: 'D',
    level: 'state',
    office: 'Florida Senate, District 38',
    district: 'FL Senate 38',
    proximity: 3,
    hometown: 'Miami, FL',
    nextElection: 'Nov 2028',
    committees: ['Appropriations', 'Education Pre-K-12'],
    background:
      'Former county commissioner, first Senate term. On Appropriations, where the state budget is shaped before most residents ever see it.',
    promises: [
      {
        status: 'kept',
        title: 'Expand paid family leave access',
        detail: 'Co-sponsored the 2024 state paid-leave pilot; it passed committee and was funded in the FY25 budget.',
      },
      {
        status: 'mixed',
        title: 'Increase per-pupil education funding',
        detail: 'Secured a per-pupil increase in FY25 but voted for an overall education package that critics say shifted funds away from public districts.',
      },
    ],
    donors: [
      { sector: 'Labor unions', amount: 76000, note: 'Teachers and service-worker unions.' },
      { sector: 'Trial lawyers', amount: 44000, note: '' },
      { sector: 'Small donors', amount: 51000, note: 'Median $40.' },
    ],
    donorConnection:
      'Labor unions are the top donor sector ($76K), consistent with votes on paid leave and education funding. Civvy applies the same framework to every legislator regardless of party — the connection is shown, the conclusion is yours.',
    votes: [
      { bill: 'Paid family leave pilot', vote: 'Yea', date: '2024-03-19', alignsWithValues: true },
      { bill: 'FY25 Education appropriations', vote: 'Yea', date: '2024-04-30' },
      { bill: 'Public-records exemption expansion', vote: 'Nay', date: '2025-01-28', note: 'Cited Sunshine Law.' },
    ],
  },
  {
    id: 'us-house-bennett',
    name: 'Tom Bennett',
    party: 'R',
    level: 'federal',
    office: 'U.S. House, FL-15',
    district: 'FL-15',
    proximity: 4,
    hometown: 'Lakeland, FL',
    nextElection: 'Nov 2026',
    committees: ['Armed Services', 'Financial Services'],
    background:
      'Third term. On House Armed Services, which authorizes defense spending — including contracts that flow to companies whose PACs fund his campaigns.',
    promises: [
      {
        status: 'broken',
        title: 'Ban congressional stock trading',
        detail:
          'Pledged support for a trading ban in 2022. Has not co-sponsored either active bill. Reported a purchase of a defense-contractor stock 9 days before an Armed Services vote on a related authorization.',
      },
      {
        status: 'kept',
        title: 'Support hurricane recovery funding for Florida',
        detail: 'Voted yes on three disaster-relief packages, 2023–2025.',
      },
    ],
    donors: [
      { sector: 'Defense contractors', amount: 214000, note: 'Top sector. Multiple prime-contractor PACs.' },
      { sector: 'Commercial banks', amount: 131000, note: 'Aligned with Financial Services seat.' },
      { sector: 'Real estate', amount: 88000, note: '' },
    ],
    donorConnection:
      'Received $214K from defense-contractor PACs and sits on the committee authorizing their contracts. Reported buying a defense-contractor stock 9 days before a related vote (STOCK Act filing). Civvy flags the timing; the disclosure is public.',
    votes: [
      { bill: 'FY25 National Defense Authorization Act', vote: 'Yea', date: '2024-12-11', note: 'Stock-timing flag attached.' },
      { bill: 'Congressional stock-trading ban (discharge petition)', vote: 'Did not vote', date: '2024-09-25' },
      { bill: 'FL hurricane supplemental', vote: 'Yea', date: '2024-10-02', alignsWithValues: true },
    ],
  },
  {
    id: 'us-senate-castillo',
    name: 'Elena Castillo',
    party: 'D',
    level: 'federal',
    office: 'U.S. Senate (Florida)',
    district: 'Florida',
    proximity: 5,
    hometown: 'Orlando, FL',
    nextElection: 'Nov 2028',
    committees: ['Finance', 'Health, Education, Labor & Pensions (HELP)'],
    background:
      'First term. On the Finance and HELP committees — central to drug-pricing, tax, and healthcare legislation.',
    promises: [
      {
        status: 'kept',
        title: 'Let Medicare negotiate drug prices',
        detail: 'Voted yes on the Medicare negotiation provisions; supported expanding the list of negotiated drugs in 2024.',
      },
      {
        status: 'mixed',
        title: 'Close the carried-interest tax loophole',
        detail: 'Co-sponsored a bill to close it but voted for a 2024 package that left a narrowed version intact.',
      },
    ],
    donors: [
      { sector: 'Lawyers / law firms', amount: 412000, note: '' },
      { sector: 'Securities & investment', amount: 305000, note: 'Relevant to Finance Committee seat.' },
      { sector: 'Health professionals', amount: 198000, note: '' },
    ],
    donorConnection:
      'Securities and investment donors gave $305K while she sits on the Finance Committee. She voted for a tax package that preserved a narrowed carried-interest provision favorable to parts of that sector. Same framework, every senator.',
    votes: [
      { bill: 'Medicare drug-price negotiation expansion', vote: 'Yea', date: '2024-07-16', alignsWithValues: true },
      { bill: 'Tax package (carried interest)', vote: 'Yea', date: '2024-11-05' },
      { bill: 'Lobbying disclosure reform', vote: 'Yea', date: '2025-03-12' },
    ],
  },
]

export const repById = (id: string) => representatives.find((r) => r.id === id)
