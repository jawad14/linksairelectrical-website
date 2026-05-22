import Link from 'next/link';
import { Phone, ChevronRight } from 'lucide-react';
import { Heading, P } from '@/components/ui/typography';

export function CTABand() {
  return (
    <section className="pt-0 pb-[clamp(72px,9vw,120px)]">
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
        <div className="relative grid grid-cols-[1.4fr_1fr] items-center gap-12 overflow-hidden rounded-[22px] bg-gradient-to-r from-[#0F5E94] to-[#2196D6] p-[clamp(40px,6vw,72px)_clamp(28px,5vw,64px)] text-white shadow-[0_24px_60px_-20px_rgba(14,27,44,0.25)] before:absolute before:-top-[100px] before:right-[-100px] before:h-[340px] before:w-[340px] before:rounded-full before:bg-white/[0.08] after:absolute after:right-[60px] after:-bottom-[140px] after:h-[280px] after:w-[280px] after:rounded-full after:bg-[rgba(130,189,63,0.18)] max-[840px]:grid-cols-1">
          <div className="relative z-[1]">
            <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-white/85 uppercase before:inline-block before:h-0.5 before:w-6 before:bg-white/60">
              Free, no-obligation quote
            </span>
            <Heading
              level={2}
              className="font-heading mt-4 max-w-[560px] text-[clamp(30px,3.8vw,48px)] leading-[1.08] font-bold tracking-[-0.02em] text-white"
            >
              Got a job in mind? Let&apos;s quote it up — usually within 24 hours.
            </Heading>
            <P className="mt-3.5 max-w-[480px] text-white/85">
              Send us a few details or some photos and we&apos;ll come back with an honest, itemised
              price. No callout fee for quotes.
            </P>
          </div>
          <div className="relative z-[1] flex flex-wrap gap-3.5 justify-self-end max-[840px]:justify-self-start">
            <Link
              href="tel:0468432538"
              className="inline-flex items-center gap-2.5 rounded-full bg-white px-[22px] py-3.5 text-[15px] font-semibold text-[#0E1B2C] transition-colors hover:bg-[#F8FAFC]"
            >
              <Phone className="h-4 w-4" />
              Call 0468 432 538
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#E73438] px-[22px] py-3.5 text-[15px] font-semibold text-white shadow-[0_6px_16px_-6px_rgba(231,52,56,0.6)] transition-transform hover:-translate-y-px hover:bg-[#D62229]"
            >
              Request a quote
              <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
