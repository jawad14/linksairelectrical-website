import type { Metadata } from 'next';
import { Lightbulb, BatteryCharging, Timer, SlidersHorizontal, Sun, Zap } from 'lucide-react';
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
  title: 'LED Lights Installation in Brisbane | LED light installers',
  description:
    'Links Air Electrical, expert LED light installers, offers LED lights installation services in Brisbane with energy-efficient solutions for homes and businesses.',
  alternates: {
    canonical: `${siteConfig.url}/led-lights-installation`,
  },
  openGraph: {
    title: 'LED Lights Installation in Brisbane | LED light installers',
    description:
      'Links Air Electrical, expert LED light installers, offers LED lights installation services in Brisbane with energy-efficient solutions for homes and businesses.',
    url: `${siteConfig.url}/led-lights-installation`,
  },
};

const benefits = [
  {
    icon: BatteryCharging,
    title: 'Up to 80% Energy Savings',
    desc: 'LED lights use a fraction of the power compared to halogen or incandescent globes, significantly reducing your electricity bills.',
  },
  {
    icon: Timer,
    title: '25x Longer Lifespan',
    desc: 'Quality LED globes last up to 50,000 hours — that\u2019s years of use before a replacement is needed.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Dimmer Compatible',
    desc: 'Pair your LED lights with a compatible dimmer switch to set the perfect mood and save even more energy.',
  },
  {
    icon: Sun,
    title: 'Range of Colour Temperatures',
    desc: 'Choose from warm white for living areas, cool white for kitchens and bathrooms, or daylight for workspaces.',
  },
  {
    icon: Lightbulb,
    title: 'Indoor & Outdoor Options',
    desc: 'From recessed downlights and panel lights to weatherproof garden and security LEDs, we cover every application.',
  },
  {
    icon: Zap,
    title: 'Instant Full Brightness',
    desc: 'Unlike CFLs, LED lights reach full brightness the moment you flick the switch — no warm-up time required.',
  },
];

export default function LedLightsInstallationPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        <ServiceHero
          eyebrow="LED Lighting"
          title="LED Lights Installation"
          image="/images/services/banner-hero.webp"
          imageAlt="LED lighting installation by Links Air & Electrical"
        />

        {/* ── Intro ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="grid grid-cols-[1.1fr_1fr] items-center gap-[clamp(32px,6vw,80px)] max-[900px]:grid-cols-1">
              <div>
                <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                  LED Lighting
                </span>
                <Heading
                  level={2}
                  className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
                >
                  Energy-Efficient LED Lighting for Every Space
                </Heading>
                <P className="mt-5 text-[17px] leading-[1.7] text-[#4F6172]">
                  Upgrading to LED lighting is one of the smartest investments you can make for your
                  home or business. LEDs deliver brighter, cleaner light while using up to 80% less
                  energy than traditional halogen or incandescent globes. With strategic placement
                  and the right colour temperature, we can transform the look and feel of any room.
                </P>
                <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                  LED globes last significantly longer than older technologies — up to 25 times
                  longer — which means fewer replacements and lower running costs over time. Whether
                  you&apos;re after recessed downlights, surface-mounted panels, or outdoor security
                  lighting, our electricians install a full range of styles with dimming capability
                  built in where needed.
                </P>
              </div>
              <div className="hidden overflow-hidden rounded-[14px] md:block">
                <Image
                  src="/images/services/pages/led-lights.webp"
                  alt="LED lights installation by Links Air & Electrical"
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
                Why Choose LED Lighting?
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
          name: 'LED Lights Installation',
          description:
            'Energy-efficient LED lighting installed throughout your property in Brisbane & Gold Coast.',
          url: `${siteConfig.url}/led-lights-installation`,
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
