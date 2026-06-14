import React, { useState, useCallback } from "react";
import { INITIAL_BOOKINGS, INITIAL_GIFTS } from "./data.js";
import { Icon } from "./components.jsx";
import Today from "./screens/Today.jsx";
import Explore from "./screens/Explore.jsx";
import MyHum from "./screens/MyHum.jsx";
import Profile from "./screens/Profile.jsx";
import EventDetail from "./screens/EventDetail.jsx";
import BreatheHub from "./screens/BreatheHub.jsx";
import iconUrl from "./img/icon.png";

const TABS = [
  { id: "today", label: "Bugün", icon: Icon.today },
  { id: "explore", label: "Keşfet", icon: Icon.explore },
  { id: "hum", label: "HUM Akışım", icon: Icon.hum },
  { id: "profile", label: "Profil", icon: Icon.profile },
];

export default function App() {
  const [tab, setTab] = useState("today");
  const [detailId, setDetailId] = useState(null);
  const [breathe, setBreathe] = useState(false);
  const [bookings, setBookings] = useState(INITIAL_BOOKINGS);
  const [gifts, setGifts] = useState(INITIAL_GIFTS);
  const [confirmEv, setConfirmEv] = useState(null);
  const [toast, setToast] = useState(null);

  const isBooked = useCallback((id) => bookings.includes(id), [bookings]);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2200);
  };

  const openEvent = (id) => setDetailId(id);

  const goTab = (t) => {
    setDetailId(null);
    setTab(t);
  };

  const reserve = (ev) => {
    if (!bookings.includes(ev.id)) setBookings((b) => [...b, ev.id]);
    // If a gift applied, consume it.
    const g = gifts.find((x) => !x.used);
    if (g && ev.price > 0) {
      setGifts((arr) =>
        arr.map((x) => (x.id === g.id ? { ...x, used: true } : x)),
      );
    }
    setConfirmEv(ev);
  };

  const finishConfirm = () => {
    const ev = confirmEv;
    setConfirmEv(null);
    setDetailId(null);
    setTab("hum");
    if (ev) showToast("HUM Akışıma eklendi · orada görüşürüz");
  };

  // Breathe Hub finished → drop a fresh gift, route the user into Explore.
  const breatheComplete = () => {
    setGifts((arr) => [
      {
        id: "g" + (arr.length + 1),
        label: "Atölyende kullanabileceğin küçük bir hediye",
        detail: "−%30 · 7 gün geçerli",
        from: "Breathe Hub · Kuzey Meydan",
        date: "10 Haz",
        used: false,
      },
      ...arr,
    ]);
    setBreathe(false);
    setDetailId(null);
    setTab("explore");
    showToast("Anın saklandı · hediyen HUM Akışımda");
  };

  const screen = () => {
    switch (tab) {
      case "today":
        return <Today onOpen={openEvent} bookings={bookings} onTab={goTab} />;
      case "explore":
        return <Explore onOpen={openEvent} />;
      case "hum":
        return (
          <MyHum
            bookings={bookings}
            gifts={gifts}
            onOpen={openEvent}
            onTab={goTab}
          />
        );
      case "profile":
        return <Profile bookings={bookings} />;
      default:
        return null;
    }
  };

  return (
    <div className="stage">
      <div className="phone">
        <div className="screen">
          <div className="statusbar">
            <span>9:41</span>
            <div className="dots">
              <span />
              <span />
              <span />
              <div className="battery" />
            </div>
          </div>

          <div className="body">{screen()}</div>

          {/* Bottom navigation with center Breathe action */}
          <nav className="tabbar">
            {TABS.slice(0, 2).map((t) => (
              <button
                key={t.id}
                className={`tab ${tab === t.id && !detailId ? "on" : ""}`}
                onClick={() => goTab(t.id)}
              >
                <span className="ic">
                  <t.icon />
                </span>
                {t.label}
              </button>
            ))}

            <div className="tab tab-breathe">
              <button
                className="breathe-btn"
                aria-label="Breathe Hub"
                onClick={() => setBreathe(true)}
              >
                <img src={iconUrl} alt="" className="breathe-icon" />
              </button>
            </div>

            {TABS.slice(2).map((t) => (
              <button
                key={t.id}
                className={`tab ${tab === t.id && !detailId ? "on" : ""}`}
                onClick={() => goTab(t.id)}
              >
                <span className="ic">
                  <t.icon />
                </span>
                {t.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Event detail (slides over) */}
        {detailId && (
          <EventDetail
            id={detailId}
            onBack={() => setDetailId(null)}
            onReserve={reserve}
            isBooked={isBooked}
            gifts={gifts}
          />
        )}

        {/* Booking confirmation */}
        {confirmEv && (
          <div className="confirm">
            <div className="check">
              <Icon.check width={40} height={40} />
            </div>
            <h2>Yerin ayrıldı</h2>
            <p>
              {confirmEv.title} · {confirmEv.day} {confirmEv.date}, saat{" "}
              {confirmEv.time}. Bir gün önceden sana nazikçe hatırlatacağız.
            </p>
            <button className="btn btn-primary" onClick={finishConfirm}>
              HUM Akışımda gör
            </button>
            <button
              className="btn btn-ghost"
              style={{ marginTop: 12 }}
              onClick={() => {
                setConfirmEv(null);
                setDetailId(null);
              }}
            >
              Keşfetmeye devam et
            </button>
          </div>
        )}

        {/* Breathe Hub modal */}
        {breathe && (
          <BreatheHub
            onClose={() => setBreathe(false)}
            onComplete={breatheComplete}
          />
        )}

        {/* Toast */}
        {toast && <div className="toast">{toast}</div>}
      </div>
    </div>
  );
}
