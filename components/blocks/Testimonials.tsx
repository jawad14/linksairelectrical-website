'use client';

import { Star } from 'lucide-react';
import { Container, Section, Stack } from '@/components/ui/layout';
import { H2, H3, P } from '@/components/ui/typography';
import { FadeUp, StaggerGroup, StaggerItem } from '@/components/ui/motion';

const reviews = [
  {
    name: 'Margaret McFarlane',
    text: 'Excellent service. Would highly recommend for any aircon or electrical work. A pleasure to deal with.',
  },
  {
    name: 'Sharon Parker',
    text: "I can't recommend this business highly enough. After shopping around I contacted Links Electrical and Air that quoted instantly over the phone for a new Daikin Cora and it was installed next day. Sensational customer care with a couple of lovely installation technicians.",
  },
  {
    name: 'John Gould',
    text: 'Work was done for installation of air con unit. Work was done so professional and polite. Contacted links and next day was installed. Wife and I are extremely happy. Recommend this company to anyone and price was so affordable.',
  },
  {
    name: 'Safari Hair',
    text: 'Links Air & Electrical did an amazing job on a short notice of an Aircon install. Despite the challenging nature of the job. I am very satisfied with the outcome.',
  },
  {
    name: 'Sancha Ochsner',
    text: 'Polite and thorough. Economically priced, on time, and work completed well. Will definitely use again, Thank you.',
  },
  {
    name: 'Vinc Menn',
    text: 'Very professional team a wonderful job was done thanks.',
  },
];

export function Testimonials() {
  return (
    <Section spacing="lg">
      <Container size="xl">
        <Stack gap="xl" align="center">
          <FadeUp>
            <Stack gap="sm" align="center" className="text-center">
              <H2>Testimonials</H2>
              <P variant="muted">Trusted by Over 200 Reviewers on Google</P>
            </Stack>
          </FadeUp>

          <StaggerGroup className="w-full" slow>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review) => (
                <StaggerItem key={review.name}>
                  <Stack gap="sm" className="border-border bg-card rounded-xl border p-6 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary text-primary-foreground flex size-10 items-center justify-center rounded-full text-sm font-bold">
                        {review.name.charAt(0)}
                      </div>
                      <Stack gap="xs">
                        <H3 className="text-sm">{review.name}</H3>
                        <div className="flex items-center gap-0.5">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} className="size-3 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </Stack>
                    </div>
                    <P variant="muted" className="text-sm leading-relaxed">
                      {review.text}
                    </P>
                  </Stack>
                </StaggerItem>
              ))}
            </div>
          </StaggerGroup>

          <FadeUp>
            <a
              href="https://www.google.com/maps/place/Links+Air+%26+Electrical"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold text-white transition-all hover:scale-105 hover:brightness-110"
            >
              View More Reviews
            </a>
          </FadeUp>
        </Stack>
      </Container>
    </Section>
  );
}
