import type { Metadata } from 'next';
import { Camera, Home, Building2, Smartphone, HardDrive, Shield } from 'lucide-react';
import { UtilityBar } from '@/components/blocks/UtilityBar';
import { Header } from '@/components/blocks/Header';
import { Footer } from '@/components/blocks/Footer';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { Heading, P } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Security Camera Installation Brisbane & Gold Coast',
  description:
    'Professional CCTV and security camera installation for homes and businesses in Brisbane & Gold Coast. HD cameras, night vision, remote viewing. Free quote.',
  alternates: {
    canonical: `${siteConfig.url}/security-camera-installation`,
  },
  openGraph: {
    title: 'Security Camera Installation Brisbane & Gold Coast',
    description:
      'Professional CCTV and security camera installation for homes and businesses in Brisbane & Gold Coast.',
    url: `${siteConfig.url}/security-camera-installation`,
  },
};

const features = [
  {
    icon: Camera,
    title: 'HD & 4K Cameras',
    desc: 'Crystal-clear footage day and night, with infrared night vision that captures detail even in complete darkness.',
  },
  {
    icon: Home,
    title: 'Residential Systems',
    desc: 'Protect your family and property with cameras covering entry points, driveways, backyards and common areas.',
  },
  {
    icon: Building2,
    title: 'Commercial Solutions',
    desc: 'Multi-camera setups for offices, warehouses, retail shops and construction sites — scalable to any size.',
  },
  {
    icon: Smartphone,
    title: 'Remote Viewing',
    desc: 'Check live feeds and playback footage from your phone or tablet, wherever you are in the world.',
  },
  {
    icon: HardDrive,
    title: 'Reliable Recording',
    desc: 'We set up NVR/DVR systems with enough storage to keep weeks of continuous recording on hand.',
  },
  {
    icon: Shield,
    title: 'Deterrent Effect',
    desc: 'Visible cameras discourage break-ins and antisocial behaviour before they happen — prevention is the best protection.',
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
          title="Security Camera Installation"
          image="/images/services/electrical.webp"
          imageAlt="Security camera installed on the exterior of a building"
        />

        {/* ── Intro ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto max-w-[760px]">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                Peace of mind
              </span>
              <Heading
                level={2}
                className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                Keep an Eye on What Matters Most
              </Heading>
              <P className="mt-5 text-[17px] leading-[1.7] text-[#4F6172]">
                A professionally installed security camera system gives you around-the-clock
                visibility of your home or business — and the confidence that comes with it. Whether
                you want to monitor your front door while you&apos;re at work, keep an eye on your
                shopfront after hours, or record activity across a multi-site operation, we design
                and install systems to match.
              </P>
              <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                As licensed electricians, we handle the full installation — from running cables and
                mounting cameras to configuring your recorder and setting up remote access on your
                phone. No subcontractors, no loose ends.
              </P>
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="bg-[#F4F7FA] py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto mb-14 max-w-[760px] text-center">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                What we offer
              </span>
              <Heading
                level={2}
                className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                Security Camera Features
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
