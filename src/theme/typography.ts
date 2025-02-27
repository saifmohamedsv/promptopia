// this is duplicate code
import { Inter } from "next/font/google";

const mainFont = Inter({
  subsets: ["latin"],
  variable: "--font-latin",
});

export const typography = {
  fonts: {
    body: mainFont.style.fontFamily,
    mono: mainFont.style.fontFamily,
    heading: mainFont.style.fontFamily,
  },
  fontSizes: {
    "3xs": "0.45rem",
    "2xs": "0.625rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
};
