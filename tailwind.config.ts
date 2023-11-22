import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "sm-600": "600px",
        "sm-500": "500px",
        "sm-400": "400px",
        "wide-700": "700px",
        "wide-900": "900px",
      },
      colors: {
        green: {
          100: "#043E0D",
          150: "#075012B2",
          200: "#225c2bb5",
          300: "#00682A",
          400: "#002A00",
        },
        orange: {
          100: "#EB6200",
        },
      },
      backgroundImage: {
        gradient:
          "linear-gradient(180deg, rgba(99, 154, 58, 0.67) 0%, rgba(99, 154, 58, 0.00) 81.25%, rgba(255, 255, 255, 0.00) 98.44%)",
      },
    },
  },
  plugins: [],
};
export default config;
