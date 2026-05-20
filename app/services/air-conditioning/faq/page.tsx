'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Header } from '@/components/blocks/Header';
import { Footer } from '@/components/blocks/Footer';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceCTA } from '@/components/blocks/ServiceCTA';
import { RelatedServices } from '@/components/blocks/RelatedServices';
import { Section, Container, Stack } from '@/components/ui/layout';
import { H2, P, Lead } from '@/components/ui/typography';

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Air Conditioning', href: '/services/air-conditioning' },
  { label: 'FAQ', href: '/services/air-conditioning/faq' },
];

const faqItems = [
  {
    question: 'How much does it cost to install a split system air conditioner?',
    answer:
      'A standard back-to-back split system installation typically ranges from $600 to $900 for labour, depending on the complexity of the run. Side-entry and up-and-over installations cost more due to additional pipework and time. We always provide a fixed-price quote before starting any work.',
  },
  {
    question: 'What brand of air conditioner do you recommend?',
    answer:
      'We work with all major brands including Daikin, Mitsubishi Electric, Fujitsu, Samsung, LG, and Panasonic. The best brand for you depends on your budget, room size, and whether you need heating as well as cooling. We can recommend a system based on your specific needs during a free consultation.',
  },
  {
    question: 'How long does an AC installation take?',
    answer:
      'A straightforward split system installation usually takes between 3 and 5 hours. Ducted system installations are larger projects and typically take 1 to 3 days depending on the size of the home and complexity of the ductwork. We will give you a clear timeline before we start.',
  },
  {
    question: 'How often should I service my air conditioner?',
    answer:
      'We recommend a professional service at least once a year, ideally before summer. If your system runs year-round or you live near the coast, twice-yearly servicing is advisable. Between services, check and rinse your filters monthly to maintain good airflow and air quality.',
  },
  {
    question: 'Why is my air conditioner leaking water?',
    answer:
      'Water leaks are usually caused by a blocked condensate drain line, a dirty evaporator coil, or low refrigerant causing the coil to freeze and then thaw. Turn off the unit and call us — we can diagnose and fix the issue quickly before it causes water damage to your ceiling or walls.',
  },
  {
    question: 'Can you install air conditioning in a rental property?',
    answer:
      'Yes, we install AC in rental properties regularly. You will need written approval from your landlord or property manager before we can proceed. We can also liaise directly with your property manager if that is easier.',
  },
  {
    question: 'What size air conditioner do I need?',
    answer:
      'The right size depends on room dimensions, insulation, window size and orientation, ceiling height, and local climate. As a rough guide, you need about 120–150 watts of cooling capacity per square metre. We perform a proper load calculation during our free quote to recommend the correct size — an undersized unit will not cool effectively, while an oversized unit wastes energy and can cause humidity problems.',
  },
  {
    question: 'Do you offer warranties on your installation work?',
    answer:
      'Yes. All our installations come with a workmanship warranty in addition to the manufacturer warranty on the unit itself (typically 5 to 7 years for domestic systems). We also register your warranty with the manufacturer on your behalf so you are covered from day one.',
  },
  {
    question: 'What is the difference between a split system and ducted air conditioning?',
    answer:
      'A split system cools one room or zone using a wall-mounted indoor unit and an outdoor compressor. A ducted system uses concealed ductwork in your ceiling to distribute air to multiple rooms from a single unit, with zone control to heat or cool only the rooms you are using. Split systems are more affordable for individual rooms, while ducted systems offer whole-home comfort.',
  },
  {
    question: 'Is it worth repairing my old air conditioner or should I replace it?',
    answer:
      'If your system is over 10 years old and the repair cost exceeds 50% of a new unit, replacement is usually the better investment. Newer systems are significantly more energy-efficient, which means lower running costs. We will always give you an honest assessment and let you decide — we never push unnecessary replacements.',
  },
];

const relatedServices = [
  {
    title: 'Repair & Installation',
    description: 'Expert AC repair and new system installation for all major brands.',
    href: '/services/air-conditioning/repair-installation',
  },
  {
    title: 'Service & Maintenance',
    description: 'Regular servicing to keep your system running efficiently.',
    href: '/services/air-conditioning/service-maintenance',
  },
  {
    title: 'Design & Construction',
    description: 'HVAC design for new builds and renovations.',
    href: '/services/air-conditioning/design-construction',
  },
];

export default function ACFaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <Header />
      <main>
        <ServiceHero
          title="Air Conditioning FAQ"
          description="Answers to the most common questions we get asked about air conditioning installation, repairs, maintenance, and running costs."
          breadcrumbs={breadcrumbs}
        />

        {/* FAQ Accordion */}
        <Section spacing="lg">
          <Container size="md">
            <Stack gap="xl" align="center">
              <Stack gap="sm" align="center" className="text-center">
                <H2>Frequently Asked Questions</H2>
                <Lead>
                  Cannot find the answer you are looking for? Give us a call on 0468 432 538 and we
                  will be happy to help.
                </Lead>
              </Stack>

              <Stack gap="sm" className="w-full">
                {faqItems.map((faq, index) => (
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

        <ServiceCTA
          title="Still Have Questions?"
          description="Our team is happy to answer any questions about your air conditioning needs. Call us or request a free quote."
        />

        <RelatedServices services={relatedServices} />
      </main>
      <Footer />
    </>
  );
}
