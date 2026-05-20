import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Section, Container, Stack, Grid } from '@/components/ui/layout';
import { H2, H3, P, Lead } from '@/components/ui/typography';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { RelatedServices } from '@/components/blocks/RelatedServices';
import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Split System Air Conditioning Installation',
  description:
    'Professional split system air conditioning installation in Brisbane & Gold Coast. Back-to-back, side entry, and up & over installations. Licensed electricians & ARC certified.',
  alternates: {
    canonical: `${siteConfig.url}/services/air-conditioning/split-system`,
  },
};

const installationTypes = [
  {
    title: 'Back-to-Back Installation',
    description:
      'The standard and most cost-effective installation. The indoor and outdoor units are mounted on opposite sides of the same wall with the shortest possible pipe run.',
    href: '/services/air-conditioning/split-system/back-to-back',
  },
  {
    title: 'Side Entry Installation',
    description:
      'Refrigerant lines run through a side wall instead of straight through. Ideal when aesthetics matter or when obstructions prevent a direct pipe run.',
    href: '/services/air-conditioning/split-system/side-entry',
  },
  {
    title: 'Up & Over Installation',
    description:
      'Pipes run up and over a wall or through the ceiling cavity. Used when direct wall penetration is not feasible due to structural or aesthetic constraints.',
    href: '/services/air-conditioning/split-system/up-and-over',
  },
];

export default function SplitSystemPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Split System Air Conditioning Installation',
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
          url: `${siteConfig.url}/services/air-conditioning/split-system`,
        }}
      />

      <ServiceHero
        title="Split System Air Conditioning"
        description="The most popular air conditioning choice for Australian homes. Efficient, affordable, and quick to install with heating and cooling in one unit."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Air Conditioning', href: '/services/air-conditioning' },
          { label: 'Split System', href: '/services/air-conditioning/split-system' },
        ]}
      />

      {/* How split systems work */}
      <Section spacing="lg">
        <Container size="xl">
          <Stack gap="lg" className="max-w-3xl">
            <H2>How Split System Air Conditioning Works</H2>
            <Lead>
              A split-type air conditioner consists of two main components — an indoor unit and an
              outdoor unit — connected by refrigerant copper piping and electrical cabling.
            </Lead>
            <P>
              The indoor unit houses the evaporator coil and fan. Warm air from your room is drawn
              over the cold evaporator coil, cooling it before blowing it back into the space. The
              refrigerant absorbs the heat and carries it through insulated copper pipes to the
              outdoor unit.
            </P>
            <P>
              The outdoor unit contains the compressor and condenser coil. Here, the absorbed heat
              is released into the outside air. The refrigerant is then cycled back to the indoor
              unit to repeat the process. In heating mode, the cycle reverses — extracting heat from
              the outdoor air and delivering it inside.
            </P>
            <P>
              The two units are connected by a pair of copper pipes (the liquid line and suction
              line), a drainage pipe for condensation, and the electrical control wiring. This
              connection method is what determines the installation type and cost.
            </P>
          </Stack>
        </Container>
      </Section>

      {/* Installation types */}
      <Section spacing="lg" className="bg-muted/40">
        <Container size="xl">
          <Stack gap="xl">
            <Stack gap="md" className="max-w-3xl">
              <H2>Installation Types</H2>
              <P>
                The way we route the refrigerant piping between the indoor and outdoor units affects
                the complexity and cost of your installation. There are three standard
                configurations:
              </P>
            </Stack>
            <Grid cols={3} gap="md">
              {installationTypes.map((type) => (
                <Link
                  key={type.href}
                  href={type.href}
                  className="group border-border bg-card rounded-xl border p-6 transition-shadow hover:shadow-md"
                >
                  <Stack gap="sm">
                    <H3 className="group-hover:text-secondary transition-colors">{type.title}</H3>
                    <P variant="muted" className="text-sm">
                      {type.description}
                    </P>
                    <span className="text-accent inline-flex items-center gap-1 text-sm font-semibold transition-transform group-hover:translate-x-1">
                      Learn More <ArrowRight className="size-4" />
                    </span>
                  </Stack>
                </Link>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* Electrical work */}
      <Section spacing="lg">
        <Container size="xl">
          <Stack gap="lg" className="max-w-3xl">
            <H2>Electrical Work Included</H2>
            <P>
              Every split system installation requires dedicated electrical work. As licensed
              electricians (Lic. {siteConfig.license}) and ARC-certified refrigeration mechanics
              (ARC {siteConfig.arc}), we handle everything in a single visit — no need to book a
              separate electrician.
            </P>
            <P>Our electrical work includes:</P>
            <Stack as="ul" gap="sm" className="list-disc pl-6">
              <li>
                <P>
                  Dedicated circuit from your switchboard to the outdoor unit, sized for the system
                  capacity
                </P>
              </li>
              <li>
                <P>Circuit breaker and isolator switch installation</P>
              </li>
              <li>
                <P>Interconnecting cable between indoor and outdoor units</P>
              </li>
              <li>
                <P>Switchboard upgrades if required (older homes may need additional capacity)</P>
              </li>
              <li>
                <P>Full compliance testing and certificate of compliance</P>
              </li>
            </Stack>
            <P>
              If your switchboard needs an upgrade or additional circuits, we will identify this
              during the quoting process so there are no surprises on installation day.
            </P>
          </Stack>
        </Container>
      </Section>

      {/* Brands */}
      <Section spacing="lg" className="bg-muted/40">
        <Container size="xl">
          <Stack gap="lg" className="max-w-3xl">
            <H2>Brands We Install</H2>
            <P>
              We supply and install split systems from all leading manufacturers including Daikin,
              Mitsubishi Electric, Fujitsu, Panasonic, ActronAir, Samsung, LG, Hisense, and TECO. We
              will recommend the right brand and model based on your room size, orientation, and
              budget.
            </P>
          </Stack>
        </Container>
      </Section>

      <ServiceCTA
        title="Get a Split System Quote"
        description="Tell us your room size and we will recommend the right system. Free on-site quotes across Brisbane and the Gold Coast."
      />

      <RelatedServices
        title="Other Air Conditioning Services"
        services={[
          {
            title: 'Ducted Air Conditioning',
            description:
              'Whole-home climate control through concealed ductwork with zoned temperature management.',
            href: '/services/air-conditioning/ducted',
          },
          {
            title: 'VRV/VRF Systems',
            description:
              'High-efficiency multi-zone systems for larger homes and commercial buildings.',
            href: '/services/air-conditioning/vrv-vrf',
          },
          {
            title: 'Repairs & Installation',
            description: 'Expert diagnosis and repair of all air conditioning brands and models.',
            href: '/services/air-conditioning/repair-installation',
          },
        ]}
      />
    </>
  );
}
