import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronRight,
  Camera,
  Home,
  Building2,
  Smartphone,
  HardDrive,
  Shield,
  CheckCircle,
  Eye,
  Wifi,
  Moon,
} from 'lucide-react';
import { UtilityBar } from '@/components/blocks/UtilityBar';
import { Header } from '@/components/blocks/Header';
import { Footer } from '@/components/blocks/Footer';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { Heading, P } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Security Camera Installation Brisbane & Gold Coast — Links Air & Electrical',
  description:
    'Professional CCTV and security camera installation in Brisbane & Gold Coast. IP cameras, NVR systems, 4K resolution, night vision, remote viewing. From $1,995 installed. Call 1300 010 393.',
  alternates: {
    canonical: `${siteConfig.url}/security-camera-installation`,
  },
  openGraph: {
    title: 'Security Camera Installation Brisbane & Gold Coast — Links Air & Electrical',
    description:
      'Professional CCTV and security camera installation for homes and businesses across Brisbane & Gold Coast.',
    url: `${siteConfig.url}/security-camera-installation`,
  },
};

const brands = [
  {
    name: 'Dahua',
    desc: 'Great value, reliable IP cameras ideal for home use. Excellent image quality and easy app-based remote viewing.',
    price: 'From $1,995 Installed*',
  },
  {
    name: 'Hikvision',
    desc: 'Advanced software and video analytics — the preferred choice for business and commercial applications.',
    price: 'From $2,695 Installed*',
  },
  {
    name: 'Uniview',
    desc: 'Excellent low-light performance with easy-to-use apps. A strong all-rounder for homes and small businesses.',
    price: 'From $2,095 \u2013 $2,595 Installed*',
  },
  {
    name: 'Swann',
    desc: 'Budget-friendly systems with built-in lights, sirens, and two-way talk for a complete deterrent package.',
    price: 'From $1,995 Supplied & Installed*',
  },
];

const features = [
  {
    icon: Camera,
    title: 'Up to 4K Resolution',
    desc: 'Four times clearer than standard HD — capture number plates, faces, and fine detail day or night.',
  },
  {
    icon: Moon,
    title: 'Infrared Night Vision',
    desc: 'Built-in IR LEDs deliver clear footage in complete darkness, so your property is protected 24/7.',
  },
  {
    icon: Wifi,
    title: 'IP-Based Systems',
    desc: 'Modern IP cameras paired with Network Video Recorders (NVRs) — superior to outdated analogue DVR systems.',
  },
  {
    icon: Smartphone,
    title: 'Remote Viewing',
    desc: 'Check live feeds and playback footage from your phone or tablet, wherever you are in the world.',
  },
  {
    icon: HardDrive,
    title: 'Continuous Recording',
    desc: 'Wired CCTV powered 24/7 with enough NVR storage to keep weeks of continuous HD recording on hand.',
  },
  {
    icon: Shield,
    title: 'Visible Deterrent',
    desc: 'Visible cameras discourage break-ins and antisocial behaviour before they happen — prevention is the best protection.',
  },
];

const installBenefits = [
  'Proper camera positioning for comprehensive security event capture across all entry points and vulnerable areas',
  'Clean, concealed cabling — no messy cables running along walls or ceilings',
  'Full system operation training for every household or staff member before we leave',
  'NVR/DVR configuration with remote access set up on your phone and tablet',
  'All work completed by licensed, police-checked electricians — no subcontractors',
];

const whyUs = [
  {
    icon: Home,
    title: 'Locally Owned & Operated',
    desc: 'We\u2019re a Brisbane-based team, not a faceless national franchise. You deal with the same people from quote to install.',
  },
  {
    icon: Building2,
    title: 'Professional Team',
    desc: 'Strong organisational and communication skills mean your install runs smoothly, on time, and without surprises.',
  },
  {
    icon: Eye,
    title: 'Free Quotes & Advice',
    desc: 'We provide honest, professional advice on the right system and upfront pricing before any work begins.',
  },
];

