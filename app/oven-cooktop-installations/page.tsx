import type { Metadata } from 'next';
import { CookingPot, CircuitBoard, Cable, Flame, ShieldCheck, Clock } from 'lucide-react';
import { UtilityBar } from '@/components/blocks/UtilityBar';
import { Header } from '@/components/blocks/Header';
import { Footer } from '@/components/blocks/Footer';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { Heading, P } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Oven & Cooktop Installation Brisbane — Links Air & Electrical',
  description:
    'Safe oven and cooktop installation with proper circuit protection. All brands and types. Call 1300 010 393.',
  alternates: {
    canonical: `${siteConfig.url}/oven-cooktop-installations`,
  },
  openGraph: {
    title: 'Oven & Cooktop Installation Brisbane — Links Air & Electrical',
    description:
      'Safe oven and cooktop installation with proper circuit protection. All brands and types.',
    url: `${siteConfig.url}/oven-cooktop-installations`,
  },
};

const benefits = [
  {
    icon: CookingPot,
    title: 'All Brands & Types',
    desc: 'We install every major brand and type — freestanding, wall ovens, electric cooktops, and induction hobs.',
  },
  {
    icon: CircuitBoard,
    title: 'Dedicated Circuit',
    desc: 'Ovens and cooktops require their own circuit for safe operation. We install the correct breaker and cabling to suit your appliance.',
  },
  {
    icon: Cable,
    title: 'Hardwired Safely',
    desc: 'Most ovens and cooktops are hardwired directly to the switchboard — no plug required. We ensure every connection is secure and tested.',
  },
  {
    icon: Flame,
    title: 'Induction Ready',
    desc: 'Induction cooktops draw significant power. We verify your switchboard capacity and install the correct supply to handle the load.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety Tested',
    desc: 'Every installation is tested for correct polarity, earth continuity, and insulation resistance before we sign off.',
  },
  {
    icon: Clock,
    title: 'Same-Day Available',
    desc: 'Need your new oven connected today? We offer same-day service across Brisbane for straightforward installations.',
  },
];

export default function OvenCooktopInstallationsPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        <ServiceHero
          eyebrow="Kitchen Appliances"
          title="Oven & Cooktop Installation"
          image="/images/services/electrical.webp"
          imageAlt="Oven and cooktop installation by Links Air & Electrical"
        />

        {/* ── Intro ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto max-w-[820px]">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                Kitchen Appliances
              </span>
              <Heading
                level={2}
                className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                Safe, Professional Oven and Cooktop Installation
              </Heading>
              <P className="mt-5 text-[17px] leading-[1.7] text-[#4F6172]">
                Installing an oven or cooktop isn&apos;t a plug-and-play job. Most models need to be
                hardwired to a dedicated circuit with the correct breaker protection. Whether
                you&apos;re fitting a new electric oven, upgrading to an induction cooktop, or
                replacing an older gas-electric combination unit, our electricians ensure the wiring
                and circuit protection are done right.
              </P>
              <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                We work with all major brands and appliance types. Every installation includes a
                full safety test — polarity check, earth continuity, and insulation resistance — so
                your kitchen is ready to use with complete peace of mind.
              </P>
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
                Why Choose Us for Oven & Cooktop Installation?
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
          name: 'Oven & Cooktop Installation',
          description:
            'Safe oven and cooktop installation with proper circuit protection in Brisbane & Gold Coast.',
          url: `${siteConfig.url}/oven-cooktop-installations`,
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
