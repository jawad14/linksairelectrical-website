import Link from 'next/link';
import { Wind, Zap, HardHat, ChevronRight } from 'lucide-react';
import { Heading, P } from '@/components/ui/typography';

const services = [
  {
    icon: Wind,
    title: 'Air Conditioning Services',
    desc: 'From split systems and ducted installs to repairs, servicing and maintenance — we handle every aspect of your cooling and heating needs with ARC-licensed precision.',
    href: '/air-conditioning',
    color: 'bg-[#E9F4FB] text-[#1779B8]',
    accent: 'after:bg-[#2196D6]',
  },
  {
    icon: Zap,
    title: 'Electrical Services',
    desc: 'Power points, switchboard upgrades, LED lighting, EV chargers, smoke alarms and more. Fully licensed electricians delivering safe, code-compliant work every time.',
    href: '/electricals',
    color: 'bg-[#FDE7E8] text-[#E73438]',
    accent: 'after:bg-[#E73438]',
  },
  {
    icon: HardHat,
    title: 'Building & Construction',
    desc: 'Complete electrical and air conditioning solutions for new builds, renovations and commercial fit-outs. We work alongside builders to deliver on time and on spec.',
    href: '/building-and-construction',
    color: 'bg-[#F0F7E6] text-[#6BA432]',
    accent: 'after:bg-[#82BD3F]',
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="bg-gradient-to-b from-white to-[#F4F7FA] py-[clamp(72px,9vw,120px)]"
    >
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
        <div className="mx-auto mb-14 max-w-[760px] text-center">
          <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
            What we can offer you
          </span>
          <Heading
            level={2}
            className="font-heading mb-[18px] text-[clamp(30px,3.8vw,48px)] leading-[1.08] font-bold tracking-[-0.02em] text-[#0E1B2C]"
          >
            One team for all your needs.
          </Heading>
          <P className="text-[17px] text-[#4F6172]">
            Whether it&apos;s a single power-point repair or a full commercial fit-out, our team
            covers air conditioning, electrical and construction — neatly, safely, and with all
            paperwork sorted.
          </P>
        </div>

        <div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">
          {services.map((svc) => (
            <Link
              key={svc.title}
              href={svc.href}
              className={`group relative flex flex-col overflow-hidden rounded-[14px] border border-[#E3E9F0] bg-white p-10 text-center transition-all duration-250 after:absolute after:top-0 after:left-0 after:h-[3px] after:w-full ${svc.accent} hover:-translate-y-1 hover:border-transparent hover:shadow-[0_8px_24px_-8px_rgba(14,27,44,0.18),0_2px_6px_rgba(14,27,44,0.06)]`}
            >
              <div
                className={`mx-auto mb-6 grid h-16 w-16 place-items-center rounded-2xl ${svc.color}`}
              >
                <svc.icon className="h-8 w-8" />
              </div>
              <Heading
                level={3}
                className="font-heading mb-3 text-[22px] leading-[1.15] font-bold text-[#0E1B2C]"
              >
                {svc.title}
              </Heading>
              <P className="grow text-[15px] leading-[1.6] text-[#4F6172]">{svc.desc}</P>
              <span className="mx-auto mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-[#0E1B2C]">
                Read More
                <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
