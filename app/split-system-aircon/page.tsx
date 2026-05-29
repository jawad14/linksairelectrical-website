import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronRight,
  ArrowLeftRight,
  ArrowRightLeft,
  ArrowUpFromLine,
  DollarSign,
  Volume2,
  Paintbrush,
  Wrench,
  Zap,
  Thermometer,
} from 'lucide-react';
import { UtilityBar } from '@/components/blocks/UtilityBar';
import { Header } from '@/components/blocks/Header';
import { Footer } from '@/components/blocks/Footer';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { Testimonials } from '@/components/blocks/Testimonials';
import { JsonLd } from '@/components/seo/JsonLd';
import { Heading, P } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Split System Air Conditioning Brisbane — Links Air & Electrical',
  description:
    'Expert split system air conditioning installation, supply, and servicing in Brisbane & Gold Coast. Back-to-back, side entry, and up & over options. Get a free quote today.',
  alternates: {
    canonical: `${siteConfig.url}/split-system-aircon`,
  },
  openGraph: {
    title: 'Split System Air Conditioning Brisbane — Links Air & Electrical',
    description: 'Expert split system installation and servicing across Brisbane & Gold Coast.',
    url: `${siteConfig.url}/split-system-aircon`,
  },
};

const installationTypes = [
  {
    icon: ArrowLeftRight,
    title: 'Back to Back Installation',
    desc: 'The most straightforward setup — indoor and outdoor units sit on opposite sides of the same wall. Shortest pipe run, lowest cost.',
    price: 'From $600 – $850',
    href: '/back-to-back-installation',
    image: '/images/services/pages/split-b2b-card.webp',
  },
  {
    icon: ArrowRightLeft,
    title: 'Side Entry Installation',
    desc: 'Pipework runs along the wall to the side of the unit. Ideal for brick walls or situations where back-to-back is not an option.',
    price: 'From $700 – $950',
    href: '/side-entry-installation',
    image: '/images/services/pages/split-side-entry-card.webp',
  },
  {
    icon: ArrowUpFromLine,
    title: 'Up & Over Installation',
    desc: 'Pipes travel up and over the roof cavity. Used for multi-storey homes or when the outdoor unit needs to be placed further away.',
    price: 'From $1,000 – $1,500+',
    href: '/up-over-installation',
    image: '/images/services/pages/split-up-over-card.webp',
  },
];

const benefits = [
  {
    icon: DollarSign,
    title: 'Cost-Effective',
    desc: 'Lower upfront cost than ducted systems, with no ductwork required.',
  },
  {
    icon: Thermometer,
    title: 'Heating & Cooling',
    desc: 'Reverse-cycle technology delivers warm air in winter and cool air in summer from a single unit.',
  },
  {
    icon: Volume2,
    title: 'Whisper-Quiet Operation',
    desc: 'Modern inverter models run at noise levels as low as 19 dB — quieter than a library.',
  },
  {
    icon: Paintbrush,
    title: 'Sleek, Modern Design',
    desc: 'Slim wall-mounted indoor units blend into any room without taking up floor space.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    desc: 'Washable filters and accessible components make regular servicing quick and simple.',
  },
  {
    icon: Zap,
    title: 'Quick Installation',
    desc: 'Most split system installs are completed in a single day with minimal disruption.',
  },
];

const pricingRows = [
  { type: 'Back-to-Back', cost: '$600 – $850' },
  { type: 'Standard (Side Entry)', cost: '$700 – $950' },
  { type: 'Complex (Up & Over)', cost: '$1,000 – $1,500+' },
];

