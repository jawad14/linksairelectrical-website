import Link from 'next/link';
import { ChevronRight, Check, Star } from 'lucide-react';
import { Heading, P } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,rgba(14,27,44,0.85)_0%,rgba(23,121,184,0.75)_100%)] py-[clamp(64px,10vw,130px)]">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_500px_at_80%_20%,rgba(33,150,214,0.25),transparent_60%),radial-gradient(600px_400px_at_20%_80%,rgba(130,189,63,0.12),transparent_60%)]" />

      <div className="relative mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
        <div className="max-w-[720px]">
          <span className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-white/80 uppercase before:inline-block before:h-0.5 before:w-6 before:bg-white/50">
            Brisbane &amp; Gold Coast&apos;s trusted team
          </span>

          <Heading
            level={1}
            className="font-heading mt-5 text-[clamp(38px,5.4vw,68px)] leading-[1.08] font-extrabold tracking-[-0.025em] text-balance text-white"
          >
            Experts in <span className="text-[#4FB3E8]">Air Conditioning</span> and{' '}
            <span className="text-[#82BD3F]">Electrical</span>
          </Heading>

          <P className="mt-6 max-w-[580px] text-[clamp(16px,1.2vw,19px)] leading-[1.65] text-white/80">
            Links Air &amp; Electrical has delivered outstanding quality workmanship across Brisbane
            and the Gold Coast for over a decade. We&apos;re locally owned and committed to doing an
            exceptional job on every project — from split system installs to full home rewires.
          </P>

          <div className="mt-9 flex flex-wrap gap-3.5">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#E73438] px-7 py-4 text-[15px] font-semibold text-white shadow-[0_6px_16px_-6px_rgba(231,52,56,0.6)] transition-transform hover:-translate-y-px hover:bg-[#D62229]"
            >
              Get a Free Quote
              <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <Link
              href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-[15px] font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              Call {siteConfig.phone}
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-7 border-t border-white/15 pt-7">
            {[
              'Fully licensed & insured',
              'Warranties on all work',
              'Online scheduling available',
            ].map((item) => (
              <span
                key={item}
                className="flex items-center gap-2.5 text-[13px] font-medium text-white/75"
              >
                <Check className="h-[18px] w-[18px] shrink-0 text-[#82BD3F]" strokeWidth={2.5} />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Google reviews badge */}
        <div className="absolute right-[clamp(20px,4vw,56px)] bottom-[clamp(64px,10vw,130px)] flex items-center gap-3 rounded-[14px] bg-white/95 px-5 py-3 shadow-[0_8px_24px_-8px_rgba(14,27,44,0.18)] backdrop-blur-sm max-[900px]:hidden">
          <div className="flex gap-0.5 text-[#F5A524]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <div className="text-[13px] text-[#4F6172]">
            <strong className="font-bold text-[#0E1B2C]">200+ Google Reviews</strong> · 5.0
          </div>
        </div>

        {/* Service entry cards */}
        <div className="mt-14 grid grid-cols-2 gap-4 max-[600px]:grid-cols-1 sm:max-w-[560px]">
          <Link
            href="/air-conditioning"
            className="group flex items-center gap-4 rounded-[14px] border border-white/15 bg-white/10 px-6 py-5 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/15"
          >
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#2196D6]/20 text-[#4FB3E8]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <rect x="2" y="6" width="20" height="12" rx="2" />
                <path d="M6 12h12M6 9h12M6 15h6" />
              </svg>
            </div>
            <div>
              <div className="text-[15px] font-semibold text-white">Air Conditioning</div>
              <div className="text-[12px] text-white/60">Install · Repair · Service</div>
            </div>
            <ChevronRight className="ml-auto h-4 w-4 text-white/40 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/electricals"
            className="group flex items-center gap-4 rounded-[14px] border border-white/15 bg-white/10 px-6 py-5 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/15"
          >
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#82BD3F]/20 text-[#82BD3F]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <div>
              <div className="text-[15px] font-semibold text-white">Electrical Services</div>
              <div className="text-[12px] text-white/60">Residential · Commercial · Emergency</div>
            </div>
            <ChevronRight className="ml-auto h-4 w-4 text-white/40 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
