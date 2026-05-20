import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Container, Section, Stack } from '@/components/ui/layout';
import { H2, P } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

export type ServiceCTAProps = {
  title?: string;
  description?: string;
};

export function ServiceCTA({
  title = 'Ready to Get Started?',
  description = "Contact us today for a free, no-obligation quote. We're available 7 days a week.",
}: ServiceCTAProps) {
  return (
    <Section spacing="lg" className="bg-primary text-primary-foreground">
      <Container size="md">
        <Stack gap="lg" align="center" className="text-center">
          <H2 className="text-primary-foreground">{title}</H2>
          <P className="text-primary-foreground/70">{description}</P>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="bg-accent inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
            >
              Request a Free Quote
            </Link>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
              className="border-primary-foreground/30 text-primary-foreground hover:border-primary-foreground/60 inline-flex items-center gap-2 rounded-full border-2 px-7 py-3.5 text-sm font-bold transition-colors"
            >
              <Phone className="size-5" />
              {siteConfig.phone}
            </a>
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
