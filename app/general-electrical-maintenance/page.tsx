import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronRight,
  Lightbulb,
  Gauge,
  CookingPot,
  Lamp,
  Plug,
  ShieldAlert,
  ShieldCheck,
  Usb,
  Wrench,
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
  title: 'General Electrical Maintenance Brisbane & Gold Coast — Links Air & Electrical',
  description:
    'LED lighting, meter box upgrades, oven installations, smoke detectors, power points and more. Licensed electricians across Brisbane & Gold Coast. Call 1300 010 393.',
  alternates: {
    canonical: `${siteConfig.url}/general-electrical-maintenance`,
  },
  openGraph: {
    title: 'General Electrical Maintenance Brisbane & Gold Coast — Links Air & Electrical',
    description:
      'LED lighting, meter box upgrades, oven installations, smoke detectors, power points and more. Licensed electricians across Brisbane & Gold Coast.',
    url: `${siteConfig.url}/general-electrical-maintenance`,
  },
};

const services = [
  {
    icon: Lightbulb,
    title: 'LED Lights Installation',
    desc: 'Energy-efficient LED lighting installed at strategic locations throughout your property for optimal illumination and lower power bills.',
    href: '/led-lights-installation',
  },
  {
    icon: Gauge,
    title: 'Meter Box Relocation/Upgrade',
    desc: 'Professional meter box and switchboard relocation or upgrade using the latest equipment. Fully compliant and neatly finished.',
    href: '/meter-box-relocation',
  },
  {
    icon: CookingPot,
    title: 'Oven & Cooktop Installations',
    desc: 'Safe installation of all oven and cooktop types with proper circuit protection and complete hazard prevention.',
    href: '/oven-cooktop-installations',
  },
  {
    icon: Lamp,
    title: 'Pendant Light Installer',
    desc: 'Expert pendant light installation for kitchens, dining areas, and feature spaces. Meticulous wiring and clean finish.',
    href: '/pendant-light-installer',
  },
  {
    icon: Plug,
    title: 'Power-Point Installation',
    desc: 'Professional power point installation using the latest safety-rated outlets. Neat, code-compliant, and positioned where you need them.',
    href: '/power-point-installation',
  },
  {
    icon: ShieldAlert,
    title: 'Smoke Detector Installation',
    desc: 'Compliant smoke detector installation at strategic points to meet Queensland regulations and prevent false alarms.',
    href: '/smoke-detector-installation',
  },
  {
    icon: ShieldCheck,
    title: 'Switchboard Surge Protector',
    desc: 'Surge protection devices installed on your switchboard to safeguard electronics and appliances from power spikes.',
    href: '/switchboard-surge-protector',
  },
  {
    icon: Usb,
    title: 'USB Sockets',
    desc: 'Modern USB power outlets installed throughout your home or office. Charge devices conveniently without adapters.',
    href: '/usb-sockets',
  },
  {
    icon: Wrench,
    title: 'Other Electrical Services',
    desc: 'Additional electrical services including fault-finding, rewiring, and custom electrical solutions for your property.',
    href: '/other-electrical-services',
  },
];

const maintenanceTips = [
  'Switch to LED lighting throughout your home \u2014 you\u0027ll cut energy consumption by up to 80% and the bulbs last 25 times longer than incandescent.',
  'Have a licensed electrician inspect your wiring every 5 years, or immediately if you notice discoloured power points, burning smells, or frequent tripping.',
  'Install surge protection on your switchboard to guard expensive electronics against power spikes from storms or grid fluctuations.',
  'Replace any cracked, discoloured, or warm-to-touch power points immediately \u2014 these are signs of loose connections or overloading.',
  'Ensure all smoke detectors are interconnected and photoelectric as required by Queensland law. Test monthly and replace batteries yearly.',
];

export default function GeneralElectricalMaintenancePage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        <ServiceHero
          eyebrow="Electrical Maintenance"
          title="General Electrical Maintenance Services"
          image="/images/services/electrical.webp"
          imageAlt="Electrical maintenance work by Links Air & Electrical"
        />

        {/* ── Intro Section ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="grid grid-cols-[1.1fr_1fr] items-center gap-[clamp(32px,6vw,80px)] max-[900px]:grid-cols-1">
              <div>
                <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                  Keeping You Safe &amp; Compliant
                </span>
                <Heading
                  level={2}
                  className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
                >
                  Professional Electrical Maintenance You Can Rely On
                </Heading>
                <P className="mt-5 text-[17px] leading-[1.7] text-[#4F6172]">
                  Links Air &amp; Electrical provides a comprehensive range of electrical
                  maintenance services for residential and commercial properties across Brisbane and
                  the Gold Coast. Our professional electricians handle every project with precision,
                  ensuring safe, compliant results every time.
                </P>
                <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                  From LED lighting upgrades and meter box relocations to oven installations and
                  smoke detector compliance, we cover the full spectrum of general electrical work.
                  Every job is completed to Australian Standards with upfront pricing.
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
                    alt="Links Air & Electrical electrician performing maintenance work"
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
                Electrical Maintenance Solutions for Every Need
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

        {/* ── Maintenance Tips ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto max-w-[820px]">
              <div className="mb-10 text-center">
                <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                  Tips &amp; Advice
                </span>
                <Heading
                  level={2}
                  className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
                >
                  5 Maintenance Tips to Keep Your Electrics in Top Shape
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

        <ServiceCTA />
      </main>
      <Footer />

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'General Electrical Maintenance Services',
          description:
            'LED lighting, meter box upgrades, oven installations, smoke detectors, power points and more. Licensed electricians across Brisbane & Gold Coast.',
          url: `${siteConfig.url}/general-electrical-maintenance`,
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
