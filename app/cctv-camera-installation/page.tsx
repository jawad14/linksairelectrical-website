import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle, Home, Building2, Smartphone, Wrench } from 'lucide-react';
import { UtilityBar } from '@/components/blocks/UtilityBar';
import { Header } from '@/components/blocks/Header';
import { Footer } from '@/components/blocks/Footer';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { Heading, P } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'CCTV Camera Installation Greenbank CCTV installation near me',
  description:
    'Links Air & Electrical offers expert CCTV Camera Installation in Greenbank and trusted CCTV installation near me. Secure your property with our pro service.',
  alternates: {
    canonical: `${siteConfig.url}/cctv-camera-installation`,
  },
  openGraph: {
    title: 'CCTV Camera Installation Greenbank CCTV installation near me',
    description:
      'Links Air & Electrical offers expert CCTV Camera Installation in Greenbank and trusted CCTV installation near me. Secure your property with our pro service.',
    url: `${siteConfig.url}/cctv-camera-installation`,
  },
};

const services = [
  {
    icon: Home,
    title: 'Home CCTV Systems',
    desc: 'Protect your family and property with a tailored home CCTV system. We install discreet indoor and weatherproof outdoor cameras covering all entry points and vulnerable areas.',
  },
  {
    icon: Building2,
    title: 'Commercial CCTV',
    desc: 'Comprehensive video surveillance for offices, warehouses, retail shops, and construction sites. Scalable systems designed to meet your business security requirements.',
  },
  {
    icon: Smartphone,
    title: 'Remote Access & Monitoring',
    desc: 'View live and recorded footage from anywhere using a free app on your smartphone or tablet. Get instant alerts when motion is detected on your property.',
  },
  {
    icon: Wrench,
    title: 'Upgrades & Maintenance',
    desc: 'Already have a CCTV system? We upgrade outdated analogue systems to modern IP technology and provide ongoing maintenance to keep your cameras running smoothly.',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Free Security Assessment',
    desc: 'We visit your property to assess your security needs, identify vulnerable areas, and recommend the best camera positions for maximum coverage.',
  },
  {
    number: '02',
    title: 'System Design & Quote',
    desc: 'Based on our assessment, we design a custom CCTV system and provide a detailed, upfront quote with no hidden fees or surprises.',
  },
  {
    number: '03',
    title: 'Professional Installation',
    desc: 'Our licensed electricians install your system with clean, concealed cabling and proper camera positioning for optimal image quality.',
  },
  {
    number: '04',
    title: 'Training & Support',
    desc: 'We walk you through your new system, set up remote viewing on your devices, and ensure you&apos;re confident using every feature before we leave.',
  },
];

const whyChooseUs = [
  'Qualified, licensed technicians with police checks',
  'Custom security solutions designed for your property',
  'Latest technology from Hikvision, Dahua, Uniview, and Swann',
  'Fast and reliable service across Brisbane and Gold Coast',
  'Competitive, upfront pricing with no hidden fees',
  'Local Brisbane security experts — not a national call centre',
];

const whyInstallCctv = [
  'Deter theft, vandalism, and trespassing',
  '24/7 property monitoring from anywhere',
  'Gather evidence in the event of incidents',
  'Lower insurance premiums with a verified security system',
  'Peace of mind for your family or staff',
];

