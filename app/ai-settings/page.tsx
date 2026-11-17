import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import { AccentLine } from '@/components/blocks/AccentLine';
import { AiSettingsEditor } from '@/components/blocks/AiSettingsEditor';
import { H2, P } from '@/components/ui/typography';
import { env } from '@/lib/env';
import { siteConfig } from '@/config/site.config';

// Private page for the business owner: the knowledge base (prices, services, terms) and the reply rules
// the AI email assistant follows. Reached only through a link that carries the access key (?key=...).
export const metadata: Metadata = {
  title: `AI reply assistant | ${siteConfig.name}`,
  robots: { index: false, follow: false },
};

export default function AiSettingsPage() {
  return (
    <>
      <AccentLine />
      <header className="ai-top">
        <div className="wrap">
          <Link className="brand" href="/" aria-label="Links Air & Electrical home">
            <Image src="/logo.png" alt="Links Air & Electrical" width={160} height={51} priority />
          </a>
          <span className="ai-top-label">Owner tools</span>
          <Link className="btn btn-ghost ai-top-back" href="/">
            Back to website
          </Link>
        </div>
      </header>
      <section className="dark-bg ai-hero">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">AI reply assistant</span>
            <H2>What the assistant knows and how it writes</H2>
            <P>
              Every enquiry email gets a draft reply built from the sections below. Edit a section,
              save it, and the next email uses it. Nothing is sent without someone checking the
              draft.
            </P>
          </div>
        </div>
      </section>
      <section className="ice ai-body">
        <div className="wrap">
          <Suspense fallback={<P className="ai-status">Loading…</P>}>
            <AiSettingsEditor
              apiBase={env.NEXT_PUBLIC_AI_SETTINGS_API ?? siteConfig.aiSettingsApi}
            />
          </Suspense>
        </div>
      </section>
      <footer className="ai-foot">
        <div className="wrap">
          © {new Date().getFullYear()} {siteConfig.name} · This page is private: do not share the
          link.
        </div>
      </footer>
    </>
  );
}
