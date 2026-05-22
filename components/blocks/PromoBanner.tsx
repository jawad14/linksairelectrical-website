import Link from 'next/link';
import { Phone, ChevronRight } from 'lucide-react';
import { Heading } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

export function PromoBanner() {
  return (
    <section className="bg-[#E73438] py-10">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-6 px-[clamp(20px,4vw,56px)]">
        <Heading
          level={3}
          className="font-heading text-[clamp(22px,2.5vw,32px)] leading-[1.2] font-bold text-white"
        >
          Save 20% on Electrical &amp; AC Repairs — Limited Time, Don&apos;t Miss Out
        </Heading>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold text-[#E73438] transition-colors hover:bg-[#F4F7FA]"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phone}
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2.5 rounded-full bg-[#0E1B2C] px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-black"
          >
            Book Now
            <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