export default function CctvCameraInstallationPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        <ServiceHero
          eyebrow="CCTV Installation"
          title="CCTV Camera Installation Brisbane"
          image="/images/services/banner-hero.webp"
          imageAlt="CCTV camera installation by Links Air & Electrical"
        />

        {/* ── Intro ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="grid grid-cols-[1.1fr_1fr] items-center gap-[clamp(32px,6vw,80px)] max-[900px]:grid-cols-1">
              <div>
                <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                  Protect What Matters Most
                </span>
                <Heading
                  level={2}
                  className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
                >
                  Professional CCTV Camera Installation in Brisbane
                </Heading>
                <P className="mt-5 text-[17px] leading-[1.7] text-[#4F6172]">
                  Links Air &amp; Electrical provides professional CCTV camera installation services
                  throughout Brisbane for homes, offices, warehouses, and retail spaces. Our
                  qualified, licensed technicians deliver high-quality systems tailored to your
                  property, giving you peace of mind around the clock.
                </P>
                <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                  Whether you need a simple two-camera home setup or a comprehensive multi-camera
                  commercial system, we design, supply, and install solutions using the latest
                  technology from trusted brands including Hikvision, Dahua, Uniview, and Swann.
                </P>
              </div>

              <div className="relative aspect-[16/9] max-[900px]:max-w-[560px]">
                <div className="absolute inset-0 overflow-hidden rounded-[22px] shadow-[0_24px_60px_-20px_rgba(14,27,44,0.25)]">
                  <Image
                    src="/images/services/pages/cctv-hero.webp"
                    alt="CCTV camera installation by Links Air & Electrical"
                    fill
                    className="object-cover"
                    sizes="(max-width: 900px) 560px, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section className="bg-[#F4F7FA] py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="grid grid-cols-[1fr_1.1fr] items-center gap-[clamp(32px,6vw,80px)] max-[900px]:grid-cols-1">
              <div className="relative aspect-[16/9] max-[900px]:max-w-[560px]">
                <div className="absolute inset-0 overflow-hidden rounded-[22px] shadow-[0_24px_60px_-20px_rgba(14,27,44,0.25)]">
                  <Image
                    src="/images/services/pages/cctv-2.webp"
                    alt="CCTV security system installed by Links Air & Electrical"
                    fill
                    className="object-cover"
                    sizes="(max-width: 900px) 560px, 50vw"
                  />
                </div>
              </div>

              <div>
                <Heading
                  level={2}
                  className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
                >
                  Why Choose Us for CCTV Installation?
                </Heading>
                <div className="mt-8 flex flex-col gap-4">
                  {whyChooseUs.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#1779B8]" />
                      <P className="text-[15px] leading-[1.65] text-[#4F6172]">{item}</P>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Our Services ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto mb-14 max-w-[760px] text-center">
              <Heading
                level={2}
                className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                Our CCTV Installation Services
              </Heading>
            </div>

            <div className="grid grid-cols-2 gap-5 max-[600px]:grid-cols-1">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="rounded-[14px] border border-[#E3E9F0] bg-[#F8FAFC] p-7"
                >
                  <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-[#E9F4FB] text-[#1779B8]">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <Heading
                    level={3}
                    className="font-heading mb-2 text-[17px] font-bold text-[#0E1B2C]"
                  >
                    {s.title}
                  </Heading>
                  <P className="text-[14px] leading-[1.6] text-[#4F6172]">{s.desc}</P>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Our Process ── */}
        <section className="bg-[#F4F7FA] py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="grid grid-cols-[1.1fr_1fr] items-center gap-[clamp(32px,6vw,80px)] max-[900px]:grid-cols-1">
              <div>
                <Heading
                  level={2}
                  className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
                >
                  Our CCTV Installation Process
                </Heading>
                <div className="mt-8 flex flex-col gap-6">
                  {processSteps.map((step) => (
                    <div key={step.number} className="flex gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1779B8] text-[14px] font-bold text-white">
                        {step.number}
                      </span>
                      <div>
                        <Heading
                          level={4}
                          className="font-heading text-[16px] font-bold text-[#0E1B2C]"
                        >
                          {step.title}
                        </Heading>
                        <P className="mt-1 text-[14px] leading-[1.6] text-[#4F6172]">{step.desc}</P>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative aspect-[16/9] max-[900px]:max-w-[560px]">
                <div className="absolute inset-0 overflow-hidden rounded-[22px] shadow-[0_24px_60px_-20px_rgba(14,27,44,0.25)]">
                  <Image
                    src="/images/services/pages/cctv-3.webp"
                    alt="CCTV installation process by Links Air & Electrical"
                    fill
                    className="object-cover"
                    sizes="(max-width: 900px) 560px, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Install CCTV ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="grid grid-cols-[1fr_1.1fr] items-center gap-[clamp(32px,6vw,80px)] max-[900px]:grid-cols-1">
              <div className="relative aspect-[16/9] max-[900px]:max-w-[560px]">
                <div className="absolute inset-0 overflow-hidden rounded-[22px] shadow-[0_24px_60px_-20px_rgba(14,27,44,0.25)]">
                  <Image
                    src="/images/services/pages/cctv-4.webp"
                    alt="Benefits of CCTV camera installation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 900px) 560px, 50vw"
                  />
                </div>
              </div>

              <div>
                <Heading
                  level={2}
                  className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
                >
                  Why Install CCTV Cameras?
                </Heading>
                <div className="mt-8 flex flex-col gap-4">
                  {whyInstallCctv.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#1779B8]" />
                      <P className="text-[15px] leading-[1.65] text-[#4F6172]">{item}</P>
                    </div>
                  ))}
                </div>
              </div>
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
