import Link from 'next/link';
import { ChevronRight, Check, Star } from 'lucide-react';
import { Heading, P } from '@/components/ui/typography';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(1200px_600px_at_110%_-10%,rgba(33,150,214,0.18),transparent_60%),radial-gradient(800px_500px_at_-10%_110%,rgba(130,189,63,0.10),transparent_60%),linear-gradient(180deg,#FAFCFE_0%,#FFFFFF_100%)] py-[clamp(56px,8vw,110px)]">
      <div className="mx-auto grid max-w-[1240px] grid-cols-[1.05fr_1fr] items-center gap-[clamp(32px,6vw,80px)] px-[clamp(20px,4vw,56px)] max-[900px]:grid-cols-1">
        {/* Copy */}
        <div>
          <span className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
            Licensed electricians · Air conditioning experts
          </span>

          <Heading
            level={1}
            className="font-heading mt-4 text-[clamp(40px,5.6vw,72px)] leading-[1.08] font-extrabold tracking-[-0.025em] text-balance text-[#0E1B2C]"
          >
            Reliable <span className="text-[#1779B8]">electrical</span> &amp;{' '}
            <span className="text-[#E73438]">air</span> work — done right, the first time.
          </Heading>

          <P className="mt-6 max-w-[560px] text-[clamp(16px,1.2vw,19px)] leading-[1.6] text-[#4F6172]">
            From switchboard upgrades and LED installs to split-system air con and emergency
            call-outs, Links Air &amp; Electrical brings tidy, code-compliant work to homes and
            businesses across the region — backed by upfront quotes and a workmanship guarantee.
          </P>

          <div className="mt-9 flex flex-wrap gap-3.5">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#E73438] px-[22px] py-3.5 text-[15px] font-semibold text-white shadow-[0_6px_16px_-6px_rgba(231,52,56,0.6)] transition-transform hover:-translate-y-px hover:bg-[#D62229]"
            >
              Book a service
              <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center gap-2.5 rounded-full border border-[#E3E9F0] bg-transparent px-[22px] py-3.5 text-[15px] font-semibold text-[#0E1B2C] transition-colors hover:bg-[#F4F7FA]"
            >
              Explore services
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-7 border-t border-[#E3E9F0] pt-7">
            {[
              'Fully licensed & insured',
              'Upfront, no-surprise quotes',
              'Workmanship guarantee',
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
        </div>

        {/* Visual */}
        <div className="relative aspect-[1/1.05] overflow-hidden rounded-[22px] bg-gradient-to-br from-[#1779B8] via-[#2196D6] to-[#0F5E94] shadow-[0_24px_60px_-20px_rgba(14,27,44,0.25)] max-[900px]:aspect-[4/3] max-[900px]:max-w-[560px]">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.08)_0_2px,transparent_2px_18px),radial-gradient(120%_80%_at_50%_0%,rgba(255,255,255,0.18),transparent_60%)]" />

          {/* Years badge */}
          <div className="absolute bottom-[60px] -left-6 flex min-w-[240px] items-center gap-3.5 rounded-[14px] bg-white p-[18px_22px] shadow-[0_8px_24px_-8px_rgba(14,27,44,0.18),0_2px_6px_rgba(14,27,44,0.06)] max-[900px]:bottom-3 max-[900px]:left-3 max-[900px]:min-w-[220px]">
            <span className="font-heading text-4xl leading-none font-extrabold text-[#1779B8]">
              15+
            </span>
            <span className="text-[13px] leading-[1.3] text-[#4F6172]">
              years of clean, tidy
              <br />
              electrical work
            </span>
          </div>

          {/* Rating badge */}
          <div className="absolute top-12 -right-[18px] flex min-w-[170px] flex-col gap-1.5 rounded-[14px] bg-white p-[14px_18px] shadow-[0_8px_24px_-8px_rgba(14,27,44,0.18),0_2px_6px_rgba(14,27,44,0.06)] max-[900px]:top-3 max-[900px]:right-3">
            <div className="flex gap-0.5 text-[#F5A524]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <div className="text-[12px] text-[#4F6172]">
              <strong className="font-bold text-[#0E1B2C]">4.9 / 5</strong> · Google reviews
            </div>
            <div className="text-[12px] text-[#4F6172]">200+ happy customers</div>
          </div>
        </div>
      </div>
    </section>
  );
}
