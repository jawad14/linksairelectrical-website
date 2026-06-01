import type { Metadata } from 'next';
import {
  UtensilsCrossed,
  Anchor,
  Weight,
  SlidersHorizontal,
  LayoutGrid,
  Sparkles,
} from 'lucide-react';
import { UtilityBar } from '@/components/blocks/UtilityBar';
import { Header } from '@/components/blocks/Header';
import { Footer } from '@/components/blocks/Footer';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import Image from 'next/image';
import { Heading, P } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Pendant Light Installation Brisbane — Links Air & Electrical',
  description:
    'Expert pendant light installation for kitchens, dining areas, and feature spaces. Meticulous wiring and clean finish. Call 1300 010 393.',
  alternates: {
    canonical: `${siteConfig.url}/pendant-light-installer`,
  },
  openGraph: {
    title: 'Pendant Light Installation Brisbane — Links Air & Electrical',
    description:
      'Expert pendant light installation for kitchens, dining areas, and feature spaces. Meticulous wiring and clean finish.',
    url: `${siteConfig.url}/pendant-light-installer`,
  },
};

const benefits = [
  {
    icon: UtensilsCrossed,
    title: 'Kitchen & Dining Specialist',
    desc: 'We install pendant lights over kitchen islands, breakfast bars, and dining tables with precise spacing and height.',
  },
  {
    icon: Anchor,
    title: 'Proper Ceiling Mounting',
    desc: 'Every pendant is secured to a suitable mounting point — timber noggin, ceiling joist, or rated toggle bolt — for long-term safety.',
  },
  {
    icon: Weight,
    title: 'Any Weight or Style',
    desc: 'From lightweight glass shades to heavy concrete or metal fixtures, we handle the structural requirements for any pendant.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Dimmer Integration',
    desc: 'Pair your pendants with a compatible dimmer switch for adjustable ambiance in living and dining spaces.',
  },
  {
    icon: LayoutGrid,
    title: 'Multi-Pendant Layouts',
    desc: 'Installing two, three, or more pendants in a row? We ensure even spacing, consistent drop height, and balanced wiring.',
  },
  {
    icon: Sparkles,
    title: 'Clean Wiring Finish',
    desc: 'All cabling is concealed within the ceiling cavity. No exposed wires, no visible junction boxes — just a polished result.',
  },
];

export default function PendantLightInstallerPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        <ServiceHero
          eyebrow="Feature Lighting"
          title="Pendant Light Installation"
          image="/images/services/banner-hero.webp"
          imageAlt="Pendant light installation by Links Air & Electrical"
        />

        {/* ── Intro ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="grid grid-cols-[1.1fr_1fr] items-center gap-[clamp(32px,6vw,80px)] max-[900px]:grid-cols-1">
              <div>
                <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                  Feature Lighting
                </span>
                <Heading
                  level={2}
                  className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
                >
                  Expert Pendant Light Installation
                </Heading>
                <P className="mt-5 text-[17px] leading-[1.7] text-[#4F6172]">
                  Pendant lights are more than just a light source — they&apos;re a feature element
                  that defines the character of a space. Whether hung over a kitchen island, dining
                  table, or used as a statement piece in a commercial fit-out, getting the
                  installation right matters. Height, spacing, weight support, and wiring all need
                  to be considered.
                </P>
                <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                  Our electricians handle every aspect of pendant light installation, from mounting
                  heavy fixtures with proper ceiling reinforcement to wiring multi-pendant layouts
                  with dimming capability. The result is a clean, professional finish with no
                  exposed wiring and every pendant perfectly positioned.
                </P>
              </div>
              <div className="hidden overflow-hidden rounded-[14px] md:block">
                <Image
                  src="/images/services/pages/pendant-light.webp"
                  alt="Pendant light installation by Links Air & Electrical"
                  width={600}
                  height={500}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Benefits ── */}
        <section className="bg-[#F4F7FA] py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto mb-14 max-w-[760px] text-center">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                Benefits
              </span>
              <Heading
                level={2}
                className="font-heading mb-[18px] text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                Why Choose Us for Pendant Lights?
              </Heading>
            </div>

            <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="flex items-start gap-4 rounded-[14px] border border-[#E3E9F0] bg-white p-6"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#E9F4FB] text-[#1779B8]">
                    <b.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <Heading
                      level={4}
                      className="font-heading text-[15px] font-bold text-[#0E1B2C]"
                    >
                      {b.title}
                    </Heading>
                    <P className="mt-1 text-[14px] leading-[1.5] text-[#4F6172]">{b.desc}</P>
                  </div>
                </div>
              ))}
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
          name: 'Pendant Light Installation',
          description:
            'Expert pendant light installation for kitchens, dining areas, and feature spaces in Brisbane & Gold Coast.',
          url: `${siteConfig.url}/pendant-light-installer`,
          provider: {
            '@type': 'LocalBusiness',
            '@id': `${siteConfig.url}/#business`,
            name: siteConfig.name,
          },
          areaServed: {
            '@type': 'GeoCircle',
            geoMidpoint: {
              '@type': 'GeoCoordinates',
              latitude: -27.4698,
              longitude: 153.0251,
            },
          },
        }}
      />
    </>
  );
}
