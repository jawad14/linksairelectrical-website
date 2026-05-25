import type { Metadata } from 'next';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions — Air Conditioning & Electrical',
  description:
    'Find answers to common questions about air conditioning installation, repairs, servicing and electrical work in Brisbane & Gold Coast. Links Air & Electrical.',
  alternates: {
    canonical: `${siteConfig.url}/faq`,
  },
  openGraph: {
    title: 'Frequently Asked Questions — Air Conditioning & Electrical',
    description:
      'Find answers to common questions about air conditioning and electrical services in Brisbane & Gold Coast.',
    url: `${siteConfig.url}/faq`,
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
