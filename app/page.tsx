import type { Metadata } from 'next';
import { AccentLine } from '@/components/blocks/AccentLine';
import { TopBar } from '@/components/blocks/TopBar';
import { Header } from '@/components/blocks/Header';
import { Hero } from '@/components/blocks/Hero';
import { TrustStrip } from '@/components/blocks/TrustStrip';
import { ServiceGateway } from '@/components/blocks/ServiceGateway';
import { CombinedTeam } from '@/components/blocks/CombinedTeam';
import { AirConditioning } from '@/components/blocks/AirConditioning';
import { Electrical } from '@/components/blocks/Electrical';
import { Builders } from '@/components/blocks/Builders';
import { Gallery } from '@/components/blocks/Gallery';
import { WhyChoose } from '@/components/blocks/WhyChoose';
import { Reviews } from '@/components/blocks/Reviews';
import { Areas } from '@/components/blocks/Areas';
import { QuoteCTA } from '@/components/blocks/QuoteCTA';
import { Footer } from '@/components/blocks/Footer';
import { MobileFab } from '@/components/blocks/MobileFab';
import { RevealOnScroll } from '@/components/blocks/RevealOnScroll';
import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title:
    'Links Air & Electrical | Electrical & Air Conditioning Specialists — Brisbane & Gold Coast',
  description: siteConfig.description,
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title:
      'Links Air & Electrical | Electrical & Air Conditioning Specialists — Brisbane & Gold Coast',
    description: siteConfig.description,
    url: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <>
      <AccentLine />
      <TopBar />
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <ServiceGateway />
        <CombinedTeam />
        <AirConditioning />
        <Electrical />
        <Builders />
        <Gallery />
        <WhyChoose />
        <Reviews />
        <Areas />
        <QuoteCTA />
      </main>
      <Footer />
      <MobileFab />
      <RevealOnScroll />

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': `${siteConfig.url}/#business`,
          name: siteConfig.name,
          url: siteConfig.url,
          description: siteConfig.description,
          telephone: siteConfig.phone,
          email: siteConfig.email,
          image: `${siteConfig.url}/logo.webp`,
          logo: `${siteConfig.url}/logo.webp`,
          priceRange: '$$',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Brisbane',
            addressRegion: 'QLD',
            addressCountry: 'AU',
          },
          areaServed: siteConfig.serviceAreas.map((area) => ({
            '@type': 'City',
            name: area,
          })),
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5.0',
            bestRating: '5',
            worstRating: '1',
            reviewCount: '200',
          },
          sameAs: siteConfig.social.map((s) => s.href),
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          '@id': `${siteConfig.url}/#website`,
          name: siteConfig.name,
          url: siteConfig.url,
          description: siteConfig.description,
          publisher: { '@id': `${siteConfig.url}/#business` },
        }}
      />
    </>
  );
}
