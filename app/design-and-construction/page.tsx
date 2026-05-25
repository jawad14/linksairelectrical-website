import type { Metadata } from 'next';
import { Ruler, HardHat, Home, Building2, RefreshCw, FileCheck } from 'lucide-react';
import { UtilityBar } from '@/components/blocks/UtilityBar';
import { Header } from '@/components/blocks/Header';
import { Footer } from '@/components/blocks/Footer';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { Heading, P } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Air Conditioning Design & Construction — Custom AC Solutions',
  description:
    'Custom air conditioning design and construction for new builds, renovations and commercial projects in Brisbane & Gold Coast. Expert load calculations and tailored solutions.',
  alternates: {
    canonical: `${siteConfig.url}/design-and-construction`,
  },
  openGraph: {
    title: 'Air Conditioning Design & Construction — Custom AC Solutions',
    description:
      'Custom air conditioning design and construction for new builds, renovations and commercial projects.',
    url: `${siteConfig.url}/design-and-construction`,
  },
};

const services = [
  {
    icon: Ruler,
    title: 'Load Calculations',
    desc: 'We assess your floor plan, insulation, window orientation and local climate to size your system accurately — no guesswork.',
  },
  {
    icon: Home,
    title: 'New Home Builds',
    desc: 'Working alongside your builder from slab stage, we integrate ductwork and pipework into the structure before the plaster goes up.',
  },
  {
    icon: RefreshCw,
    title: 'Renovations & Extensions',
    desc: 'Adding rooms or reconfiguring your layout? We redesign the air conditioning to match, upgrading capacity where needed.',
  },
  {
    icon: Building2,
    title: 'Commercial Fit-Outs',
    desc: 'From open-plan offices to server rooms and retail shopfronts, we design systems that meet BCA compliance and tenant comfort standards.',
  },
  {
    icon: HardHat,
    title: 'Project Management',
    desc: 'We coordinate with other trades, manage timelines and handle council requirements so you have one less thing to worry about.',
  },
  {
    icon: FileCheck,
    title: 'Compliance & Certification',
    desc: 'Every design meets Australian Standards and local building codes. We provide all necessary compliance certificates on completion.',
  },
];

export default function DesignAndConstructionPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        <ServiceHero
          eyebrow="Design & Build"
          title="Air Conditioning Design & Construction"
          image="/images/services/construction.webp"
          imageAlt="Air conditioning system being installed during building construction"
        />

        {/* ── Intro ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto max-w-[760px]">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                End-to-end service
              </span>
              <Heading
                level={2}
                className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                Tailored Air Conditioning From the Ground Up
              </Heading>
              <P className="mt-5 text-[17px] leading-[1.7] text-[#4F6172]">
                Getting the air conditioning right starts long before the first unit goes on the
                wall. Our design-and-build service covers every stage — from initial site assessment
                and cooling load calculations through to equipment selection, installation and
                commissioning. The result is a system that&apos;s properly sized, energy efficient
                and built to last.
              </P>
              <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                Whether you&apos;re building a new home, extending an existing property or fitting
                out a commercial premises, our licensed team works with your builder and architect
                to deliver an integrated solution with no nasty surprises at handover.
              </P>
            </div>
          </div>
        </section>

        {/* ── Services Grid ── */}
        <section className="bg-[#F4F7FA] py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto mb-14 max-w-[760px] text-center">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                What we cover
              </span>
              <Heading
                level={2}
                className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                Our Design & Construction Services
              </Heading>
            </div>

            <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1">
              {services.map((s) => (
                <div key={s.title} className="rounded-[14px] border border-[#E3E9F0] bg-white p-7">
                  <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-[#E9F4FB] text-[#1779B8]">
                    <s.icon className="h-6 w-6" />
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

        <ServiceCTA />
      </main>
      <Footer />

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Air Conditioning Design & Construction',
          description:
            'Custom air conditioning design and construction for new builds, renovations and commercial projects in Brisbane and Gold Coast.',
          url: `${siteConfig.url}/design-and-construction`,
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
