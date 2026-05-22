import Link from 'next/link';

// ============================================================
// EDIT THIS DATA to customise the homepage
// ============================================================

const SITE_NAME = 'Volts Guide';
const SITE_TAGLINE = 'Free Beginners Japanese Guide';
const SITE_DESCRIPTION = 'Learn Japanese through immersion — anime, manga, visual novels, and content you actually enjoy.';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Guide', href: '/docs/guide' },
  { label: 'Resources', href: '/docs/resources' },
];

const HERO_BADGE = 'Absolute beginner friendly';
const CTA_PRIMARY = { label: 'Start Learning', href: '/docs/guide' };

const STAT_CARDS = [
  { number: '3', label: 'Learning Stages' },
  { number: 'Free', label: 'Always' },
  { number: '∞', label: 'Resources' },
];

// Learning path steps — replaces the filler Featured grid
const LEARNING_PATH = [
  {
    step: '01',
    title: 'Learn Kana',
    body: 'Hiragana and Katakana in about a week. The foundation for everything else.',
    href: '/docs/guide#basics',
    time: '1–2 weeks',
  },
  {
    step: '02',
    title: 'Grammar & Vocab',
    body: 'Pick one grammar guide. Start Anki with Kaishi 1.5k at 5–20 words a day.',
    href: '/docs/guide#vocab',
    time: '2–4 weeks',
  },
  {
    step: '03',
    title: 'Start Immersing',
    body: 'Anime, manga, visual novels — real Japanese from day one. Yomitan handles lookups.',
    href: '/docs/guide#immersion-section',
    time: 'Ongoing',
  },
  {
    step: '04',
    title: 'Output',
    body: 'Once you have a solid base, start speaking and writing. Passive becomes active.',
    href: '/docs/guide#output-section',
    time: 'Month 6+',
  },
];

// Tool/setup cards — real tools from the guide
const GUIDE_CARDS = [
  {
    emoji: '🃏',
    title: 'Anki',
    subtitle: 'Spaced-repetition flashcards for vocabulary',
    href: 'https://apps.ankiweb.net/',
  },
  {
    emoji: '🔍',
    title: 'Yomitan',
    subtitle: 'Hover over any Japanese word for instant lookup',
    href: 'https://lazyguidejp.github.io/jp-lazy-guide/setupYomitanOnPC/',
  },
  {
    emoji: '📺',
    title: 'asbplayer',
    subtitle: 'Watch anime with Japanese subs and mine to Anki',
    href: 'https://killergerbah.github.io/asbplayer/',
  },
  {
    emoji: '📖',
    title: 'Mokuro Reader',
    subtitle: 'Read manga with hoverable text in your browser',
    href: 'https://reader.mokuro.app/',
  },
  {
    emoji: '📚',
    title: 'TTU Reader',
    subtitle: 'Read light novels in-browser with Yomitan support',
    href: 'https://reader.ttsu.app/',
  },
  {
    emoji: '🎮',
    title: 'Textractor',
    subtitle: 'Hook text from visual novels for Yomitan lookup',
    href: 'https://github.com/Artikash/Textractor',
  },
];

// Content type explore cards
const EXPLORE_LINKS = [
  {
    emoji: '📺',
    title: 'Anime',
    subtitle: 'Best starting point — visual context makes comprehension easier',
    href: '/docs/resources#anime',
  },
  {
    emoji: '📖',
    title: 'Manga',
    subtitle: 'Read at your own pace — great for building reading fluency',
    href: '/docs/resources#manga',
  },
  {
    emoji: '📚',
    title: 'Light Novels',
    subtitle: 'Pure reading — push vocab depth and reading speed',
    href: '/docs/resources#light-novel',
  },
  {
    emoji: '🎮',
    title: 'Visual Novels',
    subtitle: 'Voiced story content — the best of reading and listening combined',
    href: '/docs/resources#visual-novel',
  },
];

const DISCORD_INVITE = '#';
const GITHUB_URL = '#';

const FOOTER_COL_2 = {
  heading: 'Guide',
  links: [
    { label: 'Learn Kana', href: '/docs/guide#basics' },
    { label: 'Grammar & Vocab', href: '/docs/guide#vocab' },
    { label: 'Immersion', href: '/docs/guide#immersion-section' },
    { label: 'Output', href: '/docs/guide#output-section' },
  ],
};

const FOOTER_COL_3 = {
  heading: 'Resources',
  links: [
    { label: 'Anime', href: '/docs/resources#anime' },
    { label: 'Manga', href: '/docs/resources#manga' },
    { label: 'Light Novels', href: '/docs/resources#light-novel' },
    { label: 'Visual Novels', href: '/docs/resources#visual-novel' },
  ],
};

const FOOTER_COL_4 = {
  heading: 'Community',
  links: [
    { label: 'Join Discord', href: DISCORD_INVITE },
    { label: 'GitHub', href: GITHUB_URL },
  ],
};

// ============================================================
// PAGE COMPONENT
// ============================================================

