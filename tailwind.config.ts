import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#F5EFE0",
        terracotta: "#C4845A",
        gold: "#C9A96E",
        "text-primary": "#4A3828",
        "text-secondary": "#8A7B6E",
        "blue-detail": "#B8CDD8",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)"],
        sans: ["var(--font-lato)"],
      },
      boxShadow: {
        'watercolor': '0 8px 40px rgba(196, 132, 90, 0.12)',
      }
    },
  },
  plugins: [],
};
export default config;
