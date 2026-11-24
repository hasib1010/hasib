// Figma website concepts. The brands on these boards are invented.
// They are design studies, not client launches.

export const designConcepts = [
  {
    id: "corvane",
    title: "Corvane",
    kind: "Infrastructure advisory",
    summary: "A corporate site on a strict grid, with a desktop layout and a rebuilt mobile version.",
    image: "/work/design/corvane.webp",
  },
  {
    id: "ines",
    title: "Ines Marlowe",
    kind: "Portfolio",
    summary: "A one-page portfolio and résumé concept for a product designer, including a phone layout.",
    image: "/work/design/ines.webp",
  },
  {
    id: "kitefin",
    title: "Kitefin",
    kind: "Sales funnel",
    summary: "A landing page for an invoicing app, stepped from the hook to the pricing close.",
    image: "/work/design/kitefin.webp",
  },
  {
    id: "fieldwork",
    title: "Fieldwork",
    kind: "Agency site",
    summary: "A dark agency homepage concept, set up to show work and start a project.",
    image: "/work/design/fieldwork.webp",
  },
  {
    id: "vellum",
    title: "Vellum",
    kind: "E-commerce",
    summary: "A fashion and lifestyle shop concept, with product, collection and review screens.",
    image: "/work/design/vellum.webp",
  },
  {
    id: "maree",
    title: "Marée",
    kind: "Restaurant",
    summary: "An editorial site for a coastal kitchen, with the menu and booking on mobile.",
    image: "/work/design/maree.webp",
  },
] as const;

export type DesignConcept = (typeof designConcepts)[number];
