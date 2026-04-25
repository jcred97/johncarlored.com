export const hero = {
  heading: {
    intro: "Hey! I'm",
    name: "John Carlo Red",
  },
  role: "Salesforce Developer",
  location: {
    city: "Antipolo",
    country: "Philippines",
    countryCode: "PH",
  },
  details: [
    "I build Salesforce automations and solutions that make real workflows faster, cleaner, and easier to use.",
    "Seeing code and automations I build help people and businesses is what keeps me building.",
  ],
  image: {
    src: "/images/profile/john-carlo-red-hero-portrait-v2.jpg",
    alt: "John Carlo Red",
    width: 1149,
    height: 1368,
  },
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/jcred97",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jcdred/",
    },
    {
      label: "Email",
      href: "mailto:john.carlo.d.red@gmail.com",
    },
  ],
  workedWith: {
    label: "Worked With",
    companies: [
      {
        name: "Kulturra",
        logo: "/images/worked-with/kulturra.png",
        width: 200,
        height: 200,
      },
      {
        name: "Quantrics",
        logo: "/images/worked-with/quantrics_white2.png",
        width: 508,
        height: 485,
      },
      {
        name: "Cloudstaff",
        logo: "/images/worked-with/cloudstaff_white.png",
        width: 1448,
        height: 1420,
      },
      {
        name: "Accenture",
        logo: "/images/worked-with/accenture_white.png",
        width: 2000,
        height: 1125,
      },
      {
        name: "EEI Corporation",
        logo: "/images/worked-with/eei.png",
        width: 210,
        height: 240,
      },
    ],
  },
  primaryAction: {
    label: "View projects",
    href: "/projects",
  },
  secondaryAction: {
    label: "View resume",
    href: "/John-Carlo-Red-resume.pdf",
  },
} as const;
