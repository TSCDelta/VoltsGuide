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
  theme: {
    extend: {
      colors: {
        // ── Guide page palette ──────────────────────────────────
        // These mirror the --guide-* CSS variables so you can use
        // Tailwind utilities (e.g. bg-guide-bg2, text-guide-text3)
        // alongside the raw CSS classes in globals.css.
        guide: {
          bg:        'hsl(215 28% 6%)',
          bg2:       'hsl(217 25% 10%)',
          bg3:       'hsl(220 25% 12%)',
          bg4:       'hsl(218 22% 15%)',
          border:    'hsl(215 20% 18%)',
          border2:   'hsl(215 20% 24%)',
          text:      'hsl(210 20% 95%)',
          text2:     'hsl(215 15% 65%)',
          text3:     'hsl(215 15% 45%)',
          primary:   'hsl(355 85% 62%)',
          'primary-d': 'hsl(355 75% 48%)',
          accent:    'hsl(200 88% 58%)',
          gold:      'hsl(48 92% 68%)',
          green:     'hsl(150 60% 45%)',
          orange:    'hsl(25 85% 58%)',
        },
      },
    },
  },
};
