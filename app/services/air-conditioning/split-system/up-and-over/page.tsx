import type { Metadata } from 'next';
import { Section, Container, Stack, Grid } from '@/components/ui/layout';
import { H2, H3, P, Lead } from '@/components/ui/typography';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { RelatedServices } from '@/components/blocks/RelatedServices';
import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Up & Over Split System Installation',
  description:
    'Up and over split system installation in Brisbane & Gold Coast. Pipes routed over walls or through ceilings when direct drilling is not feasible. Licensed installers.',
  alternates: {
    canonical: `${siteConfig.url}/services/air-conditioning/split-system/up-and-over`,
  },
};

export default function UpAndOverPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Up & Over Split System Installation',
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
          url: `${siteConfig.url}/services/air-conditioning/split-system/up-and-over`,
        }}
      />

      <ServiceHero
        title="Up & Over Split System Installation"
        description="When pipes cannot go straight through or around the wall, an up and over installation routes them up through the ceiling cavity and back down to the outdoor unit."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Air Conditioning', href: '/services/air-conditioning' },
          { label: 'Split System', href: '/services/air-conditioning/split-system' },
          { label: 'Up & Over', href: '/services/air-conditioning/split-system/up-and-over' },
        ]}
      />

      {/* What is up & over */}
      <Section spacing="lg">
        <Container size="xl">
          <Stack gap="lg" className="max-w-3xl">
            <H2>What Is an Up & Over Installation?</H2>
            <Lead>
              An up and over installation routes the refrigerant pipes up from the indoor unit, over
              a wall or through the ceiling cavity, and then back down to the outdoor unit on the
              other side of the building.
            </Lead>
            <P>
              This is the most complex of the three standard split system installation types. It is
              used when neither a back-to-back nor a side entry is feasible — typically because the
              outdoor unit needs to be on a completely different wall, or because structural
              elements prevent any horizontal pipe run at the indoor unit level.
            </P>
            <P>
              The pipes travel vertically from the indoor unit into the roof space, across the
              ceiling cavity (supported and insulated), and then exit through the eave or fascia
              before dropping down to the outdoor unit. In some cases the pipes may run up an
              external wall, over the roofline, and down the other side.
            </P>
          </Stack>
        </Container>
      </Section>

      {/* When you need up & over */}
      <Section spacing="lg" className="bg-muted/40">
        <Container size="xl">
          <Stack gap="xl">
            <H2>When You Need an Up & Over</H2>
            <Grid cols={2} gap="md">
              <Stack gap="sm" className="border-border bg-card rounded-xl border p-6">
                <H3>No External Wall Access</H3>
                <P>
                  When the indoor unit is on an internal wall with no direct path to the outside,
                  the pipes must travel through the ceiling to reach an external wall where the
                  outdoor unit can be placed.
                </P>
              </Stack>
              <Stack gap="sm" className="border-border bg-card rounded-xl border p-6">
                <H3>Apartment or Townhouse Rules</H3>
                <P>
                  Body corporate may restrict outdoor unit placement to specific locations such as a
                  balcony, courtyard, or rooftop — requiring a longer pipe run through the ceiling
                  cavity.
                </P>
              </Stack>
              <Stack gap="sm" className="border-border bg-card rounded-xl border p-6">
                <H3>Structural Obstructions</H3>
                <P>
                  Retaining walls, shared party walls, waterproofed bathroom walls, or load-bearing
                  steel may prevent any horizontal penetration at the unit level.
                </P>
              </Stack>
              <Stack gap="sm" className="border-border bg-card rounded-xl border p-6">
                <H3>Multi-Level Buildings</H3>
                <P>
                  When installing on a ground-floor room of a two-storey home with the outdoor unit
                  at ground level on the opposite side of the building.
                </P>
              </Stack>
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* Condensation pump */}
      <Section spacing="lg">
        <Container size="xl">
          <Stack gap="lg" className="max-w-3xl">
            <H2>Condensation Pump Requirement</H2>
            <P>
              When the indoor unit is mounted on an internal wall or the pipe run travels through
              the ceiling, gravity drainage is often not possible. In these cases a condensation
              pump is required to remove the water that naturally forms on the evaporator coil
              during cooling.
            </P>
            <P>
              The condensation pump is a small electric pump mounted near the indoor unit (usually
              concealed inside the ceiling cavity or behind the unit). It collects the water and
              pumps it through a small tube to the nearest drain point or external outlet.
            </P>
            <P>
              A condensation pump adds $250 or more to the installation cost depending on the pump
              model and the distance to the nearest drain. We will confirm whether a pump is needed
              during your on-site assessment.
            </P>
          </Stack>
        </Container>
      </Section>

      {/* Pricing */}
      <Section spacing="lg" className="bg-muted/40">
        <Container size="xl">
          <Stack gap="lg" className="max-w-3xl">
            <H2>Additional Costs</H2>
            <P>
              An up and over installation adds $50 to $80 per metre above the standard back-to-back
              pipe allowance. The higher per-metre rate reflects the additional complexity of
              working in ceiling cavities, the need for pipe supports, extra insulation, and the
              increased labour time.
            </P>
            <P>Common additional costs for up and over installations:</P>
            <Stack as="ul" gap="sm" className="list-disc pl-6">
              <li>
                <P>Extra copper piping at $50 to $80 per metre</P>
              </li>
              <li>
                <P>Condensation pump if gravity drainage is not possible ($250+)</P>
              </li>
              <li>
                <P>Ceiling access modifications if no existing manhole is available</P>
              </li>
              <li>
                <P>Additional PVC ducting for exposed external pipe runs</P>
              </li>
              <li>
                <P>Extended electrical cabling for longer distances from the switchboard</P>
              </li>
            </Stack>
            <P>
              Every up and over job is unique. We provide a detailed written quote after the on-site
              inspection so you can make an informed decision with no surprises.
            </P>
          </Stack>
        </Container>
      </Section>

      <ServiceCTA
        title="Need an Up & Over Installation?"
        description="Complex installations are our specialty. Book a free on-site assessment and we will find the best solution for your space."
      />

      <RelatedServices
        title="Other Installation Types"
        services={[
          {
            title: 'Back-to-Back Installation',
            description:
              'The simplest and most affordable option — outdoor unit directly behind the indoor unit.',
            href: '/services/air-conditioning/split-system/back-to-back',
          },
          {
            title: 'Side Entry Installation',
            description:
              'Pipes routed through an adjacent wall for better aesthetics or to avoid obstructions.',
            href: '/services/air-conditioning/split-system/side-entry',
          },
          {
            title: 'Split System Overview',
            description: 'Compare all split system installation types and learn how they work.',
            href: '/services/air-conditioning/split-system',
          },
        ]}
      />
    </>
  );
}
