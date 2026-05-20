import type { Metadata } from 'next';
import { Wrench, ThermometerSun, ShieldCheck, Zap, Clock, BadgeCheck } from 'lucide-react';
import { Header } from '@/components/blocks/Header';
import { Footer } from '@/components/blocks/Footer';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { RelatedServices } from '@/components/blocks/RelatedServices';
import { JsonLd } from '@/components/seo/JsonLd';
import { Section, Container, Stack, Grid } from '@/components/ui/layout';
import { H2, H3, P, Lead } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

const PAGE_URL = `${siteConfig.url}/services/air-conditioning/repair-installation`;

export const metadata: Metadata = {
  title: 'Air Conditioning Repair & Installation',
  description:
    'Expert air conditioning repair and installation for all brands in Brisbane & Gold Coast. Fast diagnosis, quality parts, and professional installation. Call 0468 432 538.',
  alternates: { canonical: PAGE_URL },
};

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Air Conditioning', href: '/services/air-conditioning' },
  { label: 'Repair & Installation', href: '/services/air-conditioning/repair-installation' },
];

const repairServices = [
  {
    icon: Wrench,
    title: 'Fault Diagnosis & Troubleshooting',
    description:
      'Our technicians use professional diagnostic tools to pinpoint the exact cause of your AC issue — whether it is an electrical fault, refrigerant leak, compressor failure, or sensor problem.',
  },
  {
    icon: ThermometerSun,
    title: 'Refrigerant Leak Detection & Regas',
    description:
      'Low on gas? We locate and repair refrigerant leaks before recharging your system to the correct level, restoring full cooling and heating performance.',
  },
  {
    icon: Zap,
    title: 'Electrical & Control Board Repair',
    description:
      'From blown capacitors to faulty PCBs, we repair electrical components using genuine or OEM-equivalent parts to get your system back online fast.',
  },
  {
    icon: ShieldCheck,
    title: 'Compressor & Motor Replacement',
    description:
      'When a major component fails, we assess whether repair or replacement is more cost-effective and give you an honest recommendation before proceeding.',
  },
  {
    icon: Clock,
    title: 'Same-Week Availability',
    description:
      'We know a broken AC is urgent, especially in a Queensland summer. We prioritise repair call-outs and aim to have your system running within days, not weeks.',
  },
  {
    icon: BadgeCheck,
    title: 'All Brands Serviced',
    description:
      'Daikin, Mitsubishi Electric, Fujitsu, Samsung, LG, Panasonic, Carrier, Toshiba — we repair and service all major brands and models.',
  },
];

const installationTypes = [
  {
    title: 'Split System Installation',
    description:
      'Wall-mounted, floor-mounted, and multi-head split systems for individual rooms or open-plan living areas. We handle back-to-back, side-entry, and up-and-over pipe runs.',
  },
  {
    title: 'Ducted System Installation',
    description:
      'Whole-home comfort with concealed ductwork in your ceiling space. We design and install ducted systems with zone control for maximum efficiency.',
  },
  {
    title: 'Multi-Split Systems',
    description:
      'One outdoor unit powering multiple indoor units across your home — ideal when space for outdoor units is limited or you want a cleaner exterior.',
  },
  {
    title: 'Replacement & Upgrades',
    description:
      'Upgrading from an old, inefficient system? We remove the existing unit, upgrade pipework and electrics if needed, and install a modern, energy-efficient replacement.',
  },
];

const relatedServices = [
  {
    title: 'Service & Maintenance',
    description: 'Regular servicing to prevent breakdowns and maintain efficiency.',
    href: '/services/air-conditioning/service-maintenance',
  },
  {
    title: 'Design & Construction',
    description: 'HVAC design for new builds and renovations.',
    href: '/services/air-conditioning/design-construction',
  },
  {
    title: 'AC FAQ',
    description: 'Common questions about air conditioning systems answered.',
    href: '/services/air-conditioning/faq',
  },
];

export default function RepairInstallationPage() {
  return (
    <>
      <Header />
      <main>
        <ServiceHero
          title="Air Conditioning Repair & Installation"
          description="From emergency repairs to brand-new installations, our licensed technicians deliver fast, reliable AC solutions for homes and businesses across Brisbane and the Gold Coast."
          breadcrumbs={breadcrumbs}
        />

        {/* Repair Services */}
        <Section spacing="lg">
          <Container size="xl">
            <Stack gap="xl">
              <Stack gap="md" align="center" className="text-center">
                <H2>AC Repair Services</H2>
                <Lead className="max-w-2xl">
                  When your air conditioner stops working, you need a fix you can trust — not a
                  temporary patch. We diagnose the root cause and repair it properly the first time.
                </Lead>
              </Stack>
              <Grid cols={3} gap="md">
                {repairServices.map((service) => (
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

        {/* Installation Types */}
        <Section spacing="lg" className="bg-muted/40">
          <Container size="xl">
            <Stack gap="xl">
              <Stack gap="md" align="center" className="text-center">
                <H2>New AC Installation</H2>
                <Lead className="max-w-2xl">
                  Whether you are fitting out a new home or replacing an old system, we recommend
                  and install the right unit for your space, budget, and climate zone.
                </Lead>
              </Stack>
              <Grid cols={2} gap="lg">
                {installationTypes.map((type) => (
                  <Stack
                    key={type.title}
                    gap="sm"
                    className="border-border bg-card rounded-xl border p-6"
                  >
                    <H3>{type.title}</H3>
                    <P variant="muted">{type.description}</P>
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
              <H2>Why Trust Links Air for Your AC Repairs & Installation?</H2>
              <P>
                We hold both electrical and refrigeration licences (Licence {siteConfig.license},
                ARC {siteConfig.arc}), which means we can handle the complete job — from running new
                electrical circuits to brazing copper pipework and commissioning your system. No
                need to book a separate electrician.
              </P>
              <P>
                Every installation includes a full system commissioning, where we verify airflow,
                refrigerant charge, electrical connections, and drainage before handing over. We
                also register your manufacturer warranty so you are covered from day one.
              </P>
              <P>
                Our technicians are trained across all major brands, and we stock common parts to
                reduce return visits. For installations, we provide a detailed quote upfront with no
                hidden costs — what we quote is what you pay.
              </P>
            </Stack>
          </Container>
        </Section>

        <ServiceCTA
          title="AC Playing Up? Need a New System?"
          description="Call us today or request a free quote online. We offer fast turnaround on repairs and competitive pricing on new installations."
        />

        <RelatedServices services={relatedServices} />
      </main>
      <Footer />

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Air Conditioning Repair & Installation',
          description:
            'Expert air conditioning repair and installation for all brands in Brisbane and Gold Coast.',
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
          serviceType: 'Air Conditioning Repair and Installation',
        }}
      />
    </>
  );
}
