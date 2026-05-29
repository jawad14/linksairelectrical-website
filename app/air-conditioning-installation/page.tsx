import type { Metadata } from 'next';
import { ClipboardList, MapPin, Wrench, CheckCircle, Zap } from 'lucide-react';
import { UtilityBar } from '@/components/blocks/UtilityBar';
import { Header } from '@/components/blocks/Header';
import { Footer } from '@/components/blocks/Footer';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { Heading, P } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Air Conditioning Installation Brisbane & Gold Coast',
  description:
    'Professional air conditioning installation in Brisbane & Gold Coast. We supply and install Daikin, Mitsubishi, Fujitsu, Panasonic & ActronAir. Free quotes available.',
  alternates: {
    canonical: `${siteConfig.url}/air-conditioning-installation`,
  },
  openGraph: {
    title: 'Air Conditioning Installation Brisbane & Gold Coast',
    description:
      'Professional air conditioning installation in Brisbane & Gold Coast. We supply and install all major brands.',
    url: `${siteConfig.url}/air-conditioning-installation`,
  },
};

const steps = [
  {
    icon: ClipboardList,
    step: '01',
    title: 'Free Consultation',
    desc: 'We visit your property, assess the space, discuss your comfort goals and recommend the best system for your needs and budget.',
  },
  {
    icon: MapPin,
    step: '02',
    title: 'Site Preparation',
    desc: 'We plan the install location for indoor and outdoor units, map out pipework routes and organise any electrical upgrades needed.',
  },
  {
    icon: Wrench,
    step: '03',
    title: 'Professional Installation',
    desc: 'Our licensed team installs the system with clean pipework, proper drainage and secure mounting — no shortcuts, no mess.',
  },
  {
    icon: Zap,
    step: '04',
    title: 'Testing & Handover',
    desc: 'We commission the unit, run performance checks and walk you through the controls so you know how to get the most from your new system.',
  },
];

const brands = ['Daikin', 'Mitsubishi Electric', 'Fujitsu', 'Panasonic', 'ActronAir'];

export default function AirConditioningInstallationPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        <ServiceHero
          eyebrow="Installation"
          title="Air Conditioning Installation Brisbane"
          image="/images/services/pages/ac-installation-hero.webp"
          imageAlt="Air conditioning installation by Links Air & Electrical"
        />

        {/* ── Intro ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto max-w-[760px]">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                Expert installs
              </span>
              <Heading
                level={2}
                className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                The Right System, Installed the Right Way
              </Heading>
              <P className="mt-5 text-[17px] leading-[1.7] text-[#4F6172]">
                Choosing an air conditioner is only half the equation — how it&apos;s installed
                makes all the difference to performance, efficiency and lifespan. Our installation
                team brings years of hands-on experience across split systems, multi-head units,
                ducted systems and commercial setups, ensuring every job meets Australian Standards
                and manufacturer specifications.
              </P>
              <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                We supply and install units from Australia&apos;s most trusted brands, and
                we&apos;ll always recommend the option that genuinely suits your space — not just
                the most expensive model on the shelf.
              </P>
            </div>
          </div>
        </section>

        {/* ── Installation Process ── */}
        <section className="bg-[#F4F7FA] py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto mb-14 max-w-[760px] text-center">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                Our process
              </span>
              <Heading
                level={2}
                className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                How We Install Your Air Conditioning
              </Heading>
            </div>

            <div className="grid grid-cols-4 gap-5 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1">
              {steps.map((s) => (
                <div key={s.step} className="rounded-[14px] border border-[#E3E9F0] bg-white p-7">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#E9F4FB] text-[15px] font-bold text-[#1779B8]">
                    {s.step}
                  </div>
                  <Heading
                    level={3}
                    className="font-heading mb-2 text-[17px] font-bold text-[#0E1B2C]"
                  >
                    {s.title}
                  </Heading>
                  <P className="text-[14px] leading-[1.6] text-[#4F6172]">{s.desc}</P>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Brands ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto max-w-[760px] text-center">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                Trusted brands
              </span>
              <Heading
                level={2}
                className="font-heading mb-8 text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                Brands We Supply & Install
              </Heading>
              <P className="mb-10 text-[16px] leading-[1.7] text-[#4F6172]">
                We&apos;re not locked into any single manufacturer. That means we can recommend the
                brand and model that genuinely fits your requirements and budget.
              </P>
              <div className="flex flex-wrap justify-center gap-4">
                {brands.map((brand) => (
                  <div
                    key={brand}
                    className="flex items-center gap-2 rounded-full border border-[#E3E9F0] bg-[#F8FAFC] px-6 py-3"
                  >
                    <CheckCircle className="h-4 w-4 text-[#22C55E]" />
                    <P className="text-[15px] font-semibold text-[#0E1B2C]">{brand}</P>
                  </div>
                ))}
              </div>
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
          name: 'Air Conditioning Installation',
          description:
            'Professional air conditioning installation in Brisbane and Gold Coast. All major brands supplied and installed.',
          url: `${siteConfig.url}/air-conditioning-installation`,
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
