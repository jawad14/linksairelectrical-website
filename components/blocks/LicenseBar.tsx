import { Shield, CheckCircle, LayoutGrid, Lock } from 'lucide-react';

const badges = [
  { icon: Shield, label: 'Licensed Electrical Contractor' },
  { icon: CheckCircle, label: 'ARC Refrigerant Handling' },
  { icon: LayoutGrid, label: '$20M Public Liability' },
  { icon: Lock, label: 'Master Electricians member' },
];

export function LicenseBar() {
  return (
    <div className="bg-[#0E1B2C] py-7 text-white/70">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-8 px-[clamp(20px,4vw,56px)]">
        <span className="text-[12px] font-semibold tracking-[0.16em] text-white/50 uppercase">
          Trusted &amp; accredited
        </span>
        <div className="flex flex-wrap items-center gap-9">
          {badges.map((badge) => (
            <span
              key={badge.label}
              className="flex items-center gap-2.5 text-[14px] font-medium text-white/85"
            >
              <badge.icon className="h-[22px] w-[22px] shrink-0 text-[#82BD3F]" />
              {badge.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
