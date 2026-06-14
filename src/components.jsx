import React from "react";
import { MOODS, CATEGORY_LABEL } from "./data.js";
import iconUrl from "./img/icon.png";

export { iconUrl };

/* ---- HUM brand mark (the line-art figure logo) -------------------------- */
export function BrandMark({ size = 36, className, style, light = false }) {
  return (
    <img
      src={iconUrl}
      alt="HUM"
      width={size}
      height={size}
      className={className}
      style={{
        objectFit: "contain",
        display: "block",
        filter: light ? "brightness(0) invert(1)" : undefined,
        ...style,
      }}
    />
  );
}

/* ---- Organic gradient art (stands in for kinetic/illuminated forms) ----- */
export function Mood({ mood, glyph, style, className }) {
  const [a, b] = MOODS[mood] || MOODS.sage;
  return (
    <div
      className={className}
      style={{
        background: `radial-gradient(120% 120% at 30% 20%, ${a}, ${b})`,
        ...style,
      }}
    >
      {glyph != null && <span className="glyph">{glyph}</span>}
    </div>
  );
}

/* ---- Icons (thin, calm line work) --------------------------------------- */
const S = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const Icon = {
  today: (p) => (
    <svg viewBox="0 0 24 24" {...p}>
      <path
        {...S}
        d="M12 3c3 3.5 4.5 6.2 4.5 9a4.5 4.5 0 0 1-9 0c0-2.8 1.5-5.5 4.5-9Z"
      />
      <path {...S} d="M12 21v-7" />
    </svg>
  ),
  explore: (p) => (
    <svg viewBox="0 0 24 24" {...p}>
      <circle {...S} cx="11" cy="11" r="7" />
      <path {...S} d="m20 20-3.2-3.2" />
    </svg>
  ),
  hum: (p) => (
    <svg viewBox="0 0 24 24" {...p}>
      <path {...S} d="M4 14c2-6 4-6 4 0s2 6 4 0 2-6 4 0 2 6 4 0" />
    </svg>
  ),
  profile: (p) => (
    <svg viewBox="0 0 24 24" {...p}>
      <circle {...S} cx="12" cy="8" r="3.4" />
      <path {...S} d="M5.5 19c.8-3.2 3.2-5 6.5-5s5.7 1.8 6.5 5" />
    </svg>
  ),
  back: (p) => (
    <svg viewBox="0 0 24 24" {...p}>
      <path {...S} d="m15 5-7 7 7 7" />
    </svg>
  ),
  heart: (p) => (
    <svg viewBox="0 0 24 24" {...p}>
      <path
        {...S}
        d="M12 20s-7-4.6-7-9.4A3.6 3.6 0 0 1 12 8a3.6 3.6 0 0 1 7-2.4c0 4.8-7 9.4-7 9.4Z"
      />
    </svg>
  ),
  clock: (p) => (
    <svg viewBox="0 0 24 24" {...p}>
      <circle {...S} cx="12" cy="12" r="8" />
      <path {...S} d="M12 8v4l3 2" />
    </svg>
  ),
  pin: (p) => (
    <svg viewBox="0 0 24 24" {...p}>
      <path {...S} d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" />
      <circle {...S} cx="12" cy="11" r="2.2" />
    </svg>
  ),
  people: (p) => (
    <svg viewBox="0 0 24 24" {...p}>
      <circle {...S} cx="9" cy="9" r="3" />
      <path {...S} d="M3.5 19c.6-2.6 2.7-4 5.5-4s4.9 1.4 5.5 4" />
      <path {...S} d="M16 7.5a3 3 0 0 1 0 5.6M16.5 15c2.2.3 3.7 1.6 4 4" />
    </svg>
  ),
  gift: (p) => (
    <svg viewBox="0 0 24 24" {...p}>
      <path {...S} d="M4 11h16v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8Z" />
      <path {...S} d="M3 8h18v3H3zM12 8v12" />
      <path
        {...S}
        d="M12 8S10.5 4 8.5 4 6 7 12 8Zm0 0s1.5-4 3.5-4S18 7 12 8Z"
      />
    </svg>
  ),
  check: (p) => (
    <svg viewBox="0 0 24 24" {...p}>
      <path
        {...S}
        stroke="#faf7f0"
        strokeWidth="2.2"
        d="m5 12.5 4.5 4.5L19 7"
      />
    </svg>
  ),
  chev: (p) => (
    <svg viewBox="0 0 24 24" {...p}>
      <path {...S} d="m9 5 7 7-7 7" />
    </svg>
  ),
  qr: (p) => (
    <svg viewBox="0 0 24 24" {...p}>
      <path
        {...S}
        d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3"
      />
      <path {...S} d="M8 8h2v2H8zM14 8h2v2h-2zM8 14h2v2H8zM14 14h2v2h-2z" />
    </svg>
  ),
  cal: (p) => (
    <svg viewBox="0 0 24 24" {...p}>
      <rect {...S} x="4" y="5" width="16" height="15" rx="2.5" />
      <path {...S} d="M4 9h16M9 3v4M15 3v4" />
    </svg>
  ),
};

/* ---- Chip --------------------------------------------------------------- */
export function Chip({ children, variant = "", icon }) {
  return (
    <span className={`chip ${variant}`}>
      {icon}
      {children}
    </span>
  );
}

/* ---- Price label -------------------------------------------------------- */
export function priceLabel(p) {
  return p === 0 ? "Ücretsiz" : `₺${p}`;
}

/* ---- Event card (horizontal scroller) ----------------------------------- */
export function EventCard({ ev, onOpen }) {
  return (
    <div className="ecard" onClick={() => onOpen(ev.id)}>
      <Mood className="ecard-art" mood={ev.mood} glyph={null} />
      <div className="ecard-body">
        <div className="ecard-cat">{CATEGORY_LABEL[ev.category]}</div>
        <div className="ecard-title">{ev.title}</div>
        <div className="ecard-foot">
          <span>
            {ev.day} · {ev.time}
          </span>
          <span>{priceLabel(ev.price)}</span>
        </div>
      </div>
    </div>
  );
}

/* ---- Event row (list) --------------------------------------------------- */
export function EventRow({ ev, onOpen }) {
  return (
    <div className="erow" onClick={() => onOpen(ev.id)}>
      <Mood className="erow-art" mood={ev.mood} />
      <div className="erow-body">
        <div className="erow-cat">{CATEGORY_LABEL[ev.category]}</div>
        <div className="erow-title">{ev.title}</div>
        <div className="erow-meta">{ev.place}</div>
      </div>
      <div className="erow-time">
        <span className="t">{ev.time}</span>
        <span className="d">
          {ev.day} · {ev.date}
        </span>
      </div>
    </div>
  );
}
