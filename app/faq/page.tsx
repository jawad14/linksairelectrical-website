'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { UtilityBar } from '@/components/blocks/UtilityBar';
import { Header } from '@/components/blocks/Header';
import { Footer } from '@/components/blocks/Footer';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { Heading, P } from '@/components/ui/typography';

const faqs = [
  {
    question: 'Are you licensed and insured?',
    answer:
      'Absolutely. We hold a full Queensland electrical licence and an ARCTICK refrigerant handling licence. We also carry comprehensive public liability and professional indemnity insurance, so you can rest easy knowing every job is fully covered.',
  },
  {
    question: 'Can you supply air conditioning units?',
    answer:
      "Yes — we supply, install and commission units from Australia's most trusted brands including Daikin, Mitsubishi Electric, Fujitsu, Panasonic and ActronAir. We'll recommend the best option for your space and budget, and handle everything from delivery to final testing.",
  },
  {
    question: 'What if I only need one small job?',
    answer:
      "No job is too small for us. Whether it's swapping a power point, adding a single split system or replacing a sensor, we're happy to help. We treat every job — big or small — with the same level of care and professionalism.",
  },
  {
    question: 'Do you offer emergency services?',
    answer:
      "Yes, we provide emergency callout services across Brisbane and the Gold Coast. If your air conditioning breaks down on a scorching day or you have an electrical fault that can't wait, give us a call and we'll get to you as quickly as possible.",
  },
  {
    question: 'How much do you charge?',
    answer:
      "We provide upfront, transparent quotes before any work begins — no surprises and no hidden fees. The price we quote is the price you pay. For larger projects we're happy to do a free site inspection so the quote is as accurate as possible.",
  },
  {
    question: 'How long does an air conditioning installation take?',
    answer:
      'Most single split system installations are completed in two to four hours. Ducted systems and larger multi-zone setups typically take one to two days depending on the complexity of the property and the amount of ductwork involved.',
  },
  {
    question: 'Do you service all brands?',
    answer:
      'Yes, our technicians are trained and equipped to service, repair and maintain all major air conditioning brands — including Daikin, Mitsubishi, Fujitsu, Panasonic, Samsung, LG, ActronAir and more. If it cools or heats, we can look after it.',
  },
];

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-[#E3E9F0]">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
      >
        <Heading level={3} className="font-heading text-[17px] font-semibold text-[#0E1B2C]">
          {question}
        </Heading>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[#4F6172] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-200 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <P className="pb-5 text-[15px] leading-[1.7] text-[#4F6172]">{answer}</P>
        </div>
      </div>
    </div>
  );
}

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        <ServiceHero
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          image="/images/about/banner.webp"
          imageAlt="Links Air and Electrical team ready to answer your questions"
        />

        {/* ── FAQ Accordion ── */}
        <section className="bg-white py-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
            <div className="mx-auto max-w-[760px]">
              <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
                Got questions?
              </span>
              <Heading
                level={2}
                className="font-heading mb-10 text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
              >
                We&apos;ve Got Answers
              </Heading>

              <div className="border-t border-[#E3E9F0]">
                {faqs.map((faq, i) => (
                  <AccordionItem
                    key={faq.question}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === i}
                    onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <ServiceCTA
          title="Still have questions? We're happy to chat."
          description="Give us a call or send through your question online — our friendly team will get back to you promptly."
        />
      </main>
      <Footer />

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }}
      />
    </>
  );
}
