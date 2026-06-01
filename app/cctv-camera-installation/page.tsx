import type { Metadata } from 'next';
import Image from 'next/image';
import { MonitorPlay, Moon, Smartphone, HardDrive, Cable, Home } from 'lucide-react';
import { UtilityBar } from '@/components/blocks/UtilityBar';
import { Header } from '@/components/blocks/Header';
import { Footer } from '@/components/blocks/Footer';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { Heading, P } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'CCTV Camera Installation Brisbane & Gold Coast \u2014 Links Air & Electrical',
  description:
    'Professional CCTV and security camera installation for homes and businesses. Full setup with remote viewing. Call 1300 010 393.',
  alternates: {
    canonical: `${siteConfig.url}/cctv-camera-installation`,
  },
  openGraph: {
    title: 'CCTV Camera Installation Brisbane & Gold Coast \u2014 Links Air & Electrical',
    description:
      'Professional CCTV and security camera installation for homes and businesses. Full setup with remote viewing.',
    url: `${siteConfig.url}/cctv-camera-installation`,
  },
};

const benefits = [
  {
    icon: MonitorPlay,
    title: 'HD & 4K Options',
    desc: 'Choose from high-definition or ultra-HD 4K cameras for crystal-clear footage that captures every detail.',
  },
  {
    icon: Moon,
    title: 'Night Vision',
    desc: 'Infrared night vision ensures your cameras capture clear images around the clock, even in complete darkness.',
  },
  {
    icon: Smartphone,
    title: 'Remote Phone Viewing',
    desc: 'View live and recorded footage from anywhere using a free app on your smartphone or tablet.',
  },
  {
    icon: HardDrive,
    title: 'NVR/DVR Setup',
    desc: 'We supply and configure network or digital video recorders for continuous recording and easy playback.',
  },
  {
    icon: Cable,
    title: 'Licensed Cabling',
    desc: 'All cabling is installed by licensed electricians, ensuring a neat, weatherproof, and code-compliant result.',
  },
  {
    icon: Home,
    title: 'Indoor & Outdoor',
    desc: 'Weatherproof outdoor cameras and discreet indoor models — we design a system that covers every angle.',
  },
];

export default function CctvCameraInstallationPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        <ServiceHero
          eyebrow="Security"
          title="CCTV Camera Installation"
          image="/images/services/banner-hero.webp"
          imageAlt="CCTV camera installation by Links Air & Electrical"
        />

        {/* ── Intro ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="grid grid-cols-[1.1fr_1fr] items-center gap-[clamp(32px,6vw,80px)] max-[900px]:grid-cols-1">
              <div>
                <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                  Security
                </span>
                <Heading
                  level={2}
                  className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
                >
                  Professional Security Camera Systems
                </Heading>
                <P className="mt-5 text-[17px] leading-[1.7] text-[#4F6172]">
                  A properly installed CCTV system is one of the most effective deterrents against
                  break- ins — and when incidents do occur, high-quality footage makes all the
                  difference. We design and install security camera systems for homes and businesses
                  across Brisbane and the Gold Coast, with HD and 4K options to suit every budget.
                </P>
                <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                  Every system includes night vision cameras, a network video recorder (NVR) or
                  digital video recorder (DVR) for continuous recording, and remote viewing via a
                  free smartphone app so you can check in from anywhere. Because we&apos;re licensed
                  electricians, all cabling is installed to code — neatly run, weatherproofed, and
                  built to last.
                </P>
              </div>
              <div className="hidden overflow-hidden rounded-[14px] md:block">
                <Image
                  src="/images/services/pages/security-camera.webp"
                  alt="CCTV camera installation by Links Air & Electrical"
                  width={600}
                  height={500}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Benefits ── */}
        <section className="bg-[#F4F7FA] py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto mb-14 max-w-[760px] text-center">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                Benefits
              </span>
              <Heading
                level={2}
                className="font-heading mb-[18px] text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                Why Choose Our CCTV Service?
              </Heading>
            </div>

            <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="flex items-start gap-4 rounded-[14px] border border-[#E3E9F0] bg-white p-6"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#E9F4FB] text-[#1779B8]">
                    <b.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <Heading
                      level={4}
                      className="font-heading text-[15px] font-bold text-[#0E1B2C]"
                    >
                      {b.title}
                    </Heading>
                    <P className="mt-1 text-[14px] leading-[1.5] text-[#4F6172]">{b.desc}</P>
                  </div>
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
          name: 'CCTV Camera Installation',
          description:
            'Professional CCTV and security camera installation for homes and businesses. Full setup with remote viewing.',
          url: `${siteConfig.url}/cctv-camera-installation`,
          provider: {
            '@type': 'LocalBusiness',
            '@id': `${siteConfig.url}/#business`,
            name: siteConfig.name,
          },
          areaServed: {
            '@type': 'GeoCircle',
            geoMidpoint: {
              '@type': 'GeoCoordinates',
              latitude: -27.4698,
              longitude: 153.0251,
            },
          },
        }}
      />
    </>
  );
}
