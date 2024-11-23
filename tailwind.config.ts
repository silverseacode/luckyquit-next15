import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray1: '#55616C',
        gray2: "#6c7984ff"
      },
      animation: {
        'custom-animation': 'customAnimation 2s infinite ease alternate',
      },
      keyframes: {
        customAnimation: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-10px)' },
        },
      },
      transitionProperty: {
        'opacity-transform': 'opacity, transform',
      },
      transitionDuration: {
        '2s': '2000ms',
      },
      transitionTimingFunction: {
        'ease': 'ease',
      },
      translate: {
        'full': '100%',
        '-full': '-100%',
      },
    },
  },
  plugins: [],
} satisfies Config;