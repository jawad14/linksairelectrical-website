import type { Metadata } from 'next';

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export type SocialLink = { label: string; href: string };

export type SiteConfig = {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  url: string;
  ogImage: string;
  locale: string;
  author: { name: string; url?: string };
  phone: string;
  mobile: string;
  email: string;
  address: string;
  hours: string;
  license: string;
  arc: string;
  nav: NavItem[];
  social: SocialLink[];
  serviceAreas: string[];
  providers: {
    logger: 'console' | 'pino';
    analytics: 'none' | 'plausible' | 'umami' | 'posthog' | 'ga4';
    email: 'none' | 'resend' | 'smtp' | 'web3forms' | 'formspree';
    cms: 'mdx' | 'sanity' | 'payload';
    errors: 'console' | 'sentry';
    search: 'pagefind' | 'algolia' | 'meilisearch';
  };
  features: {
    blog: boolean;
    darkMode: boolean;
    newsletter: boolean;
  };
};

export const siteConfig: SiteConfig = {
  name: 'Links Air & Electrical',
  shortName: 'Links Air',
  tagline: 'Trusted Local Sparkies · A/C Specialists',
  description:
    'Professional air conditioning and electrical services in Brisbane & Gold Coast. Installation, repairs, and maintenance. Call 0468 432 538 for a free quote.',
  url: 'https://linksairelectrical.com.au',
  ogImage: '/opengraph-image',
  locale: 'en_AU',
  author: { name: 'Links Air & Electrical', url: 'https://linksairelectrical.com.au' },
  phone: '0468 432 538',
  mobile: '0468 432 538',
  email: 'info@linksairelectrical.com.au',
  address: 'Brisbane and Gold Coast, Queensland, QLD 4000',
  hours: 'Mon–Sat · 7am–6pm',
  license: '312045C',
  arc: 'AU45821',
  nav: [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'How we work', href: '#process' },
    { label: 'Service areas', href: '#areas' },
    { label: 'Contact', href: '#contact' },
  ],
  social: [
    { label: 'Facebook', href: 'https://www.facebook.com/LinksAirAndElectrical' },
    { label: 'Instagram', href: 'https://www.instagram.com/linksairaircons/' },
    { label: 'WhatsApp', href: 'https://wa.me/+61447440050' },
  ],
  serviceAreas: [
    'Sydney CBD',
    'Inner West',
    'Eastern Suburbs',
    'North Shore',
    'Northern Beaches',
    'Hills District',
    'Parramatta',
    'Sutherland Shire',
    'South Sydney',
    'Macarthur',
    'Liverpool',
    'Blue Mountains',
  ],
  providers: {
    logger: 'console',
    analytics: 'none',
    email: 'none',
    cms: 'mdx',
    errors: 'console',
    search: 'pagefind',
  },
  features: {
    blog: false,
    darkMode: false,
    newsletter: false,
  },
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Air Conditioning Service in Brisbane - Links Air & Electrical',
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
  keywords: [
    'air conditioning Brisbane',
    'electrician Brisbane',
    'split system installation',
    'ducted air conditioning',
    'AC repair Brisbane',
    'electrical services Gold Coast',
    'EV charger installation',
    'CCTV installation Brisbane',
    'air conditioning Gold Coast',
    'emergency electrician Brisbane',
    'air conditioning installation',
    'electrical maintenance',
    'Links Air Electrical',
  ],
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    title: 'Air Conditioning Service in Brisbane - Links Air & Electrical',
    description: siteConfig.description,
    url: siteConfig.url,
    locale: siteConfig.locale,
    images: [
      {
        url: `${siteConfig.url}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Air Conditioning Service in Brisbane - Links Air & Electrical',
    description: siteConfig.description,
    images: [`${siteConfig.url}/opengraph-image`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'AU-QLD',
    'geo.placename': 'Brisbane',
    'format-detection': 'telephone=yes',
  },
};
