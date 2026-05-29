import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronRight,
  Wind,
  Thermometer,
  Wrench,
  Settings,
  Building2,
  Layers,
  Fan,
  CheckCircle,
} from 'lucide-react';
import { UtilityBar } from '@/components/blocks/UtilityBar';
import { Header } from '@/components/blocks/Header';
import { Footer } from '@/components/blocks/Footer';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { Testimonials } from '@/components/blocks/Testimonials';
import { JsonLd } from '@/components/seo/JsonLd';
import { Heading, P } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Air Conditioning Services Brisbane & Gold Coast — Links Air & Electrical',
  description:
    'Professional air conditioning installation, repairs, and maintenance across Brisbane & Gold Coast. Split systems, ducted AC, VRV/VRF, and more. Call 1300 010 393 for a free quote.',
  alternates: {
    canonical: `${siteConfig.url}/air-conditioning`,
  },
  openGraph: {
    title: 'Air Conditioning Services Brisbane & Gold Coast — Links Air & Electrical',
    description:
      'Professional air conditioning installation, repairs, and maintenance across Brisbane & Gold Coast.',
    url: `${siteConfig.url}/air-conditioning`,
  },
};

const services = [
  {
    icon: Wind,
    title: 'Split System Air Conditioning',
    desc: 'Energy-efficient cooling and heating for individual rooms. Affordable, quiet, and easy to maintain.',
    href: '/split-system-aircon',
  },
  {
    icon: Building2,
    title: 'Ducted Air Conditioning',
    desc: 'Whole-home comfort controlled from a single thermostat. Discreet ceiling-mounted design.',
    href: '/ducted-airconditioning',
  },
  {
    icon: Layers,
    title: 'VRV / VRF Systems',
    desc: 'Commercial-grade multi-zone climate control for offices, shops, and large-scale projects.',
    href: '/vrv-vrf-air-conditioning',
  },
  {
    icon: Settings,
    title: 'Design & Construction',
    desc: 'End-to-end AC design for new builds and major renovations. Engineered for your floor plan.',
    href: '/design-and-construction',
  },
  {
    icon: Wrench,
    title: 'Repair & Installation',
    desc: 'Fast, reliable repairs and brand-new installations by fully licensed technicians.',
    href: '/repair-installation',
  },
  {
    icon: Thermometer,
    title: 'Service & Maintenance',
    desc: 'Keep your system running at peak performance with regular servicing and filter cleans.',
    href: '/service-maintenance',
  },
  {
    icon: Fan,
    title: 'AC Installation',
    desc: 'Professional installation of all major brands. Back-to-back, side entry, and up-and-over options.',
    href: '/air-conditioning-installation',
  },
];

const maintenanceTips = [
  'Inspect and clean your air filters every four to six weeks — blocked filters force the unit to work harder and push your energy bill up.',
  'Set your thermostat to around 24\u00B0C for the best balance between comfort and efficiency. Every degree lower adds roughly 10% to running costs.',
  'Walk around your outdoor unit regularly and clear away leaves, cobwebs, and anything else restricting airflow.',
  'Switch off your system when the house is empty for extended periods. A timer or smart thermostat makes this effortless.',
  'Keep an ear out for unusual noises, ice forming on the unit, or weak airflow — these are early signs of a problem that is cheaper to fix now than later.',
];

export default function AirConditioningPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        <ServiceHero
          eyebrow="Air Conditioning"
          title="Air Conditioning Services Brisbane & Gold Coast"
          image="/images/services/airconditioning.webp"
          imageAlt="Professional air conditioning installation by Links Air & Electrical"
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
                  Reliable Air Conditioning You Can Count On
                </Heading>
                <P className="mt-5 text-[17px] leading-[1.7] text-[#4F6172]">
                  Since 2014, Links Air &amp; Electrical has been helping homes and businesses
                  across Brisbane and the Gold Coast stay comfortable year-round. Whether you need a
                  brand-new split system fitted, a ducted unit repaired, or your existing setup
                  serviced and cleaned, our licensed technicians handle the lot.
                </P>
                <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                  We believe in prompt, honest service with no hidden fees. From cleaning air
                  filters and topping up refrigerant to full system replacements, every job is
                  carried out to the highest standard. We also focus on energy efficiency — helping
                  you keep power costs down without sacrificing comfort.
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
                    src="/images/services/pages/ac-services-intro.webp"
                    alt="Air conditioning services by Links Air & Electrical"
                    fill
                    className="object-cover"
                    sizes="(max-width: 900px) 560px, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Service Image ── */}
        <section className="bg-[#F8FAFC] py-[clamp(48px,6vw,72px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="relative aspect-[16/7] overflow-hidden rounded-[22px] shadow-[0_24px_60px_-20px_rgba(14,27,44,0.25)]">
              <Image
                src="/images/services/pages/ac-services-inner2.webp"
                alt="Air conditioning service and installation work by Links Air & Electrical"
                fill
                className="object-cover"
                sizes="(max-width: 1240px) 100vw, 1240px"
              />
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
                Air Conditioning Solutions for Every Need
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

        {/* ── Tips Image ── */}
        <section className="bg-[#F8FAFC] py-[clamp(48px,6vw,72px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="relative aspect-[16/7] overflow-hidden rounded-[22px] shadow-[0_24px_60px_-20px_rgba(14,27,44,0.25)]">
              <Image
                src="/images/services/pages/ac-services-inner3.webp"
                alt="Air conditioning maintenance tips by Links Air & Electrical"
                fill
                className="object-cover"
                sizes="(max-width: 1240px) 100vw, 1240px"
              />
            </div>
          </div>
        </section>

        {/* ── Maintenance Tips ── */}
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
                  5 Simple Ways to Keep Your AC Running Smoothly
                </Heading>
              </div>

              <div className="flex flex-col gap-4">
                {maintenanceTips.map((tip, i) => (
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

        <Testimonials />
        <ServiceCTA />
      </main>
      <Footer />

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Air Conditioning Services',
          description:
            'Professional air conditioning installation, repairs, and maintenance across Brisbane & Gold Coast.',
          url: `${siteConfig.url}/air-conditioning`,
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
