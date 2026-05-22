import Link from 'next/link';

// ============================================================
// EDIT THIS DATA to customise the homepage
// ============================================================

const SITE_NAME = 'Volts Guide';
const SITE_TAGLINE = 'Free Beginners Japanese Guide';
const SITE_DESCRIPTION = 'A quick and free guide for learning Japanese';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Guides', href: '/docs/guide' },
  { label: 'Resources', href: '/docs/resources' },
];

const HERO_BADGE = 'Absolute beginner guide';
const CTA_PRIMARY = { label: 'Get Started', href: '/docs/guide' };

const STAT_CARDS = [
  { number: '10+', label: 'Setup Guides' },
  { number: 'Free', label: 'Always' },
  { number: '∞', label: 'Resources' },
];

// Featured items grid
const FEATURED_ITEMS = [
  { title: 'Item One', subtitle: 'Short description', href: '#' },
  { title: 'Item Two', subtitle: 'Short description', href: '#' },
  { title: 'Item Three', subtitle: 'Short description', href: '#' },
  { title: 'Item Four', subtitle: 'Short description', href: '#' },
  { title: 'Item Five', subtitle: 'Short description', href: '#' },
  { title: 'Item Six', subtitle: 'Short description', href: '#' },
];

// Guide cards section
const GUIDE_CARDS = [
  { title: 'Tool A', subtitle: 'What it does', href: '/docs/tool-a' },
  { title: 'Tool B', subtitle: 'What it does', href: '/docs/tool-b' },
  { title: 'Tool C', subtitle: 'What it does', href: '/docs/tool-c' },
  { title: 'Tool D', subtitle: 'What it does', href: '/docs/tool-d' },
  { title: 'Tool E', subtitle: 'What it does', href: '/docs/tool-e' },
  { title: 'Tool F', subtitle: 'What it does', href: '/docs/tool-f' },
];

// More to Explore section
const EXPLORE_LINKS = [
  { title: 'Beginner picks', subtitle: 'Curated easy starting points', href: '#' },
  { title: 'Sources', subtitle: 'Where to find content', href: '#' },
  { title: 'Tools', subtitle: 'Utilities and helpers', href: '#' },
  { title: 'News', subtitle: 'Latest updates', href: '#' },
];

const FOOTER_COL_1 = {
  heading: SITE_NAME,
  body: 'A free resource for learning Japanese.',
};

const FOOTER_COL_2 = {
  heading: 'Guides',
  links: [
    { label: 'Guide A', href: '/docs/guide' },
    { label: 'Guide B', href: '#' },
    { label: 'Guide C', href: '#' },
  ],
};

const FOOTER_COL_3 = {
  heading: 'Resources',
  links: [
    { label: 'Getting Started', href: '/docs/guide' },
    { label: 'FAQ', href: '#' },
    { label: 'Tools', href: '#' },
  ],
};

const FOOTER_COL_4 = {
  heading: 'Community',
  links: [
    { label: 'Join Discord', href: '#' },
    { label: 'GitHub', href: '#' },
    { label: 'Contact', href: '#' },
  ],
};

const DISCORD_INVITE = '#';
const GITHUB_URL = '#';

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
              <Link key={l.href} href={l.href} className="text-fd-muted-foreground hover:text-fd-foreground transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>
          <Link
            href={DISCORD_INVITE}
            className="rounded-full bg-fd-primary px-4 py-1.5 text-sm font-medium text-fd-primary-foreground hover:opacity-90 transition-opacity"
          >
            Join
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

          {/* Centered Primary Button Only */}
          <div className="flex justify-center">
            <Link
              href={CTA_PRIMARY.href}
              className="rounded-lg bg-fd-primary px-8 py-3.5 font-semibold text-fd-primary-foreground hover:opacity-90 transition-opacity"
            >
              {CTA_PRIMARY.label}
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-14 flex justify-center gap-8">
            {STAT_CARDS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-bold">{s.number}</p>
                <p className="text-sm text-fd-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Items */}
        <section className="border-t border-fd-border bg-fd-muted/30 px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-2 text-2xl font-bold">Featured</h2>
            <p className="mb-8 text-fd-muted-foreground">
              Popular lessons and resources to get you started.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {FEATURED_ITEMS.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="rounded-xl border border-fd-border bg-fd-background p-4 text-center hover:border-fd-primary/50 transition-all group"
                >
                  <div className="mx-auto mb-3 h-20 w-full rounded-lg bg-fd-muted group-hover:bg-fd-primary/10 transition-colors" />
                  <p className="text-sm font-semibold leading-tight">{item.title}</p>
                  <p className="text-xs text-fd-muted-foreground line-clamp-2">{item.subtitle}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-2 text-2xl font-bold">Guides</h2>
            <p className="mb-8 text-fd-muted-foreground">
              Step-by-step guides for beginners.
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {GUIDE_CARDS.map((g) => (
                <Link
                  key={g.title}
                  href={g.href}
                  className="flex items-center gap-4 rounded-xl border border-fd-border bg-fd-background p-5 hover:border-fd-primary/50 hover:bg-fd-muted/30 transition-all"
                >
                  <div className="h-11 w-11 shrink-0 rounded-lg bg-fd-muted" />
                  <div>
                    <p className="font-semibold">{g.title}</p>
                    <p className="text-sm text-fd-muted-foreground">{g.subtitle}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* More to Explore */}
        <section className="border-t border-fd-border bg-fd-muted/30 px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-2xl font-bold">More to Explore</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {EXPLORE_LINKS.map((e) => (
                <Link
                  key={e.title}
                  href={e.href}
                  className="rounded-xl border border-fd-border bg-fd-background p-6 hover:border-fd-primary/50 transition-colors"
                >
                  <p className="font-semibold">{e.title}</p>
                  <p className="mt-2 text-sm text-fd-muted-foreground">{e.subtitle}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Community CTA */}
        <section className="px-6 py-16 text-center">
          <div className="mx-auto max-w-xl">
            <h2 className="mb-3 text-2xl font-bold">Get Involved</h2>
            <p className="mb-6 text-fd-muted-foreground">
              This is an open resource maintained by the community.
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
            <p className="mb-2 font-bold">{FOOTER_COL_1.heading}</p>
            <p className="text-sm text-fd-muted-foreground">{FOOTER_COL_1.body}</p>
          </div>

          {[FOOTER_COL_2, FOOTER_COL_3, FOOTER_COL_4].map((col) => (
            <div key={col.heading}>
              <p className="mb-2 font-bold">{col.heading}</p>
              <ul className="space-y-1">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-fd-muted-foreground hover:text-fd-foreground transition-colors">
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