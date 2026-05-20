import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Wind, Thermometer, Wrench, Settings, Building2 } from 'lucide-react';
import { Section, Container, Stack, Grid } from '@/components/ui/layout';
import { H2, H3, P, Lead } from '@/components/ui/typography';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { BrandPartners } from '@/components/blocks/BrandPartners';
import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Air Conditioning Services Brisbane & Gold Coast',
  description:
    'Professional air conditioning installation, repairs, and maintenance across Brisbane and the Gold Coast. Split systems, ducted AC, VRV/VRF systems. Call 0468 432 538.',
  alternates: {
    canonical: `${siteConfig.url}/services/air-conditioning`,
  },
};

const services = [
  {
    title: 'Split System Air Conditioning',
    description:
      'Wall-mounted split systems for individual rooms. Affordable, energy-efficient cooling and heating with quick installation.',
    href: '/services/air-conditioning/split-system',
    icon: Wind,
  },
  {
    title: 'Ducted Air Conditioning',
    description:
      'Whole-home comfort through a concealed duct network. Zoned climate control with a single outdoor unit.',
    href: '/services/air-conditioning/ducted',
    icon: Thermometer,
  },
  {
    title: 'VRV/VRF Systems',
    description:
      'Variable Refrigerant Volume and Flow systems for large homes and commercial buildings with individual zone control.',
    href: '/services/air-conditioning/vrv-vrf',
    icon: Building2,
  },
  {
    title: 'Repairs & Installation',
    description:
      'Expert diagnosis and repair of all air conditioning brands. New installations with full electrical work included.',
    href: '/services/air-conditioning/repair-installation',
    icon: Wrench,
  },
  {
    title: 'Service & Maintenance',
    description:
      'Regular servicing to keep your system running at peak efficiency, extend its lifespan, and maintain your warranty.',
    href: '/services/air-conditioning/service-maintenance',
    icon: Settings,
  },
];

export default function AirConditioningPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Air Conditioning Services',
          provider: {
            '@type': 'LocalBusiness',
            name: siteConfig.name,
            url: siteConfig.url,
            telephone: siteConfig.phone,
          },
          areaServed: siteConfig.serviceAreas.map((area) => ({
            '@type': 'City',
            name: area,
          })),
          description: metadata.description as string,
          url: `${siteConfig.url}/services/air-conditioning`,
        }}
      />

      <ServiceHero
        title="Air Conditioning Services"
        description="From single-room split systems to whole-home ducted solutions, we design, install, and maintain air conditioning systems across Brisbane and the Gold Coast."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Air Conditioning', href: '/services/air-conditioning' },
        ]}
      />

      {/* Overview */}
      <Section spacing="lg">
        <Container size="xl">
          <Stack gap="lg" className="max-w-3xl">
            <H2>Complete Air Conditioning Solutions</H2>
            <Lead>
              Whether you need a single split system for a bedroom or a fully ducted system for a
              new build, {siteConfig.name} has you covered. We are licensed electricians and
              refrigeration mechanics — meaning one team handles everything from the electrical
              wiring to the final gas charge.
            </Lead>
            <P>
              We supply and install all major brands including Daikin, Mitsubishi Electric, Fujitsu,
              Panasonic, ActronAir, and more. Every installation comes with a compliance
              certificate, manufacturer warranty registration, and our workmanship guarantee.
            </P>
          </Stack>
        </Container>
      </Section>

      {/* Service cards */}
      <Section spacing="lg" className="bg-muted/40">
        <Container size="xl">
          <Stack gap="xl">
            <H2>Our Air Conditioning Services</H2>
            <Grid cols={3} gap="md">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="group border-border bg-card rounded-xl border p-6 transition-shadow hover:shadow-md"
                  >
                    <Stack gap="sm">
                      <div className="bg-primary/10 flex size-12 items-center justify-center rounded-lg">
                        <Icon className="text-primary size-6" />
                      </div>
                      <H3 className="group-hover:text-secondary transition-colors">
                        {service.title}
                      </H3>
                      <P variant="muted" className="text-sm">
                        {service.description}
                      </P>
                      <span className="text-accent inline-flex items-center gap-1 text-sm font-semibold transition-transform group-hover:translate-x-1">
                        Learn More <ArrowRight className="size-4" />
                      </span>
                    </Stack>
                  </Link>
                );
              })}
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* Why choose us */}
      <Section spacing="lg">
        <Container size="xl">
          <Stack gap="xl">
            <Stack gap="md" className="max-w-3xl">
              <H2>Why Choose {siteConfig.name}?</H2>
              <P>
                We are a fully licensed electrical and refrigeration business servicing South East
                Queensland. Here is what sets us apart:
              </P>
            </Stack>
            <Grid cols={3} gap="md">
              {[
                {
                  title: 'Licensed & Insured',
                  text: `Electrical licence ${siteConfig.license} and ARC licence ${siteConfig.arc}. Fully insured for your peace of mind.`,
                },
                {
                  title: 'One-Team Installation',
                  text: 'We handle electrical and refrigeration in-house — no subcontractors, no scheduling delays.',
                },
                {
                  title: 'All Major Brands',
                  text: 'Authorised suppliers and installers for Daikin, Mitsubishi, Fujitsu, Panasonic, ActronAir, and more.',
                },
                {
                  title: '7-Day Service',
                  text: 'Available Monday to Sunday with emergency call-out support when you need it most.',
                },
                {
                  title: 'Free Quotes',
                  text: 'Obligation-free on-site assessments so you know the full cost before any work begins.',
                },
                {
                  title: 'Warranty & Compliance',
                  text: 'Every job comes with a compliance certificate and full manufacturer warranty registration.',
                },
              ].map((item) => (
                <Stack
                  key={item.title}
                  gap="sm"
                  className="border-border bg-card rounded-xl border p-6"
                >
                  <H3>{item.title}</H3>
                  <P variant="muted" className="text-sm">
                    {item.text}
                  </P>
                </Stack>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Section>

      <BrandPartners />

      <ServiceCTA
        title="Need Air Conditioning Advice?"
        description="Call us for a free, no-obligation quote or on-site assessment. We service Brisbane, Gold Coast, Logan, Ipswich, and surrounding areas 7 days a week."
      />
    </>
  );
}
