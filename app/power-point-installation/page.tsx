import type { Metadata } from 'next';
import { ShieldCheck, Home, CircuitBoard, Usb, CloudRain, Paintbrush } from 'lucide-react';
import { UtilityBar } from '@/components/blocks/UtilityBar';
import { Header } from '@/components/blocks/Header';
import { Footer } from '@/components/blocks/Footer';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { Heading, P } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Power Point Installation Brisbane — Links Air & Electrical',
  description:
    'Professional power point installation and upgrades. Modern safety-rated outlets positioned where you need them. Call 1300 010 393.',
  alternates: {
    canonical: `${siteConfig.url}/power-point-installation`,
  },
  openGraph: {
    title: 'Power Point Installation Brisbane — Links Air & Electrical',
    description:
      'Professional power point installation and upgrades. Modern safety-rated outlets positioned where you need them.',
    url: `${siteConfig.url}/power-point-installation`,
  },
};

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Safety-Rated Outlets',
    desc: 'We install only quality, safety-rated power points that meet Australian standards and provide reliable, long-lasting performance.',
  },
  {
    icon: Home,
    title: 'Indoor & Outdoor',
    desc: 'From bedrooms and kitchens to patios and sheds, we install power points wherever you need them — inside or outside.',
  },
  {
    icon: CircuitBoard,
    title: 'Dedicated Circuits',
    desc: 'Heavy-draw appliances like fridges, dryers, and workshop tools get their own dedicated circuit for safe, uninterrupted operation.',
  },
  {
    icon: Usb,
    title: 'USB Combo Options',
    desc: 'Upgrade to power points with built-in USB-A or USB-C ports — perfect for charging devices without bulky adaptors.',
  },
  {
    icon: CloudRain,
    title: 'Weatherproof Available',
    desc: 'Outdoor power points are fitted with weatherproof covers and IP-rated enclosures to protect against rain, dust, and moisture.',
  },
  {
    icon: Paintbrush,
    title: 'Neat Wall Finish',
    desc: 'All cabling is chased into walls or run through the ceiling cavity. No surface-mounted conduit unless absolutely necessary.',
  },
];

export default function PowerPointInstallationPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        <ServiceHero
          eyebrow="Power Points"
          title="Power Point Installation"
          image="/images/services/electrical.webp"
          imageAlt="Power point installation by Links Air & Electrical"
        />

        {/* ── Intro ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto max-w-[820px]">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                Power Points
              </span>
              <Heading
                level={2}
                className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                Professional Power Point Installation
              </Heading>
              <P className="mt-5 text-[17px] leading-[1.7] text-[#4F6172]">
                Whether you need new power points added, old ones relocated, or outdated outlets
                upgraded to modern safety-rated fittings, our electricians get the job done cleanly
                and to code. We also install dedicated circuits for heavy appliances like air
                conditioners, ovens, and workshop equipment.
              </P>
              <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                Outdoor power points are available with weatherproof covers for patios, sheds, and
                garden areas. We can also fit USB combo power points throughout your home — a simple
                upgrade that eliminates the need for bulky phone and tablet chargers. Every
                installation is tested and certified before we leave.
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
                Why Choose Us for Power Points?
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
          name: 'Power Point Installation',
          description:
            'Professional power point installation and upgrades in Brisbane & Gold Coast.',
          url: `${siteConfig.url}/power-point-installation`,
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
