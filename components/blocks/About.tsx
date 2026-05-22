import { ShieldCheck, Clock, DollarSign, CheckCircle, MessageSquare } from 'lucide-react';
import { Heading, P } from '@/components/ui/typography';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Licensed & Insured',
    desc: 'Fully qualified electricians and ARC-licensed technicians with $20M public liability cover.',
  },
  {
    icon: Clock,
    title: 'On-Time, Every Time',
    desc: "We show up when we say we will — with a call when we're on our way.",
  },
  {
    icon: DollarSign,
    title: 'Clear, Upfront Quotes',
    desc: 'Fixed pricing before we start. The number we quote is the number you pay.',
  },
  {
    icon: CheckCircle,
    title: 'Australian Standard Compliance',
    desc: 'All work is completed to current AS/NZS standards with certificates provided.',
  },
  {
    icon: MessageSquare,
    title: 'Great Communication',
    desc: 'Real people in our office who understand the work and keep you updated throughout.',
  },
];

export function About() {
  return (
    <section id="about" className="py-[clamp(72px,9vw,120px)]">
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
        <div className="grid grid-cols-[1fr_1.1fr] items-center gap-16 max-[900px]:grid-cols-1 max-[900px]:gap-10">
          {/* Visual */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-gradient-to-br from-[#82BD3F] to-[#6BA432] shadow-[0_24px_60px_-20px_rgba(14,27,44,0.25)]">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,rgba(255,255,255,0.08)_0_2px,transparent_2px_20px)]" />
            <div className="absolute top-12 -left-[22px] max-w-[260px] rounded-[14px] bg-white p-[18px_22px] shadow-[0_8px_24px_-8px_rgba(14,27,44,0.18),0_2px_6px_rgba(14,27,44,0.06)] max-[900px]:left-3">
              <div className="text-[14px] leading-[1.4] font-medium text-[#0E1B2C]">
                &ldquo;If it&apos;s not work I&apos;d put in my own house, it doesn&apos;t leave the
                van.&rdquo;
              </div>
              <div className="mt-2 text-[12px] text-[#4F6172]">
                — Director, Links Air &amp; Electrical
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#E73438] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#E73438]">
              Why Choose Links Air?
            </span>
            <Heading
              level={2}
              className="font-heading text-[clamp(30px,3.8vw,48px)] leading-[1.08] font-bold tracking-[-0.02em] text-[#0E1B2C]"
            >
              Tradies you can actually count on.
            </Heading>
            <P className="mt-5 max-w-[540px] text-[17px] leading-[1.7] text-[#4F6172]">
              We built Links Air &amp; Electrical to be the opposite of every bad trade experience —
              punctual, honest, and obsessive about doing the work properly.
            </P>

            <div className="mt-8 flex flex-col gap-5">
              {reasons.map((item) => (
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
