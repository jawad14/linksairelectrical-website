import Link from 'next/link';
import { ChevronRight, Phone } from 'lucide-react';
import { Container, Stack, Cluster } from '@/components/ui/layout';
import { Heading, Lead, Small } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

export type Breadcrumb = { label: string; href: string };

export type ServiceHeroProps = {
  title: string;
  description: string;
  breadcrumbs: Breadcrumb[];
};

export function ServiceHero({ title, description, breadcrumbs }: ServiceHeroProps) {
  return (
    <section className="bg-primary text-primary-foreground">
      <Container size="xl" className="py-16 sm:py-20 lg:py-24">
        <Stack gap="lg" align="center" className="text-center">
          {/* Breadcrumbs */}
          <Cluster as="nav" aria-label="Breadcrumb" gap="xs" className="text-primary-foreground/60">
            {breadcrumbs.map((crumb, i) => (
              <span
                key={crumb.href}
                className="flex items-center gap-1 text-xs tracking-wide uppercase"
              >
                {i > 0 && <ChevronRight className="size-3" />}
                {i < breadcrumbs.length - 1 ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-primary-foreground transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-accent font-semibold">{crumb.label}</span>
                )}
              </span>
            ))}
          </Cluster>

          <Heading
            level={1}
            className="font-heading max-w-3xl text-3xl font-light tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            {title}
          </Heading>

          <Lead className="text-primary-foreground/70 max-w-2xl">{description}</Lead>

          {/* CTA pair — green quote + red phone (brand pattern) */}
          <Cluster gap="md" justify="center" className="mt-2">
            <Link
              href="/contact"
              className="bg-accent inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-sm font-bold text-white transition-all hover:scale-105 hover:brightness-110"
            >
              Get a Free Quote
            </Link>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
              className="bg-destructive inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-sm font-bold text-white transition-all hover:scale-105 hover:brightness-110"
            >
              <Phone className="size-4" />
              {siteConfig.phone}
            </a>
          </Cluster>
        </Stack>
      </Container>
    </section>
  );
}
