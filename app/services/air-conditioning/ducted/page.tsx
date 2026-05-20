import type { Metadata } from 'next';
import { Section, Container, Stack, Grid } from '@/components/ui/layout';
import { H2, H3, P, Lead } from '@/components/ui/typography';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { RelatedServices } from '@/components/blocks/RelatedServices';
import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Ducted Air Conditioning Brisbane & Gold Coast',
  description:
    'Ducted air conditioning installation, service, and repair across Brisbane and the Gold Coast. Whole-home comfort with zoned climate control. Call 0468 432 538.',
  alternates: {
    canonical: `${siteConfig.url}/services/air-conditioning/ducted`,
  },
};

export default function DuctedPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Ducted Air Conditioning Installation',
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
          url: `${siteConfig.url}/services/air-conditioning/ducted`,
        }}
      />

      <ServiceHero
        title="Ducted Air Conditioning"
        description="Whole-home heating and cooling through a concealed duct network. Consistent comfort in every room with a single, quiet system hidden in your ceiling."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Air Conditioning', href: '/services/air-conditioning' },
          { label: 'Ducted', href: '/services/air-conditioning/ducted' },
        ]}
      />

      {/* Overview */}
      <Section spacing="lg">
        <Container size="xl">
          <Stack gap="lg" className="max-w-3xl">
            <H2>How Ducted Air Conditioning Works</H2>
            <Lead>
              A ducted system uses a central indoor unit — typically installed in the ceiling cavity
              or under the floor — to distribute conditioned air through a network of insulated
              ducts to every room in your home.
            </Lead>
            <P>
              The indoor unit draws return air through a central grille, passes it over the
              evaporator coil to cool (or heat) it, and then pushes the conditioned air through
              supply ducts to ceiling vents in each room. A single outdoor unit — the compressor and
              condenser — sits outside the home, connected to the indoor unit by refrigerant piping.
            </P>
            <P>
              The result is even, consistent temperatures throughout the house with no visible
              indoor units on the walls. Only discreet ceiling grilles and a thermostat controller
              are visible inside.
            </P>
          </Stack>
        </Container>
      </Section>

      {/* Benefits */}
      <Section spacing="lg" className="bg-muted/40">
        <Container size="xl">
          <Stack gap="xl">
            <H2>Benefits of Ducted Air Conditioning</H2>
            <Grid cols={3} gap="md">
              <Stack gap="sm" className="border-border bg-card rounded-xl border p-6">
                <H3>Consistent Temperatures</H3>
                <P>
                  Every room receives conditioned air simultaneously. No more hot spots in bedrooms
                  or cold corners in living areas — the entire home stays at your chosen
                  temperature.
                </P>
              </Stack>
              <Stack gap="sm" className="border-border bg-card rounded-xl border p-6">
                <H3>Aesthetic Design</H3>
                <P>
                  The entire system is hidden. Ducts run through the ceiling cavity, the indoor unit
                  is out of sight, and the only visible elements are slim ceiling grilles and the
                  controller on the wall.
                </P>
              </Stack>
              <Stack gap="sm" className="border-border bg-card rounded-xl border p-6">
                <H3>Zone Control</H3>
                <P>
                  Zoning allows you to divide your home into independent areas and control the
                  temperature in each zone separately. Only condition the rooms you are using to
                  save energy and reduce running costs.
                </P>
              </Stack>
              <Stack gap="sm" className="border-border bg-card rounded-xl border p-6">
                <H3>Quiet Operation</H3>
                <P>
                  With the indoor unit mounted in the ceiling and the compressor outside, noise
                  levels inside the home are significantly lower than wall-mounted split systems —
                  especially in bedrooms.
                </P>
              </Stack>
              <Stack gap="sm" className="border-border bg-card rounded-xl border p-6">
                <H3>Energy Efficiency</H3>
                <P>
                  Modern ducted systems with inverter technology adjust compressor speed to match
                  the load, using only the energy needed to maintain the set temperature rather than
                  cycling on and off.
                </P>
              </Stack>
              <Stack gap="sm" className="border-border bg-card rounded-xl border p-6">
                <H3>Property Value</H3>
                <P>
                  A well-designed ducted system is a significant selling point. Buyers in Brisbane
                  and the Gold Coast expect whole-home air conditioning, and ducted systems are
                  viewed as the premium option.
                </P>
              </Stack>
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* Zoning & AirTouch */}
      <Section spacing="lg">
        <Container size="xl">
          <Stack gap="lg" className="max-w-3xl">
            <H2>Smart Zoning with AirTouch 5</H2>
            <P>
              We recommend and install the AirTouch 5 zone controller — the most advanced ducted
              zoning system available in Australia. AirTouch replaces the standard wall controller
              with a sleek touchscreen panel and companion smartphone app.
            </P>
            <P>
              With AirTouch 5 you can control individual zones from your phone, set schedules and
              timers for each zone, adjust damper positions in 5% increments for precise airflow
              control, integrate with smart home systems including Google Home and Amazon Alexa, and
              monitor your system performance and energy usage.
            </P>
            <P>
              The precision zoning means you only cool or heat the rooms in use. This can reduce
              energy consumption by up to 30% compared to running the entire system at full capacity
              — the controller pays for itself in running cost savings.
            </P>
          </Stack>
        </Container>
      </Section>

      {/* New builds vs retrofits */}
      <Section spacing="lg" className="bg-muted/40">
        <Container size="xl">
          <Stack gap="xl">
            <H2>New Builds vs Existing Homes</H2>
            <Grid cols={2} gap="md">
              <Stack gap="sm" className="border-border bg-card rounded-xl border p-6">
                <H3>New Construction</H3>
                <P>
                  The ideal time to install ducted AC. We work with your builder during the framing
                  stage to run ducts before the ceiling goes up. This minimises cost, allows optimal
                  duct routing, and ensures every room gets the right airflow.
                </P>
              </Stack>
              <Stack gap="sm" className="border-border bg-card rounded-xl border p-6">
                <H3>Retrofit to Existing Homes</H3>
                <P>
                  Retrofitting is possible for most homes with accessible ceiling cavities. We
                  assess your roof space, plan the duct layout to minimise disruption, and install
                  with minimal impact to your home. Single-storey homes with a pitched roof are the
                  best candidates.
                </P>
              </Stack>
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* Brands */}
      <Section spacing="lg">
        <Container size="xl">
          <Stack gap="lg" className="max-w-3xl">
            <H2>Brands We Install</H2>
            <P>
              We supply and install ducted systems from Daikin, Mitsubishi Electric, Fujitsu,
              ActronAir, and Panasonic. Each brand has strengths in different areas — energy
              ratings, noise levels, zoning compatibility, and warranty terms. We will recommend the
              right system based on your home size, layout, and budget.
            </P>
          </Stack>
        </Container>
      </Section>

      <ServiceCTA
        title="Get a Ducted AC Quote"
        description="Planning a new build or upgrading your existing home? Contact us for a free design consultation and quote — we service Brisbane, Gold Coast, and surrounding areas."
      />

      <RelatedServices
        title="Other Air Conditioning Services"
        services={[
          {
            title: 'Split System Air Conditioning',
            description:
              'Individual room cooling and heating with wall-mounted indoor units — quick and affordable to install.',
            href: '/services/air-conditioning/split-system',
          },
          {
            title: 'VRV/VRF Systems',
            description:
              'Variable refrigerant systems for large homes and commercial buildings with individual zone control.',
            href: '/services/air-conditioning/vrv-vrf',
          },
          {
            title: 'Service & Maintenance',
            description:
              'Keep your ducted system running efficiently with regular professional servicing.',
            href: '/services/air-conditioning/service-maintenance',
          },
        ]}
      />
    </>
  );
}
