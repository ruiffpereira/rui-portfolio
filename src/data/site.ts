// ---------------------------------------------------------------
// Single source of truth for the site content.
// Edit this file to update your portfolio — components read from here.
// ---------------------------------------------------------------

export const site = {
  name: "Rui Pereira",
  role: "Frontend Developer",
  location: "Porto, Portugal",
  email: "ruiffpereira@outlook.com",
  phone: "+351 913 742 746",
  github: "https://github.com/ruiffpereira",
  githubHandle: "ruiffpereira",
  linkedin: "https://www.linkedin.com/in/ruiffpereiira",
  linkedinHandle: "ruiffpereiira",
  cv: "/Rui-Pereira-CV.pdf",
  tagline:
    "I build and maintain fast, scalable web applications with React, TypeScript and modern JavaScript — turning complex product requirements into interfaces people actually enjoy using.",
};

export const nav = [
  { n: "01", label: "About", href: "#about" },
  { n: "02", label: "Experience", href: "#experience" },
  { n: "03", label: "Stack", href: "#stack" },
  { n: "04", label: "Work", href: "#work" },
  { n: "05", label: "Contact", href: "#contact" },
];

export const marquee = [
  "React", "TypeScript", "Next.js", "Node.js",
  "Tailwind CSS", "SQL", "Docker", "Sass", "Git",
];

export const about = {
  lead:
    "Frontend Developer with <strong>5+ years</strong> of experience shipping web applications across SaaS, education and enterprise — with a strong focus on performance, scalability and the details that make a product feel right.",
  body:
    "I'm comfortable across the full development lifecycle: collaborating with cross-functional teams, contributing to architectural decisions, and modernizing legacy systems. Beyond the frontend I work with Node.js, SQL, Docker and self-hosted infrastructure, which lets me move confidently from interface to backend when a problem calls for it. Right now I'm looking for a remote team where I can keep building scalable products and solving challenging problems.",
  facts: [
    { k: "Based in", v: 'Porto, Portugal <span class="muted">· WET / UTC+0</span>' },
    { k: "Focus", v: 'React · TypeScript · UX <span class="muted">· Performance</span>' },
    { k: "Languages", v: 'Portuguese <span class="muted">native</span> · English <span class="muted">professional</span> · French <span class="muted">basic</span>' },
    { k: "Education", v: 'Escola Profissional de Braga <span class="muted">· 2015–2018</span>' },
  ],
};

export const experience = [
  {
    when: "2025 — Now",
    now: true,
    role: "Frontend Developer",
    company: "Celfocus",
    context: "Vodafone IoT",
    description:
      "Working on Vodafone IoT services, contributing to the modernization of enterprise applications through the migration of legacy JSP solutions to React-based architectures. Developing and maintaining scalable web applications while improving maintainability, performance and user experience, in close collaboration with backend and business teams.",
    tags: ["React", "TypeScript", "Legacy migration", "Enterprise", "IoT"],
  },
  {
    when: "2020 — 2025",
    now: false,
    role: "Frontend Developer",
    company: "Codevision",
    context: "Innovating Education SA",
    description:
      "Developed and maintained web applications for a large educational management platform serving students, teachers, parents and school administrators. Implemented new features, improved performance and contributed to the continuous evolution of the platform using React, JavaScript and modern frontend technologies.",
    tags: ["React", "JavaScript", "SaaS", "Education platform", "Performance"],
  },
];

export const stack = [
  { title: "Languages", items: ["TypeScript", "JavaScript", "HTML", "CSS", "SQL"] },
  { title: "Frameworks", items: ["React", "Next.js", "Node.js"] },
  { title: "Styling", items: ["Tailwind CSS", "Sass / SCSS", "Less", "Bootstrap"] },
  { title: "Tooling", items: ["Git", "Docker", "Self-hosting", "UX Design"] },
];

export const projects = [
  {
    num: "01",
    title: "Tiago Fernandes — Barbershop",
    live: true,
    href: "https://tiagofernandesbarbearia.rufvision.com/",
    description:
      "Website for a barbershop — services, gallery and an easy way for clients to get in touch.",
    tags: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    num: "02",
    title: "Margarida — Nail Artist",
    live: true,
    href: "https://margaridanailartist.rufvision.com/",
    description:
      "Landing site for a nail artist — a clean portfolio gallery with bookings and contact.",
    tags: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    num: "03",
    title: "Winter Plateau",
    live: true,
    href: "https://winterplateau.rufvision.com/",
    description:
      "Brand & landing experience with a bold, atmospheric visual direction.",
    tags: ["Next.js", "React", "Motion"],
  },
  {
    num: "04",
    title: "SaaS Backoffice Platform",
    live: true,
    href: "https://backoffice.rufvision.com",
    description:
      "A business management platform integrated with e-commerce solutions — dashboards, catalog and order management built for scale.",
    tags: ["React", "Next.js", "Node.js", "SQL"],
  },
];
