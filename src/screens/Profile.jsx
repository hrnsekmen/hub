import React from 'react'
import { USER, PAST_ATTENDED, MEMBERSHIP } from '../data.js'
import { Icon } from '../components.jsx'

export default function Profile({ bookings }) {
  const attended = PAST_ATTENDED.length
  const menu = [
    'Bildirimler & nazik hatırlatmalar',
    'Kaydedilen anlar',
    'Ödeme & hediyeler',
    'Erişilebilirlik',
    'HUM hakkında',
  ]
  return (
    <div className="fade-screen">
      <div className="profile-head">
        <div className="profile-av">{USER.name[0]}</div>
        <div className="profile-name">{USER.name}</div>
        <div className="profile-meta">{USER.city} · {USER.since}</div>
      </div>

      <div className="stat-grid">
        <div className="stat"><div className="sv">{attended}</div><div className="sk">katılım</div></div>
        <div className="stat"><div className="sv">{bookings.length}</div><div className="sk">yaklaşan</div></div>
        <div className="stat"><div className="sv">{MEMBERSHIP.tier}</div><div className="sk">bu sezon</div></div>
      </div>

      <p className="pad muted" style={{ fontSize: 13.5, textAlign: 'center', margin: '18px 0 4px' }}>
        Bu sezon yoga, meditasyon ve toplulukta sakin zaman geçirdin.
      </p>

      <div className="menu">
        {menu.map((m) => (
          <div className="menu-item" key={m}>
            <span>{m}</span>
            <Icon.chev className="chev" width={18} height={18} />
          </div>
        ))}
      </div>

      <div className="pad" style={{ marginTop: 22 }}>
        <button className="btn btn-ghost">Çıkış yap</button>
      </div>
      <p className="faint" style={{ textAlign: 'center', fontSize: 12, marginTop: 18 }}>
        HUM — İnsan Şehir Anı
      </p>
    </div>
  )
}
