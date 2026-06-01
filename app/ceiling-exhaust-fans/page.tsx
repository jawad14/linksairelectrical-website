import type { Metadata } from 'next';
import Image from 'next/image';
import { Scaling, Wind, CookingPot, Timer, VolumeOff, ShieldCheck } from 'lucide-react';
import { UtilityBar } from '@/components/blocks/UtilityBar';
import { Header } from '@/components/blocks/Header';
import { Footer } from '@/components/blocks/Footer';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { Heading, P } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Ceiling Exhaust Fan Installation Brisbane — Links Air & Electrical',
  description:
    'Ceiling exhaust fan installation for bathrooms, kitchens, and laundries. Effective ventilation meeting building code. Call 1300 010 393.',
  alternates: {
    canonical: `${siteConfig.url}/ceiling-exhaust-fans`,
  },
  openGraph: {
    title: 'Ceiling Exhaust Fan Installation Brisbane — Links Air & Electrical',
    description:
      'Ceiling exhaust fan installation for bathrooms, kitchens, and laundries meeting building code.',
    url: `${siteConfig.url}/ceiling-exhaust-fans`,
  },
};

const benefits = [
  {
    icon: Scaling,
    title: 'Sized for Your Space',
    desc: 'We calculate the correct fan capacity based on room volume so you get effective extraction without wasting energy.',
  },
  {
    icon: Wind,
    title: 'Ducted Installation',
    desc: 'All fans are ducted to the exterior of your home to properly expel moisture and odours — never into the roof cavity.',
  },
  {
    icon: CookingPot,
    title: 'Kitchen & Bathroom',
    desc: 'Suitable for bathrooms, kitchens, laundries, and any room where steam, odours, or humidity build up.',
  },
  {
    icon: Timer,
    title: 'Timer Options',
    desc: 'Run-on timers and delay switches keep the fan running after you leave the room for thorough moisture removal.',
  },
  {
    icon: VolumeOff,
    title: 'Low Noise',
    desc: 'Modern fans with quiet motors so ventilation runs in the background without being heard throughout the house.',
  },
  {
    icon: ShieldCheck,
    title: 'Building Code Compliant',
    desc: 'Installed to meet Australian building code requirements for mechanical ventilation in wet areas and kitchens.',
  },
];

export default function CeilingExhaustFansPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        <ServiceHero
          eyebrow="Ventilation"
          title="Ceiling Exhaust Fan Installation"
          image="/images/services/banner-hero.webp"
          imageAlt="Ceiling exhaust fan installation by Links Air & Electrical"
        />

        {/* ── Intro ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="grid grid-cols-[1.1fr_1fr] items-center gap-[clamp(32px,6vw,80px)] max-[900px]:grid-cols-1">
              <div>
                <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                  Ventilation
                </span>
                <Heading
                  level={2}
                  className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
                >
                  Effective Ventilation for Every Room
                </Heading>
                <P className="mt-5 text-[17px] leading-[1.7] text-[#4F6172]">
                  Ceiling exhaust fans are essential for removing moisture, steam, and cooking
                  odours from bathrooms, kitchens, and laundries. Without proper ventilation,
                  humidity builds up and leads to mould, peeling paint, and damage to your
                  home&apos;s structure over time.
                </P>
                <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                  We size every fan to match the room&apos;s volume so you get effective extraction
                  without excessive noise or energy use. Every installation is ducted directly to
                  the exterior of your home and wired to meet building code requirements — whether
                  it&apos;s a new fit-out or a replacement of an old, underperforming unit.
                </P>
              </div>
              <div className="hidden overflow-hidden rounded-[14px] md:block">
                <Image
                  src="/images/services/pages/ceiling-exhaust-fan.webp"
                  alt="Ceiling exhaust fan installation by Links Air & Electrical"
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
                Why Install a Ceiling Exhaust Fan?
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
          name: 'Ceiling Exhaust Fan Installation',
          description:
            'Ceiling exhaust fan installation for bathrooms, kitchens, and laundries in Brisbane & Gold Coast.',
          url: `${siteConfig.url}/ceiling-exhaust-fans`,
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
