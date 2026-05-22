import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Phone } from 'lucide-react';
import { Heading, P } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

export function WhyUs() {
  return (
    <section className="bg-white py-[clamp(72px,9vw,120px)]">
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
        <div className="grid grid-cols-[1.1fr_1fr] items-center gap-[clamp(32px,6vw,80px)] max-[900px]:grid-cols-1">
          {/* Text */}
          <div>
            <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
              Why homeowners switch to us
            </span>
            <Heading
              level={2}
              className="font-heading text-[clamp(30px,3.8vw,48px)] leading-[1.08] font-bold tracking-[-0.02em] text-[#0E1B2C]"
            >
              Sick of tradies who don&apos;t show up, overcharge, or leave a mess?
            </Heading>
            <P className="mt-5 text-[17px] leading-[1.7] text-[#4F6172]">
              You&apos;ve been there. The tradie who never returns your call. The quote that doubles
              once the work starts. The mess they leave behind. It&apos;s stressful, it wastes your
              time, and it leaves you wondering if the job was even done right.
            </P>
            <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
              That&apos;s where we come in. Since 2014 we&apos;ve built our reputation on doing the
              opposite — showing up on time, quoting honestly, and leaving your place cleaner than
              we found it. We carry parts on the van so most jobs are done the same day. Over 200
              five-star Google reviews say we&apos;re doing something right.
            </P>

            <div className="mt-8 flex flex-wrap gap-3.5">
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2.5 rounded-full border border-[#E3E9F0] bg-white px-6 py-3.5 text-[15px] font-semibold text-[#0E1B2C] transition-colors hover:bg-[#E9F4FB]"
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

          {/* Visual */}
          <div className="relative aspect-[4/5] max-[900px]:aspect-[4/3] max-[900px]:max-w-[560px]">
            <div className="absolute inset-0 overflow-hidden rounded-[22px] shadow-[0_24px_60px_-20px_rgba(14,27,44,0.25)]">
              <Image
                src="/images/gallery/gallery4.webp"
                alt="Technician servicing an outdoor air conditioning unit"
                fill
                className="object-cover"
                sizes="(max-width: 900px) 560px, 50vw"
              />
            </div>

            {/* Reviews badge — bottom right */}
            <div className="absolute -right-5 bottom-12 z-10 rounded-[14px] bg-[#E73438] p-[24px_28px] text-white shadow-[0_8px_24px_-8px_rgba(14,27,44,0.18)] max-[900px]:right-3">
              <div className="font-heading text-[44px] leading-none font-extrabold">200+</div>
              <div className="mt-1.5 text-[13px] opacity-90">
                5-star Google
                <br />
                reviews
              </div>
            </div>

            {/* Call badge — top left */}
            <div className="absolute top-12 -left-5 z-10 rounded-[14px] bg-white p-[14px_18px] shadow-[0_8px_24px_-8px_rgba(14,27,44,0.18)] max-[900px]:left-3">
              <div className="text-[12px] font-semibold tracking-wider text-[#4F6172] uppercase">
                Call us now
              </div>
              <div className="font-heading mt-1 text-[20px] font-bold text-[#1779B8]">
                {siteConfig.phone}
              </div>
            </div>
          </div>
        </div>

        {/* 24/7 Emergency CTA strip */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 rounded-[14px] bg-[#0E1B2C] px-8 py-6 max-[640px]:flex-col max-[640px]:text-center">
          <div>
            <Heading level={3} className="font-heading text-[20px] font-bold text-white">
              Power out? AC dead? We&apos;re on call 24/7 — help is one call away
            </Heading>
            <P className="mt-1 text-[14px] text-white/70">
              Don&apos;t sweat it alone — we answer day and night, weekends included.
            </P>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={`tel:${siteConfig.mobile.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 rounded-full bg-[#82BD3F] px-6 py-3 text-[15px] font-semibold text-[#0E1B2C] transition-colors hover:bg-[#6BA432]"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.mobile}
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-full bg-[#E73438] px-6 py-3 text-[15px] font-semibold text-white transition-transform hover:-translate-y-px hover:bg-[#D62229]"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
