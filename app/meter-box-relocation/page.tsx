import type { Metadata } from 'next';
import { ShieldCheck, Paintbrush, Hammer, Cpu, FileCheck, PhoneCall } from 'lucide-react';
import { UtilityBar } from '@/components/blocks/UtilityBar';
import { Header } from '@/components/blocks/Header';
import { Footer } from '@/components/blocks/Footer';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { Heading, P } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Meter Box Relocation & Upgrade Brisbane — Links Air & Electrical',
  description:
    'Professional meter box relocation and switchboard upgrades. Fully compliant, neatly finished work. Call 1300 010 393.',
  alternates: {
    canonical: `${siteConfig.url}/meter-box-relocation`,
  },
  openGraph: {
    title: 'Meter Box Relocation & Upgrade Brisbane — Links Air & Electrical',
    description:
      'Professional meter box relocation and switchboard upgrades. Fully compliant, neatly finished work.',
    url: `${siteConfig.url}/meter-box-relocation`,
  },
};

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Energex/Ergon Compliant',
    desc: 'All meter box relocations and upgrades are completed to current Energex and Ergon Energy standards.',
  },
  {
    icon: Paintbrush,
    title: 'Neat & Tidy Finish',
    desc: 'We take pride in clean, professional installations with tidy cable runs and a finished look you can be proud of.',
  },
  {
    icon: Hammer,
    title: 'Renovation Ready',
    desc: 'Moving your meter box is often essential during renovations — we coordinate with your builder to keep the project on track.',
  },
  {
    icon: Cpu,
    title: 'Modern Equipment',
    desc: 'Upgrade to a new switchboard with safety switches, surge protection, and capacity for future electrical additions.',
  },
  {
    icon: FileCheck,
    title: 'Full Certification',
    desc: 'Every job is tested, certified, and documented with a certificate of compliance for your records.',
  },
  {
    icon: PhoneCall,
    title: 'Coordination with Supply Authority',
    desc: 'We handle the paperwork and liaise directly with your energy provider to ensure a smooth disconnection and reconnection.',
  },
];

export default function MeterBoxRelocationPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        <ServiceHero
          eyebrow="Meter Boxes"
          title="Meter Box Relocation & Upgrade"
          image="/images/services/electrical.webp"
          imageAlt="Meter box relocation and upgrade by Links Air & Electrical"
        />

        {/* ── Intro ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto max-w-[820px]">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                Meter Boxes
              </span>
              <Heading
                level={2}
                className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                Professional Meter Box Relocation and Upgrade
              </Heading>
              <P className="mt-5 text-[17px] leading-[1.7] text-[#4F6172]">
                Whether you&apos;re renovating, extending, or simply need your meter box moved to a
                more practical location, our licensed electricians handle the entire process from
                start to finish. We relocate meter boxes to meet current energy provider
                requirements and upgrade older switchboards to modern safety standards.
              </P>
              <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                Every meter box relocation involves coordination with your supply authority —
                Energex or Ergon Energy — to arrange disconnection and reconnection. We take care of
                all the paperwork and approvals so you don&apos;t have to. The result is a
                compliant, neatly finished installation with room for future electrical growth.
              </P>
            </div>
          </div>
        </section>

        {/* ── Benefits ── */}
        <section className="bg-[#F4F7FA] py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto mb-14 max-w-[760px] text-center">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                Benefits
              </span>
              <Heading
                level={2}
                className="font-heading mb-[18px] text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                Why Choose Us for Your Meter Box Work?
              </Heading>
            </div>

            <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="flex items-start gap-4 rounded-[14px] border border-[#E3E9F0] bg-white p-6"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#E9F4FB] text-[#1779B8]">
                    <b.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <Heading
                      level={4}
                      className="font-heading text-[15px] font-bold text-[#0E1B2C]"
                    >
                      {b.title}
                    </Heading>
                    <P className="mt-1 text-[14px] leading-[1.5] text-[#4F6172]">{b.desc}</P>
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
          name: 'Meter Box Relocation & Upgrade',
          description:
            'Professional meter box relocation and switchboard upgrades in Brisbane & Gold Coast.',
          url: `${siteConfig.url}/meter-box-relocation`,
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
