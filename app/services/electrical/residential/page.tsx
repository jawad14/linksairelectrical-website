import type { Metadata } from 'next';
import { Sun, BatteryCharging, Zap, Lightbulb, Fan, Wind, AirVent, Cable } from 'lucide-react';
import { Header } from '@/components/blocks/Header';
import { Footer } from '@/components/blocks/Footer';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { RelatedServices } from '@/components/blocks/RelatedServices';
import { JsonLd } from '@/components/seo/JsonLd';
import { Section, Container, Stack, Grid } from '@/components/ui/layout';
import { H2, H3, P, Lead } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

const PAGE_URL = `${siteConfig.url}/services/electrical/residential`;

export const metadata: Metadata = {
  title: 'Residential Electrician Brisbane',
  description:
    'Licensed residential electrician in Brisbane & Gold Coast. Solar & battery, switchboard upgrades, EV chargers, downlights, ceiling fans, data points, and more. Call 0468 432 538.',
  alternates: { canonical: PAGE_URL },
};

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Electrical', href: '/services/electrical' },
  { label: 'Residential', href: '/services/electrical/residential' },
];

const services = [
  {
    icon: Sun,
    title: 'Solar & Battery Systems',
    description:
      'Reduce your energy bills with a solar panel and battery storage system designed for your home. We handle the full installation from panels to inverter to battery, and assist with rebate paperwork.',
  },
  {
    icon: Zap,
    title: 'Switchboard Upgrades',
    description:
      'Older switchboards with ceramic fuses are a safety risk and cannot support modern appliances. We upgrade to a new safety switch-equipped switchboard that meets current Australian standards.',
  },
  {
    icon: BatteryCharging,
    title: 'EV Charger Installation',
    description:
      'Charge your electric vehicle at home with a dedicated wall-mounted charger. We install all major brands and ensure your switchboard and wiring can handle the additional load safely.',
  },
  {
    icon: Lightbulb,
    title: 'Downlight Installation',
    description:
      'Upgrade to modern LED downlights for a cleaner look and lower power bills. We install recessed downlights in existing ceilings with minimal disruption, including fire-rated fittings where required.',
  },
  {
    icon: Fan,
    title: 'Ceiling Fan Installation',
    description:
      'Ceiling fans are a cost-effective way to improve comfort year-round. We install and wire ceiling fans in any room, including options with integrated lights and remote controls.',
  },
  {
    icon: Wind,
    title: 'Bathroom Exhaust Fans',
    description:
      'Proper ventilation prevents mould and moisture damage in wet areas. We install inline and ceiling-mounted exhaust fans ducted to the outside, not just into the roof space.',
  },
  {
    icon: AirVent,
    title: 'Ceiling Exhaust Fans',
    description:
      'Remove stale air and excess heat from your home with properly ducted ceiling exhaust fans. Ideal for laundries, kitchens, and enclosed areas that need better airflow.',
  },
  {
    icon: Cable,
    title: 'Data Point Installation',
    description:
      'Hard-wired Ethernet is faster and more reliable than Wi-Fi for home offices, media rooms, and smart home systems. We install Cat6 data points throughout your home with clean, concealed cabling.',
  },
];

const relatedServices = [
  {
    title: 'General Maintenance',
    description: 'LED upgrades, power points, smoke detectors, and more.',
    href: '/services/electrical/maintenance',
  },
  {
    title: 'Builder Services',
    description: 'Complete electrical and AC solutions for new builds.',
    href: '/services/builder',
  },
  {
    title: 'Air Conditioning',
    description: 'Split systems, ducted AC, repairs, and servicing.',
    href: '/services/air-conditioning/repair-installation',
  },
];

export default function ResidentialElectricalPage() {
  return (
    <>
      <Header />
      <main>
        <ServiceHero
          title="Residential Electrician Brisbane"
          description="From solar installations to switchboard upgrades, our licensed electricians deliver safe, high-quality electrical work for homes across Brisbane and the Gold Coast."
          breadcrumbs={breadcrumbs}
        />

        {/* Service Cards */}
        <Section spacing="lg">
          <Container size="xl">
            <Stack gap="xl">
              <Stack gap="md" align="center" className="text-center">
                <H2>Residential Electrical Services</H2>
                <Lead className="max-w-2xl">
                  We cover every electrical need in your home — whether you are building new,
                  renovating, or simply upgrading for safety and efficiency.
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

        {/* Safety & Compliance */}
        <Section spacing="lg" className="bg-muted/40">
          <Container size="md">
            <Stack gap="lg">
              <H2>Safety & Compliance First</H2>
              <P>
                Every residential electrical job we complete is carried out to Australian Standard
                AS/NZS 3000 (the Wiring Rules) and inspected to ensure full compliance. We hold
                Queensland Electrical Licence {siteConfig.license} and carry comprehensive public
                liability and professional indemnity insurance.
              </P>
              <P>
                We issue a Certificate of Compliance for all notifiable electrical work, giving you
                documentation that the job was done correctly. This is important for insurance,
                property sales, and building certifications.
              </P>
              <P>
                Our team stays current with the latest regulations and product developments through
                ongoing training. When we recommend a product or approach, it is because it is the
                safest and most effective option — not because it is the most expensive.
              </P>
            </Stack>
          </Container>
        </Section>

        {/* Why Choose Us */}
        <Section spacing="lg">
          <Container size="md">
            <Stack gap="lg">
              <H2>Why Homeowners Choose Links Air & Electrical</H2>
              <P>
                We are a family-owned business that treats every home like our own. That means clean
                work areas, dust sheets where needed, and no mess left behind. We show up on time,
                explain what we are doing in plain language, and never surprise you with unexpected
                charges.
              </P>
              <P>
                Because we handle both electrical and air conditioning work, we can often complete
                related jobs in a single visit — saving you the cost and hassle of booking multiple
                tradespeople. If you are installing a new split system and want a few extra power
                points while we are there, we can do it all at once.
              </P>
            </Stack>
          </Container>
        </Section>

        <ServiceCTA
          title="Need a Residential Electrician?"
          description="Contact us today for a free, no-obligation quote on any home electrical work. We service Brisbane, Gold Coast, Logan, and surrounding areas."
        />

        <RelatedServices services={relatedServices} />
      </main>
      <Footer />

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Residential Electrician Brisbane',
          description:
            'Licensed residential electrician in Brisbane and Gold Coast. Solar, switchboard upgrades, EV chargers, downlights, ceiling fans, and data points.',
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
          serviceType: 'Residential Electrical Services',
        }}
      />
    </>
  );
}
