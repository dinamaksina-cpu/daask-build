"use client";

import { useEffect } from "react";

const revealSelectors = [
  ".section-heading > *",
  ".service-card",
  ".gallery-card",
  ".about-panel > .eyebrow",
  ".about-panel > h2",
  ".about-panel > p:not(.eyebrow)",
  ".about-panel > .button",
  ".principle",
  ".type-preview-grid > a",
  ".process-row > div",
  ".contact > *",
  ".footer-lead > *",
  ".footer-column",
  ".footer-contact",
  ".page-hero-inner > *",
  ".service-hero-inner > *",
  ".story > *",
  ".values > *",
  ".service-detail > *",
  ".method-grid > *",
  ".next-service > *",
  ".next-links > *",
  ".projects-intro > *",
  ".case-study",
  ".type-list > article",
  ".honest-projects > *",
  ".phases > article",
  ".decision-band > *",
  ".pillar-section > *",
  ".pillar-grid > article",
  ".sustain-grid > article",
  ".seai-band > *",
  ".contact-page > *",
  ".contact-form-section > *",
  ".map-section > *",
  ".contact-choice > *",
  ".why-strip > *",
];

const tiltSelectors = ".service-card,.gallery-card,.type-preview-grid>a,.pillar-grid>article,.sustain-grid>article,.next-links>a";
const parallaxSelectors = "[data-parallax],.gallery-card img,.case-image img,.value-stat";

export default function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const revealTargets = Array.from(new Set(
      revealSelectors.flatMap((selector) => Array.from(document.querySelectorAll<HTMLElement>(selector))),
    ));
    const motionSections = Array.from(document.querySelectorAll<HTMLElement>("main > section,.site-footer"));
    const parallaxTargets = Array.from(document.querySelectorAll<HTMLElement>(parallaxSelectors));
    const tiltTargets = Array.from(document.querySelectorAll<HTMLElement>(tiltSelectors));
    const processItems = Array.from(document.querySelectorAll<HTMLElement>(".process-row>div,.phases>article"));
    let frame = 0;

    revealTargets.forEach((target, index) => {
      target.classList.add("reveal-on-scroll");
      target.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);
    });

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: .09, rootMargin: "0px 0px -6% 0px" });

    const processObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.target.classList.toggle("is-motion-active", entry.isIntersecting));
    }, { threshold: .52, rootMargin: "-22% 0px -22% 0px" });

    if (reduced || !("IntersectionObserver" in window)) {
      revealTargets.forEach((target) => target.classList.add("is-revealed"));
    } else {
      revealTargets.forEach((target) => revealObserver.observe(target));
      processItems.forEach((target) => processObserver.observe(target));
    }

    const updateMotion = () => {
      frame = 0;
      const scrollable = Math.max(root.scrollHeight - window.innerHeight, 1);
      root.style.setProperty("--scroll-progress", String(Math.min(window.scrollY / scrollable, 1)));
      body.classList.toggle("is-scrolled", window.scrollY > 32);

      motionSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const progress = Math.min(Math.max((window.innerHeight - rect.top) / (window.innerHeight + rect.height), 0), 1);
        section.style.setProperty("--section-progress", String(progress));
        section.classList.toggle("is-active-section", rect.top < window.innerHeight * .68 && rect.bottom > window.innerHeight * .32);
      });

      parallaxTargets.forEach((target) => {
        const rect = target.getBoundingClientRect();
        const progress = Math.min(Math.max((window.innerHeight - rect.top) / (window.innerHeight + rect.height), 0), 1);
        target.style.setProperty("--parallax-shift", `${(progress - .5) * 62}px`);
      });
    };

    const scheduleMotion = () => {
      if (!frame) frame = window.requestAnimationFrame(updateMotion);
    };

    const handlePointer = (event: PointerEvent) => {
      root.style.setProperty("--pointer-x", `${event.clientX}px`);
      root.style.setProperty("--pointer-y", `${event.clientY}px`);
      body.classList.add("has-active-pointer");
    };

    const tiltCleanups = tiltTargets.map((target) => {
      const move = (event: PointerEvent) => {
        const rect = target.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - .5;
        const y = (event.clientY - rect.top) / rect.height - .5;
        target.style.setProperty("--tilt-x", `${y * -2.8}deg`);
        target.style.setProperty("--tilt-y", `${x * 2.8}deg`);
        target.style.setProperty("--spot-x", `${(x + .5) * 100}%`);
        target.style.setProperty("--spot-y", `${(y + .5) * 100}%`);
      };
      const leave = () => {
        target.style.setProperty("--tilt-x", "0deg");
        target.style.setProperty("--tilt-y", "0deg");
      };
      target.addEventListener("pointermove", move);
      target.addEventListener("pointerleave", leave);
      return () => {
        target.removeEventListener("pointermove", move);
        target.removeEventListener("pointerleave", leave);
      };
    });

    updateMotion();
    if (!reduced) {
      window.addEventListener("scroll", scheduleMotion, { passive: true });
      window.addEventListener("resize", scheduleMotion);
      if (finePointer) window.addEventListener("pointermove", handlePointer, { passive: true });
    }

    return () => {
      revealObserver.disconnect();
      processObserver.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleMotion);
      window.removeEventListener("resize", scheduleMotion);
      window.removeEventListener("pointermove", handlePointer);
      tiltCleanups.forEach((cleanup) => cleanup());
      body.classList.remove("is-scrolled", "has-active-pointer");
    };
  }, []);

  return (
    <>
      <div className="site-scroll-progress" aria-hidden="true"><i /></div>
      <div className="site-cursor-glow" aria-hidden="true" />
    </>
  );
}
