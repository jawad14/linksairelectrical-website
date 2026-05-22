import { Clock, DollarSign, Shield, Check } from 'lucide-react';
import { Heading, P } from '@/components/ui/typography';

const items = [
  {
    icon: Clock,
    title: 'On-time, every time',
    desc: 'Two-hour booking windows and a call when we\u2019re 30 minutes out.',
  },
  {
    icon: DollarSign,
    title: 'Upfront pricing',
    desc: 'Fixed quotes before we start. The number we say is the number you pay.',
  },
  {
    icon: Shield,
    title: 'Licensed & insured',
    desc: 'Fully qualified electricians, ARC-licensed for refrigerant, $20M public liability.',
  },
  {
    icon: Check,
    title: 'Tidy work, every visit',
    desc: 'Drop sheets down, mess cleaned up, certificates emailed before we leave.',
  },
];

export function WhyUs() {
  return (
    <section className="py-[clamp(72px,9vw,120px)]">
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
        <div className="grid grid-cols-[1fr_1.1fr] items-center gap-20 max-[900px]:grid-cols-1 max-[900px]:gap-12">
          {/* Visual */}
          <div className="relative aspect-[5/6] overflow-hidden rounded-[22px] bg-gradient-to-br from-[#0E1B2C] to-[#1B2D45] shadow-[0_24px_60px_-20px_rgba(14,27,44,0.25)]">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.05)_0_2px,transparent_2px_22px)]" />
            <div className="absolute -right-5 bottom-12 rounded-[14px] bg-[#E73438] p-[24px_28px] text-white shadow-[0_8px_24px_-8px_rgba(14,27,44,0.18),0_2px_6px_rgba(14,27,44,0.06)] max-[900px]:right-3">
              <div className="font-heading text-[44px] leading-none font-extrabold">100%</div>
              <div className="mt-1.5 text-[13px] opacity-90">
                Workmanship
                <br />
                guarantee
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#E73438] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#E73438]">
              Why Links
            </span>
            <Heading
              level={2}
              className="font-heading text-[clamp(30px,3.8vw,48px)] leading-[1.08] font-bold tracking-[-0.02em] text-[#0E1B2C]"
            >
              Tradies you can actually plan your day around.
            </Heading>
            <P className="mt-[18px] max-w-[540px] text-[17px] text-[#4F6172]">
              We turn up on time, quote you up-front, and leave the site cleaner than we found it.
              No mystery callout fees, no scope creep — just careful, properly certified work.
            </P>

            <div className="mt-9 grid grid-cols-2 gap-[28px_24px] max-[520px]:grid-cols-1">
              {items.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-[10px] bg-[#E9F4FB] text-[#1779B8]">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <Heading
                      level={4}
                      className="font-heading mb-1 text-[16px] font-bold text-[#0E1B2C]"
                    >
                      {item.title}
                    </Heading>
                    <P className="text-[14px] text-[#4F6172]">{item.desc}</P>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
