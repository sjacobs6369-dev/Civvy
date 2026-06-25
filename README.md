# Civvy

> **Democracy shouldn't require a law degree.**

Civvy is civic infrastructure that connects ordinary citizens to the information,
tools, and community they need to participate meaningfully in their own democracy —
at every level, from school board to Senate. It connects **information → understanding →
action**, in plain language, without partisan framing.

This repository is a **starting draft** — a runnable, mobile-first scaffold that turns
the vision documents, blueprint, and HTML mockups into a real React + TypeScript app
with a typed data model. It implements the canonical five-tab architecture and the core
mechanics so the product can be clicked through and built on.

---

## What's in this draft

A mobile-first web app (phone frame) implementing the **five permanent tabs** from the
Product Overview, deliberately kept to five to avoid decision fatigue for new users:

| Tab | Status in this draft |
| --- | --- |
| 🏠 **Home** | Personalized briefing feed: live action tracker (counter increments live), "following" cards (rep-voted with stock-timing flag, 4-layer article, district poll), and the Wins feed (civic win / community / progress / everyday story). |
| 📺 **Learn** | Three views — vertical **Feed** (TikTok-style cards), **Library** (series: Government 101, Follow the Money, Your Local Government), **Current Events** (4-layer article list). Plus the full **4-layer article reader** (What / Why / Power / Act) openable from anywhere. |
| 🏛 **My Reps** | Reps grouped by tier (Local → State → Federal, closest to daily life first) with a level filter. Full profile with six tabs: **Background, Record, Promises, Donors, Posts, Give**. The Donors tab surfaces the donation-to-vote *connection*, not just a list — with the "documented facts, you draw the conclusion" framing. |
| 🗣 **Polis** | **Common Ground** with the vote-first-then-reveal mechanic (commit your position before the cross-party breakdown shows), **Polls** (verified-constituent polls that can be "sent to your rep" + community polls with methodology), and **Community** (vetted civic orgs). |
| 📘 **Passport** | Private civic record — **Ballot** (registration status, upcoming races with values-match %, often-missed races), **Journey** (four dimensions: Learning, Voice, Contribution, Impact), **Actions** (suggested, election items first). |

### Design system

Ported directly from the founder's mockups (`civvy_mockup_v6`, `civvy_polis_v2`) into
`src/index.css`: the navy/blue/accent palette, DM Serif Display + DM Sans typography,
the four civic-education layer colors, and the "trusted newspaper, not social media"
visual language.

### Florida pilot data

Per **Blueprint v5**, the real launch geography is **Florida** (the mockups' Illinois was
fictional). All seed data lives in `src/data/` and models a Tampa / Hillsborough County
resident's slate of representatives across all three levels.

> ⚠️ **All figures are illustrative sample data** with composite/fictional names. In
> production every data point is ingested and verified from public sources (FEC,
> Congress.gov, STOCK Act, FL Division of Elections) and reviewed before publishing —
> the trust infrastructure *is* the product.

---

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
```

Other scripts:

```bash
npm run build    # type-check (tsc) + production build
npm run preview  # serve the production build
npm run lint     # tsc --noEmit
```

Requires Node 18+.

---

## Website + installable app (PWA)

This is a Progressive Web App, so one codebase is **both** a website and a phone-installable
app — no app store required.

- **As a website:** it deploys to GitHub Pages (below) and is just a URL anyone can open.
- **As a mobile app:** open that URL on a phone → browser menu → **Add to Home Screen**.
  You get a Civvy icon, a full-screen launch (no browser chrome), and offline caching via a
  service worker (`vite-plugin-pwa`).

### Deploying to GitHub Pages

A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and publishes on every
push to the draft branch or `main`. **One-time setup** in the GitHub repo:

> **Settings → Pages → Build and deployment → Source: _GitHub Actions_.**

After that, every push auto-deploys. The live site will be at:

```
https://<your-org-or-user>.github.io/<repo>/
```

i.e. **https://sjacobs6369-dev.github.io/Civvy/** for this repo.

The build's base path is set automatically from the repo name (`BASE_PATH` in the
workflow), and the app uses hash-based routing so deep links and refreshes work on a Pages
subpath. To deploy somewhere else (Netlify, Vercel, S3, a subfolder), just build with the
right base:

```bash
BASE_PATH=/ npm run build      # serving from a domain root
BASE_PATH=/some/path/ npm run build
```

---

## Project structure

```
src/
  main.tsx              # entry — HashRouter (works on static hosting)
  App.tsx               # phone-frame shell + routes; hides nav in the reader overlay
  index.css             # the Civvy design system (single source of visual truth)
  types.ts              # the core data model (reps, donors, articles, polls, ...)
  components/
    BottomNav.tsx       # the five permanent tabs
    StatusBar.tsx
    LayerPills.tsx      # the What/Why/Power/Act pills, reused everywhere
  screens/
    Home.tsx            # briefing + live tracker + wins
    Learn.tsx           # feed / library / current-events views
    ArticleReader.tsx   # 4-layer reader overlay
    Reps.tsx            # tiered rep list
    RepProfile.tsx      # six-tab accountability profile
    Polis.tsx           # Common Ground / Polls / Community
    Passport.tsx        # Ballot / Journey / Actions
  data/                 # Florida pilot seed data (typed to src/types.ts)
    representatives.ts
    articles.ts
    learn.ts
    polis.ts
    home.ts
```

The UI is wired to `src/types.ts`, not to throwaway props — so swapping sample data for a
real ingestion pipeline is a data-layer change, not a UI rewrite.

---

## How this maps to the roadmap

The Blueprint sequences the work as **Phase 0 (content-first) → Phase 1 (web reader +
seed) → Phase 2 (full app, Florida beta)**. This draft is a head start on the Phase 1/2
client and the data model behind it. Natural next steps, roughly in priority order:

1. **Real data ingestion** — replace `src/data/*` with verified FEC / Congress.gov /
   STOCK Act / FL Division of Elections pipelines and an entity-resolution layer.
2. **Profile depth** — donor sub-tabs (Timeline, Vote Connections, How It Was Spent,
   Lobbying), stock-trade "who else" deep-dive overlays, Ask Your Rep / Rep Asks Feedback.
3. **Polis build-out** — Discuss threads, Events, Talk Across the Table; verified-anonymity
   participation tiers and district badges.
4. **Accounts & verification** — the four participation tiers (Explore → Member → Verified
   Civic Member → Verified Community Poster) with radical data minimalism.
5. **Notifications & overflow menu** — the trust architecture (financial transparency, "how
   we prevent bias", data sourcing) and genuinely-useful-only alerts.
6. **Native targets** — React Native / Expo for iOS + Android sharing this model and design
   system.

---

## Source documents

This draft was built from the founder's materials: Vision Document v7, Blueprint v5
(revised), the Product Overview, and the interactive mockups (`civvy_mockup_v6.html`,
`civvy_polis_v2.html`). Where the documents differed, the **Product Overview** (most
recent, section-by-section) was treated as authoritative — notably the five tabs being
Home / Learn / My Reps / Polis / **Passport**, with election/ballot living inside Passport.

_Confidential · Life's Lemons Limes LLC_
