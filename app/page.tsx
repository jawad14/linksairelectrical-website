import type { Metadata } from 'next';
import { Header } from '@/components/blocks/Header';
import { Hero } from '@/components/blocks/Hero';
import { Services } from '@/components/blocks/Services';
import { TrustStats } from '@/components/blocks/TrustStats';
import { About } from '@/components/blocks/About';
import { Gallery } from '@/components/blocks/Gallery';
import { WhyChooseUs } from '@/components/blocks/WhyChooseUs';
import { BrandPartners } from '@/components/blocks/BrandPartners';
import { FAQ } from '@/components/blocks/FAQ';
import { Footer } from '@/components/blocks/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Air Conditioning Service in Brisbane - Links Air & Electrical',
  description:
    'Links Air & Electrical provides professional air conditioning and electrical services across Brisbane & Gold Coast. Split systems, ducted AC, repairs, EV chargers, and more. 200+ 5-star Google reviews. Call 1300 010 393.',
  alternates: {
    canonical: siteConfig.url,
  },
};

const faqItems = [
  {
    question: 'Are you licensed and insured?',
    answer:
      'Yes, all our technicians are fully licensed and insured for both electrical and aircon work.',
  },
  {
    question: 'Can you supply air conditioning units too?',
    answer:
      'Yes — we can supply, install, and recommend trusted brands for both split and ducted systems.',
  },
  {
    question: 'What if I only need one small job done?',
    answer: "No problem — we're happy to help with jobs big or small.",
  },
  {
    question: 'Do you offer emergency electrical services?',
    answer: 'Yes — we offer emergency callouts across Brisbane and Gold Coast.',
  },
  {
    question: 'How much do you charge?',
    answer: 'We provide upfront quotes before we begin. No surprises.',
  },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <TrustStats />
        <About />
        <Gallery />
        <WhyChooseUs />
        <BrandPartners />
        <FAQ />
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
          image: `${siteConfig.url}/images/logo.png`,
          logo: `${siteConfig.url}/images/logo.png`,
          priceRange: '$$',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Brisbane',
            addressRegion: 'QLD',
            postalCode: '4000',
            addressCountry: 'AU',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: -27.4698,
            longitude: 153.0251,
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
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Air Conditioning & Electrical Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Air Conditioning Installation',
                  description:
                    'Split system, ducted, and VRV/VRF air conditioning installation across Brisbane and Gold Coast.',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Air Conditioning Repair & Maintenance',
                  description: 'Expert AC repair, servicing, and maintenance for all major brands.',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Electrical Services',
                  description:
                    'Residential and commercial electrical services including lighting, switchboard upgrades, EV chargers, and CCTV.',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Building & Construction Electrical',
                  description:
                    'Complete electrical and air conditioning solutions for new builds and renovations.',
                },
              },
            ],
          },
        }}
      />

      {/* WebSite schema with search action */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          '@id': `${siteConfig.url}/#website`,
          name: siteConfig.name,
          url: siteConfig.url,
          description: siteConfig.description,
          publisher: {
            '@id': `${siteConfig.url}/#business`,
          },
        }}
      />

      {/* FAQ schema */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }}
      />
    </>
  );
}
