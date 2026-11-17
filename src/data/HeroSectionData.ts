export type HeroSlide = {
  id: string;
  title: string;
  text: string;
  name: string;
  size: string;
  city: string;
  year: string;
  image: string;
  alt: string;
  position: string;
};

export const heroSlides: HeroSlide[] = [
  {
    id: "8x-on-the-park",
    title: "Structural excellence",
    text: "Superior concrete formwork for complex structures, delivered on time and on budget.",
    name: "8X on the Park",
    size: "35 storeys",
    city: "Vancouver",
    year: "2020",
    image: "/images/hero.jpg",
    alt: "8X on the Park by Carion Construction",
    position: "object-[60%_center]",
  },
  {
    id: "vancouver-house",
    title: "Structural excellence",
    text: "Carion joined the construction team early, advising on crane selection and site logistics...",
    name: "Vancouver House",
    size: "52 storeys",
    city: "Vancouver",
    year: "2018",
    image: "/images/vancouver-house-detail.jpg",
    alt: "Vancouver House by Carion Construction",
    position: "object-center",
  },
  {
    id: "5050-joyce",
    title: "Structural excellence",
    text: "Built beside Joyce-Collingwood Station, 5050 Joyce contains 256 homes in a 30-storey...",
    name: "5050 Joyce",
    size: "30 storeys",
    city: "Vancouver",
    year: "2020",
    image: "/images/5050-joyce.jpg",
    alt: "5050 Joyce by Carion Construction",
    position: "object-center",
  },
];
