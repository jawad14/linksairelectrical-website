import type { Metadata } from 'next';
import { Zap, RefreshCw, SlidersHorizontal, Palette, LayoutGrid, Droplets } from 'lucide-react';
import { UtilityBar } from '@/components/blocks/UtilityBar';
import { Header } from '@/components/blocks/Header';
import { Footer } from '@/components/blocks/Footer';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { Heading, P } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Downlight Installation Brisbane & Gold Coast — Links Air & Electrical',
  description:
    'LED downlight installation, halogen-to-LED upgrades, and custom lighting layouts. Energy-efficient lighting for every room. Call 1300 010 393.',
  alternates: {
    canonical: `${siteConfig.url}/downlights`,
  },
  openGraph: {
    title: 'Downlight Installation Brisbane & Gold Coast — Links Air & Electrical',
    description:
      'LED downlight installation, halogen-to-LED upgrades, and custom lighting layouts for every room.',
    url: `${siteConfig.url}/downlights`,
  },
};

const benefits = [
  {
    icon: Zap,
    title: 'Energy Savings Up to 80%',
    desc: 'LED downlights use a fraction of the power that halogen globes consume, cutting your lighting costs dramatically.',
  },
  {
    icon: RefreshCw,
    title: 'Halogen-to-LED Upgrades',
    desc: 'We replace old halogen fittings with modern LED modules — same cutout, better light, lower running costs and less heat.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Dimmer Compatible',
    desc: 'Pair your downlights with compatible dimmers to set the perfect mood for any room or occasion.',
  },
  {
    icon: Palette,
    title: 'Colour Temperature Options',
    desc: 'Choose from warm white for living areas, cool white for kitchens and bathrooms, or tri-colour fittings that let you switch.',
  },
  {
    icon: LayoutGrid,
    title: 'Custom Layouts',
    desc: 'We design downlight layouts tailored to your ceiling height, room size and how the space is used — no dark spots.',
  },
  {
    icon: Droplets,
    title: 'IP-Rated for Wet Areas',
    desc: 'Bathrooms, laundries and outdoor soffits get IP-rated fittings that are safe and compliant in moisture-prone zones.',
  },
];

export default function DownlightsPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        <ServiceHero
          eyebrow="Lighting"
          title="Downlight Installation"
          image="/images/services/banner-hero.webp"
          imageAlt="LED downlights installed in a modern ceiling by Links Air & Electrical"
        />

        {/* ── Intro ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto max-w-[760px]">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                Modern Lighting
              </span>
              <Heading
                level={2}
                className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                LED Downlights Designed for Your Space
              </Heading>
              <P className="mt-5 text-[17px] leading-[1.7] text-[#4F6172]">
                LED downlights are the go-to choice for clean, modern lighting that saves energy and
                looks great. Whether you&apos;re building a new home, renovating or simply upgrading
                from halogen, we design and install downlight layouts that suit the way each room is
                used — from kitchens and living areas to bathrooms and outdoor entertaining spaces.
              </P>
              <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                With dimming options, a full range of colour temperatures and energy savings of up
                to 80% compared to halogen, LEDs deliver better light for less. We handle everything
                from layout design to wiring, cutouts and final testing.
              </P>
            </div>
          </div>
        </section>

        {/* ── Benefits ── */}
        <section className="bg-[#F4F7FA] py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto mb-14 max-w-[760px] text-center">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                Why LED downlights
              </span>
              <Heading
                level={2}
                className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                Downlight Benefits
              </Heading>
            </div>

            <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1">
              {benefits.map((b) => (
                <div key={b.title} className="rounded-[14px] border border-[#E3E9F0] bg-white p-7">
                  <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-[#E9F4FB] text-[#1779B8]">
                    <b.icon className="h-6 w-6" />
                  </div>
                  <Heading
                    level={3}
                    className="font-heading mb-2 text-[17px] font-bold text-[#0E1B2C]"
                  >
                    {b.title}
                  </Heading>
                  <P className="text-[14px] leading-[1.6] text-[#4F6172]">{b.desc}</P>
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
          name: 'Downlight Installation',
          description:
            'LED downlight installation, halogen-to-LED upgrades, and custom lighting layouts in Brisbane and Gold Coast.',
          url: `${siteConfig.url}/downlights`,
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
