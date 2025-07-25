import type { Config } from "tailwindcss";
import { BRAND_COLORS } from "./src/constants";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: BRAND_COLORS.primary,
        secondary: BRAND_COLORS.secondary,
        dark: BRAND_COLORS.dark,
        accent: BRAND_COLORS.accent,
        accentDark: BRAND_COLORS.accentDark,
        white: BRAND_COLORS.white,
        gray: BRAND_COLORS.gray,
      },
    },
  },
  plugins: [],
} satisfies Config;
