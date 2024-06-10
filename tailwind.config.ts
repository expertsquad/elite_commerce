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
      white: {
        transparent: "var(--white-transparent)",
        15: "var(--white-15)",
        DEFAULT: "var(--white)",
      },
      black: {
        transparent: "var(--black-transparent)",
        10: "var(--black-10)",
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
    // z index
    zIndex: {
      "-1": "-1",
      0: "0",
      1: "1",
      10: "10",
      20: "20",
      50: "50",
    },

    extend: {
      aspectRatio: {
        "3/4": "3/4",
        "4/5": "4/5",
        "3/7": "3/7",
      },
      gridTemplateColumns: {
        "product-grid": "repeat(auto-fill, minmax(280px,1fr))",
        "brand-card-grid": "repeat(auto-fill, minmax(250px,1fr))",
      },
    },
  },
  plugins: [],
};
export default config;
