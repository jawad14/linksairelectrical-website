import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Heading, P } from '@/components/ui/typography';

const services = [
  {
    title: 'General Electrical',
    desc: 'Lights, fans, power points — installed, repaired and certified.',
    image: '/images/services/cards/general-electrical.webp',
    href: '/electricals',
  },
  {
    title: 'Switchboard Upgrades',
    desc: 'Safety switches, RCD protection and meter board upgrades.',
    image: '/images/services/cards/switchboard.webp',
    href: '/switchboard-upgrade',
  },
  {
    title: 'Indoor & Outdoor Lighting',
    desc: 'LED downlights, pendants, garden and security lighting.',
    image: '/images/services/cards/lighting.webp',
    href: '/led-lights-installation',
  },
  {
    title: 'Split & Ducted A/C',
    desc: 'Supply and install of all major brands with ARC-licensed precision.',
    image: '/images/services/cards/split-ducted.webp',
    href: '/air-conditioning',
  },
  {
    title: 'A/C Servicing & Maintenance',
    desc: 'Regular servicing, cleaning and repairs to keep your system running.',
    image: '/images/services/cards/ac-servicing.webp',
    href: '/service-maintenance',
  },
  {
    title: 'Appliance Installation',
    desc: 'Oven, cooktop and appliance wiring — safe and certified.',
    image: '/images/services/cards/appliances.webp',
    href: '/oven-cooktop-installations',
  },
  {
    title: 'Ceiling Fan Installation',
    desc: 'Supply and install ceiling fans for any room in the home.',
    image: '/images/services/cards/ceiling-fan.webp',
    href: '/ceiling-fan-installation',
  },
  {
    title: 'Emergency Repairs',
    desc: 'Fast-response electrical repairs when you need them most.',
    image: '/images/services/cards/emergency.webp',
    href: '/contact-us',
  },
];

export function OneTeam() {
  return (
    <section className="bg-[#0E1B2C] py-[clamp(72px,9vw,120px)] text-white">
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
        <div className="mx-auto mb-14 max-w-[760px] text-center">
          <span className="mb-[18px] inline-flex items-center justify-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-white/80 uppercase before:inline-block before:h-0.5 before:w-6 before:shrink-0 before:bg-white/50">
            What we do
          </span>
          <Heading
            level={2}
            className="font-heading mb-[18px] text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-white"
          >
            One Team for All Your Electrical and Air Conditioning Needs
          </Heading>
          <P className="text-[16px] leading-[1.7] text-white/70">
            Links Air &amp; Electrical is not just electricians — we are a full-service provider in
            both electrical and air conditioning. That means fewer trades to manage and better
            results on every project.
          </P>
        </div>

        <div className="grid grid-cols-4 gap-4 max-[1024px]:grid-cols-3 max-[768px]:grid-cols-2 max-[480px]:grid-cols-1">
          {services.map((svc) => (
            <Link
              key={svc.title}
              href={svc.href}
              className="group relative overflow-hidden rounded-[14px] border border-white/[0.08] bg-white/[0.04] transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08]"
            >
              {/* Image */}
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <Heading level={4} className="font-heading mb-1.5 text-[15px] font-bold text-white">
                  {svc.title}
                </Heading>
                <P className="text-[13px] leading-[1.5] text-white/60">{svc.desc}</P>
                <span className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#4FB3E8]">
                  Read More
                  <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
