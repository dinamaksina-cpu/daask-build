import Link from "next/link";
import BackToTop from "./back-to-top";
import MobileMenu from "./mobile-menu";
import ScrollReveal from "./scroll-reveal";
import { services } from "./site-data";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="DAASK Build home">
        <img src="/daask-logo.png" alt="DAASK Build Ltd" />
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/how-we-work">Process</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <div className="header-actions">
        <a className="header-phone" href="tel:+353871133528">087 113 3528</a>
        <Link className="header-call" href="/contact">Discuss your project</Link>
      </div>
      <MobileMenu />
    </header>
  );
}

export function SiteFooter() {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-lead">
          <div className="footer-brand"><Link href="/" aria-label="DAASK Build home"><img src="/daask-logo.png" alt="DAASK Build Ltd" /></Link><p>Where engineering meets craftsmanship.</p><p>Registered Building Contractor &middot; All works fully insured</p></div>
          <div><p className="eyebrow"><span /> Start a conversation</p><h2>Planning something worth building well?</h2><Link className="button button-light" href="/contact">Discuss your project</Link></div>
        </div>
        <div className="footer-column footer-services"><strong>Services</strong><Link href="/services/new-builds">New Builds</Link><Link href="/services/extensions-renovations">Extensions &amp; Renovations</Link><Link href="/services/renewable-energy-systems">Renewable Energy</Link><Link href="/services/passive-buildings">Passive Buildings</Link><Link href="/services/project-management">Project Management</Link><Link href="/services/meica-rebuilds">MEICA Rebuilds</Link></div>
        <div className="footer-column footer-quick"><strong>Quick Links</strong><Link href="/projects">Projects</Link><Link href="/project-types">Project Types</Link><Link href="/about">About DAASK</Link><Link href="/how-we-work">How We Work</Link><Link href="/quality-safety">Quality &amp; Safety</Link><Link href="/areas-we-serve">Areas We Serve</Link><Link href="/contact">Contact</Link></div>
        <div className="footer-contact"><strong>Contacts</strong><a className="footer-phone" href="tel:+353871133528">087 113 3528</a><a className="footer-email" href="mailto:daaskbuild@gmail.com">daaskbuild@gmail.com</a><p>The Mall<br />Ballyshannon<br />Co. Donegal</p><div className="footer-social"><small>Social</small><a href="https://www.linkedin.com/in/dermott-mulligan-b8574795" target="_blank" rel="noreferrer">LinkedIn</a></div></div>
        <div className="footer-bottom"><span>&copy; {new Date().getFullYear()} DAASK Build Ltd</span><span>Donegal &amp; surrounding areas</span><span className="footer-credit">Website by <strong>MiDiVa Digital Agency</strong></span></div>
      </footer>
      <BackToTop />
      <ScrollReveal />
    </>
  );
}

export function PageHero({ eyebrow, title, lead }: { eyebrow: string; title: string; lead: string }) {
  return (
    <section className="page-hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="page-hero-inner">
        <p className="eyebrow"><span /> {eyebrow}</p>
        <h1>{title}</h1>
        <p>{lead}</p>
      </div>
    </section>
  );
}

export function ServiceGrid({ limit }: { limit?: number }) {
  const visible = limit ? services.slice(0, limit) : services;
  return (
    <div className="service-grid">
      {visible.map((service) => (
        <Link className="service-card" href={`/services/${service.slug}`} key={service.slug}>
          <span className="service-number">{service.number}</span>
          <h3>{service.title}</h3>
          <p>{service.short}</p>
        </Link>
      ))}
    </div>
  );
}

export function ContactBand({ title = "Planning a build, renovation or upgrade?" }: { title?: string }) {
  return (
    <section className="contact">
      <div>
        <p className="eyebrow"><span /> Your project starts here</p>
        <h2>{title}</h2>
        <p>Tell us what you have in mind. We&apos;ll talk through the next step and how DAASK Build can help.</p>
      </div>
      <div className="contact-actions">
        <a className="contact-call" href="tel:+353871133528"><small>Call Dermott</small><strong>087 113 3528</strong></a>
        <a className="contact-email" href="mailto:daaskbuild@gmail.com"><small>Email DAASK Build</small><strong>daaskbuild@gmail.com</strong></a>
        <div className="contact-address"><small>Based in</small><strong>The Mall, Ballyshannon<br />Co. Donegal</strong></div>
      </div>
    </section>
  );
}
