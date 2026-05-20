import type { Metadata } from 'next';
import { Ruler, Building2, Wrench, CheckCircle2, Users, ClipboardList } from 'lucide-react';
import { Header } from '@/components/blocks/Header';
import { Footer } from '@/components/blocks/Footer';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { RelatedServices } from '@/components/blocks/RelatedServices';
import { JsonLd } from '@/components/seo/JsonLd';
import { Section, Container, Stack, Grid } from '@/components/ui/layout';
import { H2, H3, P, Lead } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

const PAGE_URL = `${siteConfig.url}/services/air-conditioning/design-construction`;

export const metadata: Metadata = {
  title: 'AC Design & Construction',
  description:
    'Professional air conditioning design and construction services for new builds and renovations in Brisbane & Gold Coast. HVAC planning with architects and builders. Call 0468 432 538.',
  alternates: { canonical: PAGE_URL },
};

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Air Conditioning', href: '/services/air-conditioning' },
  { label: 'Design & Construction', href: '/services/air-conditioning/design-construction' },
];

const designFeatures = [
  {
    icon: Ruler,
    title: 'Custom HVAC Design',
    description:
      'We create tailored HVAC designs that account for your floor plan, insulation, window placement, and local climate conditions to deliver optimal comfort year-round.',
  },
  {
    icon: Building2,
    title: 'New Build Integration',
    description:
      'We work alongside your architect and builder from the planning stage, ensuring ductwork, piping, and electrical infrastructure are integrated seamlessly into the build.',
  },
  {
    icon: Wrench,
    title: 'Renovation Retrofitting',
    description:
      'Adding air conditioning to an existing property requires careful planning. We design solutions that minimise disruption while maximising performance.',
  },
  {
    icon: Users,
    title: 'Builder Collaboration',
    description:
      'Our team coordinates directly with builders, project managers, and other trades to keep your project on schedule and within budget.',
  },
  {
    icon: ClipboardList,
    title: 'Compliance & Certification',
    description:
      'Every design meets Australian standards and local council requirements. We handle all compliance documentation and certification for your peace of mind.',
  },
  {
    icon: CheckCircle2,
    title: 'Energy-Efficient Solutions',
    description:
      'We specify high-efficiency systems and zoning strategies that reduce running costs without compromising comfort across every room.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Site Assessment & Consultation',
    description:
      'We review your plans or inspect the existing property, discuss your comfort goals, and assess the building envelope to determine the best approach.',
  },
  {
    step: '02',
    title: 'System Design & Specification',
    description:
      'Our engineers produce a detailed HVAC design including load calculations, equipment selection, duct layouts, and zoning plans tailored to your property.',
  },
  {
    step: '03',
    title: 'Quotation & Approval',
    description:
      'You receive a transparent, itemised quote covering equipment, labour, and materials. We walk you through every detail before any work begins.',
  },
  {
    step: '04',
    title: 'Installation & Commissioning',
    description:
      'Our licensed technicians install and commission the system, coordinating with other trades to ensure a smooth build process with minimal delays.',
  },
];

const relatedServices = [
  {
    title: 'Repair & Installation',
    description: 'Expert AC repair and new system installation for all major brands.',
    href: '/services/air-conditioning/repair-installation',
  },
  {
    title: 'Service & Maintenance',
    description: 'Regular servicing to keep your system running at peak efficiency.',
    href: '/services/air-conditioning/service-maintenance',
  },
  {
    title: 'Builder Services',
    description: 'Complete electrical and AC solutions for residential builders.',
    href: '/services/builder',
  },
];

export default function DesignConstructionPage() {
  return (
    <>
      <Header />
      <main>
        <ServiceHero
          title="AC Design & Construction"
          description="Purpose-built air conditioning solutions for new builds, renovations, and commercial fit-outs across Brisbane and the Gold Coast."
          breadcrumbs={breadcrumbs}
        />

        {/* What We Offer */}
        <Section spacing="lg">
          <Container size="xl">
            <Stack gap="xl">
              <Stack gap="md" align="center" className="text-center">
                <H2>Designed for Your Space, Built to Last</H2>
                <Lead className="max-w-2xl">
                  Every property is different. We design HVAC systems from the ground up to match
                  your building layout, usage patterns, and energy goals — so you get the right
                  system, not a one-size-fits-all solution.
                </Lead>
              </Stack>
              <Grid cols={3} gap="md">
                {designFeatures.map((feature) => (
                  <Stack
                    key={feature.title}
                    gap="sm"
                    className="border-border bg-card rounded-xl border p-6"
                  >
                    <feature.icon className="text-accent size-8" />
                    <H3>{feature.title}</H3>
                    <P variant="muted">{feature.description}</P>
                  </Stack>
                ))}
              </Grid>
            </Stack>
          </Container>
        </Section>

        {/* Process */}
        <Section spacing="lg" className="bg-muted/40">
          <Container size="xl">
            <Stack gap="xl">
              <Stack gap="md" align="center" className="text-center">
                <H2>Our Design & Construction Process</H2>
                <Lead className="max-w-2xl">
                  From initial consultation to final commissioning, we manage every step so you can
                  focus on your build.
                </Lead>
              </Stack>
              <Grid cols={2} gap="lg">
                {processSteps.map((step) => (
                  <Stack
                    key={step.step}
                    gap="sm"
                    className="border-border bg-card rounded-xl border p-6"
                  >
                    <P className="text-accent/30 text-4xl font-bold">{step.step}</P>
                    <H3>{step.title}</H3>
                    <P variant="muted">{step.description}</P>
                  </Stack>
                ))}
              </Grid>
            </Stack>
          </Container>
        </Section>

        {/* Why work with us */}
        <Section spacing="lg">
          <Container size="md">
            <Stack gap="lg">
              <H2>Why Choose Links Air for Design & Construction?</H2>
              <P>
                With over a decade of experience working alongside architects, builders, and project
                managers, we understand the pace and precision that construction projects demand.
                Our team holds both electrical and refrigeration licences, which means a single
                point of contact for your HVAC needs — no juggling multiple contractors.
              </P>
              <P>
                We work with all major brands including Daikin, Mitsubishi Electric, Fujitsu, and
                Samsung to recommend the best system for your budget and building type. Whether it
                is a single-storey home, a multi-level townhouse, or a commercial tenancy, we have
                the expertise to deliver a system that performs from day one.
              </P>
              <P>
                Every project is backed by manufacturer warranties, our workmanship guarantee, and
                full compliance documentation — so you can hand over to your client or move in with
                complete confidence.
              </P>
            </Stack>
          </Container>
        </Section>

        <ServiceCTA
          title="Planning a New Build or Renovation?"
          description="Get in touch for a free HVAC design consultation. We work with your builder to deliver the right system on time and on budget."
        />

        <RelatedServices services={relatedServices} />
      </main>
      <Footer />

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'AC Design & Construction',
          description:
            'Professional air conditioning design and construction services for new builds and renovations in Brisbane and Gold Coast.',
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
          serviceType: 'HVAC Design and Construction',
        }}
      />
    </>
  );
}
