import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '@/config/site.config';

export function UtilityBar() {
  return (
    <div className="bg-[#0E1B2C] text-[13px] text-white/[0.78]">
      <div className="mx-auto flex h-[44px] max-w-[1240px] items-center justify-between px-[clamp(20px,4vw,56px)] max-sm:h-auto max-sm:flex-col max-sm:items-start max-sm:gap-1.5 max-sm:py-2">
        {/* Left: email + phones */}
        <div className="flex items-center gap-6">
          <Link
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-white max-[960px]:hidden"
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
            className="inline-flex items-center gap-2 transition-colors hover:text-white max-[760px]:hidden"
          >
            <Phone className="h-3.5 w-3.5 opacity-70" />
            {siteConfig.mobile}
          </Link>
        </div>

        {/* Right: location */}
        <span className="inline-flex items-center gap-2 max-sm:hidden">
          <MapPin className="h-3.5 w-3.5 opacity-70" />
          brisbane and gold coast
        </span>
      </div>
    </div>
  );
}
