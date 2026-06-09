import React from 'react'
import { EVENTS, FEATURED_ID, USER, CATEGORY_LABEL } from '../data.js'
import { Mood, Icon, Chip, EventCard, priceLabel, BrandMark } from '../components.jsx'

export default function Today({ onOpen, bookings, onTab }) {
  const featured = EVENTS.find((e) => e.id === FEATURED_ID)
  const nextBooking = EVENTS.find((e) => bookings.includes(e.id))
  const nearby = EVENTS.filter((e) => e.id !== FEATURED_ID).slice(0, 5)
  const recs = EVENTS.filter((e) => ['meditation', 'community'].includes(e.category)).slice(0, 4)

  return (
    <div className="fade-screen">
      {/* Brand lockup */}
      <div className="brandbar">
        <BrandMark size={36} radius={11} />
        <div className="wordmark">HUM</div>
        <div className="brand-tag">İnsan<br />Şehir Anı</div>
      </div>

      {/* Selamlama — yumuşak, güne duyarlı */}
      <div className="greet">
        <div className="eyebrow">Salı · Açık bir sabah</div>
        <div className="display">
          Günaydın,<br />{USER.name}.
        </div>
        <p className="muted" style={{ marginTop: 10, fontSize: 14.5, lineHeight: 1.5 }}>
          Küçük bir mola yeter. Bugün şehrin yavaşladığı yer burası.
        </p>
      </div>

      {/* Günün anı */}
      <div className="section-head" style={{ marginTop: 22 }}>
        <h3>Günün anı</h3>
      </div>
      <div className="hero" onClick={() => onOpen(featured.id)} role="button">
        <Mood className="hero-grad" mood={featured.mood} />
        <div className="orb-deco" />
        <div className="hero-meta">
          <Chip variant="solid">{CATEGORY_LABEL[featured.category]}</Chip>
          <Chip>{featured.duration}</Chip>
          <Chip>{priceLabel(featured.price)}</Chip>
        </div>
        <div className="hero-title">{featured.title}</div>
        <div className="hero-sub">{featured.blurb}</div>
        <div className="hero-when">
          <Icon.pin width={16} height={16} /> {featured.place}
        </div>
        <div className="hero-when" style={{ marginTop: 6 }}>
          <Icon.clock width={16} height={16} /> {featured.day} {featured.date} · {featured.time}
        </div>
      </div>

      {/* Your next reservation, if any */}
      {nextBooking && (
        <div className="section">
          <div className="section-head"><h3>Sıradaki anın</h3>
            <button className="link" onClick={() => onTab('hum')}>Tüm rezervasyonlar</button>
          </div>
          <div className="brow" onClick={() => onOpen(nextBooking.id)} style={{ cursor: 'pointer' }}>
            <div className="bdate">
              <div className="dd">{nextBooking.date.split(' ')[0]}</div>
              <div className="dm">{nextBooking.date.split(' ')[1]}</div>
            </div>
            <div className="bbody">
              <div className="bt">{nextBooking.title}</div>
              <div className="bm">{nextBooking.time} · {nextBooking.place}</div>
            </div>
            <Icon.chev width={20} height={20} style={{ color: 'var(--ink-faint)' }} />
          </div>
        </div>
      )}

      {/* Nearby */}
      <div className="section">
        <div className="section-head">
          <h3>Yakınında</h3>
          <button className="link" onClick={() => onTab('explore')}>Tümünü keşfet</button>
        </div>
        <div className="hscroll">
          {nearby.map((e) => <EventCard key={e.id} ev={e} onOpen={onOpen} />)}
        </div>
      </div>

      {/* Nazik öneri */}
      <div className="section">
        <div className="section-head">
          <h3>Senin için sakin seçkiler</h3>
        </div>
        <p className="pad muted" style={{ fontSize: 13.5, marginTop: -6, marginBottom: 14 }}>
          Son zamanlarda durağanlığa geri döndüğün için.
        </p>
        <div className="hscroll">
          {recs.map((e) => <EventCard key={e.id} ev={e} onOpen={onOpen} />)}
        </div>
      </div>
    </div>
  )
}
