/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["GeistVF", "sans-serif"],
        secondary: ["GeistMonoVF", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        colorText: "#39FF14",
        colorText1: "#0a0a0a",
        colorText2: "#EAEAEA",
      },
      backgroundImage: {
        "custom-image": "url('/aesthetic wallpaper.jpeg')",
      },
    },
  },
  plugins: [],
};
