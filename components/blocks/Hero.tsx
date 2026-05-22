import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Check, Star } from 'lucide-react';
import { Heading, P } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(1200px_600px_at_110%_-10%,rgba(33,150,214,0.18),transparent_60%),radial-gradient(800px_500px_at_-10%_110%,rgba(130,189,63,0.10),transparent_60%),linear-gradient(180deg,#FAFCFE_0%,#FFFFFF_100%)] py-[clamp(56px,8vw,110px)]">
      <div className="mx-auto grid max-w-[1240px] grid-cols-[1.05fr_1fr] items-center gap-[clamp(32px,6vw,80px)] px-[clamp(20px,4vw,56px)] max-[900px]:grid-cols-1">
        {/* ── Copy ── */}
        <div>
          <span className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
            Brisbane &amp; Gold Coast&apos;s trusted team
          </span>

          <Heading
            level={1}
            className="font-heading mt-5 text-[clamp(40px,5.6vw,72px)] leading-[1.08] font-extrabold tracking-[-0.025em] text-balance text-[#0E1B2C]"
          >
            Expert <span className="text-[#1779B8]">electrical</span> &amp;{' '}
            <span className="text-[#E73438]">air conditioning</span> services — done right.
          </Heading>

          <P className="mt-6 max-w-[560px] text-[clamp(16px,1.2vw,19px)] leading-[1.6] text-[#4F6172]">
            Links Air &amp; Electrical has delivered outstanding quality workmanship across Brisbane
            and the Gold Coast since 2014. From split system installs and switchboard upgrades to
            full home rewires — we&apos;re committed to doing an exceptional job on every project,
            backed by upfront quotes and a workmanship guarantee.
          </P>

          <div className="mt-9 flex flex-wrap gap-3.5">
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
              Call {siteConfig.phone}
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-7 border-t border-[#E3E9F0] pt-7">
            {[
              'Fully licensed & insured',
              'Warranties on all work',
              'Upfront, no-surprise quotes',
            ].map((item) => (
              <span
                key={item}
                className="flex items-center gap-2.5 text-[13px] font-medium text-[#4F6172]"
              >
                <Check className="h-[18px] w-[18px] shrink-0 text-[#6BA432]" strokeWidth={2.5} />
                {item}
              </span>
            ))}
          </div>

          {/* Social links */}
          <div className="mt-8 flex items-center gap-3">
            <span className="text-[12px] font-semibold tracking-[0.1em] text-[#6E7E8E] uppercase">
              Follow us
            </span>
            <div className="h-px w-6 bg-[#E3E9F0]" />
            {siteConfig.social.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center rounded-full border border-[#E3E9F0] text-[#4F6172] transition-all hover:-translate-y-0.5 hover:border-[#2196D6] hover:text-[#2196D6]"
              >
                <SocialIcon name={s.label} />
              </Link>
            ))}
          </div>
        </div>

        {/* ── Visual ── */}
        <div className="relative aspect-[1/1.05] max-[900px]:aspect-[4/3] max-[900px]:max-w-[560px]">
          {/* Image container — clips the photo to rounded shape */}
          <div className="absolute inset-0 overflow-hidden rounded-[22px] shadow-[0_24px_60px_-20px_rgba(14,27,44,0.25)]">
            <Image
              src="/images/services/electrical.webp"
              alt="Electrician testing a switchboard with professional equipment"
              fill
              className="object-cover object-right"
              priority
              sizes="(max-width: 900px) 560px, 50vw"
            />
          </div>

          {/* Years badge — bottom left, pokes out */}
          <div className="absolute bottom-[60px] -left-6 z-10 flex min-w-[240px] items-center gap-3.5 rounded-[14px] bg-white p-[18px_22px] shadow-[0_8px_24px_-8px_rgba(14,27,44,0.18),0_2px_6px_rgba(14,27,44,0.06)] max-[900px]:bottom-3 max-[900px]:left-3 max-[900px]:min-w-[220px]">
            <span className="font-heading text-4xl leading-none font-extrabold text-[#1779B8]">
              10+
            </span>
            <span className="text-[13px] leading-[1.3] text-[#4F6172]">
              years of quality
              <br />
              workmanship
            </span>
          </div>

          {/* Rating badge — top right, pokes out */}
          <div className="absolute top-12 -right-[18px] z-10 flex min-w-[170px] flex-col gap-1.5 rounded-[14px] bg-white p-[14px_18px] shadow-[0_8px_24px_-8px_rgba(14,27,44,0.18),0_2px_6px_rgba(14,27,44,0.06)] max-[900px]:top-3 max-[900px]:right-3">
            <div className="flex gap-0.5 text-[#F5A524]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <div className="text-[12px] text-[#4F6172]">
              <strong className="font-bold text-[#0E1B2C]">5.0 / 5</strong> · Google reviews
            </div>
            <div className="text-[12px] text-[#4F6172]">200+ happy customers</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ name }: { name: string }) {
  const cls = 'h-4 w-4';
  switch (name) {
    case 'Facebook':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={cls}>
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      );
    case 'Instagram':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={cls}>
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );
    case 'WhatsApp':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={cls}>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785c-1.795 0-3.56-.482-5.1-1.396l-.366-.217-3.795 .995 1.013-3.7-.238-.378A9.86 9.86 0 0 1 2.15 12.05C2.15 6.58 6.58 2.15 12.05 2.15c2.655 0 5.152 1.035 7.028 2.91A9.88 9.88 0 0 1 21.95 12.05c0 5.47-4.43 9.735-9.9 9.735zM12.05 0C5.405 0 0 5.37 0 12.05c0 2.125.555 4.2 1.61 6.03L0 24l6.105-1.6A11.94 11.94 0 0 0 12.05 24c6.645 0 12.05-5.37 12.05-11.95S18.695 0 12.05 0z" />
        </svg>
      );
    default:
      return null;
  }
}
