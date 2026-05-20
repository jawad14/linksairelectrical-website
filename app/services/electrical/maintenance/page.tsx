import type { Metadata } from 'next';
import {
  Lightbulb,
  Box,
  CookingPot,
  Lamp,
  Plug,
  ShieldAlert,
  ShieldCheck,
  Usb,
} from 'lucide-react';
import { Header } from '@/components/blocks/Header';
import { Footer } from '@/components/blocks/Footer';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { RelatedServices } from '@/components/blocks/RelatedServices';
import { JsonLd } from '@/components/seo/JsonLd';
import { Section, Container, Stack, Grid } from '@/components/ui/layout';
import { H2, H3, P, Lead } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

const PAGE_URL = `${siteConfig.url}/services/electrical/maintenance`;

export const metadata: Metadata = {
  title: 'General Electrical Maintenance',
  description:
    'General electrical maintenance services in Brisbane & Gold Coast. LED lights, meter box relocation, oven installs, power points, smoke detectors, surge protectors. Call 0468 432 538.',
  alternates: { canonical: PAGE_URL },
};

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Electrical', href: '/services/electrical' },
  { label: 'Maintenance', href: '/services/electrical/maintenance' },
];

const services = [
  {
    icon: Lightbulb,
    title: 'LED Lighting Upgrades',
    description:
      'Replace outdated halogen and fluorescent fittings with modern LED lights. You will see an immediate reduction in your power bill and enjoy better-quality light throughout your home.',
  },
  {
    icon: Box,
    title: 'Meter Box Relocation',
    description:
      'Need your meter box moved for a renovation, extension, or driveway? We handle the full relocation including coordination with your energy distributor and council requirements.',
  },
  {
    icon: CookingPot,
    title: 'Oven & Cooktop Installation',
    description:
      'Electric ovens and induction cooktops need a dedicated circuit with the correct amperage. We install, wire, and test your new appliance so it is safe and ready to use.',
  },
  {
    icon: Lamp,
    title: 'Pendant Light Installation',
    description:
      'Pendant lights add character to kitchens, dining areas, and hallways. We install all styles — from single pendants to multi-drop cluster arrangements — with clean, concealed wiring.',
  },
  {
    icon: Plug,
    title: 'Power Point Installation',
    description:
      'Running out of outlets? We add new power points wherever you need them, including outdoor weatherproof GPOs, double points, and dedicated circuits for high-draw appliances.',
  },
  {
    icon: ShieldAlert,
    title: 'Smoke Detector Installation',
    description:
      'Queensland law requires interconnected smoke alarms in all bedrooms and hallways. We supply and install photoelectric, hard-wired smoke detectors that comply with current legislation.',
  },
  {
    icon: ShieldCheck,
    title: 'Surge Protector Installation',
    description:
      'Protect your electronics and appliances from power surges caused by lightning strikes and grid fluctuations. We install whole-house surge protection at your switchboard.',
  },
  {
    icon: Usb,
    title: 'USB Power Points',
    description:
      'Charge phones and tablets directly from the wall without adaptors. We install power points with built-in USB-A and USB-C ports in kitchens, bedrooms, and living areas.',
  },
];

const relatedServices = [
  {
    title: 'Residential Electrical',
    description: 'Solar, switchboard upgrades, EV chargers, and more.',
    href: '/services/electrical/residential',
  },
  {
    title: 'Builder Services',
    description: 'Complete electrical and AC for new builds.',
    href: '/services/builder',
  },
  {
    title: 'AC Repair & Installation',
    description: 'Air conditioning repairs and new installations.',
    href: '/services/air-conditioning/repair-installation',
  },
];

export default function ElectricalMaintenancePage() {
  return (
    <>
      <Header />
      <main>
        <ServiceHero
          title="General Electrical Maintenance"
          description="From LED upgrades to smoke detector compliance, we handle the everyday electrical jobs that keep your home safe, efficient, and up to code."
          breadcrumbs={breadcrumbs}
        />

        {/* Service Cards */}
        <Section spacing="lg">
          <Container size="xl">
            <Stack gap="xl">
              <Stack gap="md" align="center" className="text-center">
                <H2>Maintenance Services We Offer</H2>
                <Lead className="max-w-2xl">
                  No job is too small. We bring the same professionalism to a power point install as
                  we do to a full switchboard upgrade.
                </Lead>
              </Stack>
              <Grid cols={2} gap="lg">
                {services.map((service) => (
                  <Stack
                    key={service.title}
                    gap="sm"
                    className="border-border bg-card rounded-xl border p-6"
                  >
                    <service.icon className="text-accent size-8" />
                    <H3>{service.title}</H3>
                    <P variant="muted">{service.description}</P>
                  </Stack>
                ))}
              </Grid>
            </Stack>
          </Container>
        </Section>

        {/* Common Scenarios */}
        <Section spacing="lg" className="bg-muted/40">
          <Container size="md">
            <Stack gap="lg">
              <H2>When to Call a Maintenance Electrician</H2>
              <P>
                Flickering lights, warm power points, tripping safety switches, and burning smells
                are all signs that something needs attention. Do not ignore these — electrical
                faults are a leading cause of house fires in Australia. A quick inspection by a
                licensed electrician can identify and resolve the issue before it becomes dangerous.
              </P>
              <P>
                Even without obvious problems, regular electrical maintenance is a smart investment.
                If your home is more than 20 years old, the wiring may not meet current safety
                standards. We can inspect your switchboard, wiring, and safety switches to make sure
                everything is in order.
              </P>
              <P>
                Moving into a new home? We offer pre-purchase electrical inspections that give you a
                clear picture of the property&apos;s electrical condition before you commit.
              </P>
            </Stack>
          </Container>
        </Section>

        {/* Pricing Transparency */}
        <Section spacing="lg">
          <Container size="md">
            <Stack gap="lg">
              <H2>Transparent, Fair Pricing</H2>
              <P>
                We provide fixed-price quotes for every job before any work begins. You will know
                exactly what the job costs, what is included, and how long it will take. No hourly
                rate surprises, no call-out fees hidden in the fine print.
              </P>
              <P>
                For smaller jobs — a power point here, a smoke detector there — we often bundle
                multiple tasks into a single visit so you get better value. If you have a list of
                small electrical jobs that have been piling up, book a maintenance visit and we will
                work through them all at once.
              </P>
            </Stack>
          </Container>
        </Section>

        <ServiceCTA
          title="Got Electrical Maintenance to Do?"
          description="Send us your list of jobs and we will provide a single, all-inclusive quote. No job is too small."
        />

        <RelatedServices services={relatedServices} />
      </main>
      <Footer />

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'General Electrical Maintenance',
          description:
            'General electrical maintenance services in Brisbane and Gold Coast. LED lights, meter box relocation, oven installs, power points, smoke detectors, and surge protectors.',
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
          serviceType: 'Electrical Maintenance',
        }}
      />
    </>
  );
}
