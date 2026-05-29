import type { Metadata } from 'next';
import { UtilityBar } from '@/components/blocks/UtilityBar';
import { Header } from '@/components/blocks/Header';
import { Footer } from '@/components/blocks/Footer';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { Heading, P } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Side Entry Split System Installation Brisbane — Links Air & Electrical',
  description:
    'Side entry split system installation for homes where back-to-back is not possible. Professional AC installation across Brisbane & Gold Coast. Call 1300 010 393.',
  alternates: {
    canonical: `${siteConfig.url}/side-entry-installation`,
  },
  openGraph: {
    title: 'Side Entry Split System Installation — Links Air & Electrical',
    description:
      'Side entry AC installation — pipework runs along the wall to the side, suited for brick walls or tricky layouts.',
    url: `${siteConfig.url}/side-entry-installation`,
  },
};

export default function SideEntryPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        <ServiceHero
          eyebrow="Split System"
          title="Side Entry Installation"
          image="/images/services/pages/side-entry.webp"
          imageAlt="Side entry air conditioning installation by Links Air & Electrical"
        />

        {/* ── Content Section ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto max-w-[820px]">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                When Back-to-Back Is Not an Option
              </span>
              <Heading
                level={2}
                className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                Side Entry — A Flexible Alternative
              </Heading>
              <P className="mt-5 text-[17px] leading-[1.7] text-[#4F6172]">
                A side entry installation is the go-to choice when a direct back-to-back setup is
                not practical. Instead of running the pipework straight through the wall behind the
                indoor unit, it travels along the wall to the side before exiting to reach the
                outdoor unit.
              </P>
              <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                This is commonly needed on solid brick or double-brick walls where drilling straight
                through is difficult, or when the outdoor unit needs to be positioned a few metres
                away from the indoor head. The pipe run is a little longer than a standard
                back-to-back, but still well within normal range for most homes.
              </P>
              <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                Our installers use PVC capping to keep external pipework neat and protected from the
                elements. The finished result looks clean, professional, and lasts the life of the
                system.
              </P>
            </div>
          </div>
        </section>

        {/* ── Pricing Note ── */}
        <section className="bg-[#F4F7FA] py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto max-w-[680px]">
              <div className="mb-10 text-center">
                <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                  Pricing Guide
                </span>
                <Heading
                  level={2}
                  className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
                >
                  Side Entry Pricing
                </Heading>
              </div>

              <div className="rounded-[14px] border border-[#E3E9F0] bg-white p-8">
                <P className="text-[16px] leading-[1.7] text-[#4F6172]">
                  Side entry installations typically cost{' '}
                  <strong className="text-[#0E1B2C]">$100 to $200 more</strong> than a standard
                  back-to-back install. The exact price depends on the length of the pipe run, the
                  type of wall, and whether additional brackets or supports are needed.
                </P>
                <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                  We always provide a firm quote before starting work, so you know exactly what to
                  expect. No call-out fees, no hidden extras.
                </P>
                <P className="mt-4 text-[15px] font-semibold text-[#0E1B2C]">
                  Typical range: $700 – $950 (labour only, GST inclusive)
                </P>
              </div>
            </div>
          </div>
        </section>

        <ServiceCTA />
      </main>
      <Footer />

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Side Entry Split System Installation',
          description:
            'Side entry split system air conditioning installation in Brisbane & Gold Coast.',
          url: `${siteConfig.url}/side-entry-installation`,
          provider: {
            '@type': 'LocalBusiness',
            '@id': `${siteConfig.url}/#business`,
            name: siteConfig.name,
          },
        }}
      />
    </>
  );
}
