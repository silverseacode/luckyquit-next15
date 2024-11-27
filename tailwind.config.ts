import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  maxWidth: {
    '90rem': '90rem',
  },
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
        gray2: "#6c7984ff",
        gray3: "#55616C",
        gray4: "#5C5C5C",
        black1: "#292D30",
        purple1: "#C765E7"
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
