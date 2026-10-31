/** @type {import('tailwindcss').Config} */
const allColors = require("tailwindcss/colors");

// Skip deprecated aliases; reading them prints rename warnings on every build.
const DEPRECATED = ["lightBlue", "warmGray", "trueGray", "coolGray", "blueGray"];
const colors = Object.fromEntries(
  Object.keys(allColors)
    .filter((name) => !DEPRECATED.includes(name))
    .map((name) => [name, allColors[name]])
);
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        trace: {
          from: { strokeDashoffset: "100" },
          to: { strokeDashoffset: "0" },
        },
      },
      animation: {
        trace: "trace 6s linear infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      ...colors,
      primary: colors.blue,
      secondary: colors.red,
    },
  },
  plugins: [],
};
