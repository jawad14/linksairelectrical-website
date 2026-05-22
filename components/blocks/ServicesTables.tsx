import Image from 'next/image';
import {
  Zap,
  Wind,
  Plug,
  Lightbulb,
  ShieldCheck,
  Wrench,
  AlertTriangle,
  ArrowRight,
} from 'lucide-react';
import { Heading, P } from '@/components/ui/typography';

/* ── Data ── */

const electricalServices = [
  { icon: Plug, title: 'Power Point Installation', desc: 'Add or upgrade outlets in any room' },
  { icon: Lightbulb, title: 'Lighting Upgrades', desc: 'LED lights, downlights, outdoor lighting' },
  { icon: Zap, title: 'Switchboard Upgrades', desc: 'Safe and modern switchboard replacements' },
  {
    icon: ShieldCheck,
    title: 'Safety Switch / RCD',
    desc: 'Protect your home from electrical faults',
  },
  { icon: Wrench, title: 'Appliance Installations', desc: 'Ovens, cooktops, dishwashers & more' },
  {
    icon: AlertTriangle,
    title: 'Emergency Repairs',
    desc: 'Fast response for urgent electrical issues',
  },
];

const acServices = [
  'Split system aircon installation',
  'Ducted air conditioning design & install',
  'Aircon cleaning and servicing',
  'Air conditioner replacement or upgrades',
  'Wi-Fi control setup and zone control',
];

const combinedServices = [
  { need: 'Installing a new air conditioner', help: 'Electrical and installation included' },
  { need: 'Renovating your kitchen', help: 'Cooktop, oven & lighting installation' },
  { need: 'Upgrading a rental property', help: 'Fans, aircon, smoke alarms & more' },
  { need: 'Full house fit-outs', help: 'One team for everything' },
];

/* ── Component ── */

export function ServicesTables() {
  return (
    <>
      {/* ═══ Our Electrical Services ═══ */}
      <section className="bg-[#F4F7FA] py-[clamp(72px,9vw,120px)]">
        <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
          <div className="mx-auto mb-14 max-w-[760px] text-center">
            <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
              Electrical
            </span>
            <Heading
              level={2}
              className="font-heading mb-[18px] text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
            >
              Our Electrical Services
            </Heading>
            <P className="text-[16px] text-[#4F6172]">
              We handle all types of residential and commercial electrical work.
            </P>
          </div>

          <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-2 max-[520px]:grid-cols-1">
            {electricalServices.map((svc) => (
              <div
                key={svc.title}
                className="flex items-start gap-4 rounded-[14px] border border-[#E3E9F0] bg-white p-6"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#E9F4FB] text-[#1779B8]">
                  <svc.icon className="h-5 w-5" />
                </div>
                <div>
                  <Heading
                    level={4}
                    className="font-heading mb-1 text-[16px] font-bold text-[#0E1B2C]"
                  >
                    {svc.title}
                  </Heading>
                  <P className="text-[14px] text-[#4F6172]">{svc.desc}</P>
                </div>
              </div>
            ))}
          </div>

          <P className="mt-8 text-center text-[16px] font-medium text-[#4F6172]">
            Whether it&apos;s a small job or a full house rewire, we&apos;ll get it done safely.
          </P>
        </div>
      </section>

      {/* ═══ Air Conditioning Installation & Servicing ═══ */}
      <section className="bg-white py-[clamp(72px,9vw,120px)]">
        <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
          <div className="grid grid-cols-[1fr_1.1fr] items-center gap-[clamp(32px,6vw,80px)] max-[900px]:grid-cols-1">
            {/* Text */}
            <div>
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#E73438] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#E73438]">
                Air conditioning
              </span>
              <Heading
                level={2}
                className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                Air Conditioning Installation &amp; Servicing
              </Heading>
              <P className="mt-5 text-[17px] leading-[1.7] text-[#4F6172]">
                Looking for help with air conditioning? Our team installs and services all major
                brands.
              </P>

              <P className="font-heading mt-5 text-[15px] font-semibold text-[#0E1B2C]">
                Air Conditioning Services:
              </P>
              <ul className="m-0 mt-3 flex list-none flex-col gap-2.5 p-0">
                {acServices.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <ArrowRight className="h-4 w-4 shrink-0 text-[#E73438]" />
                    <P className="text-[15px] text-[#4F6172]">{item}</P>
                  </li>
                ))}
              </ul>

              <P className="mt-6 text-[15px] leading-[1.7] text-[#4F6172]">
                We help you choose the right size and system, and install it professionally.
              </P>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/3] max-[900px]:max-w-[560px]">
              <div className="absolute inset-0 overflow-hidden rounded-[22px] shadow-[0_24px_60px_-20px_rgba(14,27,44,0.25)]">
                <Image
                  src="/images/services/airconditioning.jpg"
                  alt="Air conditioning installation and servicing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 900px) 560px, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Electrical and Air Conditioning in One ═══ */}
      <section className="bg-[#F4F7FA] py-[clamp(72px,9vw,120px)]">
        <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
          <div className="mx-auto mb-14 max-w-[760px] text-center">
            <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#82BD3F] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#82BD3F]">
              Combined services
            </span>
            <Heading
              level={2}
              className="font-heading mb-[18px] text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
            >
              Electrical and Air Conditioning in One
            </Heading>
            <P className="text-[16px] text-[#4F6172]">
              Most homes need both electrical and air conditioning services at some point. Instead
              of calling multiple trades, Links Air makes it easy.
            </P>
          </div>

          <div className="overflow-hidden rounded-[14px] border border-[#E3E9F0] bg-white">
            {/* Table header */}
            <div className="grid grid-cols-2 bg-[#0E1B2C] px-6 py-4 text-[13px] font-semibold tracking-[0.08em] text-white uppercase">
              <span>Need This Done?</span>
              <span>We Can Help!</span>
            </div>
            {/* Table rows */}
            {combinedServices.map((row, i) => (
              <div
                key={row.need}
                className={`grid grid-cols-2 px-6 py-4 text-[15px] ${i % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]'}`}
              >
                <P className="font-medium text-[#0E1B2C]">{row.need}</P>
                <P className="text-[#4F6172]">{row.help}</P>
              </div>
            ))}
          </div>

          <P className="mt-8 text-center text-[16px] font-medium text-[#4F6172]">
            We save you time and money by offering both electrical and air conditioning work.
          </P>
        </div>
      </section>
    </>
  );
}
