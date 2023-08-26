import { createThemes } from "tw-colors";

/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  maxWidth: {
    "1/4": "25%",
    "1/2": "50%",
    "3/4": "75%",
    "11/12": "91.666667%",
  },
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
    // light: {
    //   primary: "neutral-100",
    //   secondary: "neutral-200",
    //   text: "neutral-950",
    //   highlight: "#fef08a",
    //   aitext: "neutral-400",
    //   usertext: "blue-800",
    // },
    // dark: {
    //   primary: "neutral-950",
    //   secondary: "neutral-900",
    //   text: "neutral-50",
    //   highlight: "#fef08a",
    //   aitext: "neutral-400",
    //   usertext: "blue-800",
    // },
    light: {
      primary: "#f5f5f5",
      secondary: "#e5e7eb",
      border: "#0a0a0a",
      text: "#0a0a0a",
      highlight: "#fef08a",
      aitext: "#d4d4d4",
      usertext: "#0ea5e9",
    },
    dark: {
      primary: "#0a0a0a",
      secondary: "#1c1917",
      border: "#fafafa",
      text: "#fafafa",
      highlight: "#facc15",
      aitext: "#a3a3a3",
      usertext: "#1e40af",
    },
  }),
];
