import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ChevronRight } from 'lucide-react';
import { UtilityBar } from '@/components/blocks/UtilityBar';
import { Header } from '@/components/blocks/Header';
import { Footer } from '@/components/blocks/Footer';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { Heading, P } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Service Areas — Brisbane, Gold Coast, Logan & Ipswich | Links Air & Electrical',
  description:
    'Links Air & Electrical services Brisbane, Gold Coast, Logan, and Ipswich. Licensed electricians and air conditioning specialists across South East Queensland.',
  alternates: {
    canonical: `${siteConfig.url}/areas`,
  },
  openGraph: {
    title: 'Service Areas — Brisbane, Gold Coast, Logan & Ipswich | Links Air & Electrical',
    description:
      'Links Air & Electrical services Brisbane, Gold Coast, Logan, and Ipswich. Licensed electricians and air conditioning specialists across South East Queensland.',
    url: `${siteConfig.url}/areas`,
  },
};

const areas = [
  {
    name: 'Brisbane',
    desc: 'Our home base. We cover all Brisbane suburbs from the CBD to the outer suburbs — north, south, east and west. Same-day service available for most jobs.',
    href: '/areas/brisbane',
  },
  {
    name: 'Gold Coast',
    desc: 'From Southport to Coolangatta, we service the entire Gold Coast region. Residential and commercial electrical and air conditioning work.',
    href: '/areas/gold-coast',
  },
  {
    name: 'Logan',
    desc: 'Covering Logan Central, Springwood, Beenleigh, Browns Plains and surrounding suburbs. Fast response times from our local team.',
    href: '/areas/logan',
  },
  {
    name: 'Ipswich',
    desc: 'Servicing Ipswich, Springfield, Goodna, Redbank Plains and the wider Ipswich region. Full electrical and air conditioning services.',
    href: '/areas/ipswich',
  },
];

export default function AreasPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        <ServiceHero
          eyebrow="Service Areas"
          title="Areas We Service Across South East Queensland"
          image="/images/services/electrical.webp"
          imageAlt="Links Air & Electrical service areas across South East Queensland"
        />

        {/* ── Intro Section ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto max-w-[820px]">
              <div className="mb-10 text-center">
                <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                  Locally Based, Regionally Trusted
                </span>
                <Heading
                  level={2}
                  className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
                >
                  Covering Brisbane, Gold Coast, Logan and Ipswich
                </Heading>
              </div>

              <P className="text-[17px] leading-[1.7] text-[#4F6172]">
                Links Air &amp; Electrical is locally owned and operated, servicing homes and
                businesses across South East Queensland since 2014. Whether you need an emergency
                electrician in Brisbane, a split system installed on the Gold Coast, or a
                switchboard upgrade in Logan, our licensed team is on the road daily.
              </P>
              <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                We pride ourselves on fast response times, upfront pricing, and quality workmanship
                — no matter which suburb we&apos;re working in. Select your region below to learn
                more about the services available in your area.
              </P>
            </div>
          </div>
        </section>

        {/* ── Areas Grid ── */}
        <section className="bg-[#F4F7FA] py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="grid grid-cols-2 gap-6 max-[768px]:grid-cols-1">
              {areas.map((area) => (
                <Link
                  key={area.name}
                  href={area.href}
                  className="group flex flex-col gap-5 rounded-[18px] border border-[#E3E9F0] bg-white p-9 transition-shadow hover:shadow-[0_16px_40px_-12px_rgba(14,27,44,0.18)] max-[480px]:p-7"
                >
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#E9F4FB] text-[#1779B8]">
                    <MapPin className="h-7 w-7" />
                  </div>
                  <Heading level={3} className="font-heading text-[20px] font-bold text-[#0E1B2C]">
                    {area.name}
                  </Heading>
                  <P className="text-[15px] leading-[1.65] text-[#4F6172]">{area.desc}</P>
                  <span className="mt-auto inline-flex items-center gap-1 text-[15px] font-semibold text-[#1779B8] transition-colors group-hover:text-[#E73438]">
                    View area
                    <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Can't Find Your Suburb ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto max-w-[820px] text-center">
              <Heading
                level={2}
                className="font-heading mb-5 text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                Can&apos;t Find Your Suburb?
              </Heading>
              <P className="text-[17px] leading-[1.7] text-[#4F6172]">
                If your suburb isn&apos;t listed, give us a call on{' '}
                <Link
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="font-semibold text-[#1779B8] hover:underline"
                >
                  {siteConfig.phone}
                </Link>{' '}
                — we likely cover it. Our team services most of South East Queensland and we&apos;re
                always happy to check if we can help.
              </P>
            </div>
          </div>
        </section>

        <ServiceCTA />
      </main>
      <Footer />

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': `${siteConfig.url}/#business`,
          name: siteConfig.name,
          url: siteConfig.url,
          telephone: siteConfig.phone,
          areaServed: [
            {
              '@type': 'City',
              name: 'Brisbane',
              sameAs: 'https://en.wikipedia.org/wiki/Brisbane',
            },
            {
              '@type': 'City',
              name: 'Gold Coast',
              sameAs: 'https://en.wikipedia.org/wiki/Gold_Coast,_Queensland',
            },
            {
              '@type': 'City',
              name: 'Logan',
              sameAs: 'https://en.wikipedia.org/wiki/City_of_Logan',
            },
            {
              '@type': 'City',
              name: 'Ipswich',
              sameAs: 'https://en.wikipedia.org/wiki/Ipswich,_Queensland',
            },
          ],
        }}
      />
    </>
  );
}
