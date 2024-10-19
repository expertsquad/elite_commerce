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
      primary: {
        light: "var(--primary-light)",
        DEFAULT: "var(--primary)",
      },
      secondary: {
        light: "var(--secondary-light)",
        DEFAULT: "var(--secondary)",
      },
      positive: "var(--positive)",
      danger: "var(--danger)",
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
    aspectRatio: {
      "3/4": "3/4",
      "4/5": "4/5",
      "3/7": "3/7",
    },
    extend: {
      gridTemplateColumns: {
        "product-grid": "repeat(auto-fill, minmax(240px,1fr))",
        "brand-card-grid": "repeat(auto-fill, minmax(250px,1fr))",
        "fav-brand-grid": "repeat(auto-fill, minmax(90px,1fr))",
        "fav-brand-grid-xl": "repeat(auto-fill, minmax(120px,1fr))",
      },
      gridTemplateRows: {
        "product-grid": "repeat(auto-fill, minmax(405px,1fr))",
      },
      boxShadow: {
        "order-history-card-shadow": "0px 4px 16px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
  purge: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  variants: {
    extend: {},
  },
};
export default config;
