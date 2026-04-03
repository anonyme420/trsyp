import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          400: "#00e5c8",
          500: "#00c9b1",
        },
        pink: {
          500: "#ff2d8a",
          400: "#ff5fa8",
        },
        dark: {
          900: "#050505",
          800: "#0a0a0a",
          700: "#111111",
          600: "#1a1a1a",
        },
        teal: {
          accent: "#00e5c8",
        },
      },
      fontFamily: {
        display: ["'Orbitron'", "monospace"],
        body: ["'Rajdhani'", "sans-serif"],
        mono: ["'Share Tech Mono'", "monospace"],
      },
      animation: {
        "pulse-cyan": "pulse-cyan 2s ease-in-out infinite",
        "countdown-glow": "countdown-glow 1s ease-in-out infinite alternate",
        "fade-up": "fade-up 0.8s ease forwards",
        "slide-in-left": "slide-in-left 0.8s ease forwards",
      },
      keyframes: {
        "pulse-cyan": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "countdown-glow": {
          from: { textShadow: "0 0 10px #00e5c8, 0 0 20px #00e5c8" },
          to: { textShadow: "0 0 20px #00e5c8, 0 0 40px #00e5c8, 0 0 60px #00e5c8" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          from: { opacity: "0", transform: "translateX(-40px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
