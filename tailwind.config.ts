import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "20px",
        md: "32px",
        xl: "24px",
      },
    },
    extend: {
      gridTemplateColumns: {
        hero: "1fr 230px",
        "hero-xl": "1fr 294px",
        "section-xl": "50% repeat(1, 1fr)",
      },
      backgroundImage: {
        "gradient-section":
          "linear-gradient(rgba(0, 24, 38, 1), rgba(0, 37, 49, 0))",
      },
      backgroundColor: {
        "modal-background": "rgba(var(--color-modal-bg) / .75)",
        "input-background": "rgba(var(--color-input-bg) / .05)",
      },
      color: {
        "input-placeholder": "rgba(var(--color-input-placeholder) / .2)",
      },
      fontSize: {
        "4xl-accent": [
          "2.5rem",
          {
            lineHeight: "3.5rem",
            letterSpacing: "-0.04em",
            fontWeight: "500",
          },
        ],
        "4xl-secondary": [
          "2.5rem",
          {
            lineHeight: "3.5rem",
            letterSpacing: "-0.04em",
            fontWeight: "100",
          },
        ],
        "5xl-accent": [
          "4.25rem",
          {
            lineHeight: "5.125rem",
            letterSpacing: "-0.04em",
            fontWeight: "500",
          },
        ],
        "5xl-secondary": [
          "4.25rem",
          {
            lineHeight: "5.125rem",
            letterSpacing: "-0.04em",
            fontWeight: "100",
          },
        ],
        "6xl-accent": [
          "6.125rem",
          {
            lineHeight: "7.375rem",
            letterSpacing: "-0.04em",
            fontWeight: "500",
          },
        ],
        "6xl-secondary": [
          "6.125rem",
          {
            lineHeight: "7.375rem",
            letterSpacing: "-0.04em",
            fontWeight: "100",
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
