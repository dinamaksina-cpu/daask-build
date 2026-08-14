"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const primaryLinks = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Projects", "/projects"],
  ["About DAASK", "/about"],
  ["Contact", "/contact"],
];

const secondaryLinks = [
  ["Project Types", "/project-types"],
  ["How We Work", "/how-we-work"],
  ["Quality & Safety", "/quality-safety"],
  ["Sustainability", "/sustainability"],
  ["Areas We Serve", "/areas-we-serve"],
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const handleResize = () => {
      if (window.innerWidth > 760) setOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <button
        ref={toggleRef}
        className={`mobile-menu-toggle${open ? " is-open" : ""}`}
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>
      <div
        ref={panelRef}
        className={`mobile-menu-panel${open ? " is-open" : ""}`}
        id="mobile-navigation"
        role="navigation"
        aria-label="Mobile navigation"
        aria-hidden={!open}
        inert={!open}
      >
        <div className="mobile-menu-primary">
          {primaryLinks.map(([label, href]) => <Link href={href} key={href} onClick={closeMenu}>{label}</Link>)}
        </div>
        <div className="mobile-menu-secondary">
          {secondaryLinks.map(([label, href]) => <Link href={href} key={href} onClick={closeMenu}>{label}</Link>)}
        </div>
        <div className="mobile-menu-contact">
          <small>Start a conversation</small>
          <a href="tel:+353871133528">087 113 3528</a>
          <a href="mailto:daaskbuild@gmail.com">daaskbuild@gmail.com</a>
        </div>
      </div>
    </>
  );
}
