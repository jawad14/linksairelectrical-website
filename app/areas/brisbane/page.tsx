import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Check, ChevronRight, Zap, Wind, HardHat, Phone } from 'lucide-react';
import { UtilityBar } from '@/components/blocks/UtilityBar';
import { Header } from '@/components/blocks/Header';
import { Footer } from '@/components/blocks/Footer';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { Heading, P } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Electrician Brisbane — Links Air & Electrical',
  description:
    'Licensed electricians and air conditioning specialists servicing all Brisbane suburbs. Same-day service available. Call 1300 010 393.',
  alternates: {
    canonical: `${siteConfig.url}/areas/brisbane`,
  },
  openGraph: {
    title: 'Electrician Brisbane — Links Air & Electrical',
    description:
      'Licensed electricians and air conditioning specialists servicing all Brisbane suburbs. Same-day service available. Call 1300 010 393.',
    url: `${siteConfig.url}/areas/brisbane`,
  },
};

const services = [
  {
    icon: Zap,
    title: 'Electrical Services',
    desc: 'Residential and commercial electrical work including switchboard upgrades, lighting, wiring, and emergency repairs.',
    href: '/electricals',
  },
  {
    icon: Wind,
    title: 'Air Conditioning',
    desc: 'Split system, ducted, and VRV/VRF installation, repairs, and maintenance for homes and businesses.',
    href: '/air-conditioning',
  },
  {
    icon: HardHat,
    title: 'Building & Construction',
    desc: 'Complete electrical and air conditioning solutions for new builds, renovations, and commercial fit-outs.',
    href: '/building-and-construction',
  },
];

const suburbs = [
  'Albion',
  'Ascot',
  'Auchenflower',
  'Bardon',
  'Bowen Hills',
  'Bulimba',
  'Camp Hill',
  'Carindale',
  'Chermside',
  'Coorparoo',
  'East Brisbane',
  'Fortitude Valley',
  'Hamilton',
  'Hawthorne',
  'Indooroopilly',
  'Kangaroo Point',
  'Kelvin Grove',
  'Milton',
  'Morningside',
  'Nundah',
  'Paddington',
  'Red Hill',
  'South Brisbane',
  'Toowong',
  'West End',
  'Woolloongabba',
  'Wynnum',
  'Zillmere',
];

export default function BrisbanePage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        <ServiceHero
          eyebrow="Brisbane"
          title="Electrician & Air Conditioning Brisbane"
          image="/images/services/electrical.webp"
          imageAlt="Licensed electrician servicing Brisbane homes and businesses"
        />

        {/* ── Intro Section ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[820px] px-[clamp(20px,4vw,56px)] text-center">
            <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
              Service Area
            </span>
            <Heading
              level={2}
              className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
            >
              Your Local Brisbane Electricians
            </Heading>
            <P className="mt-5 text-[17px] leading-[1.7] text-[#4F6172]">
              Links Air &amp; Electrical has been servicing homes and businesses across Brisbane
              since 2014. From the CBD and inner suburbs to the outer reaches of north, south, east
              and west Brisbane, our licensed team delivers reliable electrical and air conditioning
              work with fast response times.
            </P>
            <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
              Whether it&apos;s an emergency call-out, a switchboard upgrade, or a new split system
              installation, we bring the same level of care and professionalism to every Brisbane
              job.
            </P>
          </div>
        </section>

        {/* ── Services Grid ── */}
        <section className="bg-[#F4F7FA] py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto mb-14 max-w-[760px] text-center">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                What We Offer
              </span>
              <Heading
                level={2}
                className="font-heading mb-[18px] text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                Services Available in Brisbane
              </Heading>
            </div>

            <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1">
              {services.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group flex flex-col gap-4 rounded-[14px] border border-[#E3E9F0] bg-white p-7 transition-shadow hover:shadow-[0_12px_32px_-12px_rgba(14,27,44,0.15)]"
                >
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#E9F4FB] text-[#1779B8]">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <Heading level={3} className="font-heading text-[17px] font-bold text-[#0E1B2C]">
                    {service.title}
                  </Heading>
                  <P className="text-[14px] leading-[1.6] text-[#4F6172]">{service.desc}</P>
                  <span className="mt-auto inline-flex items-center gap-1 text-[14px] font-semibold text-[#1779B8] transition-colors group-hover:text-[#E73438]">
                    Learn More
                    <ChevronRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Suburbs We Cover ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto mb-14 max-w-[760px] text-center">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                Coverage
              </span>
              <Heading
                level={2}
                className="font-heading mb-[18px] text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                Suburbs We Cover in Brisbane
              </Heading>
            </div>

            <div className="grid grid-cols-4 gap-4 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1">
              {suburbs.map((suburb) => (
                <div key={suburb} className="flex items-center gap-2.5 py-1.5">
                  <Check className="h-4.5 w-4.5 shrink-0 text-[#1779B8]" />
                  <P className="text-[15px] text-[#4F6172]">{suburb}</P>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Text Block ── */}
        <section className="bg-[#F4F7FA] py-[clamp(48px,6vw,80px)]">
          <div className="mx-auto max-w-[820px] px-[clamp(20px,4vw,56px)] text-center">
            <div className="flex items-center justify-center gap-2 text-[#1779B8]">
              <Phone className="h-5 w-5" />
              <MapPin className="h-5 w-5" />
            </div>
            <P className="mt-4 text-[18px] leading-[1.7] font-medium text-[#0E1B2C]">
              Need an electrician in Brisbane? Call us on{' '}
              <Link
                href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                className="text-[#1779B8] underline underline-offset-2 hover:text-[#E73438]"
              >
                {siteConfig.phone}
              </Link>{' '}
              or{' '}
              <Link
                href="/contact-us"
                className="text-[#1779B8] underline underline-offset-2 hover:text-[#E73438]"
              >
                get a free quote
              </Link>
              .
            </P>
          </div>
        </section>

        <ServiceCTA />
      </main>
      <Footer />

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Electrician & Air Conditioning Brisbane',
          description:
            'Licensed electricians and air conditioning specialists servicing all Brisbane suburbs.',
          url: `${siteConfig.url}/areas/brisbane`,
          provider: {
            '@type': 'LocalBusiness',
            '@id': `${siteConfig.url}/#business`,
            name: siteConfig.name,
          },
          areaServed: {
            '@type': 'City',
            name: 'Brisbane',
          },
        }}
      />
    </>
  );
}
