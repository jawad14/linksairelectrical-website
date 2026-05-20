import type { Metadata } from 'next';
import { Fan, Droplets, Gauge, ThermometerSun, ShieldCheck, CalendarCheck } from 'lucide-react';
import { Header } from '@/components/blocks/Header';
import { Footer } from '@/components/blocks/Footer';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { RelatedServices } from '@/components/blocks/RelatedServices';
import { JsonLd } from '@/components/seo/JsonLd';
import { Section, Container, Stack, Grid } from '@/components/ui/layout';
import { H2, H3, P, Lead } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

const PAGE_URL = `${siteConfig.url}/services/air-conditioning/service-maintenance`;

export const metadata: Metadata = {
  title: 'Air Conditioning Service & Maintenance',
  description:
    'Regular AC servicing, filter cleaning, gas top-ups, and performance checks in Brisbane & Gold Coast. Preventive maintenance to extend the life of your system. Call 0468 432 538.',
  alternates: { canonical: PAGE_URL },
};

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Air Conditioning', href: '/services/air-conditioning' },
  { label: 'Service & Maintenance', href: '/services/air-conditioning/service-maintenance' },
];

const maintenanceTasks = [
  {
    icon: Fan,
    title: 'Filter Cleaning & Replacement',
    description:
      'Dirty filters restrict airflow and force your system to work harder. We clean or replace filters to restore performance and improve indoor air quality.',
  },
  {
    icon: Droplets,
    title: 'Drain Line Clearing',
    description:
      'Blocked condensate drains can cause water leaks and mould growth. We flush and clear drain lines to prevent water damage to your ceilings and walls.',
  },
  {
    icon: Gauge,
    title: 'Refrigerant Level Check',
    description:
      'Low refrigerant reduces cooling capacity and increases power consumption. We check gas levels and top up if needed, after checking for leaks.',
  },
  {
    icon: ThermometerSun,
    title: 'Performance Testing',
    description:
      'We measure supply and return air temperatures, check thermostat accuracy, and verify that every zone is delivering the correct output.',
  },
  {
    icon: ShieldCheck,
    title: 'Electrical Safety Inspection',
    description:
      'Loose connections and worn contactors are fire risks. We inspect all electrical components, tighten connections, and replace any worn parts.',
  },
  {
    icon: CalendarCheck,
    title: 'Coil & Outdoor Unit Cleaning',
    description:
      'Dust and debris on your evaporator and condenser coils reduce efficiency by up to 30%. We deep-clean both indoor and outdoor units for peak performance.',
  },
];

const benefits = [
  {
    title: 'Lower Energy Bills',
    description:
      'A well-maintained system runs more efficiently, using less electricity to achieve the same comfort level. Most customers see a noticeable difference after a service.',
  },
  {
    title: 'Fewer Breakdowns',
    description:
      'Regular servicing catches small problems — worn belts, loose wires, low gas — before they become expensive emergency repairs in the middle of summer.',
  },
  {
    title: 'Longer System Lifespan',
    description:
      'Air conditioners that receive annual maintenance typically last 3 to 5 years longer than neglected systems, protecting your investment.',
  },
  {
    title: 'Better Air Quality',
    description:
      'Clean filters and coils mean cleaner air circulating through your home — important for families with allergies, asthma, or young children.',
  },
];

const relatedServices = [
  {
    title: 'Repair & Installation',
    description: 'Need a repair or a new system? We handle both.',
    href: '/services/air-conditioning/repair-installation',
  },
  {
    title: 'Design & Construction',
    description: 'HVAC design for new builds and major renovations.',
    href: '/services/air-conditioning/design-construction',
  },
  {
    title: 'AC FAQ',
    description: 'Answers to common air conditioning questions.',
    href: '/services/air-conditioning/faq',
  },
];

export default function ServiceMaintenancePage() {
  return (
    <>
      <Header />
      <main>
        <ServiceHero
          title="Air Conditioning Service & Maintenance"
          description="Keep your AC running at peak performance with regular professional servicing. We service all brands across Brisbane and the Gold Coast."
          breadcrumbs={breadcrumbs}
        />

        {/* What's Included */}
        <Section spacing="lg">
          <Container size="xl">
            <Stack gap="xl">
              <Stack gap="md" align="center" className="text-center">
                <H2>What We Check & Service</H2>
                <Lead className="max-w-2xl">
                  Our comprehensive AC service covers every component that affects performance,
                  efficiency, and reliability — so nothing gets missed.
                </Lead>
              </Stack>
              <Grid cols={3} gap="md">
                {maintenanceTasks.map((task) => (
                  <Stack
                    key={task.title}
                    gap="sm"
                    className="border-border bg-card rounded-xl border p-6"
                  >
                    <task.icon className="text-accent size-8" />
                    <H3>{task.title}</H3>
                    <P variant="muted">{task.description}</P>
                  </Stack>
                ))}
              </Grid>
            </Stack>
          </Container>
        </Section>

        {/* Benefits */}
        <Section spacing="lg" className="bg-muted/40">
          <Container size="xl">
            <Stack gap="xl">
              <Stack gap="md" align="center" className="text-center">
                <H2>Why Regular Maintenance Matters</H2>
                <Lead className="max-w-2xl">
                  Skipping your annual service might save a small amount now, but it costs
                  significantly more in the long run.
                </Lead>
              </Stack>
              <Grid cols={2} gap="lg">
                {benefits.map((benefit) => (
                  <Stack
                    key={benefit.title}
                    gap="sm"
                    className="border-border bg-card rounded-xl border p-6"
                  >
                    <H3>{benefit.title}</H3>
                    <P variant="muted">{benefit.description}</P>
                  </Stack>
                ))}
              </Grid>
            </Stack>
          </Container>
        </Section>

        {/* Scheduling */}
        <Section spacing="lg">
          <Container size="md">
            <Stack gap="lg">
              <H2>How Often Should You Service Your AC?</H2>
              <P>
                For most residential systems in South-East Queensland, we recommend a professional
                service at least once a year — ideally before the summer cooling season begins. If
                your system runs year-round for both heating and cooling, or if you live near the
                coast where salt air accelerates corrosion, twice-yearly servicing is a smart
                investment.
              </P>
              <P>
                Commercial systems and units in dusty or high-use environments may need quarterly
                servicing. We can set up a maintenance schedule tailored to your property and usage
                so you never have to think about it.
              </P>
              <P>
                Between professional services, we recommend checking your filters every month and
                rinsing them under warm water if they look dusty. Keeping the area around your
                outdoor unit clear of leaves and debris also helps maintain airflow.
              </P>
            </Stack>
          </Container>
        </Section>

        <ServiceCTA
          title="Due for a Service?"
          description="Book your AC maintenance today. We offer competitive rates, flexible scheduling, and thorough inspections on every visit."
        />

        <RelatedServices services={relatedServices} />
      </main>
      <Footer />

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Air Conditioning Service & Maintenance',
          description:
            'Regular AC servicing, filter cleaning, gas top-ups, and performance checks in Brisbane and Gold Coast.',
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
          serviceType: 'Air Conditioning Service and Maintenance',
        }}
      />
    </>
  );
}
