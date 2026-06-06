import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronRight,
  Shield,
  DollarSign,
  ThumbsUp,
  Zap,
  Clock,
  Wrench,
  Wifi,
  CheckCircle,
  Search,
  PenTool,
  Calendar,
  Thermometer,
} from 'lucide-react';
import { UtilityBar } from '@/components/blocks/UtilityBar';
import { Header } from '@/components/blocks/Header';
import { Footer } from '@/components/blocks/Footer';
import { CTABand } from '@/components/blocks/CTABand';
import { JsonLd } from '@/components/seo/JsonLd';
import { Heading, P } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'About Us | Links Air Electrical - Air Conditioning Solutions',
  description:
    "About Links Air Electrical — 7+ years' expertise in Brisbane air conditioning installation, repairs & maintenance. Reliable cooling and electrical solutions.",
  alternates: {
    canonical: `${siteConfig.url}/about-us`,
  },
  openGraph: {
    title: 'About Us | Links Air Electrical - Air Conditioning Solutions',
    description:
      "About Links Air Electrical — 7+ years' expertise in Brisbane air conditioning installation, repairs & maintenance. Reliable cooling and electrical solutions.",
    url: `${siteConfig.url}/about-us`,
  },
};

const expertise = [
  { icon: Search, label: 'Site Inspection' },
  { icon: PenTool, label: 'Planning & Designing' },
  { icon: Calendar, label: 'Preventive Maintenance Schedules' },
  { icon: Thermometer, label: 'Cooling / Heating Load Calculation' },
];

const usps = [
  { icon: Wrench, label: 'Servicing Top Brands' },
  { icon: DollarSign, label: 'Unbeatable Rates' },
  { icon: ThumbsUp, label: '100% Client Satisfaction' },
  { icon: DollarSign, label: 'No Hidden Charges' },
  { icon: Zap, label: 'Emergency Service 24/7/365' },
  { icon: Shield, label: 'Zero Damage Installation & Repairs' },
  { icon: Wifi, label: 'Programmable Thermostats & Wi-Fi' },
  { icon: Clock, label: 'Periodic AC Maintenance & Tune-ups' },
];

const values = [
  { title: 'Warranties & Guarantees', desc: 'Every job backed by our workmanship promise.' },
  {
    title: 'Exceed Expectations',
    desc: 'We don\u2019t just meet the brief \u2014 we go beyond it.',
  },
  { title: 'Online Scheduling', desc: 'Book a time that works for you, day or night.' },
  { title: 'Flexible Options', desc: 'Solutions to suit every budget and timeline.' },
];

