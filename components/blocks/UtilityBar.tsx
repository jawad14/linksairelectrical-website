import Link from 'next/link';
import { Phone, Smartphone, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '@/config/site.config';

const HIDDEN = true;

export function UtilityBar() {
  if (HIDDEN) return null;
  return (
    <div className="hidden bg-[#183964] text-[13px] text-white/[0.78] sm:block">
      <div className="mx-auto max-w-[1240px] px-[clamp(16px,3vw,56px)]">
        {/* Desktop: single row, left/right */}
        <div className="hidden h-[44px] items-center justify-between sm:flex">
          <div className="flex items-center gap-6">
            <Link
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-white max-md:hidden"
            >
              <Mail className="h-3.5 w-3.5 opacity-70" />
              {siteConfig.email}
            </Link>
            <Link
              href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <Phone className="h-3.5 w-3.5 opacity-70" />
              {siteConfig.phone}
            </Link>
            <Link
              href={`tel:${siteConfig.mobile.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <Smartphone className="h-3.5 w-3.5 opacity-70" />
              {siteConfig.mobile}
            </Link>
          </div>
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 opacity-70" />
            brisbane and gold coast
          </span>
        </div>

        {/* Mobile: stacked two rows */}
        <div className="flex flex-col py-1 text-sm sm:hidden">
          <div className="flex items-center justify-between">
            <Link
              href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
              className="inline-flex min-h-[44px] items-center gap-2 transition-colors hover:text-white"
            >
              <Phone className="h-3.5 w-3.5 opacity-70" />
              {siteConfig.phone}
            </Link>
            <Link
              href={`tel:${siteConfig.mobile.replace(/\s/g, '')}`}
              className="inline-flex min-h-[44px] items-center gap-2 transition-colors hover:text-white"
            >
              <Smartphone className="h-3.5 w-3.5 opacity-70" />
              {siteConfig.mobile}
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <Link
              href={`mailto:${siteConfig.email}`}
              className="inline-flex min-h-[44px] items-center gap-2 transition-colors hover:text-white"
            >
              <Mail className="h-3.5 w-3.5 opacity-70" />
              {siteConfig.email}
            </Link>
            <span className="inline-flex min-h-[44px] items-center gap-1.5 text-[13px]">
              <MapPin className="h-3.5 w-3.5 opacity-70" />
              brisbane and gold coast
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