export default function SecurityCameraInstallationPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        <ServiceHero
          eyebrow="Security"
          title="Security Camera Installation Brisbane"
          image="/images/services/pages/ac-installation-hero.webp"
          imageAlt="Security camera installation services in Brisbane by Links Air & Electrical"
        />

        {/* ── Intro ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="grid grid-cols-[1.1fr_1fr] items-center gap-[clamp(32px,6vw,80px)] max-[900px]:grid-cols-1">
              <div>
                <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                  Licensed &amp; insured
                </span>
                <Heading
                  level={2}
                  className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
                >
                  Security Camera Installation You Can Rely On
                </Heading>
                <P className="mt-5 text-[17px] leading-[1.7] text-[#4F6172]">
                  Links Air &amp; Electrical offers professional security camera installation
                  services across Brisbane and the Gold Coast. Our fully licensed, insured, and
                  police-checked electricians prioritise quality and safety, using modern technology
                  and trusted brands to protect your home or business.
                </P>
                <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                  While alarm systems provide alerts, security cameras give you actual video footage
                  and real-time monitoring. We use advanced IP-based systems with Network Video
                  Recorders (NVRs) — far superior to outdated analogue DVR setups — delivering
                  sharper images, smarter features, and reliable remote access.
                </P>

                <div className="mt-8 flex flex-wrap gap-3.5">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2.5 rounded-full bg-[#E73438] px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_6px_16px_-6px_rgba(231,52,56,0.6)] transition-transform hover:-translate-y-px hover:bg-[#D62229]"
                  >
                    Get a Free Quote
                    <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
                  </Link>
                  <Link
                    href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                    className="inline-flex items-center gap-2.5 rounded-full border border-[#E3E9F0] bg-white px-6 py-3.5 text-[15px] font-semibold text-[#0E1B2C] transition-colors hover:bg-[#F4F7FA]"
                  >
                    Call {siteConfig.phone}
                  </Link>
                </div>
              </div>

              <div className="relative aspect-[16/9] max-[900px]:max-w-[560px]">
                <div className="absolute inset-0 overflow-hidden rounded-[22px] shadow-[0_24px_60px_-20px_rgba(14,27,44,0.25)]">
                  <Image
                    src="/images/services/pages/security-camera.webp"
                    alt="Security camera system installed by Links Air & Electrical"
                    fill
                    className="object-cover"
                    sizes="(max-width: 900px) 560px, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="bg-[#F4F7FA] py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto mb-14 max-w-[760px] text-center">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                Technology
              </span>
              <Heading
                level={2}
                className="font-heading mb-[18px] text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                Advanced Security Camera Features
              </Heading>
            </div>

            <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1">
              {features.map((f) => (
                <div key={f.title} className="rounded-[14px] border border-[#E3E9F0] bg-white p-7">
                  <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-[#E9F4FB] text-[#1779B8]">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <Heading
                    level={3}
                    className="font-heading mb-2 text-[17px] font-bold text-[#0E1B2C]"
                  >
                    {f.title}
                  </Heading>
                  <P className="text-[14px] leading-[1.6] text-[#4F6172]">{f.desc}</P>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Brands & Pricing ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto mb-14 max-w-[760px] text-center">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                Brands we install
              </span>
              <Heading
                level={2}
                className="font-heading mb-[18px] text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                Trusted Camera Brands &amp; Pricing
              </Heading>
              <P className="text-[16px] leading-[1.7] text-[#4F6172]">
                We work with leading security camera manufacturers to give you the best system for
                your budget and requirements.
              </P>
            </div>

            <div className="grid grid-cols-2 gap-5 max-[600px]:grid-cols-1">
              {brands.map((b) => (
                <div
                  key={b.name}
                  className="rounded-[14px] border border-[#E3E9F0] bg-[#F8FAFC] p-7"
                >
                  <Heading
                    level={3}
                    className="font-heading mb-2 text-[20px] font-bold text-[#0E1B2C]"
                  >
                    {b.name}
                  </Heading>
                  <P className="text-[14px] leading-[1.6] text-[#4F6172]">{b.desc}</P>
                  <P className="mt-3 text-[16px] font-semibold text-[#1779B8]">{b.price}</P>
                </div>
              ))}
            </div>

            <P className="mx-auto mt-6 max-w-[760px] text-center text-[13px] text-[#4F6172]">
              * Prices are for standard 4-camera systems including NVR. Final cost depends on site
              inspection, camera placement, and cable run lengths.
            </P>
          </div>
        </section>

        {/* ── Professional Installation ── */}
        <section className="bg-[#F4F7FA] py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto max-w-[820px]">
              <div className="mb-10 text-center">
                <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                  Professional installation
                </span>
                <Heading
                  level={2}
                  className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
                >
                  What You Get With Our Installation
                </Heading>
              </div>

              <div className="flex flex-col gap-4">
                {installBenefits.map((tip, i) => (
                  <div
                    key={i}
                    className="flex gap-4 rounded-[14px] border border-[#E3E9F0] bg-white p-5"
                  >
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#1779B8]" />
                    <P className="text-[15px] leading-[1.65] text-[#4F6172]">{tip}</P>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Customer-Supplied Installation ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto max-w-[820px] text-center">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#E73438] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#E73438]">
                BYO cameras
              </span>
              <Heading
                level={2}
                className="font-heading mb-5 text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                Already Have Your Own System?
              </Heading>
              <P className="text-[17px] leading-[1.7] text-[#4F6172]">
                We also install customer-supplied security camera systems. Whether you&apos;ve
                purchased a Swann, Arlo, Nest, Samsung, Uniden, or Concord system, our licensed
                electricians will mount, cable, and configure it professionally.
              </P>
              <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                Professional installation of customer-supplied products starts from{' '}
                <strong className="font-semibold text-[#0E1B2C]">$150 per camera</strong> and{' '}
                <strong className="font-semibold text-[#0E1B2C]">
                  $650 for a complete 4-camera system including NVR/DVR
                </strong>{' '}
                (final price depends on site inspection).
              </P>
            </div>
          </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section className="bg-[#0E1B2C] py-[clamp(72px,9vw,120px)] text-white">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto mb-14 max-w-[760px] text-center">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-white/80 uppercase before:inline-block before:h-0.5 before:w-6 before:bg-white/50">
                Why Links
              </span>
              <Heading
                level={2}
                className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-white"
              >
                Why Choose Links Air &amp; Electrical
              </Heading>
            </div>

            <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-1">
              {whyUs.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[14px] border border-white/[0.08] bg-white/[0.04] p-7"
                >
                  <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-white/[0.08] text-[#4FB3E8]">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <Heading level={3} className="font-heading mb-2 text-[17px] font-bold text-white">
                    {item.title}
                  </Heading>
                  <P className="text-[14px] leading-[1.6] text-white/60">{item.desc}</P>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceCTA />
      </main>
      <Footer />

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Security Camera Installation',
          description:
            'Professional CCTV and security camera installation for homes and businesses in Brisbane and Gold Coast.',
          url: `${siteConfig.url}/security-camera-installation`,
          provider: {
            '@type': 'LocalBusiness',
            '@id': `${siteConfig.url}/#business`,
            name: siteConfig.name,
          },
          areaServed: siteConfig.serviceAreas.map((area) => ({
            '@type': 'City',
            name: area,
          })),
        }}
      />
    </>
  );
}
