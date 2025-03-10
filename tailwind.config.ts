import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-dark-blue": "#0F1035",
        "secondary-dark-blue": "#365486",
        "primary-light-blue": "#DCF2F1",
        "secondary-light-blue": "#7FC7D9",
      },
      boxShadow: {
        custom: "0px 3px 3px 0px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
