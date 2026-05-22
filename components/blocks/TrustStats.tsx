import { Award, ThumbsUp, Shield, DollarSign } from 'lucide-react';

const stats = [
  { icon: Award, label: '10+ Years Experience' },
  { icon: ThumbsUp, label: '100% Client Satisfaction' },
  { icon: Shield, label: 'Zero Damage Installation' },
  { icon: DollarSign, label: 'No Hidden Charges' },
];

export function TrustStats() {
  return (
    <div className="bg-[#0E1B2C] py-7 text-white/70">
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {stats.map((stat) => (
            <span
              key={stat.label}
              className="flex items-center gap-2.5 text-[14px] font-medium text-white/85"
            >
              <stat.icon className="h-[22px] w-[22px] shrink-0 text-[#82BD3F]" />
              {stat.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
