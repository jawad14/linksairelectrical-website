import type { Metadata } from 'next';
import { ShieldCheck, Link2, Sun, MapPin, Building2, BatteryFull } from 'lucide-react';
import { UtilityBar } from '@/components/blocks/UtilityBar';
import { Header } from '@/components/blocks/Header';
import { Footer } from '@/components/blocks/Footer';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { Heading, P } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Smoke Detector Installation Brisbane \u2014 Links Air & Electrical',
  description:
    'Compliant smoke detector installation meeting Queensland regulations. Interconnected photoelectric alarms. Call 1300 010 393.',
  alternates: {
    canonical: `${siteConfig.url}/smoke-detector-installation`,
  },
  openGraph: {
    title: 'Smoke Detector Installation Brisbane \u2014 Links Air & Electrical',
    description:
      'Compliant smoke detector installation meeting Queensland regulations. Interconnected photoelectric alarms.',
    url: `${siteConfig.url}/smoke-detector-installation`,
  },
};

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Queensland Compliant',
    desc: 'Every installation meets current Queensland smoke alarm legislation, so your property stays on the right side of the law.',
  },
  {
    icon: Link2,
    title: 'Interconnected Alarms',
    desc: 'When one alarm triggers, every alarm in the home sounds — giving occupants maximum warning no matter where the fire starts.',
  },
  {
    icon: Sun,
    title: 'Photoelectric Type',
    desc: 'We install photoelectric alarms as required by legislation, which are better at detecting smouldering fires before they flame.',
  },
  {
    icon: MapPin,
    title: 'Strategic Placement',
    desc: 'Alarms are positioned to maximise detection coverage while minimising nuisance false alarms from kitchens and bathrooms.',
  },
  {
    icon: Building2,
    title: 'Landlord Compliance',
    desc: 'If you\u2019re selling or renting, we ensure your property meets the specific smoke alarm requirements for landlords and sellers.',
  },
  {
    icon: BatteryFull,
    title: '10-Year Battery Options',
    desc: 'Sealed lithium battery models eliminate annual battery changes — set and forget for up to ten years.',
  },
];

export default function SmokeDetectorInstallationPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        <ServiceHero
          eyebrow="Fire Safety"
          title="Smoke Detector Installation"
          image="/images/services/electrical.webp"
          imageAlt="Smoke detector installation by Links Air & Electrical"
        />

        {/* ── Intro ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto max-w-[820px]">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                Fire Safety
              </span>
              <Heading
                level={2}
                className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                Compliant Smoke Detector Installation
              </Heading>
              <P className="mt-5 text-[17px] leading-[1.7] text-[#4F6172]">
                Queensland&apos;s smoke alarm legislation requires all homes to have interconnected
                photoelectric smoke alarms installed in every bedroom, in hallways connecting
                bedrooms, and on every level of the property. Whether you&apos;re a homeowner
                upgrading, a landlord meeting compliance deadlines, or preparing a property for
                sale, our licensed electricians handle the entire process.
              </P>
              <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                We strategically position each alarm to maximise fire detection while reducing false
                alarms caused by cooking or steam. All installations meet the current Australian
                Standard and Queensland Fire and Emergency Services requirements, and we provide a
                compliance certificate for your records.
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
                Why Choose Our Smoke Detector Service?
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
          name: 'Smoke Detector Installation',
          description:
            'Compliant smoke detector installation meeting Queensland regulations. Interconnected photoelectric alarms.',
          url: `${siteConfig.url}/smoke-detector-installation`,
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
