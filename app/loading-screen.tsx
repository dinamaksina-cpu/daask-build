"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reducedMotion ? 450 : 1850;
    const exitDuration = reducedMotion ? 120 : 620;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const linear = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - linear, 3);
      setProgress(Math.min(100, Math.round(eased * 100)));

      if (linear < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setProgress(100);
        window.setTimeout(() => setLeaving(true), reducedMotion ? 20 : 140);
        window.setTimeout(() => {
          setVisible(false);
          root.style.overflow = previousOverflow;
        }, (reducedMotion ? 20 : 140) + exitDuration);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      root.style.overflow = previousOverflow;
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`site-loader${leaving ? " site-loader--leaving" : ""}`}
      role="status"
      aria-label="Loading DAASK Build website"
      aria-live="polite"
    >
      <div className="site-loader__grid" aria-hidden="true" />
      <div className="site-loader__scan" aria-hidden="true" />

      <div className="site-loader__content">
        <div className="site-loader__logo-wrap">
          <Image
            src="/daask-logo.png"
            alt="DAASK Build Ltd"
            width={240}
            height={120}
            priority
            className="site-loader__logo"
          />
          <span className="site-loader__orbit" aria-hidden="true" />
        </div>

        <div className="site-loader__eyebrow">Engineering · Construction · Donegal</div>

        <div className="site-loader__progress-row">
          <span className="site-loader__number">{String(progress).padStart(2, "0")}</span>
          <span className="site-loader__percent">%</span>
        </div>

        <div className="site-loader__bar" aria-hidden="true">
          <span style={{ transform: `scaleX(${progress / 100})` }} />
        </div>
      </div>

      <div className="site-loader__corner site-loader__corner--left" aria-hidden="true">54.5000° N</div>
      <div className="site-loader__corner site-loader__corner--right" aria-hidden="true">08.2000° W</div>
    </div>
  );
}
