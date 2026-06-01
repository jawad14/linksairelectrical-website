import type { Metadata } from 'next';
import { UtilityBar } from '@/components/blocks/UtilityBar';
import { Header } from '@/components/blocks/Header';
import { Footer } from '@/components/blocks/Footer';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import Image from 'next/image';
import { Heading, P } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Back to Back Split System Installation Brisbane — Links Air & Electrical',
  description:
    'Back to back split system installation from $450+GST. Indoor and outdoor units on opposite sides of the same wall for the quickest, most affordable AC install. Call 1300 010 393.',
  alternates: {
    canonical: `${siteConfig.url}/back-to-back-installation`,
  },
  openGraph: {
    title: 'Back to Back Split System Installation — Links Air & Electrical',
    description:
      'The most affordable split system installation option — units sit on opposite sides of the same wall.',
    url: `${siteConfig.url}/back-to-back-installation`,
  },
};

const pricingRows = [
  { unit: 'Ground Level — 2.5 to 3.5 kW', price: 'From $450 + GST' },
  { unit: 'Ground Level — 5 to 9 kW', price: 'From $550 + GST' },
  { unit: 'First Level — 2.5 to 3.5 kW', price: 'From $550 + GST' },
  { unit: 'First Level — 5 to 9 kW', price: 'From $650 + GST' },
];

export default function BackToBackPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        <ServiceHero
          eyebrow="Split System"
          title="Back to Back Installation"
          image="/images/services/banner-hero.webp"
          imageAlt="Back to back air conditioning installation by Links Air & Electrical"
        />

        {/* ── Content Section ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="grid grid-cols-[1.1fr_1fr] items-center gap-[clamp(32px,6vw,80px)] max-[900px]:grid-cols-1">
              <div>
                <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                  Most Popular Option
                </span>
                <Heading
                  level={2}
                  className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
                >
                  The Simplest and Most Affordable Split System Install
                </Heading>
                <P className="mt-5 text-[17px] leading-[1.7] text-[#4F6172]">
                  A back-to-back installation is the most common type of split system setup. The
                  indoor unit mounts on one side of an external wall, and the outdoor unit sits
                  directly on the other side. Because both units share the same wall, the copper
                  piping connecting them is kept to an absolute minimum — typically around 3 metres
                  for a single-storey home and 4 metres for two storeys.
                </P>
                <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                  This short pipe run means less labour, fewer materials, and a cleaner finish with
                  no exposed pipework running along the outside of your house. It is the quickest
                  install to complete and the easiest on the wallet.
                </P>
                <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                  If your pipe run needs to go beyond the standard length, additional piping is
                  charged at $50 per metre. Our technicians will always confirm the final cost with
                  you before starting any work — no surprises.
                </P>
              </div>
              <div className="hidden overflow-hidden rounded-[14px] md:block">
                <Image
                  src="/images/services/pages/back-to-back-ref.webp"
                  alt="Back to back air conditioning installation"
                  width={600}
                  height={500}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Pricing Table ── */}
        <section className="bg-[#F4F7FA] py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto max-w-[680px]">
              <div className="mb-10 text-center">
                <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                  Pricing
                </span>
                <Heading
                  level={2}
                  className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
                >
                  Back to Back Installation Pricing
                </Heading>
                <P className="mt-4 text-[15px] leading-[1.7] text-[#4F6172]">
                  Labour-only pricing for standard back-to-back installations. Unit supply available
                  at additional cost. Extra piping charged at $50/m beyond the standard run.
                </P>
              </div>

              <div className="overflow-hidden rounded-[14px] border border-[#E3E9F0] bg-white">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-[#E3E9F0] bg-[#F8FAFC]">
                      <th className="px-6 py-4 text-[14px] font-semibold text-[#0E1B2C]">
                        Unit Size & Level
                      </th>
                      <th className="px-6 py-4 text-[14px] font-semibold text-[#0E1B2C]">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingRows.map((row, i) => (
                      <tr
                        key={row.unit}
                        className={i < pricingRows.length - 1 ? 'border-b border-[#E3E9F0]' : ''}
                      >
                        <td className="px-6 py-4 text-[15px] text-[#4F6172]">{row.unit}</td>
                        <td className="px-6 py-4 text-[15px] font-semibold text-[#0E1B2C]">
                          {row.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
          name: 'Back to Back Split System Installation',
          description:
            'Back to back split system air conditioning installation in Brisbane & Gold Coast. From $450+GST.',
          url: `${siteConfig.url}/back-to-back-installation`,
          provider: {
            '@type': 'LocalBusiness',
            '@id': `${siteConfig.url}/#business`,
            name: siteConfig.name,
          },
          offers: {
            '@type': 'Offer',
            priceCurrency: 'AUD',
            price: '450',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              priceCurrency: 'AUD',
              price: '450',
              unitText: 'starting from',
              valueAddedTaxIncluded: false,
            },
          },
        }}
      />
    </>
  );
}
