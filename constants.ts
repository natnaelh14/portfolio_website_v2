export const frontEndTech = [
  "HTML5",
  "CSS3",
  "Tailwind",
  "JavaScript",
  "jQuery",
  "React",
  "Redux",
  "Next.js",
  "TypeScript",
] as const;

export const backEndTech = [
  "Node/Express.js",
  "C#/.NET",
  "Entity Framework",
  "SQL",
  "Redis",
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
  "Kubernetes",
  "Apache Kafka",
  "Azure",
] as const;

export const navigationLinks = [
  { href: "#home", label: "home", number: "01" },
  { href: "#about", label: "about", number: "02" },
  { href: "#experience", label: "experience", number: "03" },
  { href: "#projects", label: "projects", number: "04" },
  { href: "#contact", label: "contact", number: "05" },
];

export const workExperience = [
  {
    title: "Senior Software Engineer",
    company: "Tide Services, a P&G company",
    date: "Jan 2022 - Present",
    description: [
      "Led the architecture, design, and development of two full-stack applications using NextJS, Tailwind, TypeScript, Node.js, Okta, Azure, and Contentful, resulting in two successful product launches that directly contributed to a 40% increase in annual recurring revenue.",
      "Oversaw system health, addressing performance bottlenecks and enhancing application efficiency through targeted server and client-side optimizations, reducing response time by 30% and significantly improving user experience.",
      "Collaborated cross-functionally with product and design teams to implement user-centric features, boosting user engagement by 50% and driving product adoption.",
      "Developed comprehensive unit and automation tests, achieving 90% code coverage to ensure high-quality, reliable software solutions.",
      "Engineered robust RESTful APIs in .NET to power core business features, supporting over 100,000 daily active users with seamless performance.",
      "Managed CI/CD workflows and deployments to Azure environments, automating release processes and ensuring rapid, reliable software delivery.",
      "Mentored junior developers, fostering a culture of knowledge sharing and continuous improvement within the team.",
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
