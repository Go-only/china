export type ServiceSlug =
  | "sea-freight"
  | "road-freight"
  | "air-freight"
  | "rail-freight"
  | "multimodal"
  | "white-import"
  | "customs-clearance"
  | "certification"
  | "global-logistics";

export const services: Record<
  ServiceSlug,
  { title: string; subtitle: string }
> = {
  "sea-freight": {
    title: "Sea Freight",
    subtitle: "Reliable ocean shipping worldwide.",
  },
  "road-freight": {
    title: "Road Freight",
    subtitle: "Fast and safe delivery by truck.",
  },
  "air-freight": {
    title: "Air Freight",
    subtitle: "Express delivery by air for urgent cargo.",
  },
  "rail-freight": {
    title: "Rail Freight",
    subtitle: "Cost-effective delivery by rail.",
  },
  multimodal: {
    title: "Multimodal",
    subtitle: "Combined solutions for optimal results.",
  },
  "white-import": {
    title: "White Import",
    subtitle:
      "We work strictly within the legal framework, ensuring safe and transparent deliveries.",
  },
  "customs-clearance": {
    title: "Customs Clearance",
    subtitle: "We handle all customs procedures quickly and efficiently.",
  },
  certification: {
    title: "Certification",
    subtitle: "We help you obtain all necessary certificates for your goods.",
  },
  "global-logistics": {
    title: "Global Logistics",
    subtitle: "Sea, air, road, rail, and multimodal transportation worldwide.",
  },
};

export const LOREM = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.`;
