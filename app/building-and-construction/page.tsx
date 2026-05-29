import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  Clock,
  Users,
  BadgeDollarSign,
  ChevronRight,
  Zap,
  Sun,
  Flame,
  Battery,
  Wifi,
  Cctv,
  Thermometer,
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
  title: 'Electrical Services for New House Builds Brisbane — Links Air & Electrical',
  description:
    'Complete electrical services for residential builders in Brisbane & Gold Coast. Under-slab, rough-ins, fit-offs — expert electricians for every stage. Call 1300 010 393.',
  alternates: {
    canonical: `${siteConfig.url}/building-and-construction`,
  },
  openGraph: {
    title: 'Building & Construction Electrical Services — Links Air & Electrical',
    description:
      'Complete electrical services for residential builders in Brisbane & Gold Coast. Expert electricians for every stage of your new build.',
    url: `${siteConfig.url}/building-and-construction`,
  },
};

const whyChooseUs = [
  {
    icon: Clock,
    title: "Over 8 Years' Experience",
    desc: 'We combine decades of experience with cutting-edge electrical innovations and technology.',
  },
  {
    icon: ShieldCheck,
    title: 'Focused on Safety & Quality',
    desc: 'The safety of our employees and clients is our top priority on every job site.',
  },
  {
    icon: Users,
    title: 'Local Family Business',
    desc: 'We have been proudly serving the Brisbane and Gold Coast regions for over 8 years.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Great Value Pricing',
    desc: "You'll never overpay for quality work — competitive rates without cutting corners.",
  },
];

const basicServices = [
  { icon: Zap, label: 'Basic Electrical Wiring for Power and Lighting' },
  { icon: Sun, label: 'Solar Installers' },
  { icon: Flame, label: 'Heated Floor Tiles' },
  { icon: Battery, label: 'Solar and Battery' },
  { icon: Wifi, label: 'TV, WIFI and Bluetooth Services' },
  { icon: Cctv, label: 'CCTV Systems' },
  { icon: Thermometer, label: 'Thermal Imaging Reports for Electrical Installations' },
];

const stages = [
  {
    image: '/images/services/pages/building-stage1.webp',
    label: 'Stage 1',
    title: 'Under-slab',
  },
  {
    image: '/images/services/pages/building-stage2.webp',
    label: 'Stage 2',
    title: 'Rough-ins',
  },
  {
    image: '/images/services/pages/building-stage3.webp',
    label: 'Stage 3',
    title: 'Fit Offs',
  },
];

