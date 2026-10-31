/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Design Brief Tokens
        navy: {
          950: "#060F1D", // deepest, footer / hero-dark
          900: "#0A192F", // primary brand
          850: "#0D203D",
          800: "#132D54",
          700: "#1E3A6B",
        },
        blue: {
          600: "#2563EB", // accent on light
          500: "#3B82F6",
          400: "#60A5FA", // accent on dark
        },
        // Vibrant Neo-Brutalist Color Palette (from ref4-brutal & ref5-formshift)
        brutal: {
          orange: "#FF4D00",
          yellow: "#FFE600",
          amber: "#F59E0B",
          lime: "#D4FF00",
          emerald: "#10B981",
          blue: "#2563EB",
          cyan: "#06B6D4",
          purple: "#8B5CF6",
          pink: "#EC4899",
          red: "#EF4444",
          paper: "#F8FAFC",
          black: "#0A192F",
        },
        paper: "#F8FAFC",
        white: "#FFFFFF",
        "text-on-light": "#0A192F",
        "text-on-dark": "#F8FAFC",
        "muted-on-light": "#475569",
        "muted-on-dark": "#94A3B8",
        "hairline-light": "#0A192F",
        "hairline-dark": "#CBD5E1",

        // Compat aliases for light/off-white theme
        primary: "#2563EB",
        "primary-container": "#EFF6FF",
        "on-primary": "#FFFFFF",
        "on-primary-container": "#1E3A8A",
        "primary-fixed-dim": "#2563EB",
        secondary: "#FF4D00",
        "on-secondary": "#FFFFFF",
        background: "#F8FAFC",
        surface: "#FFFFFF",
        "surface-variant": "#F1F5F9",
        "surface-container": "#FFFFFF",
        "surface-container-high": "#F1F5F9",
        "surface-container-highest": "#E2E8F0",
        "surface-container-low": "#FFFFFF",
        "surface-container-lowest": "#FAF9F6",
        "on-surface": "#0A192F",
        "on-surface-variant": "#334155",
        outline: "#0A192F",
        "outline-variant": "#CBD5E1",
      },
      boxShadow: {
        'brutal-dark': '4px 4px 0px 0px #0A192F',
        'brutal-light': '4px 4px 0px 0px #2563EB',
        'brutal-white': '4px 4px 0px 0px #FFFFFF',
        'brutal-sm': '2px 2px 0px 0px #0A192F',
        'brutal-lg': '6px 6px 0px 0px #0A192F',
        'brutal-xl': '8px 8px 0px 0px #0A192F',
        'brutal-blue': '4px 4px 0px 0px #60A5FA',
        'brutal-orange': '4px 4px 0px 0px #FF4D00',
        'brutal-yellow': '4px 4px 0px 0px #FFE600',
        'brutal-lime': '4px 4px 0px 0px #D4FF00',
        'brutal-emerald': '4px 4px 0px 0px #10B981',
        'brutal-purple': '4px 4px 0px 0px #8B5CF6',
        'brutal-neon': '4px 4px 0px 0px #3B82F6',
      },
      borderRadius: {
        card: "24px",
        bento: "28px",
        pill: "999px",
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
      },
      fontFamily: {
        display: ["Manrope", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        serif: ["Newsreader", "serif"],
        // Compat
        "headline-lg": ["Manrope", "sans-serif"],
        "headline-md": ["Manrope", "sans-serif"],
        "display-xl": ["Manrope", "sans-serif"],
        "code-label": ["JetBrains Mono", "monospace"],
        "technical-sm": ["JetBrains Mono", "monospace"],
        "body-lg": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        mono: "0.08em",
      },
      maxWidth: {
        container: "1440px",
        "container-max": "1440px",
      },
    },
  },
  plugins: [],
}
