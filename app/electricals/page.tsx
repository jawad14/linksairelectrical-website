import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Home, Wrench, Camera, BatteryCharging, CheckCircle } from 'lucide-react';
import { UtilityBar } from '@/components/blocks/UtilityBar';
import { Header } from '@/components/blocks/Header';
import { Footer } from '@/components/blocks/Footer';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { Heading, P } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Electrical Services Brisbane & Gold Coast — Links Air & Electrical',
  description:
    'Professional electrical services across Brisbane & Gold Coast. Residential, commercial, CCTV, EV chargers and more. Licensed electricians — call 1300 010 393.',
  alternates: {
    canonical: `${siteConfig.url}/electricals`,
  },
  openGraph: {
    title: 'Electrical Services Brisbane & Gold Coast — Links Air & Electrical',
    description:
      'Professional electrical services across Brisbane & Gold Coast. Residential, commercial, CCTV, EV chargers and more.',
    url: `${siteConfig.url}/electricals`,
  },
};

const services = [
  {
    icon: Home,
    title: 'Residential Electrician',
    desc: 'Complete electrical solutions for your home — from new house wiring and ceiling fans to switchboard upgrades and data cabling.',
    href: '/residential-electrician',
  },
  {
    icon: Wrench,
    title: 'General Electrical Maintenance',
    desc: 'LED lighting, meter box upgrades, oven installations, power points, smoke detectors and more. Keeping your property safe and up to code.',
    href: '/general-electrical-maintenance',
  },
  {
    icon: Camera,
    title: 'CCTV Camera Installation',
    desc: 'Professional security camera systems for homes and businesses. Full installation, cabling, and remote viewing setup.',
    href: '/cctv-camera-installation',
  },
  {
    icon: BatteryCharging,
    title: 'EV Charger Installation',
    desc: 'Home and commercial EV charger installations. We size your supply, install load management, and certify the work.',
    href: '/ev-charger-installation',
  },
];

const safetyTips = [
  'Test your safety switch (RCD) every three months by pressing the test button on your switchboard. If it doesn\u0027t trip, call an electrician.',
  'Never overload power points with double adapters or piggyback plugs — use a surge-protected powerboard instead.',
  'Replace flickering or dimming lights promptly. It could be a loose connection or an early sign of a wiring fault.',
  'Keep your switchboard accessible and clearly labelled. In an emergency, you need to know which circuit to turn off.',
  'If your home is more than 25 years old and still has ceramic fuses, it\u0027s time for a switchboard upgrade to modern RCDs.',
];

export default function ElectricalsPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        <ServiceHero
          eyebrow="Electrical Services"
          title="Professional Electrical Services Brisbane & Gold Coast"
          image="/images/services/electrical.webp"
          imageAlt="Professional electrical services by Links Air & Electrical"
        />

        {/* ── Intro Section ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="grid grid-cols-[1.1fr_1fr] items-center gap-[clamp(32px,6vw,80px)] max-[900px]:grid-cols-1">
              <div>
                <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                  Since 2014
                </span>
                <Heading
                  level={2}
                  className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
                >
                  Licensed Electricians You Can Trust
                </Heading>
                <P className="mt-5 text-[17px] leading-[1.7] text-[#4F6172]">
                  Links Air &amp; Electrical has been delivering reliable, code-compliant electrical
                  work across Brisbane and the Gold Coast since 2014. Whether you need new house
                  wiring, a switchboard upgrade, LED downlights, or an emergency call-out, our fully
                  licensed electricians handle the lot — safely, on time, and with no hidden fees.
                </P>
                <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                  From small residential repairs through to comprehensive commercial fit-outs, every
                  job is carried out to the highest standard. We focus on quality workmanship,
                  transparent pricing, and getting the job done right the first time.
                </P>

                <div className="mt-8 flex flex-wrap gap-3.5">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2.5 rounded-full bg-[#E73438] px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_6px_16px_-6px_rgba(231,52,56,0.6)] transition-transform hover:-translate-y-px hover:bg-[#D62229]"
                  >
                    Get a Free Quote
                    <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
                  </Link>
                  <Link
                    href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                    className="inline-flex items-center gap-2.5 rounded-full border border-[#E3E9F0] bg-white px-6 py-3.5 text-[15px] font-semibold text-[#0E1B2C] transition-colors hover:bg-[#F4F7FA]"
                  >
                    Call {siteConfig.phone}
                  </Link>
                </div>
              </div>

              <div className="relative aspect-[4/3] max-[900px]:max-w-[560px]">
                <div className="absolute inset-0 overflow-hidden rounded-[22px] shadow-[0_24px_60px_-20px_rgba(14,27,44,0.25)]">
                  <Image
                    src="/images/about/about-inner.webp"
                    alt="Links Air & Electrical licensed electrician at work"
                    fill
                    className="object-cover"
                    sizes="(max-width: 900px) 560px, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Services Grid ── */}
        <section className="bg-[#F4F7FA] py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto mb-14 max-w-[760px] text-center">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                Our Services
              </span>
              <Heading
                level={2}
                className="font-heading mb-[18px] text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                Electrical Solutions for Every Need
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

        {/* ── Safety Tips ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto max-w-[820px]">
              <div className="mb-10 text-center">
                <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                  Tips & Advice
                </span>
                <Heading
                  level={2}
                  className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
                >
                  5 Electrical Safety Tips for Your Home
                </Heading>
              </div>

              <div className="flex flex-col gap-4">
                {safetyTips.map((tip, i) => (
                  <div
                    key={i}
                    className="flex gap-4 rounded-[14px] border border-[#E3E9F0] bg-[#F8FAFC] p-5"
                  >
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#1779B8]" />
                    <P className="text-[15px] leading-[1.65] text-[#4F6172]">{tip}</P>
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
          name: 'Electrical Services',
          description:
            'Professional electrical services across Brisbane & Gold Coast. Residential, commercial, CCTV, EV chargers and more.',
          url: `${siteConfig.url}/electricals`,
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
