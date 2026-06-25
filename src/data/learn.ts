import type { LearnVideo, LearnSeries } from '../types'

export const learnVideos: LearnVideo[] = [
  {
    id: 'v-committee',
    series: 'Government 101',
    title: 'How a Bill Actually Dies — Without a Vote',
    description:
      'Most legislation never gets voted on. It dies in committee, quietly, controlled by a chair most voters have never heard of. Here’s the mechanic.',
    duration: '0:58',
    bg: 1,
  },
  {
    id: 'v-follow-money',
    series: 'Follow the Money',
    title: 'Why a Defense Stock Goes Up the Day a War Starts',
    description:
      'Contracts, donations, committee seats. A documented, legal, public system — connected to nothing and explained to no one. Until now.',
    duration: '1:12',
    bg: 2,
  },
  {
    id: 'v-local',
    series: 'Your Local Government',
    title: 'Your State Legislature Matters More Than Congress',
    description:
      'Schools, zoning, health costs, policing — most of what shapes your daily life is decided in your state capital, not Washington.',
    duration: '1:04',
    bg: 3,
  },
  {
    id: 'v-primary',
    series: 'Government 101',
    title: 'Why Primaries Decide More Than Elections',
    description:
      'By November you’re handed two names. The choice that actually mattered happened months earlier, decided by a tiny, committed slice of voters.',
    duration: '0:51',
    bg: 4,
  },
]

export const learnSeries: LearnSeries[] = [
  {
    name: 'Government 101',
    emoji: '🏛',
    color: '#1b3a6b',
    lessons: [
      { num: 1, title: 'What a Committee Chair Actually Controls', duration: '1:02' },
      { num: 2, title: 'Senator vs. Representative — The Real Difference', duration: '0:54' },
      { num: 3, title: 'How a Bill Actually Dies Without a Vote', duration: '0:58' },
      { num: 4, title: 'Why Midterms Matter More Than You Think', duration: '1:08' },
      { num: 5, title: 'Why Primaries Decide More Than Elections', duration: '0:51' },
    ],
  },
  {
    name: 'Follow the Money',
    emoji: '💰',
    color: '#c8a84b',
    lessons: [
      { num: 1, title: 'What a Lobbyist Actually Does All Day', duration: '1:05' },
      { num: 2, title: 'PACs, Super PACs, and Dark Money', duration: '1:14' },
      { num: 3, title: 'The Revolving Door, Explained', duration: '0:59' },
      { num: 4, title: 'Why a Defense Stock Goes Up When a War Starts', duration: '1:12' },
      { num: 5, title: 'How to Read an FEC Filing', duration: '1:20' },
    ],
  },
  {
    name: 'Your Local Government',
    emoji: '📍',
    color: '#1a7a5e',
    lessons: [
      { num: 1, title: 'What Your City Council Decides on Tuesday Nights', duration: '1:03' },
      { num: 2, title: 'Zoning Is Power: The Quiet Fights That Shape Your Block', duration: '1:10' },
      { num: 3, title: 'What a School Board Actually Controls', duration: '0:57' },
      { num: 4, title: 'Your State Legislature vs. Congress', duration: '1:04' },
    ],
  },
]
