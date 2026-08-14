export type Service = {
  number: string;
  slug: string;
  title: string;
  short: string;
  intro: string;
  overview: string;
  scope: string[];
  outcomes: string[];
};

export const services: Service[] = [
  {
    number: "01",
    slug: "new-builds",
    title: "New Builds",
    short: "Domestic and commercial buildings delivered with rigorous planning, quality workmanship and clear communication.",
    intro: "Purpose-built spaces, carefully managed from first plans to final handover.",
    overview: "DAASK Build delivers domestic and commercial new-build projects with engineering-led coordination and a practical focus on performance, buildability and finish. We bring the programme, trades and quality requirements together under experienced project management.",
    scope: ["Domestic homes", "Commercial buildings", "Site preparation and coordination", "Construction programme management", "Quality control and handover"],
    outcomes: ["A clear and accountable build process", "Durable, considered workmanship", "One experienced point of coordination"],
  },
  {
    number: "02",
    slug: "extensions-renovations",
    title: "Extensions & Renovations",
    short: "Thoughtful upgrades that add space, performance and lasting value to your property.",
    intro: "Make an existing building work better without losing what makes it valuable.",
    overview: "From a carefully integrated home extension to a full property renovation, we coordinate the old and new with close attention to structure, services, energy performance and finish. The result is a building that feels coherent rather than added-on.",
    scope: ["Home extensions", "Commercial refurbishments", "Internal reconfiguration", "Fabric and energy upgrades", "Structural and services coordination"],
    outcomes: ["More useful space", "Improved comfort and performance", "A finish that belongs with the original building"],
  },
  {
    number: "03",
    slug: "renewable-energy-systems",
    title: "Renewable Energy Systems",
    short: "Practical energy solutions designed around the needs and performance of your building.",
    intro: "Energy improvements planned as part of the building, not as an afterthought.",
    overview: "As an SEAI Registered Contractor, DAASK Build supports renewable and energy-upgrade works with the construction knowledge needed to integrate systems correctly. We consider the complete building so improvements work together in practice.",
    scope: ["Energy-upgrade coordination", "Renewable system integration", "Building-fabric improvements", "Airtightness and insulation works", "SEAI-related contractor works"],
    outcomes: ["Lower energy demand", "Better year-round comfort", "Coordinated building and system performance"],
  },
  {
    number: "04",
    slug: "passive-buildings",
    title: "Passive Buildings",
    short: "High-performance construction focused on comfort, airtightness and lower energy demand.",
    intro: "High-performance buildings shaped by precision at every junction and detail.",
    overview: "Passive construction depends on disciplined execution. We coordinate the envelope, insulation, airtightness and building services with a careful eye on continuity and workmanship, helping design intent become real-world performance.",
    scope: ["High-performance new builds", "Airtight construction", "Thermal-bridge detailing", "Insulation continuity", "Services and envelope coordination"],
    outcomes: ["Stable indoor comfort", "Reduced heat loss", "Construction aligned with performance targets"],
  },
  {
    number: "05",
    slug: "heritage-buildings",
    title: "Heritage Buildings",
    short: "Careful conservation and improvement of traditional buildings, respecting their original character.",
    intro: "Respect for original character, supported by practical construction expertise.",
    overview: "Traditional and heritage buildings need informed decisions, compatible materials and patient workmanship. DAASK Build approaches repair and improvement with respect for the existing fabric while coordinating the requirements of a safe, useful modern building.",
    scope: ["Sensitive repair and renovation", "Traditional building fabric", "Careful structural works", "Compatible upgrades", "Specialist trade coordination"],
    outcomes: ["Character retained", "Essential defects addressed", "A building prepared for continued use"],
  },
  {
    number: "06",
    slug: "project-management",
    title: "Project Management",
    short: "Experienced coordination of people, programmes, budgets and quality from planning to handover.",
    intro: "Clear leadership for complex construction programmes and multidisciplinary teams.",
    overview: "With 25 years of construction and project-management experience, DAASK Build provides practical oversight from early planning through delivery. We keep scope, sequencing, communication and quality visible so decisions are made at the right time.",
    scope: ["Programme planning", "Trade and supplier coordination", "Site progress oversight", "Quality and risk management", "Handover coordination"],
    outcomes: ["Clear lines of responsibility", "Better-informed decisions", "Controlled delivery from start to finish"],
  },
  {
    number: "07",
    slug: "meica-rebuilds",
    title: "MEICA Rebuilds",
    short: "Structured rebuild and upgrade works with engineering-led coordination across specialist services.",
    intro: "Specialist rebuilds coordinated across mechanical, electrical and process requirements.",
    overview: "MEICA environments demand careful sequencing, communication and control. DAASK Build brings construction and project-management experience to rebuild and upgrade works involving multiple specialist disciplines and operational constraints.",
    scope: ["Rebuild planning", "Civil and building works", "Specialist contractor coordination", "Sequencing around live operations", "Completion and handover management"],
    outcomes: ["Coordinated multidisciplinary delivery", "Reduced interface risk", "A controlled route back to operation"],
  },
  {
    number: "08",
    slug: "plant-hire-services",
    title: "Plant Hire Services",
    short: "Reliable plant and equipment support for construction, groundwork and site operations.",
    intro: "Practical plant support for construction, groundwork and site programmes.",
    overview: "DAASK Build provides plant-hire support for building and site operations in Donegal and surrounding areas. Availability and project requirements can be discussed directly so the right equipment and support are planned for the work.",
    scope: ["Construction plant support", "Groundwork operations", "Site preparation", "Project-specific hire requirements", "Local site coordination"],
    outcomes: ["Suitable support for the task", "Straightforward local coordination", "Experience grounded in real construction needs"],
  },
];

export const standards = ["Registered Building Contractor", "SEAI Registered Contractor", "All works fully insured"];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
