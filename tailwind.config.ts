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
        ivory: "#F7F3EC",
        maroon: {
          DEFAULT: "#6B1420",
          dark: "#4A0E16",
          light: "#8B1A2A",
        },
        brass: {
          DEFAULT: "#B08D57",
          light: "#C9A96E",
          dark: "#8A6B3A",
        },
        charcoal: {
          DEFAULT: "#1B1512",
          light: "#2C2220",
        },
        hardwood: "#C79A5B",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 10vw, 9rem)", { lineHeight: "0.9", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.5rem, 6vw, 6rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.8rem, 4vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
        "display-sm": ["clamp(1.3rem, 2.5vw, 2rem)", { lineHeight: "1.1" }],
      },
      spacing: {
        "section": "clamp(4rem, 8vw, 8rem)",
      },
      backgroundImage: {
        "grain": "url('/images/grain.png')",
        "court-lines": "url('/images/court-lines.svg')",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "count-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "clip-reveal": {
          "0%": { clipPath: "inset(0 100% 0 0)" },
          "100%": { clipPath: "inset(0 0% 0 0)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-slow": "marquee 50s linear infinite",
      },
      gridTemplateColumns: {
        "7-5": "7fr 5fr",
        "5-7": "5fr 7fr",
        "8-4": "8fr 4fr",
      },
    },
  },
  plugins: [],
};

export default config;
