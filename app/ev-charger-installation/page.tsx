import type { Metadata } from 'next';
import { Car, Gauge, BarChart3, Plug, PilcrowSquare, BadgeCheck } from 'lucide-react';
import { UtilityBar } from '@/components/blocks/UtilityBar';
import { Header } from '@/components/blocks/Header';
import { Footer } from '@/components/blocks/Footer';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { Heading, P } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'EV Charger Installation Brisbane & Gold Coast \u2014 Links Air & Electrical',
  description:
    'Home and commercial EV charger installation. We size your supply, install load management, and certify the work. Call 1300 010 393.',
  alternates: {
    canonical: `${siteConfig.url}/ev-charger-installation`,
  },
  openGraph: {
    title: 'EV Charger Installation Brisbane & Gold Coast \u2014 Links Air & Electrical',
    description:
      'Home and commercial EV charger installation. We size your supply, install load management, and certify the work.',
    url: `${siteConfig.url}/ev-charger-installation`,
  },
};

const benefits = [
  {
    icon: Car,
    title: 'All Major Brands',
    desc: 'We install Tesla Wall Connectors, Ocular, Fronius Wattpilot, and all other popular EV charger brands.',
  },
  {
    icon: Gauge,
    title: 'Load Management',
    desc: 'Smart load management ensures your charger works within your home\u2019s electrical capacity without tripping breakers.',
  },
  {
    icon: BarChart3,
    title: 'Supply Sizing',
    desc: 'We assess your switchboard and mains supply to determine if an upgrade is needed before installation.',
  },
  {
    icon: Plug,
    title: 'Type 2 Universal',
    desc: 'Type 2 connectors are the Australian standard — compatible with virtually every EV on the market.',
  },
  {
    icon: PilcrowSquare,
    title: 'Wall or Pedestal Mount',
    desc: 'Choose a wall-mounted unit for your garage or a pedestal mount for driveways and commercial car parks.',
  },
  {
    icon: BadgeCheck,
    title: 'Full Certification',
    desc: 'Every installation is tested, certified, and compliant with AS/NZS 3000 wiring rules and energy network requirements.',
  },
];

export default function EvChargerInstallationPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        <ServiceHero
          eyebrow="EV Charging"
          title="EV Charger Installation"
          image="/images/services/electrical.webp"
          imageAlt="EV charger installation by Links Air & Electrical"
        />

        {/* ── Intro ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto max-w-[820px]">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                EV Charging
              </span>
              <Heading
                level={2}
                className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                Home and Commercial EV Charger Installation
              </Heading>
              <P className="mt-5 text-[17px] leading-[1.7] text-[#4F6172]">
                Charging at home is the most convenient and cost-effective way to keep your electric
                vehicle ready to go. We install dedicated Type 2 EV chargers from all major brands
                including Tesla Wall Connector, Ocular, and Fronius Wattpilot — sized to your
                vehicle&apos;s requirements and your home&apos;s electrical capacity.
              </P>
              <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                For commercial properties and fleet operators, we design multi-charger setups with
                smart load management so multiple vehicles can charge simultaneously without
                overloading your supply. Every installation includes a full assessment of your
                switchboard and mains supply, any necessary upgrades, and a compliance certificate
                on completion.
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
                Why Choose Our EV Charger Service?
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
          name: 'EV Charger Installation',
          description:
            'Home and commercial EV charger installation. We size your supply, install load management, and certify the work.',
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
