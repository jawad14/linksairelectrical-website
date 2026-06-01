import type { Metadata } from 'next';
import Image from 'next/image';
import { Building2, Gauge, Zap, Thermometer, Settings, TrendingUp } from 'lucide-react';
import { UtilityBar } from '@/components/blocks/UtilityBar';
import { Header } from '@/components/blocks/Header';
import { Footer } from '@/components/blocks/Footer';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { Heading, P } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'VRV/VRF Air Conditioning Systems — Commercial AC',
  description:
    'Expert VRV and VRF air conditioning systems for commercial buildings in Brisbane & Gold Coast. Multi-zone control, energy recovery & scalable design. Free quote.',
  alternates: {
    canonical: `${siteConfig.url}/vrv-vrf-air-conditioning`,
  },
  openGraph: {
    title: 'VRV/VRF Air Conditioning Systems — Commercial AC',
    description:
      'Expert VRV and VRF air conditioning systems for commercial buildings in Brisbane & Gold Coast.',
    url: `${siteConfig.url}/vrv-vrf-air-conditioning`,
  },
};

const features = [
  {
    icon: Building2,
    title: 'Built for Commercial',
    desc: 'VRV/VRF systems are engineered for offices, retail, hospitality and multi-storey buildings where traditional systems fall short.',
  },
  {
    icon: Gauge,
    title: 'Multi-Zone Control',
    desc: 'Each indoor unit operates independently, so different tenants or departments can set their own temperature without affecting others.',
  },
  {
    icon: Zap,
    title: 'Energy Recovery',
    desc: 'Heat recovery VRF systems can simultaneously cool one zone and heat another, recycling energy rather than wasting it.',
  },
  {
    icon: Thermometer,
    title: 'Precise Temperature',
    desc: 'Inverter-driven compressors adjust refrigerant flow in real time, maintaining tight temperature control across every zone.',
  },
  {
    icon: Settings,
    title: 'Scalable Design',
    desc: 'Start with what you need and add indoor units later as your business grows — without replacing the outdoor plant.',
  },
  {
    icon: TrendingUp,
    title: 'Lower Running Costs',
    desc: 'Variable refrigerant flow means the system only works as hard as it needs to, significantly reducing electricity consumption.',
  },
];

export default function VrvVrfPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        <ServiceHero
          eyebrow="Commercial AC"
          title="VRV/VRF Air Conditioning Systems"
          image="/images/services/banner-hero.webp"
          imageAlt="VRV VRF air conditioning systems by Links Air & Electrical"
        />

        {/* ── Intro ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="grid grid-cols-[1.1fr_1fr] items-center gap-[clamp(32px,6vw,80px)] max-[900px]:grid-cols-1">
              <div>
                <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                  Commercial solutions
                </span>
                <Heading
                  level={2}
                  className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
                >
                  Advanced Climate Control for Larger Spaces
                </Heading>
                <P className="mt-5 text-[17px] leading-[1.7] text-[#4F6172]">
                  Variable Refrigerant Volume (VRV) and Variable Refrigerant Flow (VRF) systems are
                  the go-to solution for commercial and large-scale projects. A single outdoor
                  condensing unit connects to dozens of indoor units — cassettes, ducted,
                  wall-mounted or floor-standing — giving every zone independent temperature control
                  through one intelligent system.
                </P>
                <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                  Whether you&apos;re fitting out a new office building, upgrading an existing
                  retail space, or climate-controlling a multi-level car park, our team designs,
                  supplies and installs VRV/VRF systems tailored to your exact requirements. We work
                  with leading brands including Daikin, Mitsubishi Electric and Fujitsu to deliver
                  reliable, energy-efficient outcomes.
                </P>
              </div>
              <div className="hidden overflow-hidden rounded-[14px] md:block">
                <Image
                  src="/images/services/pages/vrv-vrf.webp"
                  alt="VRV VRF air conditioning systems by Links Air & Electrical"
                  width={600}
                  height={500}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="bg-[#F4F7FA] py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto mb-14 max-w-[760px] text-center">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                Key advantages
              </span>
              <Heading
                level={2}
                className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                Why Choose a VRV/VRF System?
              </Heading>
            </div>

            <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1">
              {features.map((f) => (
                <div key={f.title} className="rounded-[14px] border border-[#E3E9F0] bg-white p-7">
                  <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-[#E9F4FB] text-[#1779B8]">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <Heading
                    level={3}
                    className="font-heading mb-2 text-[17px] font-bold text-[#0E1B2C]"
                  >
                    {f.title}
                  </Heading>
                  <P className="text-[14px] leading-[1.6] text-[#4F6172]">{f.desc}</P>
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
          name: 'VRV/VRF Air Conditioning Systems',
          description:
            'Commercial VRV and VRF air conditioning design, supply and installation across Brisbane and Gold Coast.',
          url: `${siteConfig.url}/vrv-vrf-air-conditioning`,
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
