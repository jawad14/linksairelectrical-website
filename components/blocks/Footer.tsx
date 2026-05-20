import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { Container, Section, Stack, Grid } from '@/components/ui/layout';
import { H3, P, Small } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Air Conditioning', href: '/services/air-conditioning' },
  { label: 'Electrical Services', href: '/services/electrical' },
  { label: 'Builder Services', href: '/services/builder' },
  { label: 'Contact Us', href: '/contact' },
];

const serviceLinks = [
  { label: 'Split System AC', href: '/services/air-conditioning/split-system' },
  { label: 'Ducted AC', href: '/services/air-conditioning/ducted' },
  { label: 'VRV/VRF Systems', href: '/services/air-conditioning/vrv-vrf' },
  { label: 'AC Repairs', href: '/services/air-conditioning/repair-installation' },
  { label: 'Residential Electrician', href: '/services/electrical/residential' },
  { label: 'General Maintenance', href: '/services/electrical/maintenance' },
];

export function Footer() {
  return (
    <footer>
      {/* Footer CTA strip — red phone + green quote */}
      <div className="bg-secondary py-6">
        <Container
          size="xl"
          className="flex flex-col items-center justify-between gap-4 sm:flex-row"
        >
          <P className="text-center text-sm font-semibold text-white sm:text-left">
            Call or book online — we&apos;re ready to help.
          </P>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
              className="bg-destructive inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold text-white transition-all hover:scale-105 hover:brightness-110"
            >
              <Phone className="size-4" />
              {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              className="bg-accent inline-flex items-center rounded-lg px-5 py-2.5 text-sm font-bold text-white transition-all hover:scale-105 hover:brightness-110"
            >
              Get a Quote
            </Link>
          </div>
        </Container>
      </div>

      {/* Main footer */}
      <Section spacing="lg" className="bg-primary text-primary-foreground">
        <Container size="xl">
          <Grid cols={4} gap="lg">
            {/* Brand column */}
            <Stack gap="md" className="sm:col-span-2 lg:col-span-1">
              <Image
                src="/images/logo.png"
                alt={siteConfig.name}
                width={160}
                height={45}
                className="h-10 w-auto"
              />
              <P className="text-primary-foreground/70 text-sm">
                Links Air &amp; Electrical is a leading name when it comes to 360-degree air
                conditioning solutions at an unbeatable price.
              </P>
              <Stack gap="sm">
                {siteConfig.social.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/70 hover:text-accent text-sm transition-colors"
                  >
                    {s.label}
                  </a>
                ))}
              </Stack>
            </Stack>

            {/* Quick links */}
            <Stack gap="md">
              <H3 className="text-primary-foreground">Quick Links</H3>
              <Stack gap="xs">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </Stack>
            </Stack>

            {/* Services */}
            <Stack gap="md">
              <H3 className="text-primary-foreground">Our Services</H3>
              <Stack gap="xs">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </Stack>
            </Stack>

            {/* Contact info */}
            <Stack gap="md">
              <H3 className="text-primary-foreground">Contact Us</H3>
              <Stack gap="sm">
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="text-primary-foreground/70 hover:text-accent flex items-center gap-2 text-sm transition-colors"
                >
                  <Phone className="size-4 shrink-0" />
                  {siteConfig.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-primary-foreground/70 hover:text-accent flex items-center gap-2 text-sm transition-colors"
                >
                  <Mail className="size-4 shrink-0" />
                  {siteConfig.email}
                </a>
                <span className="text-primary-foreground/70 flex items-center gap-2 text-sm">
                  <MapPin className="size-4 shrink-0" />
                  Brisbane &amp; Gold Coast, QLD
                </span>
                <span className="text-primary-foreground/70 flex items-center gap-2 text-sm">
                  <Clock className="size-4 shrink-0" />
                  {siteConfig.hours}
                </span>
              </Stack>

              {/* License badge — red like collateral */}
              <span className="bg-destructive/90 inline-flex w-fit items-center gap-2 rounded px-3 py-1.5 text-xs font-bold tracking-wide text-white uppercase">
                <ShieldCheck className="size-3.5" />
                Lic. {siteConfig.license} · ARC {siteConfig.arc}
              </span>

              {/* Service areas */}
              <Stack gap="xs">
                <Small className="text-primary-foreground/50 font-semibold tracking-wide uppercase">
                  Service Areas
                </Small>
                <P className="text-primary-foreground/70 text-sm">
                  {siteConfig.serviceAreas.join(' · ')}
                </P>
              </Stack>
            </Stack>
          </Grid>
        </Container>
      </Section>

      {/* Copyright bar */}
      <div className="border-primary-foreground/10 bg-primary/95 border-t py-4">
        <Container
          size="xl"
          className="text-primary-foreground/50 flex flex-col items-center justify-between gap-2 text-xs sm:flex-row"
        >
          <Small className="text-primary-foreground/50">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </Small>
          <Link href="/terms" className="hover:text-primary-foreground/70 transition-colors">
            Terms &amp; Conditions
          </Link>
        </Container>
      </div>
    </footer>
  );
}
