import type { Metadata } from 'next';
import { Droplets, Sun, Wind, VolumeOff, Leaf, ShieldCheck } from 'lucide-react';
import { UtilityBar } from '@/components/blocks/UtilityBar';
import { Header } from '@/components/blocks/Header';
import { Footer } from '@/components/blocks/Footer';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { Heading, P } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Bathroom Exhaust Heater Installation Brisbane — Links Air & Electrical',
  description:
    'Professional bathroom exhaust heater and fan installation. Proper ventilation to prevent moisture and mould. Call 1300 010 393.',
  alternates: {
    canonical: `${siteConfig.url}/bathroom-exhaust-heater`,
  },
  openGraph: {
    title: 'Bathroom Exhaust Heater Installation Brisbane — Links Air & Electrical',
    description:
      'Professional bathroom exhaust heater and fan installation to prevent moisture and mould.',
    url: `${siteConfig.url}/bathroom-exhaust-heater`,
  },
};

const benefits = [
  {
    icon: Droplets,
    title: 'Moisture Prevention',
    desc: 'Effectively removes steam and humidity to protect paint, ceilings, and fixtures from moisture damage and mould growth.',
  },
  {
    icon: Sun,
    title: 'Heat-Light-Fan Combos',
    desc: 'All-in-one units that combine an exhaust fan, heat lamp, and LED light in a single ceiling fitting.',
  },
  {
    icon: Wind,
    title: 'Ducted to Exterior',
    desc: 'Every installation is ducted to the outside of your home — not into the roof cavity where moisture causes long-term damage.',
  },
  {
    icon: VolumeOff,
    title: 'Quiet Operation',
    desc: 'Modern exhaust units run quietly in the background so they won&apos;t disturb your morning routine.',
  },
  {
    icon: Leaf,
    title: 'Energy Efficient',
    desc: 'Low-wattage motors and LED lighting keep running costs to a minimum without sacrificing performance.',
  },
  {
    icon: ShieldCheck,
    title: 'Code Compliant',
    desc: 'Installed to meet Australian building code requirements for wet-area ventilation and electrical safety.',
  },
];

export default function BathroomExhaustHeaterPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        <ServiceHero
          eyebrow="Ventilation"
          title="Bathroom Exhaust Heater Installation"
          image="/images/services/banner-hero.webp"
          imageAlt="Bathroom exhaust heater installation by Links Air & Electrical"
        />

        {/* ── Intro ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto max-w-[820px]">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                Ventilation
              </span>
              <Heading
                level={2}
                className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                Keep Your Bathroom Dry and Mould-Free
              </Heading>
              <P className="mt-5 text-[17px] leading-[1.7] text-[#4F6172]">
                A bathroom without proper ventilation is a recipe for peeling paint, damaged
                ceilings, and mould that keeps coming back. A quality exhaust heater removes steam
                and moisture at the source, keeping your bathroom dry and your home healthy.
              </P>
              <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                We install a range of exhaust heater, light, and fan combination units — ducted
                directly to the exterior of your home so moisture is expelled outside, not into your
                roof cavity. Whether you&apos;re replacing an old unit or fitting one for the first
                time, we&apos;ll handle the wiring, ducting, and ceiling cut-out for a clean,
                code-compliant result.
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
                Why Install a Bathroom Exhaust Heater?
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
          name: 'Bathroom Exhaust Heater Installation',
          description:
            'Professional bathroom exhaust heater and fan installation in Brisbane & Gold Coast.',
          url: `${siteConfig.url}/bathroom-exhaust-heater`,
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
