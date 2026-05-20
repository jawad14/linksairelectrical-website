import type { Metadata } from 'next';
import { HardHat, ShieldCheck, Users, Banknote, Clock, CheckCircle2 } from 'lucide-react';
import { Header } from '@/components/blocks/Header';
import { Footer } from '@/components/blocks/Footer';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { RelatedServices } from '@/components/blocks/RelatedServices';
import { JsonLd } from '@/components/seo/JsonLd';
import { Section, Container, Stack, Grid } from '@/components/ui/layout';
import { H2, H3, P, Lead } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

const PAGE_URL = `${siteConfig.url}/services/builder`;

export const metadata: Metadata = {
  title: 'Builder Services — Electrical & AC',
  description:
    'Complete electrical and air conditioning services for residential builders in Brisbane & Gold Coast. Under-slab, rough-ins, and fit-offs. Licensed, insured, and reliable. Call 0468 432 538.',
  alternates: { canonical: PAGE_URL },
};

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Builder Services', href: '/services/builder' },
];

const buildStages = [
  {
    stage: 'Stage 1',
    title: 'Under-Slab',
    description:
      'Before the slab is poured, we install all underground conduits, cable runs, and earth stakes. Getting this right first time avoids costly concrete cutting later. We coordinate with your concreters and plumbers to ensure our conduits are positioned correctly and protected during the pour.',
  },
  {
    stage: 'Stage 2',
    title: 'Rough-Ins',
    description:
      'Once the frame is up and before the plaster goes on, we run all electrical cabling, install switch and outlet boxes, run data cables, and position AC pipework and drainage. This is where we also rough in for ceiling fans, exhaust fans, range hoods, and any specialty lighting. Every circuit is tested and photographed for your records.',
  },
  {
    stage: 'Stage 3',
    title: 'Fit-Offs',
    description:
      'After painting and finishing, we return to install and connect all fittings — power points, switches, downlights, pendant lights, exhaust fans, smoke detectors, the switchboard, and air conditioning units. We commission every system, test safety switches, label circuits, and hand over a fully documented, compliance-certified installation.',
  },
];

const whyChooseUs = [
  {
    icon: Clock,
    title: '10+ Years Experience',
    description:
      'We have worked alongside residential builders for over a decade. We understand construction timelines, builder expectations, and how to keep your project moving without delays.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety & Quality Guaranteed',
    description:
      'Every installation meets Australian standards. We hold Electrical Licence ' +
      siteConfig.license +
      ' and ARC ' +
      siteConfig.arc +
      ', with full public liability and professional indemnity insurance.',
  },
  {
    icon: Users,
    title: 'Local Family Business',
    description:
      'We are a family-owned and operated business based in South-East Queensland. Our reputation is built on reliability and relationships — many of our builders have worked with us for years.',
  },
  {
    icon: Banknote,
    title: 'Great Value, No Surprises',
    description:
      'We provide detailed, itemised quotes based on your plans so you know exactly what the electrical and AC package costs before the build starts. No hidden extras.',
  },
  {
    icon: CheckCircle2,
    title: 'Free Quotes on Plans',
    description:
      'Send us your building plans and we will provide a comprehensive quote covering all three stages — electrical, data, and air conditioning — at no cost.',
  },
  {
    icon: HardHat,
    title: 'One Contractor, Two Trades',
    description:
      'Because we are licensed for both electrical and refrigeration, builders only need to coordinate with one subcontractor instead of two. Simpler scheduling, cleaner communication, better results.',
  },
];

const relatedServices = [
  {
    title: 'Residential Electrical',
    description: 'Full residential electrical services for existing homes.',
    href: '/services/electrical/residential',
  },
  {
    title: 'AC Design & Construction',
    description: 'HVAC design and installation for new builds.',
    href: '/services/air-conditioning/design-construction',
  },
  {
    title: 'General Maintenance',
    description: 'Ongoing electrical maintenance and small jobs.',
    href: '/services/electrical/maintenance',
  },
];

