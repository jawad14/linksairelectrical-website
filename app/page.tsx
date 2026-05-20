import type { Metadata } from 'next';
import { Header } from '@/components/blocks/Header';
import { Hero } from '@/components/blocks/Hero';
import { Services } from '@/components/blocks/Services';
import { TrustStats } from '@/components/blocks/TrustStats';
import { About } from '@/components/blocks/About';
import { Testimonials } from '@/components/blocks/Testimonials';
import { PromoBanner } from '@/components/blocks/PromoBanner';
import { AppointmentForm } from '@/components/blocks/AppointmentForm';
import { Gallery } from '@/components/blocks/Gallery';
import { TrustedExperts } from '@/components/blocks/TrustedExperts';
import { WhyChooseUs } from '@/components/blocks/WhyChooseUs';
import { ServicesTables } from '@/components/blocks/ServicesTables';
import { CustomersAndAreas } from '@/components/blocks/CustomersAndAreas';
import { BrandPartners } from '@/components/blocks/BrandPartners';
import { FAQ } from '@/components/blocks/FAQ';
import { Footer } from '@/components/blocks/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Air Conditioning Service in Brisbane - Links Air & Electrical',
  description:
    'Links Air & Electrical provides professional air conditioning and electrical services across Brisbane & Gold Coast. Split systems, ducted AC, repairs, EV chargers, and more. 200+ 5-star Google reviews. Call 0468 432 538.',
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
        {/* 1. Hero slider (6 slides) */}
        <Hero />
        {/* 2. "What We Can Offer You" (3 service cards) */}
        <Services />
        {/* 3. Trust stats (6 icons) */}
        <TrustStats />
        {/* 4. "Welcome to Links Air & Electrical" + 24/7 CTA */}
        <About />
        {/* 5. Testimonials — real Google reviews */}
        <Testimonials />
        {/* 6. "20% OFF" promo banner */}
        <PromoBanner />
        {/* 7. Schedule an Appointment form */}
        <AppointmentForm />
        {/* 8. "Our Featured Works" gallery */}
        <Gallery />
        {/* 8. "Your Trusted Local Experts" + "One Team" with service icons */}
        <TrustedExperts />
        {/* 9. "Why Choose Links Air" with checklist */}
        <WhyChooseUs />
        {/* 10. Electrical services table + AC services + Combined + "What Makes Us Different" */}
        <ServicesTables />
        {/* 11. "Our Customers" + "Areas We Service" */}
        <CustomersAndAreas />
        {/* 12. Brand logos */}
        <BrandPartners />
        {/* 13. FAQ */}
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

      {/* FAQ schema */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
          })),
        }}
      />
    </>
  );
}
