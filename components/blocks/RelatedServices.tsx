import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container, Section, Grid, Stack } from '@/components/ui/layout';
import { H2, H3, P } from '@/components/ui/typography';

export type RelatedService = {
  title: string;
  description: string;
  href: string;
};

export type RelatedServicesProps = {
  title?: string;
  services: RelatedService[];
};

export function RelatedServices({ title = 'Related Services', services }: RelatedServicesProps) {
  return (
    <Section spacing="lg" className="bg-muted/40">
      <Container size="xl">
        <Stack gap="xl">
          <H2>{title}</H2>
          <Grid cols={3} gap="md">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group border-border bg-card rounded-xl border p-6 transition-shadow hover:shadow-md"
              >
                <Stack gap="sm">
                  <H3 className="group-hover:text-secondary transition-colors">{service.title}</H3>
                  <P variant="muted" className="text-sm">
                    {service.description}
                  </P>
                  <span className="text-accent inline-flex items-center gap-1 text-sm font-semibold transition-transform group-hover:translate-x-1">
                    Learn More <ArrowRight className="size-4" />
                  </span>
                </Stack>
              </Link>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Section>
  );
}
