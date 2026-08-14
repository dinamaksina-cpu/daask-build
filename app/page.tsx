import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ContactBand, ServiceGrid, SiteFooter, SiteHeader } from "./site-components";
import { standards } from "./site-data";

export const metadata: Metadata = {
  title: "DAASK Build Ltd | Registered Building Contractor in Donegal",
  description: "Registered building contractor serving Donegal and surrounding areas. New builds, renovations, passive and heritage buildings, renewables and project management.",
};

export default function Home() {
  return (
    <main className="home-page">
      <SiteHeader />
      <section className="hero" id="top">
        <div className="hero-media" data-parallax aria-hidden="true"><Image src="/hero-daask-dusk.webp" alt="" fill priority sizes="100vw" /></div>
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-scan" aria-hidden="true" />
        <div className="hero-drawing" aria-hidden="true"><i /><i /><i /></div>
        <div className="hero-copy">
          <p className="eyebrow"><span /> Registered Building Contractor <b>Donegal, Ireland</b></p>
          <p className="hero-coordinates" aria-hidden="true">54.5000° N&nbsp;&nbsp; / &nbsp;&nbsp;08.2000° W</p>
          <h1>Where engineering meets <em>craftsmanship.</em></h1>
          <p className="hero-lead">Building better homes, workplaces and communities across Donegal and surrounding areas for over 25 years.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="tel:+353871133528">Discuss your project</a>
            <Link className="text-link" href="/services">Explore our services <span>&darr;</span></Link>
          </div>
        </div>
        <aside className="hero-card">
          <p className="hero-card-kicker"><i /> Live architectural experience</p>
          <strong>25+</strong>
          <span>years of experience</span>
        </aside>
        <div className="hero-hotspots" aria-hidden="true">
          <span className="hotspot hotspot-build"><i /> New builds</span>
          <span className="hotspot hotspot-extension"><i /> Extensions</span>
          <span className="hotspot hotspot-passive"><i /> Passive</span>
          <span className="hotspot hotspot-renewables"><i /> Renewables</span>
        </div>
        <p className="hero-mouse" aria-hidden="true"><i /> Move mouse to explore</p>
        <p className="hero-caption" aria-hidden="true"><b>ARCH 01</b> / CONTEMPORARY IRISH HOME STUDY</p>
      </section>
      <section className="trust-strip" aria-label="Qualifications and assurance">
        {standards.map((item) => <div key={item}><span>&#10003;</span>{item}</div>)}
        <div><strong>25+</strong> Years&apos; experience</div>
      </section>
      <section className="section services" id="services">
        <div className="section-heading">
          <div><p className="eyebrow dark"><span /> What we do</p><h2>Built around your project.</h2></div>
          <p>One experienced team for construction, specialist upgrades and full project coordination&mdash;from the first conversation to a finished building.</p>
        </div>
        <ServiceGrid />
        <div className="section-action"><Link className="button button-outline" href="/services">View all services</Link></div>
      </section>
      <section className="project-gallery section" aria-labelledby="gallery-title">
        <div className="section-heading">
          <div><p className="eyebrow dark"><span /> A closer look</p><h2 id="gallery-title">Built for place, performance and time.</h2></div>
          <p>A concise view of the building types and construction challenges our team is equipped to deliver across Donegal and surrounding areas.</p>
        </div>
        <div className="gallery-grid">
          <figure className="gallery-card gallery-card-wide">
            <img src="/gallery-new-build.png" alt="Contemporary new-build home in a rural Donegal landscape" />
            <figcaption><span>01</span><div><h3>New Build Homes</h3><p>Contemporary homes shaped around their site, their owners and the Irish climate.</p></div></figcaption>
          </figure>
          <figure className="gallery-card">
            <img src="/gallery-passive-build.png" alt="Energy-efficient timber-frame house during construction" />
            <figcaption><span>02</span><div><h3>High-Performance Construction</h3><p>Careful fabric, airtightness and energy details delivered as one coordinated build.</p></div></figcaption>
          </figure>
          <figure className="gallery-card">
            <img src="/gallery-heritage-renovation.png" alt="Renovated Irish stone cottage with a discreet glazed extension" />
            <figcaption><span>03</span><div><h3>Heritage &amp; Renovation</h3><p>Respectful upgrades that preserve character while improving everyday performance.</p></div></figcaption>
          </figure>
          <figure className="gallery-card">
            <img src="/project-commercial-facility.png" alt="Contemporary commercial construction and project coordination" />
            <figcaption><span>04</span><div><h3>Commercial &amp; Project Delivery</h3><p>Practical construction and project coordination shaped around programme, quality and long-term use.</p></div></figcaption>
          </figure>
        </div>
        <div className="section-action"><Link className="button button-light" href="/projects">Explore project cases</Link></div>
      </section>
      <section className="about" id="about">
        <div className="about-panel about-dark">
          <p className="eyebrow"><span /> Why DAASK</p>
          <h2>Engineering discipline.<br />Craftsmanship in every detail.</h2>
          <p>We combine hands-on construction knowledge with experienced project management. That means practical decisions, accountable delivery and work built to perform for years to come.</p>
          <Link className="button button-light" href="/about">About DAASK</Link>
        </div>
        <div className="about-panel about-light">
          <div className="principle"><span>01</span><div><h3>Plan with purpose</h3><p>Clear scope, realistic programmes and informed decisions before work begins.</p></div></div>
          <div className="principle"><span>02</span><div><h3>Build with care</h3><p>Skilled workmanship and close attention to the details that determine quality.</p></div></div>
          <div className="principle"><span>03</span><div><h3>Deliver with confidence</h3><p>Experienced coordination, full insurance and clear communication throughout.</p></div></div>
        </div>
      </section>
      <section className="project-types-home section">
        <div className="section-heading">
          <div><p className="eyebrow dark"><span /> Project types</p><h2>Experience across varied building challenges.</h2></div>
          <p>Explore the kinds of domestic, commercial, specialist and high-performance projects DAASK Build is equipped to deliver.</p>
        </div>
        <div className="type-preview-grid">
          <Link href="/project-types#domestic"><span>01</span><h3>Domestic</h3><p>New homes, extensions and whole-house renovation.</p></Link>
          <Link href="/project-types#commercial"><span>02</span><h3>Commercial</h3><p>Practical spaces, upgrades and coordinated building work.</p></Link>
          <Link href="/project-types#performance"><span>03</span><h3>Energy &amp; Passive</h3><p>Fabric-first construction and integrated energy systems.</p></Link>
          <Link href="/project-types#specialist"><span>04</span><h3>Specialist</h3><p>Heritage buildings, rebuilds and multidisciplinary work.</p></Link>
        </div>
      </section>
      <section className="process section">
        <div className="section-heading compact"><div><p className="eyebrow dark"><span /> How we work</p><h2>A clear route from idea to handover.</h2></div></div>
        <div className="process-row">
          <div><span>01</span><h3>Discuss</h3><p>We listen to your goals, site requirements and priorities.</p></div>
          <div><span>02</span><h3>Plan</h3><p>We define the scope, programme and practical route forward.</p></div>
          <div><span>03</span><h3>Build</h3><p>We coordinate the work with a close eye on quality and progress.</p></div>
          <div><span>04</span><h3>Handover</h3><p>We finish carefully and leave you confident in the result.</p></div>
        </div>
        <div className="section-action"><Link className="button button-outline" href="/how-we-work">Our full process</Link></div>
      </section>
      <ContactBand />
      <SiteFooter />
    </main>
  );
}
