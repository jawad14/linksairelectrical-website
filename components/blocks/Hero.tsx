import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Heading, Text } from '@/components/ui/typography';

type EntryCard = {
  label: string;
  href: string;
  image: string;
  alt: string;
  links: { label: string; href: string }[];
};

const entryCards: EntryCard[] = [
  {
    label: 'Air Conditioning',
    href: '/air-conditioning',
    image: '/images/hero/aircon-hero.webp',
    alt: 'Mitsubishi split system air conditioning installation in Brisbane',
    links: [
      { label: 'Split System', href: '/split-system-aircon' },
      { label: 'Ducted', href: '/ducted-airconditioning' },
    ],
  },
  {
    label: 'Electrical',
    href: '/electricals',
    image: '/images/hero/electrical-hero.webp',
    alt: 'Switchboard and electrical panel wiring by licensed electricians',
    links: [
      { label: 'Residential', href: '/residential-electrician' },
      { label: 'Maintenance', href: '/general-electrical-maintenance' },
    ],
  },
];

export function Hero() {
  return (
    <section className="w-full overflow-hidden bg-[#183964] text-white">
      <div className="flex flex-col lg:flex-row">
        {/* ── Main panel: headline + CTA ── */}
        <div className="flex flex-1 flex-col items-center justify-center px-5 py-14 text-center lg:items-start lg:px-[6%] lg:py-24 lg:text-left">
          <Heading
            level={1}
            className="font-heading max-w-[325px] text-[32px] leading-[1.15] font-light tracking-tight text-balance text-white lg:max-w-none lg:text-[46px] lg:leading-[1.1] xl:text-[60px]"
          >
            Brisbane&apos;s experts in <strong className="font-bold">Air Conditioning</strong> and{' '}
            <strong className="font-bold">Electrical</strong>
          </Heading>

          <Link
            href="/contact-us"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#D2212F] px-10 py-[18px] text-[16px] font-bold text-white transition-colors hover:bg-white hover:text-[#D2212F] lg:mt-10 lg:text-[18px]"
          >
            Get a free quote
          </Link>
        </div>

        {/* ── Image option panels ── */}
        {entryCards.map((card) => (
          <div
            key={card.label}
            className="group relative flex min-h-[260px] flex-col items-center justify-center overflow-hidden px-5 py-10 text-center lg:min-h-[520px] lg:flex-[0_1_30%]"
          >
            <Image
              src={card.image}
              alt={card.alt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 30vw"
            />
            <div className="absolute inset-0 bg-[#0e2038]/40 transition-opacity duration-700 group-hover:bg-[#0e2038]/70" />

            <div className="relative z-10 flex flex-col items-center gap-3 lg:gap-5">
              <Heading
                level={2}
                className="font-heading text-[30px] leading-[1.5] font-normal text-white xl:text-[40px]"
              >
                <Link href={card.href} className="text-white hover:text-[#D2212F]">
                  {card.label}
                </Link>
              </Heading>
              <Text as="div" className="text-[16px] leading-snug text-white lg:text-[18px]">
                {card.links.map((link, i) => (
                  <span key={link.href}>
                    {i > 0 && <span className="mx-1.5 opacity-70">/</span>}
                    <Link
                      href={link.href}
                      className="no-underline transition-colors hover:text-[#D2212F]"
                    >
                      {link.label}
                    </Link>
                  </span>
                ))}
              </Text>
              <Link
                href={card.href}
                aria-label={`${card.label} services`}
                className="mt-2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/70 transition-all hover:border-white hover:bg-white/10"
              >
                <ArrowRight
                  className="h-5 w-5 transition-transform group-hover:translate-x-1.5"
                  strokeWidth={2}
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
