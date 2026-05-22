import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Heading, P } from '@/components/ui/typography';

const services = [
  {
    title: 'Air Conditioning Services',
    desc: 'Is your air conditioner not cooling well? From split systems and ducted installs to repairs, servicing and maintenance — we handle it all with ARC-licensed precision.',
    image: '/images/services/airconditioning.jpg',
    href: '/air-conditioning',
    accent: 'bg-[#2196D6]',
  },
  {
    title: 'Electrical Services',
    desc: 'Professional electrical services across Brisbane and Gold Coast. Power points, switchboard upgrades, LED lighting, EV chargers, smoke alarms and more.',
    image: '/images/services/electrical.jpg',
    href: '/electricals',
    accent: 'bg-[#E73438]',
  },
  {
    title: 'Building & Construction',
    desc: 'Looking for high-end builder services? Complete electrical and air conditioning solutions for new builds, renovations and commercial fit-outs.',
    image: '/images/services/construction.jpg',
    href: '/building-and-construction',
    accent: 'bg-[#82BD3F]',
  },
];

export function Services() {
  return (
    <section id="services" className="bg-[#F4F7FA] py-[clamp(72px,9vw,120px)]">
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
              className="group relative flex flex-col overflow-hidden rounded-[14px] border border-[#E3E9F0] bg-white transition-all duration-250 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_8px_24px_-8px_rgba(14,27,44,0.18),0_2px_6px_rgba(14,27,44,0.06)]"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
                {/* Accent bar at bottom of image */}
                <div className={`absolute bottom-0 left-0 h-1 w-full ${svc.accent}`} />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-7">
                <Heading
                  level={3}
                  className="font-heading mb-3 text-[20px] leading-[1.2] font-bold text-[#0E1B2C]"
                >
                  {svc.title}
                </Heading>
                <P className="grow text-[15px] leading-[1.6] text-[#4F6172]">{svc.desc}</P>
                <span className="mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-[#0E1B2C]">
                  Read More
                  <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
