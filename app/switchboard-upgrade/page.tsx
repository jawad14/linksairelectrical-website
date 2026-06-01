import type { Metadata } from 'next';
import { ShieldCheck, CircuitBoard, Tag, Sun, Zap, FileCheck } from 'lucide-react';
import { UtilityBar } from '@/components/blocks/UtilityBar';
import { Header } from '@/components/blocks/Header';
import { Footer } from '@/components/blocks/Footer';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { Heading, P } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Switchboard Upgrade Brisbane & Gold Coast — Links Air & Electrical',
  description:
    'Replace old ceramic fuses with modern RCD-protected switchboards. Safer, compliant, and ready for today\u2019s electrical loads. Call 1300 010 393.',
  alternates: {
    canonical: `${siteConfig.url}/switchboard-upgrade`,
  },
  openGraph: {
    title: 'Switchboard Upgrade Brisbane & Gold Coast — Links Air & Electrical',
    description:
      'Replace old ceramic fuses with modern RCD-protected switchboards. Safer, compliant, and ready for today\u2019s electrical loads.',
    url: `${siteConfig.url}/switchboard-upgrade`,
  },
};

const benefits = [
  {
    icon: ShieldCheck,
    title: 'RCD Safety Switches',
    desc: 'Residual current devices detect faults in milliseconds and cut power before they can cause electric shock or fire.',
  },
  {
    icon: CircuitBoard,
    title: 'Circuit Breaker Protection',
    desc: 'Modern circuit breakers replace old ceramic fuses — they trip instantly on overload and reset with a flick, no replacement parts needed.',
  },
  {
    icon: Tag,
    title: 'Neat Labelling',
    desc: 'Every circuit is clearly labelled so you can identify and isolate individual areas of your home quickly and safely.',
  },
  {
    icon: Sun,
    title: 'Solar & EV Ready',
    desc: 'An upgraded switchboard handles the higher loads of solar inverters, EV chargers, air conditioning and modern appliances without breaking a sweat.',
  },
  {
    icon: Zap,
    title: 'Surge Protection Option',
    desc: 'Add a surge protection device to guard sensitive electronics against power spikes from storms and grid fluctuations.',
  },
  {
    icon: FileCheck,
    title: 'Full Compliance Certificate',
    desc: 'You receive a certificate of compliance confirming your switchboard meets current Australian Standards and local regulations.',
  },
];

export default function SwitchboardUpgradePage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        <ServiceHero
          eyebrow="Switchboards"
          title="Switchboard Upgrade"
          image="/images/services/banner-hero.webp"
          imageAlt="Modern RCD-protected switchboard installed by Links Air & Electrical"
        />

        {/* ── Intro ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto max-w-[760px]">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                Electrical Safety
              </span>
              <Heading
                level={2}
                className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                Modern Switchboard Protection for Your Home
              </Heading>
              <P className="mt-5 text-[17px] leading-[1.7] text-[#4F6172]">
                If your home still has ceramic fuses or a switchboard without safety switches,
                it&apos;s time for an upgrade. Older switchboards weren&apos;t designed for the
                electrical loads we place on them today — air conditioning, EV chargers, solar
                systems and dozens of appliances running at once. A modern switchboard with RCD
                protection keeps your family safe and your home compliant with current Australian
                Standards.
              </P>
              <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                We remove the old board, install a new enclosure with circuit breakers and safety
                switches, neatly label every circuit and provide a full compliance certificate on
                completion. The result is a switchboard that&apos;s safer, easier to manage and
                ready for whatever you add to your home next.
              </P>
            </div>
          </div>
        </section>

        {/* ── Benefits ── */}
        <section className="bg-[#F4F7FA] py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto mb-14 max-w-[760px] text-center">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                What you get
              </span>
              <Heading
                level={2}
                className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                Switchboard Upgrade Benefits
              </Heading>
            </div>

            <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1">
              {benefits.map((b) => (
                <div key={b.title} className="rounded-[14px] border border-[#E3E9F0] bg-white p-7">
                  <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-[#E9F4FB] text-[#1779B8]">
                    <b.icon className="h-6 w-6" />
                  </div>
                  <Heading
                    level={3}
                    className="font-heading mb-2 text-[17px] font-bold text-[#0E1B2C]"
                  >
                    {b.title}
                  </Heading>
                  <P className="text-[14px] leading-[1.6] text-[#4F6172]">{b.desc}</P>
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
          name: 'Switchboard Upgrade',
          description:
            'Replace old ceramic fuses with modern RCD-protected switchboards. Safer, compliant, and ready for today\u2019s electrical loads.',
          url: `${siteConfig.url}/switchboard-upgrade`,
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
