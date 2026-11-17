import type { Metadata } from 'next';
import { Suspense } from 'react';
import { AiSettingsEditor } from '@/components/blocks/AiSettingsEditor';
import { Container, Section, Stack } from '@/components/ui/layout';
import { H1, Muted } from '@/components/ui/typography';
import { env } from '@/lib/env';
import { siteConfig } from '@/config/site.config';

// Private page for the business owner: the knowledge base (prices, services, terms) and the reply rules
// the AI email assistant follows. Reached only through a link that carries the access key (?key=...).
export const metadata: Metadata = {
  title: `AI reply assistant settings | ${siteConfig.name}`,
  robots: { index: false, follow: false },
};

export default function AiSettingsPage() {
  return (
    <Section spacing="md">
      <Container size="md">
        <Stack gap="md">
          <H1>AI reply assistant</H1>
          <Muted>
            The assistant drafts replies to enquiry emails from what is written here. Changes apply
            to the next email it answers; nothing is sent without someone checking the draft.
          </Muted>
          <Suspense fallback={<Muted>Loading…</Muted>}>
            <AiSettingsEditor
              apiBase={env.NEXT_PUBLIC_AI_SETTINGS_API ?? siteConfig.aiSettingsApi}
            />
          </Suspense>
        </Stack>
      </Container>
    </Section>
  );
}
