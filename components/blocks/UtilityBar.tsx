import Link from 'next/link';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { siteConfig } from '@/config/site.config';

export function UtilityBar() {
  return (
    <div className="bg-[#0E1B2C] text-[13px] text-white/[0.78]">
      <div className="mx-auto flex h-[42px] max-w-[1240px] items-center justify-between gap-6 px-[clamp(20px,4vw,56px)] py-0 max-sm:h-auto max-sm:flex-col max-sm:items-start max-sm:gap-1.5 max-sm:py-2">
        <div className="flex flex-wrap items-center gap-6">
          <Link
            href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            <Phone className="h-3.5 w-3.5 opacity-70" />
            {siteConfig.phone}
          </Link>
          <Link
            href={`tel:${siteConfig.mobile.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-white max-[760px]:hidden"
          >
            <Phone className="h-3.5 w-3.5 opacity-70" />
            {siteConfig.mobile}
          </Link>
          <Link
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-white max-[960px]:hidden"
          >
            <Mail className="h-3.5 w-3.5 opacity-70" />
            {siteConfig.email}
          </Link>
          <span className="inline-flex items-center gap-2 max-[760px]:hidden">
            <MapPin className="h-3.5 w-3.5 opacity-70" />
            Brisbane &amp; Gold Coast
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#82BD3F] px-2.5 py-1 text-[11px] font-semibold tracking-[0.04em] text-[#0E1B2C]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0E1B2C]" />
            We&apos;re On Call
          </span>
        </div>
      </div>
    </div>
  );
}
