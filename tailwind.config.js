import withMT from "@material-tailwind/react/utils/withMT";
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
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
      },
    },
    screens: {
      'sm': { 'min': '576px' },
      'md': { 'min': '767px' },
      'lg': { 'min': '1024px' },
      'xl': { 'min': '1200px' },
    }
  },
  plugins: [],
});