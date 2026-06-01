import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, Clock, ShieldCheck, BadgeDollarSign } from 'lucide-react';
import { Heading, Text } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

const trustSignals = [
  { icon: Star, label: '200+ 5-Star Google Reviews' },
  { icon: Clock, label: '10+ Years Experience' },
  { icon: ShieldCheck, label: `Licensed & Insured · Qld #${siteConfig.license}` },
  { icon: BadgeDollarSign, label: 'No Hidden Charges' },
];

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
        {/* ── Main panel: headline + CTA + trust signals ── */}
        <div className="flex flex-1 flex-col items-center justify-center px-5 py-14 text-center lg:items-start lg:px-[6%] lg:py-20 lg:text-left">
          <Heading
            level={1}
            className="font-heading max-w-[325px] text-[32px] leading-[1.15] font-light tracking-tight text-balance text-white lg:max-w-none lg:text-[46px] lg:leading-[1.1] xl:text-[60px]"
          >
            Brisbane&apos;s experts in <strong className="font-bold">Air Conditioning</strong> and{' '}
            <strong className="font-bold">Electrical</strong>
          </Heading>

          <Text className="mt-5 max-w-[520px] text-[15px] leading-[1.55] text-white/85 lg:text-[16px]">
            Links Air &amp; Electrical is a leading name for 360° air conditioning and electrical
            solutions across Brisbane and the Gold Coast — at an unbeatable price.
          </Text>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:mt-8 lg:justify-start">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-full bg-[#D2212F] px-8 py-[14px] text-[15px] font-bold text-white transition-colors hover:bg-white hover:text-[#D2212F] lg:text-[16px]"
            >
              Get a free quote
            </Link>
            <Link
              href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-[14px] text-[15px] font-bold text-white transition-colors hover:bg-white/10"
            >
              Call {siteConfig.phone}
            </Link>
          </div>

          {/* Trust signals */}
          <ul className="mt-8 grid w-full max-w-[520px] grid-cols-1 gap-x-5 gap-y-2.5 border-t border-white/15 pt-5 sm:grid-cols-2 lg:mt-10">
            {trustSignals.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 text-[13px] leading-snug text-white/90"
              >
                <Icon className="h-4 w-4 shrink-0 text-[#9FD3F4]" strokeWidth={2.25} />
                <span>{label}</span>
              </li>
            ))}
          </ul>

          {/* Social media */}
          <div className="mt-6 flex items-center gap-3 lg:mt-7">
            <span className="text-[11px] font-semibold tracking-[0.15em] text-white/60 uppercase">
              Follow us
            </span>
            <span className="h-px w-6 bg-white/20" aria-hidden="true" />
            {siteConfig.social.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/30 text-white transition-all hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
              >
                <SocialIcon name={s.label} />
              </Link>
            ))}
          </div>
        </div>

        {/* ── Image option panels (desktop only) ── */}
        {entryCards.map((card) => (
          <div
            key={card.label}
            className="group relative hidden min-h-[260px] flex-col items-center justify-center overflow-hidden px-5 py-10 text-center lg:flex lg:min-h-[520px] lg:flex-[0_1_30%]"
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

function SocialIcon({ name }: { name: string }) {
  const cls = 'h-4 w-4';
  switch (name) {
    case 'Facebook':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden="true">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      );
    case 'Instagram':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={cls}
          aria-hidden="true"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );
    case 'WhatsApp':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785c-1.795 0-3.56-.482-5.1-1.396l-.366-.217-3.795.995 1.013-3.7-.238-.378A9.86 9.86 0 0 1 2.15 12.05C2.15 6.58 6.58 2.15 12.05 2.15c2.655 0 5.152 1.035 7.028 2.91A9.88 9.88 0 0 1 21.95 12.05c0 5.47-4.43 9.735-9.9 9.735zM12.05 0C5.405 0 0 5.37 0 12.05c0 2.125.555 4.2 1.61 6.03L0 24l6.105-1.6A11.94 11.94 0 0 0 12.05 24c6.645 0 12.05-5.37 12.05-11.95S18.695 0 12.05 0z" />
        </svg>
      );
    default:
      return null;
  }
}
