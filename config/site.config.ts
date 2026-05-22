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
  phone: '1300 010 393',
  mobile: '0447 440 050',
  email: 'info@linksairelectrical.com.au',
  address: 'Brisbane and Gold Coast, Queensland, QLD 4000',
  hours: 'Mon–Sun · 9am–7pm',
  license: '312045C',
  arc: 'AU45821',
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us' },
    {
      label: 'Air Con',
      href: '/air-conditioning',
      children: [
        {
          label: 'Split System Aircon',
          href: '/split-system-aircon',
          children: [
            { label: 'Back To Back Installation', href: '/back-to-back-installation' },
            { label: 'Side Entry Installation', href: '/side-entry-installation' },
            { label: 'Up & Over Installation', href: '/up-over-installation' },
          ],
        },
        { label: 'Ducted Airconditioning', href: '/ducted-airconditioning' },
        { label: 'VRV/VRF Air Conditioning', href: '/vrv-vrf-air-conditioning' },
        { label: 'Design and Construction', href: '/design-and-construction' },
        { label: 'Repair & Installation', href: '/repair-installation' },
        { label: 'Service & Maintenance', href: '/service-maintenance' },
        { label: 'Air Conditioning Installation', href: '/air-conditioning-installation' },
        { label: 'Security Camera Installation', href: '/security-camera-installation' },
        { label: 'FAQ', href: '/faq' },
      ],
    },
    {
      label: 'Electricals',
      href: '/electricals',
      children: [
        {
          label: 'Residential Electrician',
          href: '/residential-electrician',
          children: [
            { label: 'New House Wiring', href: '/new-house-wiring' },
            { label: 'Bathroom Exhaust Heater', href: '/bathroom-exhaust-heater' },
            { label: 'Ceiling Exhaust Fans', href: '/ceiling-exhaust-fans' },
            { label: 'Ceiling Fan Installation', href: '/ceiling-fan-installation' },
            { label: 'Data Points & Network Cabling', href: '/data-points-network-cabling' },
            { label: 'Downlights', href: '/downlights' },
            { label: 'Switchboard Upgrade', href: '/switchboard-upgrade' },
          ],
        },
        {
          label: 'General Electrical Maintenance',
          href: '/general-electrical-maintenance',
          children: [
            { label: 'LED Lights Installation', href: '/led-lights-installation' },
            { label: 'Meter Box Relocation/Upgrade', href: '/meter-box-relocation' },
            { label: 'Oven & Cooktop Installations', href: '/oven-cooktop-installations' },
            { label: 'Pendant Light Installer', href: '/pendant-light-installer' },
            { label: 'Power-Point Installation', href: '/power-point-installation' },
            { label: 'Smoke Detector Installation', href: '/smoke-detector-installation' },
            { label: 'Switchboard Surge Protector', href: '/switchboard-surge-protector' },
            { label: 'USB Sockets', href: '/usb-sockets' },
            { label: 'Other Electrical Services', href: '/other-electrical-services' },
          ],
        },
        { label: 'CCTV Camera Installation', href: '/cctv-camera-installation' },
        { label: 'EV Charger Installation', href: '/ev-charger-installation' },
      ],
    },
    { label: 'Building & Construction', href: '/building-and-construction' },
    {
      label: 'Areas',
      href: '/areas',
      children: [
        { label: 'Brisbane', href: '/areas/brisbane' },
        { label: 'Gold Coast', href: '/areas/gold-coast' },
        { label: 'Logan', href: '/areas/logan' },
        { label: 'Ipswich', href: '/areas/ipswich' },
      ],
    },
  ],
  social: [
    { label: 'Facebook', href: 'https://www.facebook.com/LinksAirAndElectrical' },
    { label: 'Instagram', href: 'https://www.instagram.com/linksairaircons/' },
    { label: 'WhatsApp', href: 'https://wa.me/+61447440050' },
  ],
  serviceAreas: ['Brisbane', 'Gold Coast', 'Logan', 'Ipswich', 'Redlands', 'Moreton Bay'],
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
