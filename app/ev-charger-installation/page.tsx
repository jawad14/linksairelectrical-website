import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle,
  ChevronRight,
  Phone,
  Home,
  Building2,
  Zap,
  Smartphone,
  Sun,
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
  title: 'EV Charger Installation Brisbane — Links Air & Electrical',
  description:
    'Professional EV charger installation for homes and businesses across Brisbane. All major brands including Tesla, Ocular, and Fronius. Call 1300 010 393.',
  alternates: {
    canonical: `${siteConfig.url}/ev-charger-installation`,
  },
  openGraph: {
    title: 'EV Charger Installation Brisbane — Links Air & Electrical',
    description:
      'Professional EV charger installation for homes and businesses across Brisbane. All major brands including Tesla, Ocular, and Fronius.',
    url: `${siteConfig.url}/ev-charger-installation`,
  },
};

const services = [
  {
    icon: Home,
    title: 'Home EV Charger Installations',
    desc: 'Dedicated Level 2 chargers installed in your garage or carport for fast, convenient overnight charging.',
  },
  {
    icon: Building2,
    title: 'Commercial EV Charging Stations',
    desc: 'Multi-bay charging solutions for offices, retail centres, and fleet depots with load management built in.',
  },
  {
    icon: Zap,
    title: 'Single-Phase & Three-Phase Systems',
    desc: 'We match the right charger to your electrical supply — from standard single-phase homes to three-phase commercial sites.',
  },
  {
    icon: Smartphone,
    title: 'Smart Chargers with App Connectivity',
    desc: 'Monitor usage, schedule charging sessions, and track energy costs from your phone with smart-enabled chargers.',
  },
  {
    icon: Sun,
    title: 'Solar-Integrated EV Chargers',
    desc: 'Charge your vehicle using excess solar energy for maximum savings and minimal environmental impact.',
  },
];

const whyInstall = [
  'Faster charging times compared to standard power outlets',
  'Cost savings by charging with off-peak electricity',
  'Increased property value for homes and commercial premises',
  'Future-proofing your home or workplace for the EV transition',
];

const whyChooseUs = [
  'Licensed and experienced electricians',
  'Tailored solutions for your property',
  'High-quality brands and equipment',
  'Competitive, upfront pricing',
  'Fast, clean, professional installation',
];

const processSteps = [
  {
    step: 1,
    title: 'Consultation & Quote',
    desc: 'We discuss your vehicle, charging needs, and electrical setup, then provide a clear, upfront quote.',
  },
  {
    step: 2,
    title: 'Site Inspection',
    desc: 'Our electrician inspects your switchboard, supply capacity, and proposed charger location.',
  },
  {
    step: 3,
    title: 'Professional Installation',
    desc: 'We install your charger, run all cabling, and complete any switchboard upgrades needed.',
  },
  {
    step: 4,
    title: 'Testing & Handover',
    desc: 'Every installation is tested, certified, and we walk you through how to use your new charger.',
  },
];

