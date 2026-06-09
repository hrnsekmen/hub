import React, { useMemo, useState } from 'react'
import { EVENTS, CATEGORIES } from '../data.js'
import { EventRow, Icon } from '../components.jsx'

const DAYS = ['Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz']

export default function Explore({ onOpen }) {
  const [cat, setCat] = useState('all')
  const [view, setView] = useState('list') // list | calendar | map
  const [q, setQ] = useState('')

  const filtered = useMemo(() => {
    return EVENTS.filter((e) => cat === 'all' || e.category === cat).filter(
      (e) =>
        !q ||
        e.title.toLowerCase().includes(q.toLowerCase()) ||
        e.host.toLowerCase().includes(q.toLowerCase()) ||
        e.place.toLowerCase().includes(q.toLowerCase()),
    )
  }, [cat, q])

  return (
    <div className="fade-screen">
      <div className="screen-head">
        <div className="eyebrow">Anını bul</div>
        <div className="display" style={{ fontSize: 30, marginTop: 6 }}>Keşfet</div>
      </div>

      <div className="search" style={{ marginTop: 16 }}>
        <Icon.explore width={18} height={18} />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Pratik, eğitmen veya mekân ara"
        />
      </div>

      <div className="cats">
        <button className={`cat-pill ${cat === 'all' ? 'on' : ''}`} onClick={() => setCat('all')}>Tümü</button>
        {CATEGORIES.map((c) => (
          <button key={c.id} className={`cat-pill ${cat === c.id ? 'on' : ''}`} onClick={() => setCat(c.id)}>
            {c.label}
          </button>
        ))}
      </div>

      <div className="vtoggle" style={{ marginTop: 16 }}>
        <button className={view === 'list' ? 'on' : ''} onClick={() => setView('list')}>Liste</button>
        <button className={view === 'calendar' ? 'on' : ''} onClick={() => setView('calendar')}>Takvim</button>
        <button className={view === 'map' ? 'on' : ''} onClick={() => setView('map')}>Harita</button>
      </div>

      {view === 'list' && (
        <>
          {filtered.length === 0 && (
            <div className="empty"><div className="serif">Burada henüz bir şey yok</div>Başka bir kategori dene ya da aramanı temizle.</div>
          )}
          {filtered.map((e) => <EventRow key={e.id} ev={e} onOpen={onOpen} />)}
        </>
      )}

      {view === 'calendar' && (
        <div>
          {DAYS.map((d) => {
            const dayEvents = filtered.filter((e) => e.day === d)
            if (dayEvents.length === 0) return null
            return (
              <div className="cal-day" key={d}>
                <div className="cal-label">
                  <span className="cd">{dayEvents[0].date}</span>
                  <span className="cc">{d} · {dayEvents.length} an</span>
                </div>
                {dayEvents.map((e) => <EventRow key={e.id} ev={{ ...e }} onOpen={onOpen} />)}
              </div>
            )
          })}
        </div>
      )}

      {view === 'map' && (
        <>
          <div className="fauxmap">
            <span className="pin" style={{ left: '24%', top: '32%' }} />
            <span className="pin sage" style={{ left: '58%', top: '46%' }} />
            <span className="pin clay" style={{ left: '40%', top: '64%' }} />
            <span className="pin sage" style={{ left: '72%', top: '28%' }} />
            <span className="pin" style={{ left: '33%', top: '74%' }} />
          </div>
          <p className="pad muted" style={{ fontSize: 13, marginTop: -4, marginBottom: 14 }}>
            Kısa bir yürüyüş mesafesinde {filtered.length} an.
          </p>
          {filtered.slice(0, 4).map((e) => <EventRow key={e.id} ev={e} onOpen={onOpen} />)}
        </>
      )}
    </div>
  )
}
