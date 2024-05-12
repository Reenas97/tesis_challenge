import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-blue': '#211c64',
        'second-blue': '#98bcf8',
        'third-blue': '#f4f8fc',
        'fourth-blue': '#f0f6fe',
        'fifth-blue': '#4238c9',
        'sixth-blue': '#211c65',
        'primary-gray': '#d9d9d9',
        'second-gray': '#f0f0f0',
      },     
    },
  },
  plugins: [],
};
export default config;
