import type { Metadata } from 'next';
import { UtilityBar } from '@/components/blocks/UtilityBar';
import { Header } from '@/components/blocks/Header';
import { Footer } from '@/components/blocks/Footer';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { Contact } from '@/components/blocks/Contact';
import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Contact Us — Links Air & Electrical',
  description:
    'Get in touch with Links Air & Electrical for a free quote. Air conditioning, electrical, and builder services across Brisbane & Gold Coast. Call 1300 010 393.',
  alternates: {
    canonical: `${siteConfig.url}/contact-us`,
  },
  openGraph: {
    title: 'Contact Us — Links Air & Electrical',
    description:
      'Get a free, no-obligation quote for air conditioning, electrical, and builder services in Brisbane & Gold Coast.',
    url: `${siteConfig.url}/contact-us`,
  },
};

export default function ContactUsPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        <ServiceHero
          eyebrow="Contact Us"
          title="Get In Touch With Us"
          image="/images/services/construction.webp"
          imageAlt="Contact Links Air & Electrical for a free quote"
        />

        <Contact />
      </main>
      <Footer />

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': `${siteConfig.url}/#business`,
          name: siteConfig.name,
          telephone: siteConfig.phone,
          email: siteConfig.email,
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Brisbane',
            addressRegion: 'QLD',
            addressCountry: 'AU',
          },
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
          areaServed: siteConfig.serviceAreas.map((area) => ({
            '@type': 'City',
            name: area,
          })),
          url: siteConfig.url,
        }}
      />
    </>
  );
}
