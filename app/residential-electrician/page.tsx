import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Fan,
  Wind,
  Network,
  Lightbulb,
  CircuitBoard,
  CheckCircle,
} from 'lucide-react';
import { UtilityBar } from '@/components/blocks/UtilityBar';
import { Header } from '@/components/blocks/Header';
import { Footer } from '@/components/blocks/Footer';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { Heading, P } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Residential Electrician Brisbane & Gold Coast — Links Air & Electrical',
  description:
    'Trusted residential electricians for new house wiring, ceiling fans, downlights, switchboard upgrades, and data cabling. Call 1300 010 393.',
  alternates: {
    canonical: `${siteConfig.url}/residential-electrician`,
  },
  openGraph: {
    title: 'Residential Electrician Brisbane & Gold Coast — Links Air & Electrical',
    description:
      'Trusted residential electricians for new house wiring, ceiling fans, downlights, switchboard upgrades, and data cabling.',
    url: `${siteConfig.url}/residential-electrician`,
  },
};

const services = [
  {
    icon: Home,
    title: 'New House Wiring',
    desc: 'Complete electrical wiring for new homes and extensions. Quality materials, neat runs, and full compliance certification.',
    href: '/new-house-wiring',
  },
  {
    icon: Fan,
    title: 'Bathroom Exhaust Heater',
    desc: 'Professional ceiling exhaust heater and fan installation for bathrooms. Proper ventilation to prevent moisture and mould.',
    href: '/bathroom-exhaust-heater',
  },
  {
    icon: Wind,
    title: 'Ceiling Exhaust Fans',
    desc: 'Exhaust fan installation for bathrooms, kitchens, and laundries. Effective ventilation that meets building code requirements.',
    href: '/ceiling-exhaust-fans',
  },
  {
    icon: Fan,
    title: 'Ceiling Fan Installation',
    desc: 'Certified ceiling fan installation with proper bracing and wiring. Safe, balanced, and building-code compliant.',
    href: '/ceiling-fan-installation',
  },
  {
    icon: Network,
    title: 'Data Points & Network Cabling',
    desc: 'Structured data cabling and network point installation for reliable home connectivity. Cat6 and fibre options available.',
    href: '/data-points-network-cabling',
  },
  {
    icon: Lightbulb,
    title: 'Downlights',
    desc: 'LED downlight installation, upgrades from halogen, and new layouts. Energy-efficient lighting designed for your space.',
    href: '/downlights',
  },
  {
    icon: CircuitBoard,
    title: 'Switchboard Upgrade',
    desc: 'Replace old ceramic fuses with modern RCD-protected switchboards. Safer, code-compliant, and ready for today\u2019s electrical loads.',
    href: '/switchboard-upgrade',
  },
];

const tips = [
  'Upgrade to LED downlights if you still have halogen \u2014 they run cooler, last longer, and cut your lighting energy use by up to 80%.',
  'Have your ceiling fans professionally installed with correct bracing. A poorly mounted fan is a safety hazard.',
  'If you\u2019re building or renovating, plan your data cabling early. Retrofitting network points after the walls are closed is far more expensive.',
  'Test your smoke detectors monthly and replace batteries annually. Queensland law requires interconnected photoelectric alarms in all homes.',
  'A switchboard upgrade is one of the best investments for an older home. Modern RCDs protect against electrical faults that ceramic fuses simply cannot.',
];

export default function ResidentialElectricianPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        <ServiceHero
          eyebrow="Residential Electrician"
          title="Residential Electrical Services Brisbane & Gold Coast"
          image="/images/services/electrical.webp"
          imageAlt="Residential electrical work by Links Air & Electrical"
        />

        {/* ── Intro Section ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="grid grid-cols-[1.1fr_1fr] items-center gap-[clamp(32px,6vw,80px)] max-[900px]:grid-cols-1">
              <div>
                <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                  Your Home, Our Expertise
                </span>
                <Heading
                  level={2}
                  className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
                >
                  Reliable Residential Electricians You Can Count On
                </Heading>
                <P className="mt-5 text-[17px] leading-[1.7] text-[#4F6172]">
                  Links Air &amp; Electrical provides a full range of residential electrical
                  services across Brisbane and the Gold Coast. Our electricians hold the
                  qualifications, experience, and certification to handle every domestic electrical
                  need — from new house wiring and switchboard upgrades to ceiling fans, downlights,
                  and data cabling.
                </P>
                <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                  Our team stays up to date with the latest techniques and technology, and every job
                  is completed to Australian Standards. We focus on safe, tidy workmanship with
                  upfront pricing and no surprises.
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

              <div className="relative hidden aspect-[4/3] max-[900px]:max-w-[560px] md:block">
                <div className="absolute inset-0 overflow-hidden rounded-[22px] shadow-[0_24px_60px_-20px_rgba(14,27,44,0.25)]">
                  <Image
                    src="/images/about/about-inner.webp"
                    alt="Links Air & Electrical electrician performing residential electrical work"
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
                Residential Electrical Solutions for Every Need
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

        {/* ── Tips ── */}
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
                  5 Tips for a Safer Home Electrical System
                </Heading>
              </div>

              <div className="flex flex-col gap-4">
                {tips.map((tip, i) => (
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
          name: 'Residential Electrician Services',
          description:
            'Trusted residential electricians for new house wiring, ceiling fans, downlights, switchboard upgrades, and data cabling across Brisbane & Gold Coast.',
          url: `${siteConfig.url}/residential-electrician`,
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
