import { Shield, Award, Clock, Star } from 'lucide-react';
import { siteConfig } from '@/config/site.config';

const badges = [
  { icon: Shield, label: `Qld Licence #${siteConfig.license}` },
  { icon: Award, label: `ARC Licence #${siteConfig.arc}` },
  { icon: Clock, label: '10+ Years in Business' },
  { icon: Star, label: '200+ 5-Star Reviews' },
];

export function TrustBadges() {
  return (
    <section className="border-b border-[#E3E9F0] bg-white py-5">
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 max-[640px]:justify-start max-[640px]:gap-x-6">
          {badges.map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-2 text-[13px] font-medium text-[#4F6172]"
            >
              <b.icon className="h-4 w-4 shrink-0 text-[#1779B8]" />
              {b.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
