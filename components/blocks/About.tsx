import Image from 'next/image';
import { ShieldCheck, Clock, DollarSign, CheckCircle, MessageSquare } from 'lucide-react';
import { Heading, P } from '@/components/ui/typography';

const reasons = [
  { icon: ShieldCheck, label: 'Fully licensed and insured technicians' },
  { icon: Clock, label: 'On-time and tidy service' },
  { icon: DollarSign, label: 'Clear quotes \u2013 no hidden fees' },
  { icon: CheckCircle, label: 'Australian standard compliance' },
  { icon: MessageSquare, label: 'Great communication from start to finish' },
];

export function About() {
  return (
    <section id="about" className="bg-white py-[clamp(72px,9vw,120px)]">
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
        <div className="grid grid-cols-[1fr_1.1fr] items-center gap-[clamp(32px,6vw,80px)] max-[900px]:grid-cols-1">
          {/* Visual */}
          <div className="relative aspect-[4/5] max-[900px]:aspect-[4/3] max-[900px]:max-w-[560px]">
            <div className="absolute inset-0 overflow-hidden rounded-[22px] shadow-[0_24px_60px_-20px_rgba(14,27,44,0.25)]">
              <Image
                src="/images/about/why-choose-v2.webp"
                alt="Friendly Links Air tradesman on a phone call with a customer"
                fill
                className="object-cover"
                sizes="(max-width: 900px) 560px, 45vw"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#E73438] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#E73438]">
              Why Choose Links Air?
            </span>
            <Heading
              level={2}
              className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
            >
              You deserve a tradie who actually cares about your home.
            </Heading>

            <P className="font-heading mt-5 text-[17px] font-semibold text-[#0E1B2C]">
              Here&apos;s our promise to you:
            </P>

            <ul className="m-0 mt-4 flex list-none flex-col gap-3 p-0">
              {reasons.map((item) => (
                <li key={item.label} className="flex items-center gap-3">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#E9F4FB] text-[#1779B8]">
                    <item.icon className="h-[18px] w-[18px]" />
                  </div>
                  <P className="text-[15px] text-[#4F6172]">{item.label}</P>
                </li>
              ))}
            </ul>

            <P className="mt-6 text-[16px] leading-[1.7] text-[#4F6172]">
              Your home is your sanctuary. We leave it cleaner than we found it — every single time.
            </P>
          </div>
        </div>
      </div>
    </section>
  );
}
