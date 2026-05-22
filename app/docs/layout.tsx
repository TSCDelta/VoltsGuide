import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { source } from '@/app/source';
import type { ReactNode } from 'react';
import Link from 'next/link';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: 'My Club',
        children: (
          <div className="flex items-center gap-4 text-sm ml-4">
            <Link href="/" className="text-fd-muted-foreground hover:text-fd-foreground transition-colors">
              Home
            </Link>
            <Link href="/docs/guide" className="text-fd-muted-foreground hover:text-fd-foreground transition-colors">
              Guides
            </Link>
            <Link href="/docs/resources" className="text-fd-muted-foreground hover:text-fd-foreground transition-colors">
              Resources
            </Link>
          </div>
        ),
      }}
      sidebar={{}}
      containerProps={{
        className: '!max-w-none w-full',
      }}
    >
      {children}
    </DocsLayout>
  );
}