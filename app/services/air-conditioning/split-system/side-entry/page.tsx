import type { Metadata } from 'next';
import { Section, Container, Stack, Grid } from '@/components/ui/layout';
import { H2, H3, P, Lead } from '@/components/ui/typography';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { RelatedServices } from '@/components/blocks/RelatedServices';
import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Side Entry Split System Installation',
  description:
    'Side entry split system installation in Brisbane & Gold Coast. Refrigerant lines routed through a side wall for cleaner aesthetics. Licensed & ARC certified installers.',
  alternates: {
    canonical: `${siteConfig.url}/services/air-conditioning/split-system/side-entry`,
  },
};

export default function SideEntryPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Side Entry Split System Installation',
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
          url: `${siteConfig.url}/services/air-conditioning/split-system/side-entry`,
        }}
      />

      <ServiceHero
        title="Side Entry Split System Installation"
        description="When a straight-through pipe run is not ideal, a side entry installation routes the refrigerant lines through an adjacent wall for a cleaner look or to avoid obstructions."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Air Conditioning', href: '/services/air-conditioning' },
          { label: 'Split System', href: '/services/air-conditioning/split-system' },
          { label: 'Side Entry', href: '/services/air-conditioning/split-system/side-entry' },
        ]}
      />

      {/* What is side entry */}
      <Section spacing="lg">
        <Container size="xl">
          <Stack gap="lg" className="max-w-3xl">
            <H2>What Is a Side Entry Installation?</H2>
            <Lead>
              A side entry installation differs from a standard back-to-back by routing the
              refrigerant lines through a side wall rather than directly through the wall behind the
              indoor unit.
            </Lead>
            <P>
              Instead of drilling straight through and placing the outdoor unit directly behind the
              indoor unit, the copper pipes exit the indoor unit and travel horizontally along the
              wall (concealed within pipe cover ducting) before passing through an adjacent wall to
              reach the outdoor unit.
            </P>
            <P>
              This method is commonly chosen when there is a window, door, or built-in furniture
              directly behind the indoor unit, when the homeowner prefers the outdoor unit to be
              positioned around a corner for aesthetic reasons, or when the wall structure behind
              the unit makes direct drilling impractical.
            </P>
          </Stack>
        </Container>
      </Section>

      {/* When to choose side entry */}
      <Section spacing="lg" className="bg-muted/40">
        <Container size="xl">
          <Stack gap="xl">
            <H2>When to Choose Side Entry</H2>
            <Grid cols={2} gap="md">
              <Stack gap="sm" className="border-border bg-card rounded-xl border p-6">
                <H3>Aesthetic Reasons</H3>
                <P>
                  You may not want the outdoor unit visible from the front of your home. A side
                  entry allows the unit to be tucked around a corner or placed in a less visible
                  location, with the pipe run neatly covered in colour-matched ducting along the
                  wall.
                </P>
              </Stack>
              <Stack gap="sm" className="border-border bg-card rounded-xl border p-6">
                <H3>Wall Obstructions</H3>
                <P>
                  If the wall directly behind the indoor unit has a window, sliding door, meter box,
                  hot water system, or other obstruction, a side entry lets us route around it
                  without compromising the indoor unit placement.
                </P>
              </Stack>
              <Stack gap="sm" className="border-border bg-card rounded-xl border p-6">
                <H3>Structural Constraints</H3>
                <P>
                  Some walls have steel beams, double brick construction, or waterproofing membranes
                  that make direct penetration difficult. A side entry avoids these issues by using
                  an adjacent wall for the pipe pass-through.
                </P>
              </Stack>
              <Stack gap="sm" className="border-border bg-card rounded-xl border p-6">
                <H3>Outdoor Unit Placement</H3>
                <P>
                  Body corporate rules, council setback requirements, or noise considerations may
                  require the outdoor unit to be in a specific location that does not align with a
                  back-to-back setup.
                </P>
              </Stack>
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* Pricing */}
      <Section spacing="lg">
        <Container size="xl">
          <Stack gap="lg" className="max-w-3xl">
            <H2>Additional Cost</H2>
            <P>
              A side entry installation typically adds $100 to $150 on top of the standard
              back-to-back price. The additional cost covers the extra copper piping, insulation,
              PVC pipe cover ducting, and the labour for the longer and more complex pipe run.
            </P>
            <P>
              The exact amount depends on the distance the pipes need to travel along the wall and
              the number of bends required. We will measure this during your free on-site quote and
              provide a fixed price — no hidden extras.
            </P>
          </Stack>
        </Container>
      </Section>

      {/* What is included */}
      <Section spacing="lg" className="bg-muted/40">
        <Container size="xl">
          <Stack gap="lg" className="max-w-3xl">
            <H2>What Is Included</H2>
            <P>Every side entry installation includes everything in a back-to-back, plus:</P>
            <Stack as="ul" gap="sm" className="list-disc pl-6">
              <li>
                <P>Extended copper refrigerant piping for the horizontal wall run</P>
              </li>
              <li>
                <P>Colour-matched PVC pipe cover ducting along the external wall</P>
              </li>
              <li>
                <P>Additional pipe insulation for the extended run</P>
              </li>
              <li>
                <P>Second wall penetration with waterproof sealing</P>
              </li>
              <li>
                <P>
                  All standard electrical work — dedicated circuit, isolator, compliance certificate
                </P>
              </li>
              <li>
                <P>Vacuum, pressure test, commissioning, and customer walkthrough</P>
              </li>
            </Stack>
          </Stack>
        </Container>
      </Section>

      <ServiceCTA
        title="Need a Side Entry Installation?"
        description="Not sure which installation type you need? Book a free on-site assessment and we will recommend the best option for your home."
      />

      <RelatedServices
        title="Other Installation Types"
        services={[
          {
            title: 'Back-to-Back Installation',
            description:
              'The standard installation with the shortest pipe run — the most affordable option for most homes.',
            href: '/services/air-conditioning/split-system/back-to-back',
          },
          {
            title: 'Up & Over Installation',
            description:
              'Pipes routed up and over walls or through ceiling cavities for complex installations.',
            href: '/services/air-conditioning/split-system/up-and-over',
          },
          {
            title: 'Split System Overview',
            description:
              'Learn how split system air conditioning works and compare all installation types.',
            href: '/services/air-conditioning/split-system',
          },
        ]}
      />
    </>
  );
}
