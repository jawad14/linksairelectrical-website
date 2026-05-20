import type { Metadata } from 'next';
import { Section, Container, Stack, Grid } from '@/components/ui/layout';
import { H2, H3, P, Lead } from '@/components/ui/typography';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { RelatedServices } from '@/components/blocks/RelatedServices';
import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Back-to-Back Split System Installation',
  description:
    'Standard back-to-back split system installation in Brisbane & Gold Coast. The most affordable AC installation with minimal pipe runs. Call 0468 432 538 for a free quote.',
  alternates: {
    canonical: `${siteConfig.url}/services/air-conditioning/split-system/back-to-back`,
  },
};

export default function BackToBackPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Back-to-Back Split System Installation',
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
          url: `${siteConfig.url}/services/air-conditioning/split-system/back-to-back`,
        }}
      />

      <ServiceHero
        title="Back-to-Back Split System Installation"
        description="The standard installation method where the indoor and outdoor units sit on opposite sides of the same wall — the most cost-effective way to install a split system."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Air Conditioning', href: '/services/air-conditioning' },
          { label: 'Split System', href: '/services/air-conditioning/split-system' },
          { label: 'Back-to-Back', href: '/services/air-conditioning/split-system/back-to-back' },
        ]}
      />

      {/* What is back-to-back */}
      <Section spacing="lg">
        <Container size="xl">
          <Stack gap="lg" className="max-w-3xl">
            <H2>What Is a Back-to-Back Installation?</H2>
            <Lead>
              A back-to-back installation is the simplest and most common way to mount a split
              system air conditioner. The indoor unit is mounted on the interior wall and the
              outdoor unit sits directly on the other side of the same wall.
            </Lead>
            <P>
              A single hole is drilled through the wall to pass the copper refrigerant pipes,
              drainage line, and interconnecting cable. Because the distance between the two units
              is minimal, this method uses the least amount of materials and labour — making it the
              most affordable option.
            </P>
          </Stack>
        </Container>
      </Section>

      {/* Pipe length limits */}
      <Section spacing="lg" className="bg-muted/40">
        <Container size="xl">
          <Stack gap="xl">
            <Stack gap="md" className="max-w-3xl">
              <H2>Pipe Length Allowances</H2>
              <P>
                The maximum copper pipe length included in a standard back-to-back installation
                depends on the building type:
              </P>
            </Stack>
            <Grid cols={2} gap="md">
              <Stack gap="sm" className="border-border bg-card rounded-xl border p-6">
                <H3>Single-Storey Homes</H3>
                <P>
                  Up to 3 metres of copper refrigerant piping is included as standard. This covers
                  the wall thickness plus the short drop to the outdoor unit on its mounting bracket
                  or slab.
                </P>
              </Stack>
              <Stack gap="sm" className="border-border bg-card rounded-xl border p-6">
                <H3>Two-Storey Homes</H3>
                <P>
                  Up to 4 metres of copper piping is included to account for the additional height
                  when the indoor unit is on the upper level and the outdoor unit sits at ground
                  level.
                </P>
              </Stack>
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* Additional costs */}
      <Section spacing="lg">
        <Container size="xl">
          <Stack gap="lg" className="max-w-3xl">
            <H2>Additional Costs</H2>
            <P>
              If your installation requires more than the standard pipe allowance, additional
              charges apply at $50 per metre. This covers the extra copper piping, insulation,
              ducting (pipe cover), and any additional electrical cabling needed for the longer run.
            </P>
            <P>
              Common reasons for exceeding the standard allowance include mounting the outdoor unit
              further along the wall (rather than directly behind), running pipes to a side fence or
              dedicated plant area, or installations on upper floors of multi-storey homes.
            </P>
            <P>
              We will always measure and confirm the total pipe run during your free on-site quote,
              so you know the exact cost before we start.
            </P>
          </Stack>
        </Container>
      </Section>

      {/* What is included */}
      <Section spacing="lg" className="bg-muted/40">
        <Container size="xl">
          <Stack gap="lg" className="max-w-3xl">
            <H2>What Is Included</H2>
            <P>Every back-to-back installation includes:</P>
            <Stack as="ul" gap="sm" className="list-disc pl-6">
              <li>
                <P>Indoor and outdoor unit mounting (wall bracket or concrete slab)</P>
              </li>
              <li>
                <P>
                  Copper refrigerant piping up to the standard allowance (3m single-storey, 4m
                  two-storey)
                </P>
              </li>
              <li>
                <P>PVC pipe cover (ducting) for a clean exterior finish</P>
              </li>
              <li>
                <P>Condensation drain line</P>
              </li>
              <li>
                <P>Dedicated electrical circuit from your switchboard</P>
              </li>
              <li>
                <P>Isolator switch at the outdoor unit</P>
              </li>
              <li>
                <P>Vacuum and pressure testing of the refrigerant system</P>
              </li>
              <li>
                <P>Commissioning, testing, and customer walkthrough</P>
              </li>
              <li>
                <P>Certificate of compliance for electrical and refrigeration work</P>
              </li>
            </Stack>
          </Stack>
        </Container>
      </Section>

      <ServiceCTA
        title="Book a Back-to-Back Installation"
        description="The most affordable way to get a split system installed. Contact us for a free on-site quote — we service Brisbane, Gold Coast, and surrounds 7 days a week."
      />

      <RelatedServices
        title="Other Installation Types"
        services={[
          {
            title: 'Side Entry Installation',
            description:
              'Pipes routed through a side wall for better aesthetics or to avoid obstructions.',
            href: '/services/air-conditioning/split-system/side-entry',
          },
          {
            title: 'Up & Over Installation',
            description:
              'Pipes run up and over walls or through ceiling cavities when direct drilling is not feasible.',
            href: '/services/air-conditioning/split-system/up-and-over',
          },
          {
            title: 'Split System Overview',
            description:
              'Learn how split system air conditioning works and which installation type suits your home.',
            href: '/services/air-conditioning/split-system',
          },
        ]}
      />
    </>
  );
}
