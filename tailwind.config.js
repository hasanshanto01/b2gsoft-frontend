/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "default-color": "#f4f8ff",
        "primary-600": "#7e53d4",
        "gray1-color": "#646464",
        "violet1-color": "#581fc1",
        "primary-black": "#1d1d1d",
        "common-white": "#ffffff",
      },
    },
  },
  plugins: [],
};
