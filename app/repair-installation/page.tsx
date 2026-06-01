import type { Metadata } from 'next';
import Image from 'next/image';
import { Thermometer, Droplets, Volume2, Zap, Wind, Wrench, Clock, Shield } from 'lucide-react';
import { UtilityBar } from '@/components/blocks/UtilityBar';
import { Header } from '@/components/blocks/Header';
import { Footer } from '@/components/blocks/Footer';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { Heading, P } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Air conditioning repair & installation in Balmoral Brisbane',
  description:
    'Links Air & Electrical - reliable air conditioning repair in Balmoral Brisbane, Air conditioning installation, and ducted air conditioning system services.',
  alternates: {
    canonical: `${siteConfig.url}/repair-installation`,
  },
  openGraph: {
    title: 'Air conditioning repair & installation in Balmoral Brisbane',
    description:
      'Links Air & Electrical - reliable air conditioning repair in Balmoral Brisbane, Air conditioning installation, and ducted air conditioning system services.',
    url: `${siteConfig.url}/repair-installation`,
  },
};

const issues = [
  {
    icon: Thermometer,
    title: 'Not Cooling or Heating',
    desc: 'Could be low refrigerant, a faulty compressor or a blocked filter. We diagnose and fix the root cause — not just the symptom.',
  },
  {
    icon: Droplets,
    title: 'Water Leaking Inside',
    desc: 'Usually caused by a blocked drain line or frozen evaporator coil. Left unchecked it can damage ceilings and walls.',
  },
  {
    icon: Volume2,
    title: 'Strange Noises',
    desc: 'Rattling, buzzing or grinding sounds often signal loose components, failing bearings or debris in the system.',
  },
  {
    icon: Zap,
    title: 'High Energy Bills',
    desc: 'An AC working harder than it should wastes electricity. A tune-up or minor repair can bring consumption back to normal.',
  },
  {
    icon: Wind,
    title: 'Bad Smell from Vents',
    desc: 'Musty or foul odours typically mean mould or bacteria have built up on the coils or in the ductwork. A deep clean sorts it out.',
  },
];

const whyUs = [
  {
    icon: Clock,
    title: 'Same-Day Response',
    desc: 'We understand how uncomfortable a broken AC can be, especially in a Queensland summer. We prioritise urgent callouts.',
  },
  {
    icon: Wrench,
    title: 'All Brands & Types',
    desc: 'Split systems, ducted, multi-head, cassette, VRV — whatever you have, our technicians know how to fix it.',
  },
  {
    icon: Shield,
    title: 'Upfront Pricing',
    desc: 'You get a clear quote before we start. No surprise fees, no hidden charges — just honest work at a fair price.',
  },
];

export default function RepairInstallationPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        <ServiceHero
          eyebrow="Repairs"
          title="Air Conditioning Repair & Installation"
          image="/images/services/banner-hero.webp"
          imageAlt="Air conditioning repair and installation by Links Air & Electrical"
        />

        {/* ── Intro ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="grid grid-cols-[1.1fr_1fr] items-center gap-[clamp(32px,6vw,80px)] max-[900px]:grid-cols-1">
              <div>
                <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                  Repairs & installs
                </span>
                <Heading
                  level={2}
                  className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
                >
                  Get Your Air Conditioning Working Properly Again
                </Heading>
                <P className="mt-5 text-[17px] leading-[1.7] text-[#4F6172]">
                  When your air conditioner stops performing, you need someone who can turn up
                  quickly, diagnose the problem accurately and get it sorted without dragging things
                  out. Our fully licensed technicians carry common parts on board and can resolve
                  most faults on the first visit.
                </P>
                <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                  Need a brand-new installation? We handle that too — from recommending the right
                  system for your space and budget, through to running the pipework, wiring and
                  final commissioning. Every job is backed by manufacturer warranties plus our own
                  workmanship guarantee.
                </P>
              </div>
              <div className="hidden overflow-hidden rounded-[14px] md:block">
                <Image
                  src="/images/services/pages/repair-ref.webp"
                  alt="Air conditioning repair and installation by Links Air & Electrical"
                  width={600}
                  height={500}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Common Issues ── */}
        <section className="bg-[#F4F7FA] py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto mb-14 max-w-[760px] text-center">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                Common problems
              </span>
              <Heading
                level={2}
                className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                Issues We Fix Every Day
              </Heading>
            </div>

            <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1">
              {issues.map((issue) => (
                <div
                  key={issue.title}
                  className="rounded-[14px] border border-[#E3E9F0] bg-white p-7"
                >
                  <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-[#E9F4FB] text-[#1779B8]">
                    <issue.icon className="h-6 w-6" />
                  </div>
                  <Heading
                    level={3}
                    className="font-heading mb-2 text-[17px] font-bold text-[#0E1B2C]"
                  >
                    {issue.title}
                  </Heading>
                  <P className="text-[14px] leading-[1.6] text-[#4F6172]">{issue.desc}</P>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Us ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-1">
              {whyUs.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-[14px] border border-[#E3E9F0] bg-[#F8FAFC] p-7"
                >
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#E9F4FB] text-[#1779B8]">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <Heading
                      level={3}
                      className="font-heading mb-1 text-[17px] font-bold text-[#0E1B2C]"
                    >
                      {item.title}
                    </Heading>
                    <P className="text-[14px] leading-[1.6] text-[#4F6172]">{item.desc}</P>
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
          name: 'Air Conditioning Repair & Installation',
          description:
            'Fast, reliable air conditioning repair and professional installation across Brisbane and Gold Coast.',
          url: `${siteConfig.url}/repair-installation`,
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
