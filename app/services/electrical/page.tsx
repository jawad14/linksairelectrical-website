import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Home, Wrench, Zap, ShieldCheck, Sun, BatteryCharging } from 'lucide-react';
import { Header } from '@/components/blocks/Header';
import { Footer } from '@/components/blocks/Footer';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { Section, Container, Stack, Grid } from '@/components/ui/layout';
import { H2, H3, P, Lead } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

const PAGE_URL = `${siteConfig.url}/services/electrical`;

export const metadata: Metadata = {
  title: 'Electrical Services Brisbane & Gold Coast',
  description:
    'Licensed electrician serving Brisbane & Gold Coast. Residential electrical, switchboard upgrades, EV chargers, solar, LED lighting, and general maintenance. Call 0468 432 538.',
  alternates: { canonical: PAGE_URL },
};

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Electrical', href: '/services/electrical' },
];

const serviceCategories = [
  {
    icon: Home,
    title: 'Residential Electrical',
    description:
      'Complete electrical services for your home — from solar and battery installations to switchboard upgrades, EV chargers, downlights, ceiling fans, and data points.',
    href: '/services/electrical/residential',
  },
  {
    icon: Wrench,
    title: 'General Maintenance',
    description:
      'Ongoing electrical maintenance including LED upgrades, meter box relocation, oven installs, pendant lights, power points, smoke detectors, and surge protection.',
    href: '/services/electrical/maintenance',
  },
];

const allServices = [
  { icon: Sun, name: 'Solar & Battery Systems' },
  { icon: Zap, name: 'Switchboard Upgrades' },
  { icon: BatteryCharging, name: 'EV Charger Installation' },
  { icon: Zap, name: 'Downlight Installation' },
  { icon: Zap, name: 'Ceiling Fan Installation' },
  { icon: Zap, name: 'Bathroom & Ceiling Exhaust Fans' },
  { icon: Zap, name: 'Data Point Installation' },
  { icon: Zap, name: 'LED Lighting Upgrades' },
  { icon: Zap, name: 'Meter Box Relocation' },
  { icon: Zap, name: 'Oven & Cooktop Installation' },
  { icon: Zap, name: 'Pendant Light Installation' },
  { icon: Zap, name: 'Power Point Installation' },
  { icon: ShieldCheck, name: 'Smoke Detector Installation' },
  { icon: ShieldCheck, name: 'Surge Protector Installation' },
  { icon: Zap, name: 'USB Power Point Installation' },
];

export default function ElectricalPage() {
  return (
    <>
      <Header />
      <main>
        <ServiceHero
          title="Electrical Services Brisbane & Gold Coast"
          description="Licensed electricians delivering safe, reliable electrical solutions for homes across South-East Queensland. From simple power point installs to full rewires and solar systems."
          breadcrumbs={breadcrumbs}
        />

        {/* Service Categories */}
        <Section spacing="lg">
          <Container size="xl">
            <Stack gap="xl">
              <Stack gap="md" align="center" className="text-center">
                <H2>Our Electrical Services</H2>
                <Lead className="max-w-2xl">
                  Whether you need a small repair or a major upgrade, our licensed team handles it
                  all with the same attention to detail and safety.
                </Lead>
              </Stack>
              <Grid cols={2} gap="lg">
                {serviceCategories.map((category) => (
                  <Link
                    key={category.href}
                    href={category.href}
                    className="group border-border bg-card rounded-xl border p-8 transition-shadow hover:shadow-md"
                  >
                    <Stack gap="md">
                      <category.icon className="text-accent size-10" />
                      <H3 className="group-hover:text-secondary transition-colors">
                        {category.title}
                      </H3>
                      <P variant="muted">{category.description}</P>
                      <span className="text-accent inline-flex items-center gap-1 text-sm font-semibold transition-transform group-hover:translate-x-1">
                        View Services <ArrowRight className="size-4" />
                      </span>
                    </Stack>
                  </Link>
                ))}
              </Grid>
            </Stack>
          </Container>
        </Section>

        {/* Full Service List */}
        <Section spacing="lg" className="bg-muted/40">
          <Container size="xl">
            <Stack gap="xl">
              <Stack gap="md" align="center" className="text-center">
                <H2>Everything We Cover</H2>
                <Lead className="max-w-2xl">
                  A complete overview of our residential and maintenance electrical services.
                </Lead>
              </Stack>
              <Grid cols={3} gap="md">
                {allServices.map((service) => (
                  <Stack
                    key={service.name}
                    gap="sm"
                    className="border-border bg-card flex-row items-center rounded-lg border px-5 py-4"
                  >
                    <service.icon className="text-accent size-5 shrink-0" />
                    <P className="font-medium">{service.name}</P>
                  </Stack>
                ))}
              </Grid>
            </Stack>
          </Container>
        </Section>

        {/* Why Choose Us */}
        <Section spacing="lg">
          <Container size="md">
            <Stack gap="lg">
              <H2>Why Choose Links Air & Electrical?</H2>
              <P>
                We are a fully licensed electrical contractor (Licence {siteConfig.license}) with
                over a decade of experience across Brisbane and the Gold Coast. Every job is carried
                out to Australian standards and backed by our workmanship guarantee.
              </P>
              <P>
                Because we also specialise in air conditioning, we are the ideal choice when your
                project involves both trades. One team, one point of contact, one invoice — no
                coordinating between separate electricians and HVAC installers.
              </P>
              <P>
                We pride ourselves on clean, tidy work, honest communication, and pricing that is
                fair and transparent. We provide upfront quotes on every job and never charge hidden
                fees.
              </P>
            </Stack>
          </Container>
        </Section>

        <ServiceCTA
          title="Need an Electrician?"
          description="Get in touch for a free quote on any residential electrical work. We are available 7 days a week across Brisbane and the Gold Coast."
        />
      </main>
      <Footer />

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Electrical Services Brisbane & Gold Coast',
          description:
            'Licensed electrician serving Brisbane and Gold Coast. Residential electrical, switchboard upgrades, EV chargers, solar, LED lighting, and general maintenance.',
          provider: {
            '@type': 'LocalBusiness',
            '@id': `${siteConfig.url}/#business`,
            name: siteConfig.name,
          },
          url: PAGE_URL,
          areaServed: siteConfig.serviceAreas.map((area) => ({
            '@type': 'City',
            name: area,
          })),
          serviceType: 'Electrical Services',
        }}
      />
    </>
  );
}