export default function BuildingAndConstructionPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        <ServiceHero
          eyebrow="Building & Construction"
          title="Electrical Services for New House Builds"
          image="/images/services/pages/building-hero.webp"
          imageAlt="Electrical services for new residential construction in Brisbane"
        />

        {/* ── Intro ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="grid items-center gap-14 max-[900px]:grid-cols-1 min-[900px]:grid-cols-[1fr_1fr]">
              <div>
                <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                  Electricals
                </span>
                <Heading
                  level={2}
                  className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
                >
                  Complete Electrical Services for Builders
                </Heading>
                <P className="mt-5 text-[17px] leading-[1.7] text-[#4F6172]">
                  If you&apos;re in need of an experienced electrical team for your new home builds
                  and want the job done right, contact our team today. We&apos;re here to bring your
                  new home ideas to life.
                </P>
                <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                  Links Air &amp; Electrical is a local, family-owned and operated business
                  specialising in providing electrical services to residential builders of all
                  sizes. Our skilled electricians serve builders and homeowners in Brisbane and Gold
                  Coast, offering expert advice, products, and services tailored to each build.
                </P>
                <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                  Electrical services for builders are critical for ensuring that new construction
                  projects or renovations are equipped with safe, reliable, and efficient electrical
                  systems. The work is carried out at different stages alongside other trade works.
                </P>
              </div>
              <div className="overflow-hidden rounded-[14px]">
                <Image
                  src="/images/services/pages/building-electricals.webp"
                  alt="Electrician working on a new residential build"
                  width={600}
                  height={450}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Three Stages ── */}
        <section className="bg-[#F4F7FA] py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto mb-14 max-w-[760px] text-center">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                Our Process
              </span>
              <Heading
                level={2}
                className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                Three Stages of Electrical Work
              </Heading>
              <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                We work with the builder as per the architectural plans, carrying out electrical
                work across three key stages of the build.
              </P>
            </div>

            <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1">
              {stages.map((s) => (
                <div
                  key={s.label}
                  className="overflow-hidden rounded-[14px] border border-[#E3E9F0] bg-white"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={s.image}
                      alt={`${s.title} stage of electrical installation`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 480px) 100vw, (max-width: 900px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <P className="text-[13px] font-semibold tracking-[0.1em] text-[#1779B8] uppercase">
                      {s.label}
                    </P>
                    <Heading
                      level={3}
                      className="font-heading mt-1.5 text-[20px] font-bold text-[#0E1B2C]"
                    >
                      {s.title}
                    </Heading>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="grid items-center gap-14 max-[900px]:grid-cols-1 min-[900px]:grid-cols-[1fr_1fr]">
              <div className="overflow-hidden rounded-[14px]">
                <Image
                  src="/images/services/pages/building-why-choose.webp"
                  alt="Links Air & Electrical team working on site"
                  width={600}
                  height={450}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div>
                <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                  Why Us
                </span>
                <Heading
                  level={2}
                  className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
                >
                  Why Choose Us
                </Heading>
                <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {whyChooseUs.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#E9F4FB] text-[#1779B8]">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <Heading
                          level={3}
                          className="font-heading text-[16px] font-bold text-[#0E1B2C]"
                        >
                          {item.title}
                        </Heading>
                        <P className="mt-1 text-[14px] leading-[1.6] text-[#4F6172]">{item.desc}</P>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact-us"
                  className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-[#E73438] px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_6px_16px_-6px_rgba(231,52,56,0.6)] transition-transform hover:-translate-y-px hover:bg-[#D62229]"
                >
                  Get a Free Quote
                  <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Air-Conditioning ── */}
        <section className="bg-[#F4F7FA] py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="grid items-center gap-14 max-[900px]:grid-cols-1 min-[900px]:grid-cols-[1fr_1fr]">
              <div>
                <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                  Climate Control
                </span>
                <Heading
                  level={2}
                  className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
                >
                  Air-Conditioning for Builders
                </Heading>
                <P className="mt-5 text-[17px] leading-[1.7] text-[#4F6172]">
                  Air conditioning services for builders encompass a wide range of solutions
                  tailored to the construction industry, ensuring that new buildings or renovations
                  are equipped with efficient and effective climate control systems.
                </P>
                <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                  These services include design, installation, maintenance, and consultation to meet
                  the specific needs of residential, commercial, and industrial projects.
                </P>
              </div>
              <div className="overflow-hidden rounded-[14px]">
                <Image
                  src="/images/services/pages/building-aircon.webp"
                  alt="Air conditioning installation for new construction"
                  width={600}
                  height={450}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Specialised Builder Services ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="grid items-center gap-14 max-[900px]:grid-cols-1 min-[900px]:grid-cols-[1fr_1fr]">
              <div className="overflow-hidden rounded-[14px]">
                <Image
                  src="/images/services/pages/building-specialised.webp"
                  alt="Specialised electrical services for builders"
                  width={600}
                  height={450}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div>
                <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                  Specialised Services
                </span>
                <Heading
                  level={2}
                  className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
                >
                  Builder Services for New Construction & Renovation
                </Heading>
                <P className="mt-5 text-[17px] leading-[1.7] text-[#4F6172]">
                  Are you looking for high-end builder services for your electrical needs? At Links
                  Air &amp; Electrical, we provide prompt and safe electrical services for new
                  construction projects, shop fit-outs and renovations maintaining the highest
                  standard and professionalism.
                </P>
                <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                  With a commitment to excellence, we aim to provide 100% client satisfaction so
                  that you can move into a new property with peace of mind. Whether it&apos;s a new
                  air conditioning installation or a replacement, get in touch for efficient and
                  flawless electrical services at the best price.
                </P>
              </div>
            </div>
          </div>
        </section>

        {/* ── Basic Electrical Services ── */}
        <section className="bg-[#F4F7FA] py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="grid items-center gap-14 max-[900px]:grid-cols-1 min-[900px]:grid-cols-[1fr_1fr]">
              <div>
                <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                  Our Services
                </span>
                <Heading
                  level={2}
                  className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
                >
                  Electrical Services We Provide for Builders
                </Heading>
                <div className="mt-8 flex flex-col gap-4">
                  {basicServices.map((s) => (
                    <div key={s.label} className="flex items-center gap-3">
                      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#E9F4FB] text-[#1779B8]">
                        <s.icon className="h-4.5 w-4.5" />
                      </div>
                      <P className="text-[16px] font-medium text-[#0E1B2C]">{s.label}</P>
                    </div>
                  ))}
                </div>
              </div>
              <div className="overflow-hidden rounded-[14px]">
                <Image
                  src="/images/services/pages/building-basic.webp"
                  alt="Basic electrical services for new home builds"
                  width={600}
                  height={450}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── AC Wiring ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="grid items-center gap-14 max-[900px]:grid-cols-1 min-[900px]:grid-cols-[1fr_1fr]">
              <div className="overflow-hidden rounded-[14px]">
                <Image
                  src="/images/services/pages/building-ac-wiring.webp"
                  alt="Air conditioning electrical wiring installation"
                  width={600}
                  height={450}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div>
                <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                  AC Electricals
                </span>
                <Heading
                  level={2}
                  className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
                >
                  Pioneering in Air-Conditioning Electricals
                </Heading>
                <P className="mt-5 text-[17px] leading-[1.7] text-[#4F6172]">
                  Wiring for air-conditioning installation is a complex task that involves skill,
                  patience and knowledge. We have been specialising in electrical services for split
                  and ducted air conditioning systems in Brisbane and Gold Coast that can make your
                  unit run in good health for a lifetime.
                </P>
                <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                  Unlike other competitors, our electrical work comes with a lifetime warranty and
                  we use 100% genuine wires that can stand the test of time and won&apos;t give you
                  costly repairs in future. What makes us a reputed name in the industry is our
                  flawless ductwork for air conditioning systems that offers safety and does not
                  damage the structural integrity of the walls.
                </P>
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
          name: 'Building & Construction Electrical Services',
          description:
            'Complete electrical services for residential builders in Brisbane and Gold Coast — under-slab, rough-ins, and fit-offs.',
          url: `${siteConfig.url}/building-and-construction`,
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
