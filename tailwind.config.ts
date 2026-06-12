import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        bg: { DEFAULT: "var(--bg)", soft: "var(--bg-soft)" },
        surface: { DEFAULT: "var(--surface)" },
        text: {
          DEFAULT: "var(--text)",
          mute: "var(--text-mute)",
          subtle: "var(--text-subtle)",
          faint: "var(--text-faint)",
        },
        primary: { DEFAULT: "var(--primary)", fg: "var(--primary-fg)" },
        secondary: { DEFAULT: "var(--secondary)", fg: "var(--secondary-fg)" },
        accent: { DEFAULT: "var(--accent)" },
        success: "var(--success)",
        warning: "var(--warning)",
        danger: "var(--danger)",
      },
      backgroundImage: {
        "hero-mesh":
          "radial-gradient(120% 120% at 50% 0%, rgba(124,58,237,0.28) 0%, rgba(6,182,212,0.12) 50%, rgba(15,23,42,0.6) 100%), radial-gradient(160% 120% at 0% 80%, rgba(163,230,53,0.12), transparent)",
      },
      boxShadow: {
        "floating-card": "0 25px 60px -20px rgba(15,23,42,0.55)",
        "glass-card": "0 12px 32px rgba(8,15,30,0.45)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [animate],
};

export default config;
