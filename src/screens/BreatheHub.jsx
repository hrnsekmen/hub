import React, { useEffect, useRef, useState } from "react";
import { Icon, BrandMark } from "../components.jsx";

// Guided pattern — coherent breathing. Inhale 4 · Hold 4 · Exhale 6.
const PATTERN = [
  { phase: "Nefes al", cls: "inhale", ms: 4000 },
  { phase: "Tut", cls: "hold", ms: 4000 },
  { phase: "Nefes ver", cls: "exhale", ms: 6000 },
];
const ROUNDS = 3;

export default function BreatheHub({ onClose, onComplete }) {
  const [stage, setStage] = useState("scan"); // scan | breathe | reward
  const [step, setStep] = useState(0); // index into the flattened sequence
  const timer = useRef(null);

  // Build the full sequence of phases across all rounds.
  const sequence = [];
  for (let r = 0; r < ROUNDS; r++) sequence.push(...PATTERN);

  useEffect(() => {
    if (stage !== "breathe") return;
    if (step >= sequence.length) {
      setStage("reward");
      return;
    }
    timer.current = setTimeout(() => setStep((s) => s + 1), sequence[step].ms);
    return () => clearTimeout(timer.current);
  }, [stage, step]);

  const current = sequence[Math.min(step, sequence.length - 1)] || PATTERN[0];
  const round = Math.min(Math.floor(step / PATTERN.length) + 1, ROUNDS);

  return (
    <>
      <div
        className="sheet-scrim"
        onClick={stage === "reward" ? undefined : onClose}
      />
      <div className="bh">
        <div className="bh-top">
          <div className="bh-brand">
            <span className="bh-brand-mark" aria-hidden="true">
              <BrandMark size={22} light />
            </span>
            <div className="bh-brand-copy">
              <span className="bh-brand-title">Breathe Hub</span>
              <span className="bh-brand-venue">Kuzey Meydan</span>
            </div>
          </div>
          <button className="x" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* 1 — Scan / arrive */}
        {stage === "scan" && (
          <>
            <div className="bh-body bh-intro">
              <div
                className="orb-wrap"
                style={{ width: 168, height: 168, margin: "4px 0 20px" }}
              >
                <div className="orb-ring" />
                <div className="orb-ring r2" />
                <div className="orb-ring r3" />
                <div className="orb" style={{ width: 88, height: 88 }} />
              </div>
              <div className="bh-phase" style={{ fontSize: 27 }}>
                Bir Hub buldun
              </div>
              <p className="bh-hint" style={{ marginTop: 12 }}>
                Kameranı qr'a tut ve hemen başla. Sana bir dakika yeter; ışıklı
                formlar nefesinle birlikte hareket eder.
              </p>

              <div className="bh-about">
                <div className="bh-about-title">Breathe Hub nedir?</div>
                <div className="bh-about-row">
                  <span className="bh-dot" />
                  Meydanlara, parklara ve duraklara yerleştirilen, herkese açık
                  bir nefes enstalasyonu.
                </div>
                <div className="bh-about-row">
                  <span className="bh-dot" />
                  Bir-iki dakikalık kısa bir nefes egzersizi yaparsın; ışıklı
                  organik formlar seninle nefes alır.
                </div>
                <div className="bh-about-row">
                  <span className="bh-dot" />
                  Sonunda HUM atölyelerinde geçerli bir hediye kazanır, HUM’la
                  tanışmanın ilk adımını atarsın.
                </div>
              </div>
            </div>
            <div className="bh-foot">
              <button
                className="btn btn-sage"
                onClick={() => {
                  setStep(0);
                  setStage("breathe");
                }}
              >
                <Icon.qr width={18} height={18} /> Nefese başla
              </button>
            </div>
          </>
        )}

        {/* 2 — Breathe */}
        {stage === "breathe" && (
          <>
            <div className="bh-body">
              <div className="orb-wrap">
                <div className="orb-ring" />
                <div className="orb-ring r2" />
                <div className="orb-ring r3" />
                <div className={`orb ${current.cls}`} />
              </div>
              <div className="bh-phase" key={step}>
                {current.phase}
              </div>
              <div className="bh-count">
                TUR {round} / {ROUNDS}
              </div>
            </div>
            <div className="bh-foot">
              <button
                className="btn btn-ghost"
                style={{
                  color: "rgba(243,238,228,.8)",
                  borderColor: "rgba(243,238,228,.25)",
                }}
                onClick={onClose}
              >
                Erken bitir
              </button>
            </div>
          </>
        )}

        {/* 3 — Reward / gift */}
        {stage === "reward" && (
          <>
            <div className="bh-body">
              <div className="reward">
                <div className="seal">
                  <BrandMark size={56} light />
                </div>
                <div className="r-title">Bir an, seninle kaldı.</div>
                <p className="r-sub">
                  Bu, sezonun anlarından biri olarak sayılıyor. Teşekkür olarak
                  HUM atölyelerinde kullanabileceğin küçük bir hediye senin.
                </p>
                <div className="gift-pill">
                  🎁 Sonraki atölyende −%30 · 7 gün geçerli
                </div>
              </div>
            </div>
            <div className="bh-foot">
              <button className="btn btn-sage" onClick={onComplete}>
                Hediyeni bir atölyede kullan
              </button>
              <button
                className="btn btn-ghost"
                style={{
                  marginTop: 10,
                  color: "rgba(243,238,228,.8)",
                  borderColor: "rgba(243,238,228,.25)",
                }}
                onClick={onClose}
              >
                Sonra kullanırım
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
