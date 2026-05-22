import type { Metadata } from 'next';
import { UtilityBar } from '@/components/blocks/UtilityBar';
import { Header } from '@/components/blocks/Header';
import { Hero } from '@/components/blocks/Hero';
import { LicenseBar } from '@/components/blocks/LicenseBar';
import { Services } from '@/components/blocks/Services';
import { WhyUs } from '@/components/blocks/WhyUs';
import { Process } from '@/components/blocks/Process';
import { About } from '@/components/blocks/About';
import { Areas } from '@/components/blocks/Areas';
import { Testimonials } from '@/components/blocks/Testimonials';
import { CTABand } from '@/components/blocks/CTABand';
import { Contact } from '@/components/blocks/Contact';
import { Footer } from '@/components/blocks/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Links Air & Electrical — Trusted electricians & air conditioning specialists',
  description:
    'From switchboard upgrades and LED installs to split-system air con and emergency call-outs, Links Air & Electrical brings tidy, code-compliant work to homes and businesses across the region.',
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
        <Hero />
        <LicenseBar />
        <Services />
        <WhyUs />
        <Process />
        <About />
        <Areas />
        <Testimonials />
        <CTABand />
        <Contact />
      </main>
      <Footer />

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
            addressLocality: 'Sydney',
            addressRegion: 'NSW',
            addressCountry: 'AU',
          },
          areaServed: siteConfig.serviceAreas.map((area) => ({
            '@type': 'City',
            name: area,
          })),
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            bestRating: '5',
            worstRating: '1',
            reviewCount: '200',
          },
          sameAs: siteConfig.social.map((s) => s.href),
        }}
      />
    </>
  );
}
