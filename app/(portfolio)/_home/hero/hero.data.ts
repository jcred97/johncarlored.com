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
  primaryAction: {
    label: "View projects",
    href: "/projects",
  },
  secondaryAction: {
    label: "View resume",
    href: "/John-Carlo-Red-resume.pdf",
  },
} as const;
