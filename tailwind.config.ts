import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "lg": "1440px",
      },
      colors: {
        "dark-purple": "#24053E",
        "eucaplyptus": "#44FFA1",
        "davys-grey": "#584D62",
        "ghost-white": "#FCF8FF"
      },
      fontFamily: {
        manrope: "var(--font-manrope)",
        fraunces: "var(--font-fraunces)",
      },
    },
  },
  plugins: [],
};
export default config;
