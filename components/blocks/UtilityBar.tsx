import { Phone, Mail, Clock } from 'lucide-react';
import { siteConfig } from '@/config/site.config';

export function UtilityBar() {
  return (
    <div className="bg-[#0E1B2C] text-[13px] text-white/[0.78]">
      <div className="mx-auto flex h-[42px] max-w-[1240px] items-center justify-between gap-6 px-[clamp(20px,4vw,56px)] py-0 max-sm:h-auto max-sm:flex-col max-sm:items-start max-sm:gap-1.5 max-sm:py-2">
        <div className="flex flex-wrap items-center gap-6">
          <span className="inline-flex items-center gap-2">
            <Phone className="h-3.5 w-3.5 opacity-70" />
            {siteConfig.phone}
          </span>
          <span className="inline-flex items-center gap-2 max-[960px]:hidden">
            <Mail className="h-3.5 w-3.5 opacity-70" />
            {siteConfig.email}
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 opacity-70" />
            {siteConfig.hours}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#82BD3F] px-2.5 py-1 text-[11px] font-semibold tracking-[0.04em] text-[#0E1B2C]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0E1B2C]" />
            24/7 Emergency
          </span>
        </div>
      </div>
    </div>
  );
}