export default function HomePage() {
  return (
    <div className="min-h-screen bg-fd-background text-fd-foreground">

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-fd-border bg-fd-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <Link href="/" className="text-lg font-bold">
            {SITE_NAME}
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-fd-muted-foreground hover:text-fd-foreground transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <Link
            href={DISCORD_INVITE}
            className="rounded-full bg-fd-primary px-4 py-1.5 text-sm font-medium text-fd-primary-foreground hover:opacity-90 transition-opacity"
          >
            Join Discord
          </Link>
        </div>
      </header>

      <main>

        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 py-24 text-center">
          <p className="mb-4 text-sm font-medium tracking-widest text-fd-muted-foreground uppercase">
            {HERO_BADGE}
          </p>
          <h1 className="mb-4 text-5xl font-bold tracking-tight">{SITE_TAGLINE}</h1>
          <p className="mx-auto mb-10 max-w-xl text-lg text-fd-muted-foreground">
            {SITE_DESCRIPTION}
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href={CTA_PRIMARY.href}
              className="rounded-lg bg-fd-primary px-8 py-3.5 font-semibold text-fd-primary-foreground hover:opacity-90 transition-opacity"
            >
              {CTA_PRIMARY.label}
            </Link>
            <Link
              href="/docs/resources"
              className="rounded-lg border border-fd-border px-8 py-3.5 font-semibold hover:bg-fd-muted transition-colors"
            >
              Browse Resources
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-14 flex justify-center gap-12">
            {STAT_CARDS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-bold">{s.number}</p>
                <p className="text-sm text-fd-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Learning Path */}
        <section className="border-t border-fd-border bg-fd-muted/30 px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-2 text-2xl font-bold">The Learning Path</h2>
            <p className="mb-10 text-fd-muted-foreground">
              Four stages from zero to immersion. Each one builds on the last.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {LEARNING_PATH.map((item) => (
                <Link
                  key={item.step}
                  href={item.href}
                  className="group rounded-xl border border-fd-border bg-fd-background p-6 hover:border-fd-primary/50 hover:bg-fd-muted/40 transition-all"
                >
                  <p className="mb-3 text-xs font-bold tracking-widest text-fd-muted-foreground uppercase">
                    {item.step}
                  </p>
                  <p className="mb-2 font-semibold text-lg leading-tight group-hover:text-fd-primary transition-colors">
                    {item.title}
                  </p>
                  <p className="mb-4 text-sm text-fd-muted-foreground leading-relaxed">
                    {item.body}
                  </p>
                  <span className="inline-block rounded-full border border-fd-border px-3 py-1 text-xs text-fd-muted-foreground">
                    {item.time}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Immersion Explainer */}
        <section className="px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="mb-4 text-2xl font-bold">Learn by watching, reading, and playing</h2>
                <p className="mb-4 text-fd-muted-foreground leading-relaxed">
                  This guide is built around <strong className="text-fd-foreground">immersion</strong> — consuming Japanese content you actually enjoy instead of drilling textbooks. You pick up the language the same way you absorbed your native one.
                </p>
                <p className="mb-6 text-fd-muted-foreground leading-relaxed">
                  It will feel hard at first. That's normal. Progress feels slow, then suddenly accelerates. The key is consistency — even an hour a day adds up faster than you'd expect.
                </p>
                <Link
                  href="/docs/guide#immersion-section"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-fd-primary hover:underline"
                >
                  Read about immersion →
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {EXPLORE_LINKS.map((e) => (
                  <Link
                    key={e.title}
                    href={e.href}
                    className="rounded-xl border border-fd-border bg-fd-muted/30 p-5 hover:border-fd-primary/50 hover:bg-fd-muted/60 transition-all"
                  >
                    <p className="mb-2 text-2xl">{e.emoji}</p>
                    <p className="mb-1 font-semibold text-sm">{e.title}</p>
                    <p className="text-xs text-fd-muted-foreground leading-relaxed">{e.subtitle}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="border-t border-fd-border bg-fd-muted/30 px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-2 text-2xl font-bold">Essential Tools</h2>
            <p className="mb-8 text-fd-muted-foreground">
              The tools you'll actually use. Free, open source, and battle-tested by the immersion community.
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {GUIDE_CARDS.map((g) => (
                <Link
                  key={g.title}
                  href={g.href}
                  target={g.href.startsWith('http') ? '_blank' : undefined}
                  rel={g.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 rounded-xl border border-fd-border bg-fd-background p-5 hover:border-fd-primary/50 hover:bg-fd-muted/30 transition-all"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-fd-muted text-xl">
                    {g.emoji}
                  </div>
                  <div>
                    <p className="font-semibold">{g.title}</p>
                    <p className="text-sm text-fd-muted-foreground">{g.subtitle}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/docs/resources"
                className="text-sm font-medium text-fd-primary hover:underline"
              >
                See all resources →
              </Link>
            </div>
          </div>
        </section>

        {/* Community CTA */}
        <section className="px-6 py-16 text-center">
          <div className="mx-auto max-w-xl">
            <h2 className="mb-3 text-2xl font-bold">Questions? Join the community.</h2>
            <p className="mb-6 text-fd-muted-foreground">
              An open resource maintained by learners for learners. Ask questions, share progress, find study partners.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href={DISCORD_INVITE}
                className="rounded-lg bg-fd-primary px-6 py-3 font-semibold text-fd-primary-foreground hover:opacity-90 transition-opacity"
              >
                Join Discord
              </Link>
              <Link
                href={GITHUB_URL}
                className="rounded-lg border border-fd-border px-6 py-3 font-semibold hover:bg-fd-muted transition-colors"
              >
                GitHub
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-fd-border bg-fd-muted/30 px-6 py-12">
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="mb-2 font-bold">{SITE_NAME}</p>
            <p className="text-sm text-fd-muted-foreground">A free resource for learning Japanese through immersion.</p>
          </div>
          {[FOOTER_COL_2, FOOTER_COL_3, FOOTER_COL_4].map((col) => (
            <div key={col.heading}>
              <p className="mb-3 font-bold">{col.heading}</p>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-fd-muted-foreground hover:text-fd-foreground transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>

    </div>
  );
}