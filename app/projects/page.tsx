import type { Metadata } from "next";
import { ContactBand, PageHero, SiteFooter, SiteHeader } from "../site-components";

export const metadata: Metadata = {
  title: "Selected Projects | DAASK Build Ltd",
  description: "Selected construction, passive-building, renovation and infrastructure projects from DAASK Build Ltd.",
};

const projects = [
  {
    number: "01",
    category: "Passive residential",
    title: "Ireland's First Zero Energy Passive House",
    image: "/gallery-passive-build.png",
    alt: "High-performance timber-frame home under construction",
    period: "2009",
    location: "Finner, Bundoran, Co. Donegal",
    role: "Design & Project Management",
    summary: "Design and project management for a pioneering low-energy home, bringing passive-building principles and integrated energy thinking into one coordinated residential project.",
    focus: ["Passive and zero-energy design objectives", "Building-fabric and services coordination", "Project planning and delivery oversight"],
    result: "A pioneering zero-energy passive-home project combining high-performance fabric, coordinated services and disciplined project delivery.",
  },
  {
    number: "02",
    category: "Heritage reconstruction",
    title: "Edwardian House Reimagined for Holiday Use",
    image: "/gallery-heritage-renovation.png",
    alt: "Sensitively renovated traditional stone house",
    period: "2022-2023",
    location: "Ireland",
    role: "Design Coordination & Project Management",
    summary: "Reconstruction of an Edwardian house into a distinctive holiday home, balancing the needs of an existing building with a clear new purpose.",
    focus: ["Existing-building reconstruction", "Design and programme coordination", "Careful integration of old and new work"],
    result: "A renewed property planned around character, usability and long-term holiday accommodation.",
  },
  {
    number: "03",
    category: "Commercial facility",
    title: "Office, Workshop & Storage Facility",
    image: "/project-commercial-facility.png",
    alt: "Modern office, workshop and storage facility",
    period: "2020-2021",
    location: "Bundoran, Co. Donegal",
    role: "Construction & Project Management",
    summary: "A purpose-designed operational facility combining office space, workshop functions and practical storage within one coordinated building project.",
    focus: ["Commercial building design", "Workshop and storage planning", "Construction and project coordination"],
    result: "Office, workshop and storage requirements brought together in one practical facility.",
  },
  {
    number: "04",
    category: "Water infrastructure",
    title: "Killybegs & Lettermacaward Regional Water Supply Schemes",
    image: "/project-water-infrastructure.png",
    alt: "Modern regional water-treatment facility in Donegal",
    period: "From 2022",
    location: "County Donegal",
    role: "Resident Engineering & Site Oversight",
    summary: "Resident-engineering leadership across an €18 million design-build-operate contract involving civil, mechanical and electrical works on two regional water-supply schemes.",
    focus: ["Killybegs WTP capacity upgrade", "New DAF treatment capacity at Lettermacaward", "Contract, quality, safety and multidisciplinary site oversight"],
    result: "Major coordinated upgrades covering treatment capacity, pumping stations and supporting infrastructure.",
  },
];

export default function ProjectsPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="Selected experience"
        title="Projects with a story behind the result."
        lead="A closer look at selected residential, commercial and infrastructure projects across construction, coordination and project delivery."
      />

      <section className="projects-intro section">
        <div><p className="eyebrow dark"><span /> More than a gallery</p><h2>Each case starts with the challenge.</h2></div>
        <div>
          <p>These case studies show the range of DAASK Build’s involvement across engineering, construction, coordination and project delivery — from the scope of work through to the practical outcome.</p>
        </div>
      </section>

      <section className="case-studies" aria-label="Selected project cases">
        {projects.map((project) => (
          <article className="case-study" id={`project-${project.number}`} key={project.number}>
            <figure className="case-image">
              <img src={project.image} alt={project.alt} />
            </figure>
            <div className="case-content">
              <p className="case-label"><span>{project.number}</span>{project.category}</p>
              <h2>{project.title}</h2>
              <div className="case-facts">
                <div><small>Period</small><strong>{project.period}</strong></div>
                <div><small>Location</small><strong>{project.location}</strong></div>
                <div><small>DAASK Involvement</small><strong>{project.role}</strong></div>
              </div>
              <p className="case-summary">{project.summary}</p>
              <div className="case-focus"><h3>Project focus</h3><ul>{project.focus.map((item) => <li key={item}>{item}</li>)}</ul></div>
              <div className="case-result"><small>Project outcome</small><strong>{project.result}</strong></div>
            </div>
          </article>
        ))}
      </section>

      <ContactBand title="Have a project that needs the same level of care?" />
      <SiteFooter />
    </main>
  );
}
