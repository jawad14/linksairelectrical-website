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
  title: 'Electrician Gold Coast — Links Air & Electrical',
  description:
    'Licensed electricians and air conditioning services across the Gold Coast. From Southport to Coolangatta. Call 1300 010 393.',
  alternates: {
    canonical: `${siteConfig.url}/areas/gold-coast`,
  },
  openGraph: {
    title: 'Electrician Gold Coast — Links Air & Electrical',
    description:
      'Licensed electricians and air conditioning services across the Gold Coast. From Southport to Coolangatta. Call 1300 010 393.',
    url: `${siteConfig.url}/areas/gold-coast`,
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
  'Southport',
  'Surfers Paradise',
  'Broadbeach',
  'Burleigh Heads',
  'Palm Beach',
  'Coolangatta',
  'Robina',
  'Varsity Lakes',
  'Nerang',
  'Mudgeeraba',
  'Mermaid Beach',
  'Mermaid Waters',
  'Labrador',
  'Ashmore',
  'Benowa',
  'Bundall',
  'Carrara',
  'Coomera',
  'Helensvale',
  'Hope Island',
  'Ormeau',
  'Oxenford',
  'Pacific Pines',
  'Runaway Bay',
  'Tamborine Mountain',
  'Upper Coomera',
];

export default function GoldCoastPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        <ServiceHero
          eyebrow="Gold Coast"
          title="Electrician & Air Conditioning Gold Coast"
          image="/images/services/banner-hero.webp"
          imageAlt="Licensed electrician servicing Gold Coast homes and businesses"
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
              Trusted Gold Coast Electricians
            </Heading>
            <P className="mt-5 text-[17px] leading-[1.7] text-[#4F6172]">
              Links Air &amp; Electrical services the entire Gold Coast region — from Southport and
              Surfers Paradise in the north to Coolangatta and Tweed Heads in the south. Our team
              handles residential and commercial electrical work, air conditioning installation, and
              building projects across the coast.
            </P>
            <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
              Fast response times, upfront pricing, and workmanship you can count on. We&apos;re on
              the Gold Coast roads daily and ready to help.
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
                Services Available on the Gold Coast
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
                Suburbs We Cover on the Gold Coast
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
              Need an electrician on the Gold Coast? Call us on{' '}
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
          name: 'Electrician & Air Conditioning Gold Coast',
          description: 'Licensed electricians and air conditioning services across the Gold Coast.',
          url: `${siteConfig.url}/areas/gold-coast`,
          provider: {
            '@type': 'LocalBusiness',
            '@id': `${siteConfig.url}/#business`,
            name: siteConfig.name,
          },
          areaServed: {
            '@type': 'City',
            name: 'Gold Coast',
          },
        }}
      />
    </>
  );
}
