# HUM — Human Urban Moment

The digital home of an urban well-being brand. A working React prototype, rendered inside a
phone frame so it reads as a mobile app on any screen.

> HUM turns short pauses in city life into meaningful well-being moments — workshops, community,
> and **Breathe Hub** (a public breathing installation) as the gateway in.

## Run it

```bash
npm install
npm run dev      # opens http://localhost:5173
```

`npm run build` for a production bundle.

## What to try (the core loop)

1. **Today** — the "moment of the day", your next reservation, what's nearby.
2. Open any event → **Reserve your spot** → confirmation → it lands in **My HUM**.
3. Tap the **center ◯ Breathe button** → guided breathing → receive a **gift** →
   it routes you to Explore and the gift waits in **My HUM › Moments**.
4. Reserve a paid workshop afterward — the gift is applied automatically.

## Architecture decisions (vs. the original brief)

- **4 tabs + a center Scan action**, not 5 tabs. Breathe Hub is an *action*, not a destination —
  this keeps HUM (the brand) primary over Breathe Hub (one product), as required.
- **Calendar is a view toggle inside Explore** (List / Calendar / Map), not a top-level tab.
- **Discover + Events merged** into one Explore surface.
- **Rewards reframed as "Moments" + "Gifts"** — a quiet membership ritual, not a points/coupon
  loyalty system. Avoids the corporate-wellness cliché.
- **"Tracking" reframed as "Presence"** — gentle arcs, no streaks or scores, to avoid the
  gamified fitness-app aesthetic.

## Structure

```
src/
  data.js              content layer (events, membership, gifts)
  components.jsx       icons, organic gradient art, event cards, chips
  App.jsx              phone shell, navigation, booking + gift state, overlays
  screens/
    Today.jsx          home — moment of the day, next booking, nearby, picks
    Explore.jsx        browse + search + List/Calendar/Map toggle
    EventDetail.jsx    full event, host, gift, reserve flow
    MyHum.jsx          Upcoming · Moments (membership) · History
    Profile.jsx        identity, gentle stats, settings
    BreatheHub.jsx     scan → guided breathing orb → gift reveal
```

Design language: warm sand & sage, Fraunces (serif) + Inter, slow organic motion. Tech kept
invisible — no charts, no badges, no streaks.
