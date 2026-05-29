import type { Metadata } from 'next';
import Image from 'next/image';
import { UtilityBar } from '@/components/blocks/UtilityBar';
import { Header } from '@/components/blocks/Header';
import { Footer } from '@/components/blocks/Footer';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { Heading, P } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Up & Over Split System Installation Brisbane — Links Air & Electrical',
  description:
    'Up and over split system installation for multi-storey homes and complex layouts. Professional AC installation across Brisbane & Gold Coast. Call 1300 010 393.',
  alternates: {
    canonical: `${siteConfig.url}/up-over-installation`,
  },
  openGraph: {
    title: 'Up & Over Split System Installation — Links Air & Electrical',
    description:
      'Up & over AC installation — pipes run through the roof cavity for multi-storey homes and complex setups.',
    url: `${siteConfig.url}/up-over-installation`,
  },
};

export default function UpOverPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        <ServiceHero
          eyebrow="Split System"
          title="Up & Over Installation"
          image="/images/services/airconditioning.webp"
          imageAlt="Up and over air conditioning installation by Links Air & Electrical"
        />

        {/* ── Content Section ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto max-w-[820px]">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                Complex Installations
              </span>
              <Heading
                level={2}
                className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                When the Outdoor Unit Cannot Go Behind the Wall
              </Heading>
              <P className="mt-5 text-[17px] leading-[1.7] text-[#4F6172]">
                An up-and-over installation is used when the outdoor unit needs to be placed on a
                different side of the building from the indoor head — typically because there is no
                suitable external wall directly behind the unit, or the home is multi-storey and the
                compressor must sit at ground level.
              </P>
              <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                In this setup, the copper piping runs up from the indoor unit into the roof cavity,
                travels across the ceiling space, and then drops down the outside wall to the
                outdoor unit. It is the most involved of the three installation types and requires
                more labour, more piping, and careful planning to ensure the refrigerant lines are
                properly insulated and supported throughout the run.
              </P>
              <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                Despite being more complex, this is a very common install in Queensland homes —
                especially townhouses, double-storey builds, and homes with limited external wall
                space. Our team has done hundreds of these and knows exactly how to route the
                pipework for the cleanest, most reliable result.
              </P>
              <div className="mt-10 flex flex-col gap-8 sm:flex-row">
                <div className="relative aspect-[3/2] flex-1 overflow-hidden rounded-[22px] shadow-[0_24px_60px_-20px_rgba(14,27,44,0.25)]">
                  <Image
                    src="/images/services/pages/up-over-1.webp"
                    alt="Up and over air conditioning installation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="relative aspect-[6/5] flex-1 overflow-hidden rounded-[22px] shadow-[0_24px_60px_-20px_rgba(14,27,44,0.25)]">
                  <Image
                    src="/images/services/pages/up-over-2.webp"
                    alt="Up and over installation pipework routing"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
              </div>
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
                  Up &amp; Over Pricing
                </Heading>
              </div>

              <div className="rounded-[14px] border border-[#E3E9F0] bg-white p-8">
                <P className="text-[16px] leading-[1.7] text-[#4F6172]">
                  Up-and-over installations typically fall in the{' '}
                  <strong className="text-[#0E1B2C]">$1,000 to $1,500+</strong> range (labour only),
                  depending on the length of the pipe run, roof access, building height, and whether
                  additional electrical work is needed.
                </P>
                <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                  Every job is different, so we always inspect on-site before quoting. You will
                  receive a detailed breakdown with no hidden costs before we pick up a single tool.
                </P>
                <P className="mt-4 text-[15px] font-semibold text-[#0E1B2C]">
                  Typical range: $1,000 – $1,500+ (labour only, complexity dependent)
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
          name: 'Up & Over Split System Installation',
          description:
            'Up and over split system air conditioning installation for multi-storey homes in Brisbane & Gold Coast.',
          url: `${siteConfig.url}/up-over-installation`,
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
