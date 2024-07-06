// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config.mjs";

export const SITE_TITLE = "Kevin Zid";
export const SITE_DESCRIPTION = "Welcome to my adventure!";
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
export const dummyReviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const config = () => resolveConfig(tailwindConfig).theme;
export const tConf = config();

export const getColorByCategory = (category: string) => {
  switch (category) {
    case "Javascript":
      return tConf.colors.yellow[400];
    case "React": 
      return tConf.colors.blue[400];
    case "Node.js":
      return tConf.colors.green[400];
    case "TypeScript":
      return tConf.colors.blue[400];
    case "CSS":
      return tConf.colors.blue[400];
    case "HTML":
      return tConf.colors.blue[400];
    case "Astro":
      return tConf.colors.blue[400];
    case "TailwindCSS":
      return tConf.colors.blue[400];
    case "Next.js":
      return tConf.colors.blue[400];
    case "PostgreSQL":
      return tConf.colors.green[400];
    case "GraphQL":
      return tConf.colors.purple[400];
    case "AWS":
      return tConf.colors.yellow[400];
    case "Firebase":
      return tConf.colors.yellow[400];
    case "Vercel":
      return tConf.colors.blue[400];
    case "Git":
      return tConf.colors.red[400];
    case "GitHub":
      return tConf.colors.blue[400];
    case "Webpack":
      return tConf.colors.blue[400];
    case "Babel":
      return tConf.colors.yellow[400];
    case "ESLint":
      return tConf.colors.purple[400];
    case "Prettier":
      return tConf.colors.blue[400];
    case "EditorConfig":
      return tConf.colors.blue[400];
    case "VSCode":
      return tConf.colors.blue[400];
    case "Vim":
      return tConf.colors.green[400];
    case "Sublime Text":
      return tConf.colors.yellow[400];
    case "WebStorm":
      return tConf.colors.blue[400];
    case "IntelliJ IDEA":
      return tConf.colors.blue[400];
    case "Travel":
      return tConf.colors.green[400];
    case "Food":
      return tConf.colors.yellow[400];
    case "Sport":
      return tConf.colors.blue[400];
    case "Animals":
      return tConf.colors.green[400];
    case "Mangas & Animes":
      return tConf.colors.purple[400];
    default:
      return tConf.colors.gray[400];
  }
};
