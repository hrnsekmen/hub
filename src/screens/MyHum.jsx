import React, { useState } from "react";
import { EVENTS, PAST_ATTENDED, MEMBERSHIP, CATEGORY_LABEL } from "../data.js";
import { Mood, Icon } from "../components.jsx";

export default function MyHum({ bookings, gifts, onOpen, onTab }) {
  const [tab, setTab] = useState("upcoming"); // upcoming | moments | history
  const upcoming = EVENTS.filter((e) => bookings.includes(e.id));
  const pct = Math.round(
    (MEMBERSHIP.momentsThisSeason / MEMBERSHIP.seasonGoal) * 100,
  );
  const maxPresence = Math.max(...MEMBERSHIP.presence, 1);

  return (
    <div className="fade-screen">
      <div className="screen-head">
        <div className="eyebrow">Pratiğin</div>
        <div className="display" style={{ fontSize: 30, marginTop: 6 }}>
          HUM Akışım
        </div>
      </div>

      <div className="subtabs" style={{ marginTop: 14 }}>
        <button
          className={`subtab ${tab === "upcoming" ? "on" : ""}`}
          onClick={() => setTab("upcoming")}
        >
          Yaklaşan
        </button>
        <button
          className={`subtab ${tab === "moments" ? "on" : ""}`}
          onClick={() => setTab("moments")}
        >
          Anlar
        </button>
        <button
          className={`subtab ${tab === "history" ? "on" : ""}`}
          onClick={() => setTab("history")}
        >
          Geçmiş
        </button>
      </div>

      {tab === "upcoming" && (
        <>
          {upcoming.length === 0 ? (
            <div className="empty">
              <div className="serif">Henüz ayrılmış bir an yok</div>
              Rezervasyonların burada toplanacak.
              <div style={{ marginTop: 20 }}>
                <button
                  className="btn btn-sage"
                  style={{ width: "auto", display: "inline-flex" }}
                  onClick={() => onTab("explore")}
                >
                  Bir an bul
                </button>
              </div>
            </div>
          ) : (
            upcoming.map((e) => (
              <div
                className="brow"
                key={e.id}
                onClick={() => onOpen(e.id)}
                style={{ cursor: "pointer" }}
              >
                <div className="bdate">
                  <div className="dd">{e.date.split(" ")[0]}</div>
                  <div className="dm">{e.date.split(" ")[1]}</div>
                </div>
                <div className="bbody">
                  <div className="bt">{e.title}</div>
                  <div className="bm">
                    {e.time} · {e.place}
                  </div>
                </div>
                <Icon.chev
                  width={20}
                  height={20}
                  style={{ color: "var(--ink-faint)" }}
                />
              </div>
            ))
          )}
        </>
      )}

      {tab === "moments" && (
        <>
          {/* Membership — quiet, not points */}
          <div className="moments-card">
            <div className="glow" />
            <div className="tier">{MEMBERSHIP.tier} · bu sezon</div>
            <div className="count">
              {MEMBERSHIP.momentsThisSeason}
              <small> / {MEMBERSHIP.seasonGoal} an</small>
            </div>
            <div className="pgoal">
              {MEMBERSHIP.seasonGoal - MEMBERSHIP.momentsThisSeason} an daha
              topla; sezon hediyen sessizce gelsin.
            </div>
            <div className="mbar">
              <i style={{ width: `${pct}%` }} />
            </div>
          </div>

          {/* Varlık — nazik kavisler */}
          <div className="section" style={{ marginTop: 24 }}>
            <div className="section-head">
              <h3>Varlığın</h3>
            </div>
            <p
              className="pad muted"
              style={{ fontSize: 13.5, marginTop: -6, marginBottom: 10 }}
            >
              Yedi haftadır buradasın — seri tutmak yok, yalnızca kendi ritmin.
            </p>
            <div className="pad">
              <div className="presence">
                {MEMBERSHIP.presence.map((v, i) => (
                  <span
                    key={i}
                    style={{
                      height: `${20 + (v / maxPresence) * 80}%`,
                      opacity: v === 0 ? 0.3 : 0.85,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Gifts */}
          <div className="section" style={{ marginTop: 26 }}>
            <div className="section-head">
              <h3>Hediyeler</h3>
            </div>
            {gifts.length === 0 && (
              <p className="pad muted" style={{ fontSize: 13.5 }}>
                Bir Hub’da nefes al; atölyelerde geçerli bir hediye kazan.
              </p>
            )}
            {gifts.map((g) => (
              <div className={`gift ${g.used ? "used" : ""}`} key={g.id}>
                <div className="gift-ic">
                  <Icon.gift width={22} height={22} />
                </div>
                <div className="gift-body">
                  <div className="gl">
                    {g.used ? "Hediye kullanıldı" : g.label}
                  </div>
                  <div className="gd">
                    {g.used ? g.from : `${g.detail} · ${g.from}`}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {tab === "history" && (
        <>
          <p className="pad muted" style={{ fontSize: 13.5, marginBottom: 16 }}>
            Daha önce yaşadığın anlar.
          </p>
          {PAST_ATTENDED.map((p) => (
            <div className="erow" key={p.id} style={{ cursor: "default" }}>
              <Mood className="erow-art" mood={p.mood} />
              <div className="erow-body">
                <div className="erow-cat">{CATEGORY_LABEL[p.category]}</div>
                <div className="erow-title">{p.title}</div>
                <div className="erow-meta">Katıldın · {p.date}</div>
              </div>
              <div className="erow-time">
                <Icon.check
                  width={20}
                  height={20}
                  style={{ stroke: "var(--sage-deep)" }}
                />
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
