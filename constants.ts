export const frontEndTech = [
  "HTML5",
  "CSS3",
  "Tailwind",
  "Styled Components",
  "JavaScript",
  "jQuery",
  "React",
  "Redux",
  "Next.js",
  "TypeScript",
] as const;

export const backEndTech = [
  "Node/Express.js",
  "MySQL",
  "PostgreSQL",
  "Prisma",
  "GraphQL/Apollo",
  "Postman",
] as const;

export const otherTech = [
  "Git/Terminal",
  "Agile Development",
  "DSA",
  "CI/CD",
  "GitHub Actions",
  "Google Analytics",
  "Contentful",
  "Unit Testing",
  "Docker",
  "Azure",
] as const;

export const navigationLinks = [
  { href: "#home", label: "home", number: "01" },
  { href: "#about", label: "about", number: "02" },
  { href: "#experience", label: "experience", number: "03" },
  { href: "#projects", label: "projects", number: "04" },
  { href: "#contact", label: "contact", number: "05" },
] as const;

export const workExperience = [
  {
    title: "Software Engineer",
    company: "Tide Services, a P&G company",
    date: "Jan 2022 - Present",
    description: [
      "Led the architecture, design, and development of two full-stack applications using NextJS, Nodejs, Typescript, and Tailwind.",
      "Oversaw the health of the system, addressed performance issues, and enhanced application efficiency by employing techniques on both the server and client sides, resulting in a 25% reduction in server response time and a 20% improvement in client-side load times.",
      "Collaborated with product and design team to implement user-centric features, boosting user engagement by 30%.",
      "Developed unit and automation tests, achieving 90% code coverage to ensure high-quality software solutions.",
      "Maintained an ASP.NET core product while debugging and resolving client and server issues.",
    ],
  },
  {
    title: "ICU Nurse",
    company: "Wellstar Hospital",
    date: "2019 - 2021",
  },
  {
    title: "Oncology Nurse",
    company: "Northside Hospital",
    date: "2015 - 2020",
  },
];

export const education = [
  {
    school: "Graceland University",
    degree: "Bachelor of Science in Nursing",
    graduation: "2014",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/8a/Graceland_University_shield.svg",
  },
  {
    school: "Georgia Institute of Technology",
    degree: "Full-Stack Web Development Certificate",
    graduation: "2021",
    logoUrl:
      "https://brand.gatech.edu/sites/default/files/inline-images/GTVertical_RGB.png",
  },
  {
    school: "Microsoft",
    degree: "MS Certified: Azure Fundamentals",
    graduation: "2024",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",
  },
  {
    school: "Microsoft",
    degree: "MS Certified: Azure AI Fundamentals",
    graduation: "2025",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",
  },
] as const;

export const projects = [
  {
    title: "RoastTime",
    description: "A full-stack application that reserves coffee shop table.",
    tags: [
      "Tailwind",
      "Javascript",
      "Typescript",
      "React",
      "Nextjs",
      "Jest",
      "JWT",
      "Node",
      "Postgres",
      "Prisma",
      "GA",
      "Contentful",
    ],
    image: "/images/roast-time.png?height=300&width=400",
    link: "https://roast-time.vercel.app/",
    frontendGithub: "https://github.com/natnaelh14/roast-time",
    backendGithub: "https://github.com/natnaelh14/roast-time-backend",
  },
  {
    title: "Crypto Connect",
    description:
      "A full-stack social media application based on cryptocurrency.",
    tags: [
      "Typescript",
      "React",
      "Redux",
      "NodeJS",
      "Graphql",
      "MySQL",
      "Firebase",
      "Docker",
      "Github Actions",
    ],
    image: "/images/crypto-connect.png?height=300&width=400",
    link: "https://social-media-app-six-blond.vercel.app",
    frontendGithub: "https://github.com/natnaelh14/social-media-app",
    backendGithub: "https://github.com/natnaelh14/social-media-api",
  },
];
