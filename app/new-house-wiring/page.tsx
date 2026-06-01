import type { Metadata } from 'next';
import Image from 'next/image';
import { ShieldCheck, Cable, Ruler, LayoutGrid, Handshake, Lightbulb } from 'lucide-react';
import { UtilityBar } from '@/components/blocks/UtilityBar';
import { Header } from '@/components/blocks/Header';
import { Footer } from '@/components/blocks/Footer';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { Heading, P } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'New House Wiring Brisbane & Gold Coast — Links Air & Electrical',
  description:
    'Complete electrical wiring for new homes and extensions. Quality materials, neat cable runs, and full compliance certification. Call 1300 010 393.',
  alternates: {
    canonical: `${siteConfig.url}/new-house-wiring`,
  },
  openGraph: {
    title: 'New House Wiring Brisbane & Gold Coast — Links Air & Electrical',
    description:
      'Complete electrical wiring for new homes and extensions with full compliance certification.',
    url: `${siteConfig.url}/new-house-wiring`,
  },
};

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Compliance Certified',
    desc: 'Every installation is tested, tagged, and issued with a certificate of compliance to meet Australian wiring standards.',
  },
  {
    icon: Cable,
    title: 'Quality Materials',
    desc: 'We use only premium-grade cabling, switchgear, and accessories from trusted Australian suppliers.',
  },
  {
    icon: Ruler,
    title: 'Neat Cable Runs',
    desc: 'Clean, organised wiring throughout your home — no messy cable bundles or shortcuts behind the walls.',
  },
  {
    icon: LayoutGrid,
    title: 'Switchboard Included',
    desc: 'A modern switchboard with safety switches and circuit breakers, sized and labelled for your home\u2019s layout.',
  },
  {
    icon: Handshake,
    title: 'Working With Your Builder',
    desc: 'We coordinate directly with your builder to hit rough-in and fit-off deadlines without holding up your build.',
  },
  {
    icon: Lightbulb,
    title: 'Future-Proofed Design',
    desc: 'Extra circuits, data cabling provisions, and capacity for future additions like solar or EV charging.',
  },
];

export default function NewHouseWiringPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        <ServiceHero
          eyebrow="New Builds"
          title="New House Wiring"
          image="/images/services/banner-hero.webp"
          imageAlt="New house electrical wiring installation by Links Air & Electrical"
        />

        {/* ── Intro ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="grid grid-cols-[1.1fr_1fr] items-center gap-[clamp(32px,6vw,80px)] max-[900px]:grid-cols-1">
              <div>
                <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                  New Homes & Extensions
                </span>
                <Heading
                  level={2}
                  className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
                >
                  Complete Electrical Wiring for New Homes
                </Heading>
                <P className="mt-5 text-[17px] leading-[1.7] text-[#4F6172]">
                  Building a new home or adding an extension is a major investment, and the
                  electrical wiring needs to be done right from the start. We handle everything from
                  the rough-in stage through to final fit-off, using quality materials and neat
                  cable runs that your builder and inspector will be happy with.
                </P>
                <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                  Every job is completed to Australian wiring standards and issued with a full
                  compliance certificate. We work closely with your builder to stay on schedule, and
                  we&apos;ll design the layout with future needs in mind — so you&apos;re not paying
                  to retrofit later.
                </P>
              </div>
              <div className="hidden overflow-hidden rounded-[14px] md:block">
                <Image
                  src="/images/services/pages/new-house-wiring.webp"
                  alt="New house wiring services by Links Air & Electrical"
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
                Why Choose Us for Your New Build?
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
          name: 'New House Wiring',
          description:
            'Complete electrical wiring for new homes and extensions in Brisbane & Gold Coast.',
          url: `${siteConfig.url}/new-house-wiring`,
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