export default function EvChargerInstallationPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        {/* ── 1. Hero ── */}
        <ServiceHero
          eyebrow="EV Charging"
          title="EV Charger Installation Brisbane"
          image="/images/services/banner-hero.webp"
          imageAlt="EV charger installation by Links Air & Electrical"
        />

        {/* ── 2. Intro — text left, image right ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                  Power Up Your Future
                </span>
                <Heading
                  level={2}
                  className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
                >
                  EV Charger Installation You Can Count On
                </Heading>
                <P className="mt-5 text-[17px] leading-[1.7] text-[#4F6172]">
                  At Links Air &amp; Electrical, we make it easy to switch to electric. Whether
                  you&apos;re charging at home or preparing your business for the EV revolution, our
                  expert electricians deliver safe, fast, and fully compliant EV charger
                  installations across Brisbane and surrounding areas.
                </P>
                <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                  We install all major brands including Tesla Wall Connector, Ocular, and Fronius
                  Wattpilot — with smart load management to work within your home&apos;s electrical
                  capacity.
                </P>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/services/pages/ev-hero.webp"
                  alt="EV charger installation by Links Air & Electrical"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. Why Install an EV Charger — image left, checklist right ── */}
        <section className="bg-[#F4F7FA] py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/services/pages/ev-2.webp"
                  alt="Benefits of EV charger installation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <Heading
                  level={2}
                  className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
                >
                  Why Install an EV Charger?
                </Heading>
                <ul className="mt-6 space-y-4">
                  {whyInstall.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#1779B8]" />
                      <P className="text-[16px] leading-[1.6] text-[#4F6172]">{item}</P>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. Our Services — grid of 5 cards ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto mb-14 max-w-[760px] text-center">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                What We Offer
              </span>
              <Heading
                level={2}
                className="font-heading mb-[18px] text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                Our EV Charger Installation Services
              </Heading>
            </div>

            <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="flex items-start gap-4 rounded-[14px] border border-[#E3E9F0] bg-[#F8FAFC] p-6"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#E9F4FB] text-[#1779B8]">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <Heading
                      level={4}
                      className="font-heading text-[15px] font-bold text-[#0E1B2C]"
                    >
                      {s.title}
                    </Heading>
                    <P className="mt-1 text-[14px] leading-[1.5] text-[#4F6172]">{s.desc}</P>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. Why Choose Us — text left, image right ── */}
        <section className="bg-[#F4F7FA] py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <Heading
                  level={2}
                  className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
                >
                  Why Choose Links Air &amp; Electrical?
                </Heading>
                <ul className="mt-6 space-y-4">
                  {whyChooseUs.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#1779B8]" />
                      <P className="text-[16px] leading-[1.6] text-[#4F6172]">{item}</P>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/services/pages/ev-3.webp"
                  alt="Links Air & Electrical team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. Our Process — image left, text right ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/services/pages/ev-4.webp"
                  alt="EV charger installation process"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <Heading
                  level={2}
                  className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
                >
                  EV Charger Installation Process
                </Heading>
                <ol className="mt-6 space-y-6">
                  {processSteps.map((s) => (
                    <li key={s.step} className="flex items-start gap-4">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#1779B8] text-[14px] font-bold text-white">
                        {s.step}
                      </span>
                      <div>
                        <Heading
                          level={4}
                          className="font-heading text-[16px] font-bold text-[#0E1B2C]"
                        >
                          {s.title}
                        </Heading>
                        <P className="mt-1 text-[15px] leading-[1.6] text-[#4F6172]">{s.desc}</P>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. CTA — text left, image right ── */}
        <section className="bg-[#F4F7FA] py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <Heading
                  level={2}
                  className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
                >
                  Ready to Charge Ahead?
                </Heading>
                <P className="mt-5 text-[17px] leading-[1.7] text-[#4F6172]">
                  Whether you&apos;re upgrading your home or equipping your business, Links Air
                  &amp; Electrical is here to help you make the most of your EV. Book your EV
                  charger installation with us today.
                </P>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2.5 rounded-full bg-[#E73438] px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_6px_16px_-6px_rgba(231,52,56,0.6)] transition-transform hover:-translate-y-px hover:bg-[#D62229]"
                  >
                    Get a Free Quote
                    <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
                  </Link>
                  <Link
                    href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                    className="inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold text-[#0E1B2C] transition-colors hover:bg-[#E9F4FB]"
                  >
                    <Phone className="h-4 w-4" />
                    {siteConfig.phone}
                  </Link>
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/services/pages/ev-5.webp"
                  alt="Contact Links Air & Electrical for EV charger installation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. ServiceCTA ── */}
        <ServiceCTA />
      </main>
      <Footer />

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'EV Charger Installation',
          description:
            'Professional EV charger installation for homes and businesses across Brisbane. All major brands including Tesla, Ocular, and Fronius.',
          url: `${siteConfig.url}/ev-charger-installation`,
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