export default function AboutPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        {/* ── Hero Banner ── */}
        <section className="relative h-[320px] overflow-hidden sm:h-[400px]">
          <Image
            src="/images/about/banner.webp"
            alt="HVAC technician checking refrigerant gauges on an outdoor air conditioning unit"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="relative mx-auto flex h-full max-w-[1240px] items-center px-[clamp(20px,4vw,56px)]">
            <div>
              <span className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-white/80 uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                About us
              </span>
              <Heading
                level={1}
                className="font-heading mt-4 max-w-[600px] text-[clamp(32px,4.5vw,56px)] leading-[1.1] font-extrabold tracking-[-0.02em] text-white"
              >
                Your Local Experts in Air Conditioning &amp; Electrical
              </Heading>
            </div>
          </div>
        </section>

        {/* ── Intro Section ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="grid grid-cols-[1.1fr_1fr] items-center gap-[clamp(32px,6vw,80px)] max-[900px]:grid-cols-1">
              <div>
                <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                  Since 2014
                </span>
                <Heading
                  level={2}
                  className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
                >
                  10+ Years of Professional Experience You Can Trust
                </Heading>
                <P className="mt-5 text-[17px] leading-[1.7] text-[#4F6172]">
                  Links Air &amp; Electrical is a leading name when it comes to complete air
                  conditioning and electrical solutions at an honest price. Serving Brisbane and the
                  Gold Coast since 2014, we provide end-to-end services — from installation and
                  repairs to ongoing maintenance — so you can enjoy comfort and peace of mind every
                  day.
                </P>
                <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                  Whether it&apos;s a regular filter change, periodic cleaning, or a complex repair,
                  our fully licensed team delivers high-quality workmanship with no shortcuts and no
                  surprises on the bill.
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

              {/* Image */}
              <div className="relative aspect-[4/3] max-[900px]:max-w-[560px]">
                <div className="absolute inset-0 overflow-hidden rounded-[22px] shadow-[0_24px_60px_-20px_rgba(14,27,44,0.25)]">
                  <Image
                    src="/images/about/about-inner.webp"
                    alt="Technician servicing an air conditioning unit"
                    fill
                    className="object-cover"
                    sizes="(max-width: 900px) 560px, 50vw"
                  />
                </div>

                {/* Badge */}
                <div className="absolute bottom-8 -left-5 z-10 rounded-[14px] bg-[#E73438] p-[20px_24px] text-white shadow-[0_8px_24px_-8px_rgba(14,27,44,0.18)] max-[900px]:left-3">
                  <div className="font-heading text-[40px] leading-none font-extrabold">200+</div>
                  <div className="mt-1 text-[13px] opacity-90">
                    5-star Google
                    <br />
                    reviews
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Areas of Excellence ── */}
        <section className="bg-[#F4F7FA] py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto mb-14 max-w-[760px] text-center">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                Our expertise
              </span>
              <Heading
                level={2}
                className="font-heading mb-[18px] text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                Areas of Excellence
              </Heading>
            </div>

            <div className="grid grid-cols-4 gap-5 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1">
              {expertise.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-4 rounded-[14px] border border-[#E3E9F0] bg-white p-8 text-center"
                >
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#E9F4FB] text-[#1779B8]">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <P className="text-[15px] leading-[1.3] font-semibold text-[#0E1B2C]">
                    {item.label}
                  </P>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What Sets Us Apart ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto mb-14 max-w-[760px] text-center">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#E73438] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#E73438]">
                Why us
              </span>
              <Heading
                level={2}
                className="font-heading mb-[18px] text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                What Sets Us Apart
              </Heading>
              <P className="text-[16px] leading-[1.7] text-[#4F6172]">
                We don&apos;t cut corners, we don&apos;t surprise you with hidden fees, and we
                don&apos;t leave until the job is done right.
              </P>
            </div>

            <div className="grid grid-cols-4 gap-5 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1">
              {usps.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-[14px] border border-[#E3E9F0] bg-[#F8FAFC] p-5"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#E9F4FB] text-[#1779B8]">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <P className="text-[14px] leading-[1.3] font-semibold text-[#0E1B2C]">
                    {item.label}
                  </P>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Our Values ── */}
        <section className="bg-[#0E1B2C] py-[clamp(72px,9vw,120px)] text-white">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto mb-14 max-w-[760px] text-center">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-white/80 uppercase before:inline-block before:h-0.5 before:w-6 before:bg-white/50">
                Our values
              </span>
              <Heading
                level={2}
                className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-white"
              >
                What You Can Count On
              </Heading>
            </div>

            <div className="grid grid-cols-4 gap-5 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-[14px] border border-white/[0.08] bg-white/[0.04] p-7"
                >
                  <Heading level={4} className="font-heading mb-2 text-[17px] font-bold text-white">
                    {v.title}
                  </Heading>
                  <P className="text-[14px] leading-[1.6] text-white/60">{v.desc}</P>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <div className="pt-[clamp(72px,9vw,120px)]">
          <CTABand />
        </div>
      </main>
      <Footer />

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About Links Air & Electrical',
          description:
            'Learn about Links Air & Electrical — trusted local electricians and AC specialists serving Brisbane & Gold Coast since 2014.',
          url: `${siteConfig.url}/about-us`,
          mainEntity: {
            '@type': 'LocalBusiness',
            '@id': `${siteConfig.url}/#business`,
            name: siteConfig.name,
          },
        }}
      />
    </>
  );
}
