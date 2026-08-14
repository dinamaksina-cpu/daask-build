import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactBand, SiteFooter, SiteHeader } from "../../site-components";
import { getService, services } from "../../site-data";

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};
  return { title: `${service.title} | DAASK Build Ltd`, description: service.short };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const service = getService((await params).slug);
  if (!service) notFound();
  return (
    <main>
      <SiteHeader />
      <section className="service-hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="service-hero-inner"><Link href="/services" className="back-link">&larr; All services</Link><span className="service-hero-number">{service.number}</span><p className="eyebrow"><span /> DAASK Build service</p><h1>{service.title}</h1><p>{service.intro}</p></div>
      </section>
      <section className="service-detail section">
        <div className="service-overview"><p className="eyebrow dark"><span /> Overview</p><h2>Built on practical experience.</h2></div>
        <div className="service-copy"><p className="service-intro-copy">{service.overview}</p><div className="detail-columns"><div><h3>Scope of work</h3><ul>{service.scope.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h3>What it delivers</h3><ul>{service.outcomes.map((item) => <li key={item}>{item}</li>)}</ul></div></div></div>
      </section>
      <section className="service-method section">
        <div className="section-heading"><div><p className="eyebrow dark"><span /> How we deliver</p><h2>A controlled route from brief to completion.</h2></div><p>Every project is different, but the fundamentals stay the same: understand the need, define the work, coordinate delivery and check the result.</p></div>
        <div className="method-grid"><div><span>01</span><h3>Understand</h3><p>Review your goals, the building or site, available information and practical constraints.</p></div><div><span>02</span><h3>Define</h3><p>Set a clear scope, sequence, programme and responsibilities before work starts.</p></div><div><span>03</span><h3>Deliver</h3><p>Coordinate trades, materials and progress with attention to safety, quality and communication.</p></div><div><span>04</span><h3>Complete</h3><p>Close out details, carry out final checks and provide a clear handover.</p></div></div>
      </section>
      <section className="why-strip"><div><strong>25 years</strong><span>Construction &amp; project management</span></div><div><strong>Fully insured</strong><span>All DAASK Build works</span></div><div><strong>SEAI</strong><span>Registered contractor</span></div></section>
      <section className="next-service section"><p className="eyebrow dark"><span /> Explore more</p><h2>Other DAASK Build services.</h2><div className="next-links">{services.filter((item) => item.slug !== service.slug).slice(0, 3).map((item) => <Link href={`/services/${item.slug}`} key={item.slug}><span>{item.number}</span><strong>{item.title}</strong></Link>)}</div></section>
      <ContactBand title={`Discuss your ${service.title.toLowerCase()} project.`} />
      <SiteFooter />
    </main>
  );
}
