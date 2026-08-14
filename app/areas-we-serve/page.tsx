import type { Metadata } from "next";
import { ContactBand, PageHero, SiteFooter, SiteHeader } from "../site-components";

export const metadata: Metadata = {
  title: "Areas We Serve | DAASK Build Ltd",
  description: "DAASK Build is based in Ballyshannon and serves construction clients across Donegal and surrounding areas.",
};

export default function AreasPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="Areas we serve"
        title="Based in Ballyshannon. Building across Donegal and surrounding areas."
        lead="DAASK Build supports domestic, commercial and specialist construction projects throughout the local area."
      />
      <section className="area-section section">
        <div><p className="eyebrow dark"><span /> Local knowledge</p><h2>Practical coordination starts with understanding the place.</h2></div>
        <div>
          <p>Location affects access, logistics, weather exposure, materials, labour coordination and programme planning. Being based in Ballyshannon gives DAASK Build a practical base for work throughout Donegal and nearby areas.</p>
          <div className="area-facts">
            <div><small>Base</small><strong>Ballyshannon<br />Co. Donegal</strong></div>
            <div><small>Core area</small><strong>Donegal &amp;<br />surrounding areas</strong></div>
            <div><small>Projects</small><strong>Domestic, commercial<br />&amp; specialist</strong></div>
          </div>
        </div>
      </section>
      <section className="location-callout"><strong>Not sure whether your site is within range?</strong><p>Call 087 113 3528 with the project location and a short outline of the work.</p></section>
      <ContactBand />
      <SiteFooter />
    </main>
  );
}
