import type { Metadata } from 'next';
import { Section, Container, Stack, Grid } from '@/components/ui/layout';
import { H2, H3, P, Lead } from '@/components/ui/typography';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { RelatedServices } from '@/components/blocks/RelatedServices';
import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'VRV/VRF Air Conditioning Systems',
  description:
    'VRV and VRF air conditioning installation in Brisbane & Gold Coast. Variable Refrigerant Volume/Flow systems for large homes and commercial buildings. Energy efficient multi-zone control.',
  alternates: {
    canonical: `${siteConfig.url}/services/air-conditioning/vrv-vrf`,
  },
};

export default function VrvVrfPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'VRV/VRF Air Conditioning Systems',
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
          url: `${siteConfig.url}/services/air-conditioning/vrv-vrf`,
        }}
      />

      <ServiceHero
        title="VRV/VRF Air Conditioning Systems"
        description="Advanced variable refrigerant technology for larger residential properties and commercial buildings. Maximum efficiency, individual zone control, and simultaneous heating and cooling."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Air Conditioning', href: '/services/air-conditioning' },
          { label: 'VRV/VRF', href: '/services/air-conditioning/vrv-vrf' },
        ]}
      />

      {/* What is VRV/VRF */}
      <Section spacing="lg">
        <Container size="xl">
          <Stack gap="lg" className="max-w-3xl">
            <H2>What Are VRV and VRF Systems?</H2>
            <Lead>
              VRV (Variable Refrigerant Volume) and VRF (Variable Refrigerant Flow) are two names
              for the same technology. VRV is the trademarked name used by Daikin, while VRF is the
              generic industry term used by other manufacturers.
            </Lead>
            <P>
              A VRV/VRF system connects a single powerful outdoor unit to multiple indoor units
              throughout a building via a network of refrigerant piping. Unlike traditional systems
              that deliver a fixed amount of refrigerant, VRV/VRF technology continuously varies the
              flow of refrigerant to each indoor unit based on the exact demand of each zone.
            </P>
            <P>
              This means each room or zone can be set to a different temperature, and some zones can
              be heating while others are cooling at the same time. The system only delivers the
              precise amount of energy each zone needs — nothing more, nothing less.
            </P>
          </Stack>
        </Container>
      </Section>

      {/* How it differs */}
      <Section spacing="lg" className="bg-muted/40">
        <Container size="xl">
          <Stack gap="xl">
            <H2>How VRV/VRF Differs from Other Systems</H2>
            <Grid cols={3} gap="md">
              <Stack gap="sm" className="border-border bg-card rounded-xl border p-6">
                <H3>vs Split Systems</H3>
                <P>
                  A multi-split system connects a few indoor units to one outdoor unit, but each
                  unit runs at the same capacity. VRV/VRF supports far more indoor units (up to 60+)
                  and varies the refrigerant flow to each independently.
                </P>
              </Stack>
              <Stack gap="sm" className="border-border bg-card rounded-xl border p-6">
                <H3>vs Ducted Systems</H3>
                <P>
                  Ducted systems distribute air through ducts from a single indoor unit. VRV/VRF
                  uses individual indoor units in each zone with no ductwork — meaning no energy
                  lost through duct leakage and more precise temperature control per room.
                </P>
              </Stack>
              <Stack gap="sm" className="border-border bg-card rounded-xl border p-6">
                <H3>Heat Recovery</H3>
                <P>
                  Three-pipe VRV/VRF systems (heat recovery) can simultaneously heat one zone and
                  cool another. The heat extracted from the cooling zone is transferred to the zone
                  that needs heating — recovering energy that would otherwise be wasted.
                </P>
              </Stack>
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* Benefits */}
      <Section spacing="lg">
        <Container size="xl">
          <Stack gap="xl">
            <Stack gap="md" className="max-w-3xl">
              <H2>Key Benefits</H2>
              <P>
                VRV/VRF systems are the technology of choice for large residential properties,
                multi-storey homes, offices, retail spaces, and commercial buildings across South
                East Queensland.
              </P>
            </Stack>
            <Grid cols={2} gap="md">
              <Stack gap="sm" className="border-border bg-card rounded-xl border p-6">
                <H3>Energy Efficiency</H3>
                <P>
                  Inverter-driven compressors adjust speed continuously to match the combined load
                  of all indoor units. Partial load operation — which is how systems run most of the
                  time — is where VRV/VRF delivers the greatest energy savings compared to
                  conventional systems.
                </P>
              </Stack>
              <Stack gap="sm" className="border-border bg-card rounded-xl border p-6">
                <H3>Individual Zone Control</H3>
                <P>
                  Every indoor unit is independently controllable. Occupants can set their own
                  temperature, and unoccupied zones can be turned off entirely — no wasted energy
                  conditioning empty rooms.
                </P>
              </Stack>
              <Stack gap="sm" className="border-border bg-card rounded-xl border p-6">
                <H3>Simultaneous Heating & Cooling</H3>
                <P>
                  In heat recovery mode, the system can heat sun-facing rooms in winter while
                  cooling server rooms or kitchens at the same time — using the rejected heat from
                  one zone to warm another.
                </P>
              </Stack>
              <Stack gap="sm" className="border-border bg-card rounded-xl border p-6">
                <H3>Flexible Indoor Units</H3>
                <P>
                  Choose from wall-mounted, ceiling cassette, ceiling concealed (ducted), floor
                  standing, and bulkhead units. Different rooms can use different indoor unit styles
                  on the same outdoor system.
                </P>
              </Stack>
              <Stack gap="sm" className="border-border bg-card rounded-xl border p-6">
                <H3>Scalable Design</H3>
                <P>
                  A single outdoor unit can support dozens of indoor units across multiple floors.
                  The system can be expanded in the future by adding more indoor units without
                  replacing the outdoor unit (within its capacity).
                </P>
              </Stack>
              <Stack gap="sm" className="border-border bg-card rounded-xl border p-6">
                <H3>Centralised Management</H3>
                <P>
                  Building-wide control systems allow monitoring, scheduling, and energy reporting
                  from a single interface — ideal for property managers and facility operators.
                </P>
              </Stack>
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* Applications */}
      <Section spacing="lg" className="bg-muted/40">
        <Container size="xl">
          <Stack gap="lg" className="max-w-3xl">
            <H2>Ideal Applications</H2>
            <P>VRV/VRF systems are best suited for:</P>
            <Stack as="ul" gap="sm" className="list-disc pl-6">
              <li>
                <P>
                  Large residential homes (400m+ floor area) where multiple split systems would
                  require too many outdoor units
                </P>
              </li>
              <li>
                <P>
                  Multi-storey homes and townhouses where different floors need independent climate
                  control
                </P>
              </li>
              <li>
                <P>
                  Offices, medical practices, and retail spaces requiring individual room control
                  and quiet operation
                </P>
              </li>
              <li>
                <P>
                  Mixed-use buildings where some areas need cooling while others need heating
                  simultaneously
                </P>
              </li>
              <li>
                <P>
                  Renovations and heritage buildings where ductwork is not practical but
                  whole-building climate control is needed
                </P>
              </li>
            </Stack>
            <P>
              We design VRV/VRF systems in-house using manufacturer design software to calculate
              pipe runs, capacity requirements, and refrigerant charge for your specific building.
              Every system is engineered — not guessed.
            </P>
          </Stack>
        </Container>
      </Section>

      <ServiceCTA
        title="Enquire About VRV/VRF Systems"
        description="VRV/VRF is a premium solution that requires expert design. Contact us for a consultation and we will assess whether it is the right fit for your building."
      />

      <RelatedServices
        title="Other Air Conditioning Services"
        services={[
          {
            title: 'Ducted Air Conditioning',
            description:
              'Whole-home comfort through a concealed duct network — ideal for new builds and single-storey homes.',
            href: '/services/air-conditioning/ducted',
          },
          {
            title: 'Split System Air Conditioning',
            description:
              'Wall-mounted units for individual rooms — the most popular and affordable option.',
            href: '/services/air-conditioning/split-system',
          },
          {
            title: 'Design & Construction',
            description:
              'End-to-end AC design for new builds — we work with your builder from the planning stage.',
            href: '/services/air-conditioning/design-construction',
          },
        ]}
      />
    </>
  );
}