export default function BuilderServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServiceHero
          title="Builder Services — Electrical & AC"
          description="Complete electrical and air conditioning solutions for residential builders. One licensed contractor for both trades, from under-slab to fit-off."
          breadcrumbs={breadcrumbs}
        />

        {/* Introduction */}
        <Section spacing="lg">
          <Container size="md">
            <Stack gap="lg">
              <H2>Your Trusted Electrical & AC Subcontractor</H2>
              <P>
                Links Air & Electrical is a family-owned business serving residential builders
                across Brisbane and the Gold Coast. We provide complete electrical and air
                conditioning services for new home builds — from the initial under-slab work right
                through to final fit-offs and commissioning.
              </P>
              <P>
                Having both trades under one roof means fewer subcontractors on your site, simpler
                scheduling, and a single point of accountability for all things electrical and HVAC.
                Our team understands the pace of residential construction and turns up when we say
                we will — because we know delays on one trade hold up the entire build.
              </P>
            </Stack>
          </Container>
        </Section>

        {/* 3-Stage Process */}
        <Section spacing="lg" className="bg-muted/40">
          <Container size="xl">
            <Stack gap="xl">
              <Stack gap="md" align="center" className="text-center">
                <H2>Our 3-Stage Build Process</H2>
                <Lead className="max-w-2xl">
                  We follow a proven three-stage process that aligns with your construction timeline
                  and ensures nothing is missed.
                </Lead>
              </Stack>
              <Grid cols={3} gap="lg">
                {buildStages.map((item) => (
                  <Stack
                    key={item.stage}
                    gap="sm"
                    className="border-border bg-card rounded-xl border p-6"
                  >
                    <P className="text-accent text-sm font-bold tracking-wide uppercase">
                      {item.stage}
                    </P>
                    <H3>{item.title}</H3>
                    <P variant="muted">{item.description}</P>
                  </Stack>
                ))}
              </Grid>
            </Stack>
          </Container>
        </Section>

        {/* Why Choose Us */}
        <Section spacing="lg">
          <Container size="xl">
            <Stack gap="xl">
              <Stack gap="md" align="center" className="text-center">
                <H2>Why Builders Choose Us</H2>
                <Lead className="max-w-2xl">
                  Reliability, quality, and value — the three things that matter most when you are
                  running a build.
                </Lead>
              </Stack>
              <Grid cols={3} gap="md">
                {whyChooseUs.map((item) => (
                  <Stack
                    key={item.title}
                    gap="sm"
                    className="border-border bg-card rounded-xl border p-6"
                  >
                    <item.icon className="text-accent size-8" />
                    <H3>{item.title}</H3>
                    <P variant="muted">{item.description}</P>
                  </Stack>
                ))}
              </Grid>
            </Stack>
          </Container>
        </Section>

        {/* What We Cover */}
        <Section spacing="lg" className="bg-muted/40">
          <Container size="md">
            <Stack gap="lg">
              <H2>What Our Builder Package Includes</H2>
              <P>
                When you engage Links Air & Electrical for a new build, our quote covers everything
                electrical and HVAC related:
              </P>
              <Stack as="ul" gap="sm" className="list-disc pl-6">
                <li>
                  <P>Switchboard supply, installation, and labelling</P>
                </li>
                <li>
                  <P>All power points, light switches, and dimmer switches</P>
                </li>
                <li>
                  <P>Downlights, feature lighting, and external lighting</P>
                </li>
                <li>
                  <P>Ceiling fans and exhaust fans</P>
                </li>
                <li>
                  <P>Smoke detector supply and installation (compliant with QLD legislation)</P>
                </li>
                <li>
                  <P>TV, phone, and data point cabling</P>
                </li>
                <li>
                  <P>Oven, cooktop, and rangehood connections</P>
                </li>
                <li>
                  <P>Air conditioning supply, installation, and commissioning</P>
                </li>
                <li>
                  <P>Certificates of compliance for all notifiable work</P>
                </li>
              </Stack>
              <P>
                We quote from your plans before the build starts, so your client knows the exact
                cost and there are no variations unless the scope changes.
              </P>
            </Stack>
          </Container>
        </Section>

        <ServiceCTA
          title="Building a New Home?"
          description="Send us your plans for a free, no-obligation quote covering all electrical and air conditioning work — all three stages."
        />

        <RelatedServices services={relatedServices} />
      </main>
      <Footer />

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Builder Services — Electrical & AC',
          description:
            'Complete electrical and air conditioning services for residential builders in Brisbane and Gold Coast. Under-slab, rough-ins, and fit-offs.',
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
          serviceType: 'Builder Electrical and Air Conditioning Services',
        }}
      />
    </>
  );
}
