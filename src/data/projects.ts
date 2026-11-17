export type Project = {
  slug: string;
  name: string;
  shortName?: string;
  year: string;
  city: string;
  category: string;
  image: string;
  detail: string;
  meta: string;
  award?: string;
  description: string;
  specs: [label: string, value: string][];
};

export const projects: Project[] = [
  {
    slug: "vancouver-house",
    name: "Vancouver House",
    year: "2018",
    city: "Vancouver",
    category: "Mixed-use / 52 storeys",
    image: "/images/vancouver-house.jpg",
    detail: "/images/vancouver-house-detail.jpg",
    meta: "Mixed use / Vancouver, BC / 2018*",
    award: "Silver Award of Excellence",
    description:
      "Carion joined the construction team early, advising on crane selection and site logistics for a structure unlike anything else in the local market. The tower begins as a triangle at Level 9, expands floor by floor, and reaches a typical rectangular floor plate at Level 46.",
    specs: [
      ["Developer", "Westbank Corporation"],
      ["Contractor", "ICON West Construction"],
      ["Carion Scope", "Completed October 2018*"],
      ["Structure", "52 storeys / 7-level parkade"],
      ["Project Note", "27 months from raft slab to roof / Completed on schedule"],
    ],
  },
  {
    slug: "8x-on-the-park",
    name: "8X on the Park",
    year: "2020",
    city: "Vancouver",
    category: "Residential / 35 storeys",
    image: "/images/8x-on-the-park.jpg",
    detail: "/images/8x-on-the-park-detail.jpg",
    meta: "Residential / Vancouver, BC / 2020",
    description:
      "At 1111 Richards Street, 8X on the Park rises 35 storeys over Yaletown. The building changes form in eight-storey bands, while its Richards Street elevation is defined by a distinctive X-patterned solar-shading system. The project contains 191 homes above a nine-level parkade.",
    specs: [
      ["Developer", "Brenhill Developments"],
      ["Contractor", "Ledcor"],
      ["Carion Scope", "Completed in 2020"],
      ["Structure", "35 storeys / 9-level parkade"],
      ["Project Size", "191 residences"],
    ],
  },
  {
    slug: "5050-joyce",
    name: "5050 Joyce",
    year: "2020",
    city: "Vancouver",
    category: "Residential / 30 storeys",
    image: "/images/5050-joyce.jpg",
    detail: "/images/5050-joyce-detail.jpg",
    meta: "Residential / Vancouver, BC / 2025",
    description:
      "Built beside Joyce-Collingwood Station, 5050 Joyce contains 256 homes in a 30-storey tower. Its balconies form a quilt-like pattern and trace the outline of Still Creek. Because few floors repeat, the formwork had to adjust as the building rose.",
    specs: [
      ["Developer", "Westbank Corporation"],
      ["Contractor", "ICON West Construction"],
      ["Carion Scope", "Completed in 2020"],
      ["Structure", "30 storeys / 6-level parkade"],
      ["Project Size", "256 residences"],
    ],
  },
  {
    slug: "the-butterfly",
    name: "The Butterfly",
    year: "2025",
    city: "Vancouver",
    category: "Residential / 57 storeys",
    image: "/images/the-butterfly.jpg",
    detail: "/images/the-butterfly-detail.jpg",
    meta: "Residential / Vancouver, BC / 2022*",
    description:
      "Located at Burrard and Nelson, The Butterfly rises beside the First Baptist Church with a form that recalls the pipes of an organ. Two tower cranes were erected in early 2020 as work began on the eight-level parkade and 57-storey residential tower.",
    specs: [
      ["Developer", "Westbank Corporation"],
      ["Contractor", "ICON West Construction"],
      ["Carion Scope", "Completion date to be confirmed"],
      ["Structure", "57 storeys / 8-level parkade"],
      ["Project Size", "Approximately 600,000 sq. ft. overall development"],
    ],
  },
  {
    slug: "audi-vancouver",
    name: "Audi Downtown Vancouver",
    shortName: "Audi Vancouver",
    year: "2014",
    city: "Vancouver",
    category: "Commercial / 56,000 sq. ft.",
    image: "/images/audi-vancouver.jpg",
    detail: "/images/audi-vancouver-detail.jpg",
    meta: "Commercial / Vancouver, BC / 2014",
    description:
      "Located on Burrard Street, Audi Downtown Vancouver is a modern sales and service centre with a clean, sculptural design. Its curved walls, sloped surfaces and angled columns required complex, precise formwork throughout the project.",
    specs: [
      ["Developer", "Dilawri Group of Companies"],
      ["Contractor", "Ledcor"],
      ["Carion Scope", "Completed in 2014"],
      ["Project Type", "Commercial"],
      ["Technical Focus", "Curved formwork / Angled columns / Precision embeds"],
    ],
  },
];
