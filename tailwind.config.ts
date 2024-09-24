import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-gradient-blue": "linear-gradient(90deg, #F1F6FF, #CEDCFF)",
        "custom-gradient-green": "linear-gradient(90deg, #F7FFEE, #E1FFBD)",
      },
      fontFamily: {
        title: ["Open Sans"],
      },
    },
  },
  plugins: [],
};
export default config;
