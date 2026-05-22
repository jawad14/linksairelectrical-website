import type { Metadata } from 'next';
import { UtilityBar } from '@/components/blocks/UtilityBar';
import { Header } from '@/components/blocks/Header';
import { Hero } from '@/components/blocks/Hero';
import { TrustStats } from '@/components/blocks/TrustStats';
import { Services } from '@/components/blocks/Services';
import { WhyUs } from '@/components/blocks/WhyUs';
import { Testimonials } from '@/components/blocks/Testimonials';
import { PromoBanner } from '@/components/blocks/PromoBanner';
import { Contact } from '@/components/blocks/Contact';
import { About } from '@/components/blocks/About';
import { Areas } from '@/components/blocks/Areas';
import { CTABand } from '@/components/blocks/CTABand';
import { Footer } from '@/components/blocks/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Air Conditioning & Electrical Services Brisbane - Links Air & Electrical',
  description:
    'Professional air conditioning and electrical services in Brisbane & Gold Coast. Split systems, ducted AC, repairs, EV chargers, and more. 200+ 5-star Google reviews. Call 1300 010 393.',
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        {/* Hero with service entry cards */}
        <Hero />
        {/* Trust indicator icons */}
        <TrustStats />
        {/* 3 main service cards: AC, Electrical, Building */}
        <Services />
        {/* Welcome / About section with company intro */}
        <WhyUs />
        {/* Customer testimonials */}
        <Testimonials />
        {/* 20% OFF promo banner */}
        <PromoBanner />
        {/* Appointment / contact form */}
        <Contact />
        {/* Why Choose Links — checklist */}
        <About />
        {/* Service areas */}
        <Areas />
        {/* Final CTA band */}
        <CTABand />
      </main>
      <Footer />

      {/* LocalBusiness schema */}
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
          image: `${siteConfig.url}/logo.jpg`,
          logo: `${siteConfig.url}/logo.jpg`,
          priceRange: '$$',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Brisbane',
            addressRegion: 'QLD',
            postalCode: '4000',
            addressCountry: 'AU',
          },
          areaServed: siteConfig.serviceAreas.map((area) => ({
            '@type': 'City',
            name: area,
          })),
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday',
            ],
            opens: '09:00',
            closes: '19:00',
          },
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

      {/* WebSite schema */}
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
