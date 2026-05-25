import type { Metadata } from 'next';
import { Filter, Snowflake, Gauge, Zap, CheckCircle } from 'lucide-react';
import { UtilityBar } from '@/components/blocks/UtilityBar';
import { Header } from '@/components/blocks/Header';
import { Footer } from '@/components/blocks/Footer';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { Heading, P } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Air Conditioning Service & Maintenance Brisbane',
  description:
    'Regular air conditioning servicing and maintenance in Brisbane & Gold Coast. Filter cleaning, coil checks, gas pressure tests and electrical inspections. Book online.',
  alternates: {
    canonical: `${siteConfig.url}/service-maintenance`,
  },
  openGraph: {
    title: 'Air Conditioning Service & Maintenance Brisbane',
    description: 'Regular air conditioning servicing and maintenance in Brisbane & Gold Coast.',
    url: `${siteConfig.url}/service-maintenance`,
  },
};

const included = [
  {
    icon: Filter,
    title: 'Filter Clean & Replacement',
    desc: "We remove, wash and dry your filters — or replace them if they're past their best. Clean filters mean better airflow and healthier air.",
  },
  {
    icon: Snowflake,
    title: 'Coil Inspection & Clean',
    desc: 'Dirty evaporator and condenser coils force your system to work harder. We clean and inspect them for corrosion or damage.',
  },
  {
    icon: Gauge,
    title: 'Refrigerant Gas Check',
    desc: 'Low gas means poor cooling and higher power bills. We test pressure levels and top up if needed, then check for leaks.',
  },
  {
    icon: Zap,
    title: 'Electrical Safety Test',
    desc: 'We inspect wiring, connections, capacitors and contactors to ensure everything is safe and operating within spec.',
  },
];

const benefits = [
  'Extends the life of your air conditioning system',
  'Reduces energy consumption and lowers electricity bills',
  'Prevents costly breakdowns and emergency repairs',
  'Improves indoor air quality by removing mould and bacteria',
  'Keeps your manufacturer warranty valid',
  'Ensures peak performance when you need it most',
];

export default function ServiceMaintenancePage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        <ServiceHero
          eyebrow="Servicing"
          title="Air Conditioning Service & Maintenance"
          image="/images/services/airconditioning.webp"
          imageAlt="Technician performing maintenance on an air conditioning unit"
        />

        {/* ── Intro ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto max-w-[760px]">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                Preventive care
              </span>
              <Heading
                level={2}
                className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                Keep Your AC Running at Its Best Year-Round
              </Heading>
              <P className="mt-5 text-[17px] leading-[1.7] text-[#4F6172]">
                Your air conditioning system works hard in the Queensland heat, and like any
                mechanical equipment it needs regular attention to perform reliably. Our maintenance
                service is thorough, affordable and designed to catch small issues before they turn
                into expensive problems.
              </P>
              <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                We recommend servicing at least once a year — or every six months if your system
                runs daily. A well-maintained unit cools better, uses less energy and lasts
                significantly longer than one that&apos;s left untouched.
              </P>
            </div>
          </div>
        </section>

        {/* ── What's Included ── */}
        <section className="bg-[#F4F7FA] py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto mb-14 max-w-[760px] text-center">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                What&apos;s included
              </span>
              <Heading
                level={2}
                className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                Our Standard Service Covers
              </Heading>
            </div>

            <div className="grid grid-cols-2 gap-5 max-[640px]:grid-cols-1">
              {included.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-5 rounded-[14px] border border-[#E3E9F0] bg-white p-7"
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

        {/* ── Benefits ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto max-w-[760px]">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                Why it matters
              </span>
              <Heading
                level={2}
                className="font-heading mb-8 text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                Benefits of Regular Servicing
              </Heading>
              <div className="flex flex-col gap-3">
                {benefits.map((b) => (
                  <div key={b} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 shrink-0 text-[#22C55E]" />
                    <P className="text-[16px] leading-[1.5] text-[#4F6172]">{b}</P>
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
          name: 'Air Conditioning Service & Maintenance',
          description:
            'Regular air conditioning servicing and maintenance in Brisbane and Gold Coast.',
          url: `${siteConfig.url}/service-maintenance`,
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
