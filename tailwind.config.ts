import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // use color variables please
    // colors
    colors: {
      positive: "var(--positive)",
      transparent: "var(--transparent)",
      white: { 15: "var(--white-15)", DEFAULT: "var(--white)" },
      black: {
        50: "var(--black-50)",
        80: "var(--black-80)",
        DEFAULT: "var(--black)",
      },
    },
    // gradient colors
    backgroundImage: {
      "gradient-primary": "var(--gradient-primary)",
      "gradient-primary-light": "var(--gradient-primary-light)",
      "gradient-secondary": "var(--gradient-secondary)",
      "gradient-secondary-light": "var(--gradient-secondary-light)",
      "gradient-positive": "var(--gradient-positive)",
    },
  },
  plugins: [],
};
export default config;
