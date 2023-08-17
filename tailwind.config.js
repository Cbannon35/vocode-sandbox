import { createThemes } from "tw-colors";

/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    animation: {
      marquee: "marquee 20s linear infinite",
      marquee2: "marquee2 20s linear infinite",
    },
    keyframes: {
      marquee: {
        "0%": { transform: "translateX(0%)" },
        "100%": { transform: "translateX(-100%)" },
      },
      marquee2: {
        "0%": { transform: "translateX(100%)" },
        "100%": { transform: "translateX(0%)" },
      },
    },
  },
};
export const plugins = [
  createThemes({
    light: {
      primary: "steelblue",
      secondary: "darkblue",
      brand: "#F3F3F3",
      highlight: "#fef08a",
    },
    dark: {
      primary: "turquoise",
      secondary: "tomato",
      brand: "#4A4A4A",
      highlight: "#fef08a",
    },
    forest: {
      primary: "#2A9D8F",
      secondary: "#E9C46A",
      brand: "#fef08a",
      highlight: "#fef08a",
    },
  }),
];
