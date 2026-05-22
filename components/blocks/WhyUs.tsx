import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Heading, P } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

export function WhyUs() {
  return (
    <section className="bg-[#F4F7FA] py-[clamp(72px,9vw,120px)]">
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
        <div className="grid grid-cols-[1.1fr_1fr] items-center gap-16 max-[900px]:grid-cols-1 max-[900px]:gap-10">
          {/* Text */}
          <div>
            <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
              Welcome to Links Air &amp; Electrical
            </span>
            <Heading
              level={2}
              className="font-heading text-[clamp(30px,3.8vw,48px)] leading-[1.08] font-bold tracking-[-0.02em] text-[#0E1B2C]"
            >
              Your trusted team for air conditioning &amp; electrical.
            </Heading>
            <P className="mt-5 text-[17px] leading-[1.7] text-[#4F6172]">
              Our expert team has delivered outstanding quality workmanship across Brisbane and the
              Gold Coast since 2014. We&apos;re locally owned and take our reputation seriously —
              which means we&apos;re committed to doing an exceptional job on every air conditioning
              and electrical project we take on.
            </P>
            <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
              We believe in being upfront about our costs, so you&apos;ll have no hidden surprises
              once the job is done. Our teams are geared for fast response to your electrical or air
              conditioning needs. We keep a ready supply of parts in-hand so we can get you up and
              running quickly.
            </P>
            <P className="mt-4 text-[16px] leading-[1.7] font-semibold text-[#0E1B2C]">
              No electrical or air conditioning job is too big or too small!
            </P>

            <div className="mt-8 flex flex-wrap gap-3.5">
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2.5 rounded-full border border-[#E3E9F0] bg-white px-6 py-3.5 text-[15px] font-semibold text-[#0E1B2C] transition-colors hover:bg-[#F4F7FA]"
              >
                Read More
                <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#E73438] px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_6px_16px_-6px_rgba(231,52,56,0.6)] transition-transform hover:-translate-y-px hover:bg-[#D62229]"
              >
                Get a Free Quote
                <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
            </div>
          </div>

          {/* Visual placeholder */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-gradient-to-br from-[#0E1B2C] to-[#1B2D45] shadow-[0_24px_60px_-20px_rgba(14,27,44,0.25)]">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.05)_0_2px,transparent_2px_22px)]" />

            {/* Stat badge */}
            <div className="absolute -right-5 bottom-12 rounded-[14px] bg-[#E73438] p-[24px_28px] text-white shadow-[0_8px_24px_-8px_rgba(14,27,44,0.18)] max-[900px]:right-3">
              <div className="font-heading text-[44px] leading-none font-extrabold">200+</div>
              <div className="mt-1.5 text-[13px] opacity-90">
                5-star Google
                <br />
                reviews
              </div>
            </div>

            {/* Call badge */}
            <div className="absolute top-12 -left-5 rounded-[14px] bg-white p-[14px_18px] shadow-[0_8px_24px_-8px_rgba(14,27,44,0.18)] max-[900px]:left-3">
              <div className="text-[12px] font-semibold tracking-wider text-[#4F6172] uppercase">
                Call us now
              </div>
              <div className="font-heading mt-1 text-[20px] font-bold text-[#1779B8]">
                {siteConfig.phone}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