export default function SplitSystemPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        <ServiceHero
          eyebrow="Split Systems"
          title="Split System Air Conditioning"
          image="/images/services/pages/split-system.webp"
          imageAlt="Split system air conditioning by Links Air & Electrical"
        />

        {/* ── How Split Systems Work ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto max-w-[820px]">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                How It Works
              </span>
              <Heading
                level={2}
                className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                What Is a Split System and How Does It Work?
              </Heading>
              <P className="mt-5 text-[17px] leading-[1.7] text-[#4F6172]">
                A split system air conditioner is made up of two connected units. The indoor unit
                houses the evaporator coil and blower fan, and is typically wall-mounted inside your
                room. The outdoor unit contains the compressor and condenser, and sits outside on a
                concrete pad or wall bracket.
              </P>
              <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                Refrigerant circulates between the two units through copper piping, absorbing heat
                from inside and releasing it outside (or vice versa in heating mode). Because there
                is no ductwork involved, split systems are faster to install, more affordable, and
                perfect for cooling individual rooms or open-plan living areas.
              </P>
            </div>
          </div>
        </section>

        {/* ── Installation Types ── */}
        <section className="bg-[#F4F7FA] py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto mb-14 max-w-[760px] text-center">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                Installation Options
              </span>
              <Heading
                level={2}
                className="font-heading mb-[18px] text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                Choose the Right Installation for Your Home
              </Heading>
            </div>

            <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-1">
              {installationTypes.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group flex flex-col gap-4 rounded-[14px] border border-[#E3E9F0] bg-white p-7 transition-shadow hover:shadow-[0_12px_32px_-12px_rgba(14,27,44,0.15)]"
                >
                  <div className="relative aspect-[1/1] w-full overflow-hidden rounded-xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 900px) 100vw, 33vw"
                    />
                  </div>
                  <Heading level={3} className="font-heading text-[17px] font-bold text-[#0E1B2C]">
                    {item.title}
                  </Heading>
                  <P className="text-[14px] leading-[1.6] text-[#4F6172]">{item.desc}</P>
                  <P className="text-[15px] font-semibold text-[#0E1B2C]">{item.price}</P>
                  <span className="mt-auto inline-flex items-center gap-1 text-[14px] font-semibold text-[#1779B8] transition-colors group-hover:text-[#E73438]">
                    Learn More
                    <ChevronRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Benefits ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto mb-14 max-w-[760px] text-center">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                Benefits
              </span>
              <Heading
                level={2}
                className="font-heading mb-[18px] text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                Why Choose a Split System?
              </Heading>
            </div>

            <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="flex items-start gap-4 rounded-[14px] border border-[#E3E9F0] bg-[#F8FAFC] p-6"
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

        {/* ── Pricing Table ── */}
        <section className="bg-[#F4F7FA] py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto max-w-[680px]">
              <div className="mb-10 text-center">
                <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                  Pricing Guide
                </span>
                <Heading
                  level={2}
                  className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
                >
                  Split System Installation Costs
                </Heading>
                <P className="mt-4 text-[15px] leading-[1.7] text-[#4F6172]">
                  Prices are for labour only and do not include the unit. Final cost depends on pipe
                  run length, access, and electrical requirements.
                </P>
              </div>

              <div className="overflow-hidden rounded-[14px] border border-[#E3E9F0] bg-white">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-[#E3E9F0] bg-[#F8FAFC]">
                      <th className="px-6 py-4 text-[14px] font-semibold text-[#0E1B2C]">
                        Installation Type
                      </th>
                      <th className="px-6 py-4 text-[14px] font-semibold text-[#0E1B2C]">
                        Estimated Cost
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingRows.map((row, i) => (
                      <tr
                        key={row.type}
                        className={i < pricingRows.length - 1 ? 'border-b border-[#E3E9F0]' : ''}
                      >
                        <td className="px-6 py-4 text-[15px] text-[#4F6172]">{row.type}</td>
                        <td className="px-6 py-4 text-[15px] font-semibold text-[#0E1B2C]">
                          {row.cost}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />
        <ServiceCTA />
      </main>
      <Footer />

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Split System Air Conditioning',
          description:
            'Expert split system air conditioning installation and servicing in Brisbane & Gold Coast.',
          url: `${siteConfig.url}/split-system-aircon`,
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
