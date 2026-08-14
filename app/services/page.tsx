import type { Metadata } from "next";
import { ContactBand, PageHero, ServiceGrid, SiteFooter, SiteHeader } from "../site-components";

export const metadata: Metadata = {
  title: "Construction Services | DAASK Build Ltd",
  description: "Explore DAASK Build services across new builds, renovations, renewables, passive and heritage buildings, project management, MEICA and plant hire.",
};

export default function ServicesPage() {
  return <main><SiteHeader /><PageHero eyebrow="Construction services" title="One team. Every stage of the build." lead="Construction, specialist upgrades and experienced project coordination across Donegal and surrounding areas." /><section className="section inner-services"><div className="section-heading"><div><p className="eyebrow dark"><span /> Our capabilities</p><h2>Choose a service to learn more.</h2></div><p>Each project starts with a practical conversation about the building, the site and the result you need.</p></div><ServiceGrid /></section><ContactBand /><SiteFooter /></main>;
}
