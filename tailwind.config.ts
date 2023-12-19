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
        md: "64px",
        xl: "80px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-section":
          "linear-gradient(rgba(0, 24, 38, 1), rgba(0, 37, 49, 0))",
      },
      backgroundColor: {
        "modal-background": "rgba(var(--color-modal-bg) / .75)",
      },
    },
  },
  plugins: [],
};
export default config;
