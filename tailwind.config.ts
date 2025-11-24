import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.svg"
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#05060e",
        aurora: "#38f8d1",
        starlight: "#b884ff",
        reality: "#ff6f61",
        soul: "#ffd54f"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        display: ["Space Grotesk", "ui-sans-serif", "system-ui"]
      },
      backgroundImage: {
        "grid-radial": "radial-gradient(circle at 20% 20%, rgba(56, 248, 209, 0.15), transparent 60%), radial-gradient(circle at 80% 30%, rgba(184, 132, 255, 0.2), transparent 55%)",
        "nebula": "linear-gradient(130deg, rgba(5,6,14,0.95), rgba(27,20,64,0.95)), radial-gradient(circle at top, rgba(184,132,255,0.25), transparent 60%)"
      },
      boxShadow: {
        glow: "0 0 30px rgba(56, 248, 209, 0.35)",
        "glow-soft": "0 0 50px rgba(184, 132, 255, 0.25)"
      }
    }
  },
  plugins: [],
};

export default config;
