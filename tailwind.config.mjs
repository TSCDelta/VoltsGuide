import { createPreset, presets } from 'fumadocs-ui/tailwind-plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
    './node_modules/fumadocs-ui/dist/**/*.js',
  ],
  presets: [
    createPreset({
      addGlobalColors: true,
      preset: {
        ...presets.default,
        light: {
          ...presets.default.light,
          background: '215 28% 6%',
          foreground: '210 20% 95%',
          card: '217 25% 10%',
          'card-foreground': '210 20% 95%',
          muted: '220 25% 12%',
          'muted-foreground': '215 15% 55%',
          border: '215 20% 18%',
          primary: '355 85% 62%',
          'primary-foreground': '215 30% 8%',
          accent: '200 88% 58%',
          'accent-foreground': '215 30% 8%',
        },

        dark: {
          ...presets.default.dark,
          background: '215 28% 6%',
          foreground: '210 20% 95%',
          card: '217 25% 10%',
          'card-foreground': '210 20% 95%',
          muted: '220 25% 12%',
          'muted-foreground': '215 15% 55%',
          border: '215 20% 18%',
          primary: '355 85% 62%',
          'primary-foreground': '215 30% 8%',
          accent: '200 88% 58%',
          'accent-foreground': '215 30% 8%',
        },
      },
    }),
  ],
};