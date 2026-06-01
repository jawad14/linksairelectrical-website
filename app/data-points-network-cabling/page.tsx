import type { Metadata } from 'next';
import { Cable, Layers, CheckCircle, Monitor, Building2, ArrowUpCircle } from 'lucide-react';
import { UtilityBar } from '@/components/blocks/UtilityBar';
import { Header } from '@/components/blocks/Header';
import { Footer } from '@/components/blocks/Footer';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { Heading, P } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Data Points & Network Cabling Brisbane — Links Air & Electrical',
  description:
    'Structured data cabling and network point installation for homes and offices. Cat6 and fibre options. Call 1300 010 393.',
  alternates: {
    canonical: `${siteConfig.url}/data-points-network-cabling`,
  },
  openGraph: {
    title: 'Data Points & Network Cabling Brisbane — Links Air & Electrical',
    description:
      'Structured data cabling and network point installation for homes and offices. Cat6 and fibre options.',
    url: `${siteConfig.url}/data-points-network-cabling`,
  },
};

const benefits = [
  {
    icon: Cable,
    title: 'Cat6 & Fibre Options',
    desc: 'We install Cat6 copper cabling for reliable gigabit speeds, plus fibre-optic runs for longer distances and higher bandwidth.',
  },
  {
    icon: Layers,
    title: 'Neat Cable Management',
    desc: 'All cabling is run through wall cavities, ceiling spaces or conduit — labelled, bundled and out of sight.',
  },
  {
    icon: CheckCircle,
    title: 'Fully Tested & Certified',
    desc: 'Every data point is tested with a professional cable analyser and you receive a certification report on completion.',
  },
  {
    icon: Monitor,
    title: 'Home Office Ready',
    desc: 'Dedicated data points for your home office mean faster, more stable connections than Wi-Fi alone can deliver.',
  },
  {
    icon: Building2,
    title: 'Multi-Room Coverage',
    desc: 'We run data points to every room that needs connectivity — living areas, bedrooms, media rooms and outdoor entertainment zones.',
  },
  {
    icon: ArrowUpCircle,
    title: 'Future-Proofed',
    desc: 'Structured cabling installed today supports tomorrow&apos;s network speeds, smart home devices and expanding bandwidth demands.',
  },
];

export default function DataPointsNetworkCablingPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        <ServiceHero
          eyebrow="Data & Networking"
          title="Data Points & Network Cabling"
          image="/images/services/banner-hero.webp"
          imageAlt="Structured network cabling installed by Links Air & Electrical"
        />

        {/* ── Intro ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto max-w-[760px]">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                Structured Cabling
              </span>
              <Heading
                level={2}
                className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                Reliable Network Cabling for Home and Office
              </Heading>
              <P className="mt-5 text-[17px] leading-[1.7] text-[#4F6172]">
                Whether you&apos;re setting up a home office, upgrading a commercial fit-out or
                wiring a new build, structured data cabling gives you the fast, stable connections
                that Wi-Fi alone can&apos;t always guarantee. We install Cat6 and fibre-optic
                cabling to suit your speed and distance requirements.
              </P>
              <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                Every installation is designed with future-proofing in mind — neat cable management
                through wall cavities and ceiling spaces, clearly labelled patch panels, and full
                testing and certification so you know every point performs to specification.
              </P>
            </div>
          </div>
        </section>

        {/* ── Benefits ── */}
        <section className="bg-[#F4F7FA] py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto mb-14 max-w-[760px] text-center">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                What we offer
              </span>
              <Heading
                level={2}
                className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                Data Cabling Benefits
              </Heading>
            </div>

            <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1">
              {benefits.map((b) => (
                <div key={b.title} className="rounded-[14px] border border-[#E3E9F0] bg-white p-7">
                  <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-[#E9F4FB] text-[#1779B8]">
                    <b.icon className="h-6 w-6" />
                  </div>
                  <Heading
                    level={3}
                    className="font-heading mb-2 text-[17px] font-bold text-[#0E1B2C]"
                  >
                    {b.title}
                  </Heading>
                  <P className="text-[14px] leading-[1.6] text-[#4F6172]">{b.desc}</P>
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
          name: 'Data Points & Network Cabling',
          description:
            'Structured data cabling and network point installation for homes and offices in Brisbane.',
          url: `${siteConfig.url}/data-points-network-cabling`,
          provider: {
            '@type': 'LocalBusiness',
            '@id': `${siteConfig.url}/#business`,
            name: siteConfig.name,
          },
          areaServed: siteConfig.serviceAreas.map((area) => ({
            '@type': 'City',
            name: area,
          })),
        }}
      />
    </>
  );
}
