import { Award, ThumbsUp, Shield, Wrench, Clock, DollarSign } from 'lucide-react';
import { P } from '@/components/ui/typography';

const stats = [
  { icon: Award, label: '10+ Years Experience' },
  { icon: ThumbsUp, label: '100% Client Satisfaction' },
  { icon: Shield, label: 'Zero Damage Installation' },
  { icon: Wrench, label: 'Servicing Top Brands' },
  { icon: Clock, label: 'Periodic AC Maintenance' },
  { icon: DollarSign, label: 'No Hidden Charges' },
];

export function TrustStats() {
  return (
    <section className="border-y border-[#E3E9F0] bg-white py-12">
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
        <div className="grid grid-cols-6 gap-6 max-[900px]:grid-cols-3 max-[520px]:grid-cols-2">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-3 text-center">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#E9F4FB] text-[#1779B8]">
                <stat.icon className="h-7 w-7" />
              </div>
              <P className="text-[13px] leading-[1.3] font-semibold text-[#2A3A4E]">{stat.label}</P>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
