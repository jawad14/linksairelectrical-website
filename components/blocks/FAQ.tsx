'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Heading, P } from '@/components/ui/typography';

const faqs = [
  {
    q: 'Are you licensed and insured?',
    a: 'Yes, all our technicians are fully licensed and insured for both electrical and aircon work.',
  },
  {
    q: 'Can you supply air conditioning units too?',
    a: 'Yes — we can supply, install, and recommend trusted brands for both split and ducted systems.',
  },
  {
    q: 'What if I only need one small job done?',
    a: "No problem — we're happy to help with jobs big or small.",
  },
  {
    q: 'Do you offer emergency electrical services?',
    a: 'Yes — we offer emergency callouts across Brisbane and Gold Coast.',
  },
  {
    q: 'How much do you charge?',
    a: 'We provide upfront quotes before we begin. No surprises.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-[clamp(72px,9vw,120px)]">
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
        <div className="mx-auto mb-14 max-w-[760px] text-center">
          <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
            Common questions
          </span>
          <Heading
            level={2}
            className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
          >
            FAQs — Electrical and Air Conditioning
          </Heading>
        </div>

        <div className="mx-auto max-w-[800px]">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.q} className="border-b border-[#E3E9F0] last:border-b-0">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <Heading
                    level={4}
                    className={`font-heading text-[16px] font-semibold transition-colors ${isOpen ? 'text-[#1779B8]' : 'text-[#0E1B2C]'}`}
                  >
                    {faq.q}
                  </Heading>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[#6E7E8E] transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#1779B8]' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="pb-5">
                    <P className="text-[15px] leading-[1.7] text-[#4F6172]">{faq.a}</P>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
