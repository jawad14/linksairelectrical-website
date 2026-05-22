import { Zap, Users, DollarSign, Wrench, Star } from 'lucide-react';
import { Heading, P } from '@/components/ui/typography';

const badges = [
  { icon: Zap, label: 'Fast response times' },
  { icon: Users, label: 'Friendly, respectful team' },
  { icon: DollarSign, label: 'Transparent pricing' },
  { icon: Wrench, label: 'Quality parts and trusted brands' },
  { icon: Star, label: 'Great customer reviews' },
];

export function WhatMakesUsDifferent() {
  return (
    <section className="bg-white py-[clamp(72px,9vw,120px)]">
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
        <div className="mx-auto mb-14 max-w-[760px] text-center">
          <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
            Our difference
          </span>
          <Heading
            level={2}
            className="font-heading mb-[18px] text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
          >
            What Makes Us Different?
          </Heading>
          <P className="text-[16px] leading-[1.7] text-[#4F6172]">
            We focus on doing the job right the first time — no shortcuts, no mess, no stress. That
            approach has made us one of Brisbane and Gold Coast&apos;s most trusted names in
            electrical and air conditioning services.
          </P>
        </div>

        <div className="grid grid-cols-5 gap-5 max-[900px]:grid-cols-3 max-[520px]:grid-cols-2">
          {badges.map((b) => (
            <div
              key={b.label}
              className="flex flex-col items-center gap-4 rounded-[14px] border border-[#E3E9F0] bg-[#F8FAFC] p-6 text-center"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#E9F4FB] text-[#1779B8]">
                <b.icon className="h-7 w-7" />
              </div>
              <P className="text-[14px] leading-[1.3] font-semibold text-[#0E1B2C]">{b.label}</P>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
