import Link from 'next/link';
import { Phone, ChevronRight } from 'lucide-react';
import { Heading, P } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

export function ServiceCTA({ title, description }: { title?: string; description?: string }) {
  return (
    <section className="bg-[#0E1B2C] py-[clamp(56px,7vw,80px)]">
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
        <div className="flex flex-wrap items-center justify-between gap-8 max-[640px]:flex-col max-[640px]:text-center">
          <div className="max-w-[560px]">
            <Heading
              level={2}
              className="font-heading text-[clamp(24px,3vw,36px)] leading-[1.15] font-bold text-white"
            >
              {title || 'Ready to get started? Get a free, no-obligation quote today.'}
            </Heading>
            <P className="mt-3 text-[15px] text-white/70">
              {description ||
                "Tell us what you need and we'll come back with an honest, upfront price — usually within a few hours."}
            </P>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold text-[#0E1B2C] transition-colors hover:bg-[#F4F7FA]"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phone}
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
      </div>
    </section>
  );
}
