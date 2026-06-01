import type { Metadata } from 'next';
import Image from 'next/image';
import { SearchCheck, Cable, Lightbulb, Flame, CircuitBoard, Wrench } from 'lucide-react';
import { UtilityBar } from '@/components/blocks/UtilityBar';
import { Header } from '@/components/blocks/Header';
import { Footer } from '@/components/blocks/Footer';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { Heading, P } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Other Electrical Services Brisbane \u2014 Links Air & Electrical',
  description:
    'Additional electrical services including fault-finding, rewiring, and custom solutions. Licensed electricians. Call 1300 010 393.',
  alternates: {
    canonical: `${siteConfig.url}/other-electrical-services`,
  },
  openGraph: {
    title: 'Other Electrical Services Brisbane \u2014 Links Air & Electrical',
    description:
      'Additional electrical services including fault-finding, rewiring, and custom solutions. Licensed electricians.',
    url: `${siteConfig.url}/other-electrical-services`,
  },
};

const benefits = [
  {
    icon: SearchCheck,
    title: 'Fault Finding & Diagnosis',
    desc: 'We track down the source of tripping breakers, flickering lights, and unexplained power loss quickly and accurately.',
  },
  {
    icon: Cable,
    title: 'Partial Rewiring',
    desc: 'Upgrade ageing or damaged circuits without a full house rewire — targeted work that brings older wiring up to current standards.',
  },
  {
    icon: Lightbulb,
    title: 'Garden & Security Lighting',
    desc: 'From path lights and feature spots to sensor-activated security floods, we design and install outdoor lighting that works.',
  },
  {
    icon: Flame,
    title: 'Hot Water Connections',
    desc: 'We wire and connect electric hot water systems, heat pumps, and solar hot water boosters to your switchboard.',
  },
  {
    icon: CircuitBoard,
    title: 'Dedicated Circuits',
    desc: 'High-draw appliances like ovens, pool pumps, and workshop tools need their own circuit — we install them safely.',
  },
  {
    icon: Wrench,
    title: 'Custom Solutions',
    desc: 'Range hood wiring, exhaust fan connections, and any other electrical job that doesn\u2019t fit a standard category — just ask.',
  },
];

export default function OtherElectricalServicesPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        <ServiceHero
          eyebrow="Electrical Services"
          title="Other Electrical Services"
          image="/images/services/banner-hero.webp"
          imageAlt="Electrical services by Links Air & Electrical"
        />

        {/* ── Intro ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="grid grid-cols-[1.1fr_1fr] items-center gap-[clamp(32px,6vw,80px)] max-[900px]:grid-cols-1">
              <div>
                <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                  Electrical Services
                </span>
                <Heading
                  level={2}
                  className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
                >
                  Custom Electrical Solutions for Every Need
                </Heading>
                <P className="mt-5 text-[17px] leading-[1.7] text-[#4F6172]">
                  Not every electrical job fits neatly into a service category. From diagnosing a
                  mystery fault that keeps tripping your safety switch, to running a dedicated
                  circuit for a new oven or connecting a hot water system, our licensed electricians
                  handle the full spectrum of residential and light commercial electrical work.
                </P>
                <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                  We also take care of partial rewiring for older homes, garden and security
                  lighting design, exhaust fan and range hood connections, and any other custom
                  wiring job you need done right. If it&apos;s electrical and it&apos;s not listed
                  on our other service pages, chances are we still do it — give us a call and
                  we&apos;ll sort it out.
                </P>
              </div>
              <div className="hidden overflow-hidden rounded-[14px] md:block">
                <Image
                  src="/images/services/pages/other-electrical.webp"
                  alt="Other electrical services by Links Air & Electrical"
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
                What We Can Help With
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
          name: 'Other Electrical Services',
          description:
            'Additional electrical services including fault-finding, rewiring, and custom solutions. Licensed electricians.',
          url: `${siteConfig.url}/other-electrical-services`,
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
