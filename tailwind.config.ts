import type { Config } from "tailwindcss";

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--color-primary))",
        secondary: "hsl(var(--color-secondary))",
        accent: "hsl(var(--color-accent))",
      },
      fontFamily: {
        sans: ["var(--font-primary)"],
        mono: ["var(--font-roboto-mono)"],
      },
    },
  },
} satisfies Config;

export default config;
