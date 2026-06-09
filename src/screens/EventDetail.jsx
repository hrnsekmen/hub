import React, { useState } from 'react'
import { EVENTS, CATEGORY_LABEL } from '../data.js'
import { Mood, Icon, Chip, priceLabel } from '../components.jsx'

export default function EventDetail({ id, onBack, onReserve, isBooked, gifts }) {
  const ev = EVENTS.find((e) => e.id === id)
  const [liked, setLiked] = useState(false)
  if (!ev) return null

  const usableGift = gifts.find((g) => !g.used)
  const booked = isBooked(ev.id)

  return (
    <div className="screen fade-screen" style={{ zIndex: 30 }}>
      <div className="statusbar">
        <span>9:41</span>
        <div className="dots"><span /><span /><span /><div className="battery" /></div>
      </div>
      <div className="body" style={{ paddingBottom: 0 }}>
        <div className="detail-art">
          <Mood className="hero-grad" mood={ev.mood} style={{ position: 'absolute', inset: 0 }} />
          <div className="orb-deco" />
          <button className="back" onClick={onBack}><Icon.back width={20} height={20} /></button>
          <button className="heart" onClick={() => setLiked(!liked)} style={{ color: liked ? 'var(--clay)' : 'var(--ink)' }}>
            <Icon.heart width={20} height={20} style={{ fill: liked ? 'var(--clay)' : 'none' }} />
          </button>
          <h1 className="d-title">{ev.title}</h1>
        </div>

        <div className="detail-body">
          <div className="hero-meta" style={{ marginBottom: 18 }}>
            <Chip variant="ghost">{CATEGORY_LABEL[ev.category]}</Chip>
            {ev.tags.map((t) => <Chip key={t} variant="ghost">{t}</Chip>)}
          </div>

          <div className="fact-row">
            <div className="fact"><div className="k">Ne zaman</div><div className="v">{ev.day} {ev.date}</div></div>
            <div className="fact"><div className="k">Saat</div><div className="v">{ev.time}</div></div>
            <div className="fact"><div className="k">Süre</div><div className="v">{ev.duration}</div></div>
          </div>

          <div className="host-row">
            <div className="host-av">{ev.host[0]}</div>
            <div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 17 }}>{ev.host}</div>
              <div className="faint" style={{ fontSize: 13 }}>Bu anın rehberi</div>
            </div>
          </div>

          <p className="blurb">{ev.blurb}</p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--ink-soft)', fontSize: 14, marginBottom: 24 }}>
            <Icon.pin width={18} height={18} /> {ev.place}
          </div>

          {ev.spotsLeft <= 6 && !booked && (
            <div className="spots-note">
              <Icon.people width={16} height={16} /> {ev.capacity} yerden yalnızca {ev.spotsLeft} tanesi kaldı
            </div>
          )}

          {usableGift && !booked && (
            <div className="gift" style={{ marginLeft: 0, marginRight: 0 }}>
              <div className="gift-ic"><Icon.gift width={22} height={22} /></div>
              <div className="gift-body">
                <div className="gl">Seni bir hediye bekliyor</div>
                <div className="gd">{usableGift.detail} — {usableGift.from}</div>
              </div>
            </div>
          )}
        </div>

        <div className="action-bar">
          <div className="price-tag">
            <div className="p">{priceLabel(ev.price)}</div>
            <div className="l">{usableGift && ev.price > 0 && !booked ? 'hediye geçerli' : 'kişi başı'}</div>
          </div>
          {booked ? (
            <button className="btn btn-ghost" disabled style={{ flex: 1 }}>
              <Icon.check width={18} height={18} style={{ stroke: 'var(--sage-deep)' }} /> Ayrıldı
            </button>
          ) : (
            <button className="btn btn-primary" style={{ flex: 1 }} onClick={() => onReserve(ev)}>
              Yerini ayır
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
