'use client';

import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Container, Section, Stack } from '@/components/ui/layout';
import { H2, P } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';
import { FadeUp } from '@/components/ui/motion';

export function PromoBanner() {
  return (
    <Section spacing="md" className="bg-destructive text-white">
      <Container size="xl">
        <FadeUp>
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
            <Stack gap="xs">
              <H2 className="text-white">20% OFF Electrical or AC Maintenance &amp; Repair</H2>
              <P className="text-white/80">
                Limited time offer — call now to take advantage of this deal.
              </P>
            </Stack>
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                className="text-destructive inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3.5 text-base font-bold transition-all hover:scale-105"
              >
                <Phone className="size-5" />
                {siteConfig.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg border-2 border-white/40 px-7 py-3.5 text-sm font-bold text-white transition-all hover:scale-105 hover:border-white/70"
              >
                Book Now
              </Link>
            </div>
          </div>
        </FadeUp>
      </Container>
    </Section>
  );
}
