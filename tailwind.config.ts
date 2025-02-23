import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {},
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              "50": "#f1fafa",
              "100": "#dcf0f1",
              "200": "#bde3e4",
              "300": "#8fcdd1",
              "400": "#5ab0b6",
              "500": "#3f949b",
              "600": "#377983",
              "700": "#32646c",
              "800": "#2f535b",
              "900": "#2b464e",
              DEFAULT: "#1D363D",
            },
          },
        },
        dark: {
          colors: {
            primary: {
              "50": "#2b464e",
              "100": "#2f535b",
              "200": "#32646c",
              "300": "#377983",
              "400": "#3f949b",
              "500": "#5ab0b6",
              "600": "#8fcdd1",
              "700": "#bde3e4",
              "800": "#dcf0f1",
              "900": "#f1fafa",
              DEFAULT: "#1D363D",
            },
          },
        },
      },
    }),
  ],
} satisfies Config;
