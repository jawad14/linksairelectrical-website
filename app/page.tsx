import type { Metadata } from 'next';
import { UtilityBar } from '@/components/blocks/UtilityBar';
import { Header } from '@/components/blocks/Header';
import { Hero } from '@/components/blocks/Hero';
import { TrustBadges } from '@/components/blocks/TrustBadges';
import { TrustStats } from '@/components/blocks/TrustStats';
import { Services } from '@/components/blocks/Services';
import { BrandPartners } from '@/components/blocks/BrandPartners';
import { WhyUs } from '@/components/blocks/WhyUs';
import { Testimonials } from '@/components/blocks/Testimonials';
import { Gallery } from '@/components/blocks/Gallery';
import { TrustedExperts } from '@/components/blocks/TrustedExperts';
import { OneTeam } from '@/components/blocks/OneTeam';
import { PromoBanner } from '@/components/blocks/PromoBanner';
import { Contact } from '@/components/blocks/Contact';
import { About } from '@/components/blocks/About';
import { ServicesTables } from '@/components/blocks/ServicesTables';
import { WhatMakesUsDifferent } from '@/components/blocks/WhatMakesUsDifferent';
import { OurCustomers } from '@/components/blocks/OurCustomers';
import { Areas } from '@/components/blocks/Areas';
import { FAQ } from '@/components/blocks/FAQ';
import { CTABand } from '@/components/blocks/CTABand';
import { Footer } from '@/components/blocks/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Air Conditioning Service in Brisbane - LinksAir & Electrical',
  description:
    'Links Air & Electrical offers air conditioning service in Brisbane, specializing in installation, repairs, and maintenance. Reliable AC, electrical solutions.',
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: 'Air Conditioning Service in Brisbane - LinksAir & Electrical',
    description:
      'Links Air & Electrical offers air conditioning service in Brisbane, specializing in installation, repairs, and maintenance. Reliable AC, electrical solutions.',
    url: siteConfig.url,
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
        {/* Licence & credential badges */}
        <TrustBadges />
        {/* Trust indicator icons */}
        <TrustStats />
        {/* 3 main service cards: AC, Electrical, Building */}
        <Services />
        {/* Brand logos — trust strip */}
        <BrandPartners />
        {/* Welcome / About section with company intro */}
        <WhyUs />
        {/* Customer testimonials */}
        <Testimonials />
        {/* 20% OFF promo banner */}
        <PromoBanner />
        {/* Work gallery — project photos (desktop only to reduce mobile scroll) */}
        <div className="hidden md:block">
          <Gallery />
        </div>
        {/* Your Trusted Local Experts (desktop only) */}
        <div className="hidden md:block">
          <TrustedExperts />
        </div>
        {/* One Team — 8 service cards on dark bg */}
        <OneTeam />
        {/* Appointment / contact form */}
        <Contact />
        {/* Why Choose Links — checklist (desktop only, WhyUs already covers this on mobile) */}
        <div className="hidden md:block">
          <About />
        </div>
        {/* Electrical Services + AC Services + Combined table (desktop only) */}
        <div className="hidden md:block">
          <ServicesTables />
        </div>
        {/* What Makes Us Different — 5 badges (desktop only) */}
        <div className="hidden md:block">
          <WhatMakesUsDifferent />
        </div>
        {/* Our Customers — 5 customer types (desktop only) */}
        <div className="hidden md:block">
          <OurCustomers />
        </div>
        {/* Service areas — dark bg */}
        <Areas />
        {/* FAQs accordion */}
        <FAQ />
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
