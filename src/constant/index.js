// exorts constants so easier to map over

import {
  cpp,
  css,
  docker,
  express,
  git,
  github,
  html,
  java,
  javascript,
  jest,
  mongodb,
  mocha,
  nextjs,
  nodejs,
  python,
  react,
  tailwind,
  vite,
  racket,
  ai,
  website,
  gpu,
  riot,
  discord,
  budget,
  tennis,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: racket,
    name: "Racket",
    type: "Backend",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: vite,
    name: "Vite",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: tailwind,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: cpp,
    name: "C++",
    type: "Backend",
  },
  {
    imageUrl: java,
    name: "Java",
    type: "Backend",
  },
  {
    imageUrl: mocha,
    name: "Mocha",
    type: "DevOps",
  },
  {
    imageUrl: jest,
    name: "Jest",
    type: "DevOps",
  },
  {
    imageUrl: docker,
    name: "Docker",
    type: "DevOps",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Fullstack",
  },
];
export const projects = [
  {
    title: "AI Code Tutor",
    techstacks: "AI Powered Code Comprehension Tool",
    icon: ai,
    iconBg: "#5efff7",
    date: "July 2024 - Present",
    points: [
      "Developed using Ollama, Mistral LLM, Node.js, Express, React, Clerk, MongoDB.",
      "Used Mistral LLM to interpret user descriptions of code snippets to generate executable code to test user knowledge of code.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Implemented code sandboxing to ensure the secure execution of user-submitted code within a controlled environment",
    ],
    link: "https://github.com/jeffreyzhai123/psychic-octo-doodle",
  },
  {
    title: "andy-chen.net",
    techstacks: "Personal Portfolio Website (This Website)",
    icon: website,
    iconBg: "#c45eff",
    date: "July 2024",
    points: [
      "Developed using Node.js, React, ThreeJS, GSAP, Lenis, TailwindCSS, React Fiber.",
      "Created a fully mobile-dynamic, user-interactive porfolio.",
      "Learned multiple ways to use React Fiber to animate cameras as well as models.",
    ],
    link: "https://github.com/AndyC2513/andy-chen.io",
  },
  {
    title: "PC Parts Scraper",
    techstacks: "Python Web Scraper",
    icon: gpu,
    iconBg: "#ffff5e",
    date: "Feb 2024",
    points: [
      "Developed using Python3, Beautiful Soup, and Pandas.",
      "Created an user-interactive PC Parts Scraper.",
      "Wrangled scraped data into a more readable table sorted using Pandas and Beautiful Soup.",
    ],
    link: "https://github.com/AndyC2513/PC-Web-Scraper",
  },
  {
    title: "My League Stats",
    techstacks: "League of Legends Statistics Tracker Made with React.js",
    icon: riot,
    iconBg: "#ff7878",
    date: "Jan 2024",
    points: [
      "Developed using React, Jest, Axios, Cors, Express, MongoDB, Mongoose, Morgan, Nodemon.",
      "Working in a team of three, loaded and wrangled data obtained from Riot’s Data Dragon using MongoDB.",
      "Established full-stack functionality within 24-hours of development for the NWHacks 2024 Hackathon.",
      "Using routers, controllers, and services, modularized and implemented backend code.",
    ],
    link: "https://github.com/joshhzheng/MyLeagueStats",
  },
  {
    title: "Discord Music Bot",
    techstacks: "Discord Music Media Bot Made with Java",
    icon: discord,
    iconBg: "#697dff",
    date: "Dec 2023",
    points: [
      "Developed using Java, JDA, LavaPlayer.",
      "Provide music audio in discord voice channels as well as some server moderator tools.",
      "Utilized Apache Maven to handle dependencies and used Git to document changes.",
    ],
    link: "https://github.com/AndyC2513/java-discord-music-bot",
  },
  {
    title: "Budget Tracker",
    techstacks: "Budget Tracking App Made with Java",
    icon: budget,
    iconBg: "#5eff64",
    date: "Nov 2023 - Dec 2023",
    points: [
      "Developed using Java, jUnit, Java Swing.",
      "Designed and built a full stack application that generates and limits budgets from user-inputted data.",
      "Used JUnit to test and debug realistic use cases.",
      "Used Java Swing library to create an user-friendly front-end UI.",
    ],
    link: "https://github.com/AndyC2513/budget-tracker",
  },
  {
    title: "Tennis Prediction Model",
    techstacks:
      "Predicting Player's Rank in ATP Ranking using R and Jupyter Notebook",
    icon: tennis,
    iconBg: "#ff4a4a",
    date: "April 2023 - May 2023",
    points: [
      "Developed using infer, tidyverse, dbplyr.",
      "Working with four colleagues, wrangled and analyzed a dataset using R.",
      "Closely documented the entire process in Jupyter Notebook.",
      "Provided detailed rationale as well as effective matrices and tables that accurately represent our findings.",
    ],
    link: "https://github.com/tranghane/DSCI100_105_group_project_v2/tree/main",
  },
];
