import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../site-components";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: "Contact DAASK Build Ltd",
  description: "Call or email DAASK Build Ltd about a construction project in Ballyshannon, Co. Donegal.",
};

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="Contact DAASK Build"
        title="Let's discuss your project."
        lead="Tell us what you are planning and we will help you identify the practical next step."
      />

      <section className="contact-page section">
        <div className="contact-primary">
          <p className="eyebrow dark"><span /> Contact directly</p>
          <a href="tel:+353871133528">087 113 3528</a>
          <a className="contact-primary-email" href="mailto:daaskbuild@gmail.com">daaskbuild@gmail.com</a>
          <p>Speak with Dermott about your building, renovation, energy upgrade or project-management requirements.</p>
        </div>
        <div className="contact-facts">
          <div><small>Address</small><strong>The Mall<br />Ballyshannon<br />Co. Donegal</strong></div>
          <div><small>Service area</small><strong>Donegal &amp;<br />surrounding areas</strong></div>
          <div><small>Assurance</small><strong>Registered contractor<br />Fully insured</strong></div>
          <div><small>Experience</small><strong>25 years in construction<br />&amp; project management</strong></div>
        </div>
      </section>

      <section className="contact-form-section section" aria-labelledby="enquiry-title">
        <div className="form-intro">
          <p className="eyebrow dark"><span /> Email enquiry</p>
          <h2 id="enquiry-title">Send the project details when it suits you.</h2>
          <p>A short outline helps us understand the property, the work and the best next step before we speak.</p>
        </div>
        <ContactForm />
      </section>

      <section className="map-section" aria-labelledby="map-title">
        <div className="map-copy">
          <p className="eyebrow"><span /> Our location</p>
          <h2 id="map-title">Based in Ballyshannon.</h2>
          <p>The Mall<br />Ballyshannon<br />Co. Donegal</p>
          <a className="button button-light" href="https://www.google.com/maps/search/?api=1&query=The%20Mall%2C%20Ballyshannon%2C%20Co.%20Donegal" target="_blank" rel="noreferrer">Open directions</a>
        </div>
        <div className="map-frame">
          <iframe
            title="Map showing The Mall, Ballyshannon, Co. Donegal"
            src="https://www.google.com/maps?q=The%20Mall%2C%20Ballyshannon%2C%20Co.%20Donegal&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>

      <section className="contact-choice">
        <div><p className="eyebrow"><span /> Before you get in touch</p><h2>Useful details to have ready.</h2></div>
        <ul><li>The property or site location</li><li>The type of work you are considering</li><li>Your preferred timescale</li><li>Any drawings or planning information available</li></ul>
      </section>
      <SiteFooter />
    </main>
  );
}
