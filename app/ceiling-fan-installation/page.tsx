import type { Metadata } from 'next';
import Image from 'next/image';
import { Anchor, Palette, Lightbulb, Smartphone, Leaf, BadgeCheck } from 'lucide-react';
import { UtilityBar } from '@/components/blocks/UtilityBar';
import { Header } from '@/components/blocks/Header';
import { Footer } from '@/components/blocks/Footer';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { Heading, P } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Ceiling Fan Installation Brisbane & Gold Coast — Links Air & Electrical',
  description:
    'Certified ceiling fan installation with proper bracing and wiring. Safe, balanced, and building-code compliant. Call 1300 010 393.',
  alternates: {
    canonical: `${siteConfig.url}/ceiling-fan-installation`,
  },
  openGraph: {
    title: 'Ceiling Fan Installation Brisbane & Gold Coast — Links Air & Electrical',
    description:
      'Certified ceiling fan installation with proper bracing and wiring across Brisbane & Gold Coast.',
    url: `${siteConfig.url}/ceiling-fan-installation`,
  },
};

const benefits = [
  {
    icon: Anchor,
    title: 'Proper Bracing',
    desc: 'Every fan is mounted to a rated ceiling brace that supports the weight and vibration — not just screwed into plasterboard.',
  },
  {
    icon: Palette,
    title: 'All Brands & Styles',
    desc: 'We install any brand and style of ceiling fan, from classic timber blades to modern DC motor designs.',
  },
  {
    icon: Lightbulb,
    title: 'Light Kit Compatible',
    desc: 'Add a light kit to your ceiling fan for combined airflow and lighting from a single fixture.',
  },
  {
    icon: Smartphone,
    title: 'Remote Control Options',
    desc: 'Wall controllers, handheld remotes, or smart-home integration — choose the control method that suits you.',
  },
  {
    icon: Leaf,
    title: 'Energy Savings',
    desc: 'Ceiling fans use a fraction of the energy of air conditioning, helping reduce your power bills year-round.',
  },
  {
    icon: BadgeCheck,
    title: 'Licensed Installation',
    desc: 'All work is carried out by a licensed electrician and complies with Australian wiring and building standards.',
  },
];

export default function CeilingFanInstallationPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        <ServiceHero
          eyebrow="Ceiling Fans"
          title="Ceiling Fan Installation"
          image="/images/services/banner-hero.webp"
          imageAlt="Ceiling fan installation by Links Air & Electrical"
        />

        {/* ── Intro ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="grid grid-cols-[1.1fr_1fr] items-center gap-[clamp(32px,6vw,80px)] max-[900px]:grid-cols-1">
              <div>
                <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                  Ceiling Fans
                </span>
                <Heading
                  level={2}
                  className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
                >
                  Professional Ceiling Fan Installation
                </Heading>
                <P className="mt-5 text-[17px] leading-[1.7] text-[#4F6172]">
                  A ceiling fan is one of the most cost-effective ways to keep your home comfortable
                  year-round. In summer it creates a cooling breeze, and in winter you can reverse
                  the blade direction to push warm air back down from the ceiling. The key is
                  getting it installed properly — with the right bracing, wiring, and balance.
                </P>
                <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                  We install all brands and styles of ceiling fans, from classic designs to modern
                  DC motor models with remote control and smart-home integration. Every installation
                  includes a rated ceiling brace for safety, proper wiring to a dedicated circuit
                  where needed, and a check that the fan runs smooth and wobble-free. Light kits and
                  controller upgrades are available on any job.
                </P>
              </div>
              <div className="hidden overflow-hidden rounded-[14px] md:block">
                <Image
                  src="/images/services/pages/ceiling-fan.webp"
                  alt="Ceiling fan installation by Links Air & Electrical"
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
                Why Choose Professional Installation?
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
          name: 'Ceiling Fan Installation',
          description:
            'Certified ceiling fan installation with proper bracing and wiring in Brisbane & Gold Coast.',
          url: `${siteConfig.url}/ceiling-fan-installation`,
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
