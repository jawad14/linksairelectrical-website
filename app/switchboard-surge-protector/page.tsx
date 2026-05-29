import type { Metadata } from 'next';
import { ShieldCheck, Zap, Monitor, CircuitBoard, Settings, FileCheck } from 'lucide-react';
import { UtilityBar } from '@/components/blocks/UtilityBar';
import { Header } from '@/components/blocks/Header';
import { Footer } from '@/components/blocks/Footer';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { Heading, P } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Switchboard Surge Protector Brisbane \u2014 Links Air & Electrical',
  description:
    'Surge protection devices for your switchboard. Protect electronics and appliances from power spikes. Call 1300 010 393.',
  alternates: {
    canonical: `${siteConfig.url}/switchboard-surge-protector`,
  },
  openGraph: {
    title: 'Switchboard Surge Protector Brisbane \u2014 Links Air & Electrical',
    description:
      'Surge protection devices for your switchboard. Protect electronics and appliances from power spikes.',
    url: `${siteConfig.url}/switchboard-surge-protector`,
  },
};

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Whole-Home Protection',
    desc: 'A single device at the switchboard protects every circuit in your home from damaging voltage spikes.',
  },
  {
    icon: Zap,
    title: 'Lightning & Grid Spikes',
    desc: 'Guards against surges caused by lightning strikes, grid switching events, and nearby industrial equipment.',
  },
  {
    icon: Monitor,
    title: 'Protects Electronics',
    desc: 'Shields TVs, computers, routers, and smart home devices that are especially vulnerable to power fluctuations.',
  },
  {
    icon: CircuitBoard,
    title: 'Easy Switchboard Install',
    desc: 'The surge protection device mounts directly inside your switchboard with no additional wiring runs required.',
  },
  {
    icon: Settings,
    title: 'Low Maintenance',
    desc: 'Once installed, surge protectors work silently in the background with an indicator light confirming active protection.',
  },
  {
    icon: FileCheck,
    title: 'Insurance Friendly',
    desc: 'Many insurers look favourably on homes with surge protection, and some may require it for high-value electronics claims.',
  },
];

export default function SwitchboardSurgeProtectorPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        <ServiceHero
          eyebrow="Surge Protection"
          title="Switchboard Surge Protector"
          image="/images/services/electrical.webp"
          imageAlt="Switchboard surge protector installed by Links Air & Electrical"
        />

        {/* ── Intro ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto max-w-[820px]">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                Surge Protection
              </span>
              <Heading
                level={2}
                className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                Protect Your Home From Power Surges
              </Heading>
              <P className="mt-5 text-[17px] leading-[1.7] text-[#4F6172]">
                Power surges can strike at any time — from lightning, grid switching, or even large
                appliances cycling on and off. A single spike can destroy televisions, computers,
                fridges, and air conditioning control boards in an instant. A switchboard-mounted
                surge protection device (SPD) acts as the first line of defence for your entire
                home.
              </P>
              <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                We install Type 2 and Type 2+3 surge protectors directly into your switchboard,
                providing whole-of-home protection without additional power points or plug-in
                devices. It&apos;s a one-time investment that can save thousands in damaged
                electronics and gives you peace of mind during storm season.
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
                Why Install Surge Protection?
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
          name: 'Switchboard Surge Protector',
          description:
            'Surge protection devices for your switchboard. Protect electronics and appliances from power spikes.',
          url: `${siteConfig.url}/switchboard-surge-protector`,
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
