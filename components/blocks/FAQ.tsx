'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Container, Section, Stack } from '@/components/ui/layout';
import { H2, Lead, P } from '@/components/ui/typography';

const faqs = [
  {
    question: 'Are you licensed and insured?',
    answer:
      'Yes, all our technicians are fully licensed and insured for both electrical and aircon work.',
  },
  {
    question: 'Can you supply air conditioning units too?',
    answer:
      'Yes — we can supply, install, and recommend trusted brands for both split and ducted systems.',
  },
  {
    question: 'What if I only need one small job done?',
    answer: "No problem — we're happy to help with jobs big or small.",
  },
  {
    question: 'Do you offer emergency electrical services?',
    answer: 'Yes — we offer emergency callouts across Brisbane and Gold Coast.',
  },
  {
    question: 'How much do you charge?',
    answer: 'We provide upfront quotes before we begin. No surprises.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section spacing="lg">
      <Container size="md">
        <Stack gap="xl" align="center">
          <Stack gap="sm" align="center" className="text-center">
            <H2>Frequently Asked Questions</H2>
            <Lead>Got questions? We&apos;ve got answers.</Lead>
          </Stack>

          <Stack gap="sm" className="w-full">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="border-border bg-card rounded-lg border">
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="text-foreground hover:text-accent flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold transition-colors"
                >
                  {faq.question}
                  <ChevronDown
                    className={`text-muted-foreground size-5 shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="border-border border-t px-5 py-4">
                    <P variant="muted">{faq.answer}</P>
                  </div>
                )}
              </div>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Section>
  );
}
