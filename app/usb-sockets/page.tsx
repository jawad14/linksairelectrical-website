import type { Metadata } from 'next';
import { Usb, Zap, PackageOpen, PlugZap, DoorOpen, PaintBucket } from 'lucide-react';
import { UtilityBar } from '@/components/blocks/UtilityBar';
import { Header } from '@/components/blocks/Header';
import { Footer } from '@/components/blocks/Footer';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { Heading, P } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'USB Socket Installation Brisbane \u2014 Links Air & Electrical',
  description:
    'Modern USB power outlets for your home or office. Charge devices conveniently without adapters. Call 1300 010 393.',
  alternates: {
    canonical: `${siteConfig.url}/usb-sockets`,
  },
  openGraph: {
    title: 'USB Socket Installation Brisbane \u2014 Links Air & Electrical',
    description:
      'Modern USB power outlets for your home or office. Charge devices conveniently without adapters.',
    url: `${siteConfig.url}/usb-sockets`,
  },
};

const benefits = [
  {
    icon: Usb,
    title: 'USB-A & USB-C Options',
    desc: 'Choose from USB-A, USB-C, or combination outlets to suit all your devices and charging cables.',
  },
  {
    icon: Zap,
    title: 'Fast Charging Capable',
    desc: 'USB-C outlets support fast-charging protocols, so your phone or tablet charges at full speed without a separate adapter.',
  },
  {
    icon: PackageOpen,
    title: 'No Adapter Clutter',
    desc: 'Eliminate bulky wall adapters and charger blocks — just plug your cable straight into the wall.',
  },
  {
    icon: PlugZap,
    title: 'Combo Power + USB',
    desc: 'Dual outlets combine a standard GPO with built-in USB ports, so you never lose a power point.',
  },
  {
    icon: DoorOpen,
    title: 'Multiple Room Options',
    desc: 'Install USB outlets wherever you charge most — bedrooms, kitchens, living rooms, home offices, and reception areas.',
  },
  {
    icon: PaintBucket,
    title: 'Neat Wall Finish',
    desc: 'Modern flush-mount designs match standard Australian switch plates for a clean, professional look.',
  },
];

export default function UsbSocketsPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        <ServiceHero
          eyebrow="USB Power"
          title="USB Socket Installation"
          image="/images/services/electrical.webp"
          imageAlt="USB socket installation by Links Air & Electrical"
        />

        {/* ── Intro ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto max-w-[820px]">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                USB Power
              </span>
              <Heading
                level={2}
                className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                Convenient USB Charging Built Into Your Walls
              </Heading>
              <P className="mt-5 text-[17px] leading-[1.7] text-[#4F6172]">
                USB-integrated power points bring charging right to the wall — no more hunting for
                adapters or fighting over the one charger in the house. Available with USB-A, USB-C,
                or both, these outlets let you charge phones, tablets, earbuds, and other devices
                directly from any room.
              </P>
              <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                We install combination outlets that pair standard Australian power points with
                built-in USB ports, so you don&apos;t lose any existing sockets. They&apos;re ideal
                for bedrooms, kitchens, home offices, and commercial reception areas — anywhere
                people reach for a charger. The result is a cleaner bench, a tidier desk, and fast
                charging without the clutter.
              </P>
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
                Why Install USB Power Outlets?
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
          name: 'USB Socket Installation',
          description:
            'Modern USB power outlets for your home or office. Charge devices conveniently without adapters.',
          url: `${siteConfig.url}/usb-sockets`,
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
