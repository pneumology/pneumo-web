import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderRadius: {
      none: "0",
      DEFAULT: "10px",
      full: "9999px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        DEFAULT: "#0F1222",
        transparent: "transparent",
        current: "currentColor",
        white: "#FFF",
        blue: "#0E61A8",
        black: "#0F1222",
        grey: "#84808D",
        lightGrey: "#E4E4EB",
        light: "#F7F7F8",
      },
    },
  },
  plugins: [],
};
export default config;
