import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle,
  Home,
  Eye,
  Gauge,
  Volume2,
  Leaf,
  TrendingUp,
  ChevronRight,
  Phone,
} from 'lucide-react';
import { UtilityBar } from '@/components/blocks/UtilityBar';
import { Header } from '@/components/blocks/Header';
import { Footer } from '@/components/blocks/Footer';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { Testimonials } from '@/components/blocks/Testimonials';
import { JsonLd } from '@/components/seo/JsonLd';
import { Heading, P } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Ducted Air Conditioning Brisbane & Gold Coast',
  description:
    'Professional ducted air conditioning installation, repair & servicing across Brisbane & Gold Coast. Whole-home comfort with hidden ductwork. Get a free quote today.',
  alternates: {
    canonical: `${siteConfig.url}/ducted-airconditioning`,
  },
  openGraph: {
    title: 'Ducted Air Conditioning Brisbane & Gold Coast',
    description:
      'Professional ducted air conditioning installation, repair & servicing across Brisbane & Gold Coast.',
    url: `${siteConfig.url}/ducted-airconditioning`,
  },
};

const benefits = [
  {
    icon: Home,
    title: 'Whole-Home Coverage',
    desc: 'One system keeps every room at the perfect temperature — no more hot spots or cold corners.',
  },
  {
    icon: Eye,
    title: 'Hidden Aesthetic',
    desc: 'Ductwork is concealed in your ceiling, so all you see are discreet vents that blend into your decor.',
  },
  {
    icon: Gauge,
    title: 'Zone Control',
    desc: "Cool or heat only the rooms you're using. Zoning lets you direct airflow where it matters most.",
  },
  {
    icon: Volume2,
    title: 'Whisper-Quiet Operation',
    desc: 'The main unit sits outside or in the roof space, keeping indoor noise levels impressively low.',
  },
  {
    icon: Leaf,
    title: 'Energy Efficient',
    desc: 'Modern inverter ducted systems adjust output to match demand, cutting your electricity bills.',
  },
  {
    icon: TrendingUp,
    title: 'Adds Home Value',
    desc: 'Ducted AC is a genuine selling point — buyers love the idea of move-in-ready whole-home comfort.',
  },
];

const pricing = [
  {
    label: 'Small Homes',
    size: '1–2 bedroom',
    range: '$6,000 – $9,000',
  },
  {
    label: 'Medium Homes',
    size: '3–4 bedroom',
    range: '$8,000 – $12,000',
  },
  {
    label: 'Large Homes',
    size: '5+ bedroom',
    range: '$11,000 – $15,000+',
  },
];

export default function DuctedAirconditioningPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        <ServiceHero
          eyebrow="Ducted Systems"
          title="Ducted Air Conditioning Brisbane & Gold Coast"
          image="/images/services/banner-hero.webp"
          imageAlt="Ducted air conditioning systems by Links Air & Electrical"
        />

        {/* ── Intro ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto max-w-[760px]">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                How it works
              </span>
              <Heading
                level={2}
                className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                The Complete Comfort Solution for Your Entire Home
              </Heading>
              <P className="mt-5 text-[17px] leading-[1.7] text-[#4F6172]">
                A ducted air conditioning system uses a single, powerful central unit — usually
                mounted in your roof space — connected to a network of insulated ducts that deliver
                cooled or heated air to every room through discreet ceiling or floor vents. Unlike
                wall-mounted splits, there are no indoor units on display, giving your home a clean,
                uncluttered look.
              </P>
              <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                With modern zone controllers, you choose exactly which rooms receive airflow and at
                what temperature. That means you can keep the living areas cool during the day and
                switch to bedrooms at night — without wasting energy on empty spaces.
              </P>
              <div className="mt-6 flex flex-wrap gap-3.5">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#E73438] px-[22px] py-3.5 text-[15px] font-semibold text-white shadow-[0_6px_16px_-6px_rgba(231,52,56,0.6)] transition-transform hover:-translate-y-px hover:bg-[#D62229]"
                >
                  Get a Free Quote
                  <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
                </Link>
                <Link
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-2.5 rounded-full border border-[#E3E9F0] bg-transparent px-[22px] py-3.5 text-[15px] font-semibold text-[#0E1B2C] transition-colors hover:bg-[#F4F7FA]"
                >
                  <Phone className="h-4 w-4 text-[#2196D6]" />
                  Call {siteConfig.phone}
                </Link>
              </div>
              <div className="relative mt-10 aspect-[1/1] max-w-[600px] max-[900px]:max-w-[560px]">
                <div className="absolute inset-0 overflow-hidden rounded-[22px] shadow-[0_24px_60px_-20px_rgba(14,27,44,0.25)]">
                  <Image
                    src="/images/services/pages/ducted-ref.webp"
                    alt="Ducted air conditioning systems by Links Air & Electrical"
                    fill
                    className="object-cover"
                    sizes="(max-width: 900px) 560px, 600px"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Benefits ── */}
        <section className="bg-[#F4F7FA] py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto mb-14 max-w-[760px] text-center">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                Why ducted
              </span>
              <Heading
                level={2}
                className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                Benefits of Ducted Air Conditioning
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

        {/* ── Pricing Guide ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto mb-14 max-w-[760px] text-center">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                Pricing guide
              </span>
              <Heading
                level={2}
                className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                Ducted AC Installation Costs
              </Heading>
              <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
                Every home is different, so these are ballpark figures. We provide an accurate,
                obligation-free quote after a site inspection.
              </P>
            </div>

            <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-1">
              {pricing.map((p) => (
                <div
                  key={p.label}
                  className="rounded-[14px] border border-[#E3E9F0] bg-[#F8FAFC] p-8 text-center"
                >
                  <P className="text-[13px] font-semibold tracking-[0.1em] text-[#1779B8] uppercase">
                    {p.label}
                  </P>
                  <Heading
                    level={3}
                    className="font-heading mt-3 text-[clamp(26px,3vw,36px)] font-extrabold text-[#0E1B2C]"
                  >
                    {p.range}
                  </Heading>
                  <P className="mt-2 text-[15px] text-[#4F6172]">{p.size}</P>
                  <div className="mt-5 flex flex-col gap-2">
                    {['Supply & install', 'Zone controller', 'Warranty included'].map((f) => (
                      <div
                        key={f}
                        className="flex items-center justify-center gap-2 text-[14px] text-[#4F6172]"
                      >
                        <CheckCircle className="h-4 w-4 text-[#22C55E]" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />
        <ServiceCTA />
      </main>
      <Footer />

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Ducted Air Conditioning Installation',
          description:
            'Professional ducted air conditioning installation, repair and servicing across Brisbane and Gold Coast.',
          url: `${siteConfig.url}/ducted-airconditioning`,
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
