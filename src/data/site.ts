export const contact = {
  email: "info@carion.ca",
  phone: "604.940.6913",
  fax: "604.940.6914",
  address: "118–7441 Vantage Way — Delta, BC V4G 1C9",
  region: "Delta, BC / Lower Mainland",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Careers", href: "#why-carion" },
  { label: "Contacts", href: "#contact" },
];

export const footerNav = [
  {
    title: "Company",
    links: [
      { label: "About Carion", href: "#about" },
      { label: "Why Carion", href: "#why-carion" },
      { label: "History", href: "#history" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Projects",
    links: [
      { label: "All Projects", href: "#projects" },
      { label: "Residential", href: "#projects" },
      { label: "Commercial", href: "#projects" },
    ],
  },
  {
    title: "Careers",
    links: [
      { label: "Join Our Team", href: `mailto:${contact.email}?subject=Careers` },
      { label: "Current Opportunities", href: `mailto:${contact.email}?subject=Opportunities` },
      { label: "Benefits", href: "#why-carion" },
      { label: "Commitment to Safety", href: "#why-carion" },
    ],
  },
];
