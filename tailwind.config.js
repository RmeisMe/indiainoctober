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
        brutal: {
          black: "#080808",
          dark: "#121212",
          red: "#DC2626",
          redDark: "#991B1B",
          redBright: "#EF4444",
          crimson: "#B91C1C",
          white: "#F5F5F5",
          gray: "#71717A",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Impact", "sans-serif"],
        subheading: ["var(--font-subheading)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
