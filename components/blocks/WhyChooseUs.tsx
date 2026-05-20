'use client';

import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { Container, Section, Stack } from '@/components/ui/layout';
import { H2, P, Lead } from '@/components/ui/typography';
import { FadeUp, SlideLeft, SlideRight } from '@/components/ui/motion';

const expectations = [
  'Fully licensed and insured technicians',
  'On-time and tidy service',
  'Clear quotes — no hidden fees',
  'Australian standard compliance',
  'Great communication from start to finish',
];

export function WhyChooseUs() {
  return (
    <Section spacing="lg">
      <Container size="xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <SlideLeft>
            <Stack gap="lg">
              <H2>Why Choose Links Air?</H2>
              <P>
                We believe in honest work, fair prices, and top-quality service. Our licensed
                electricians and aircon installers are dedicated to doing every job safely, cleanly,
                and with care.
              </P>
              <Stack gap="sm">
                <Lead>What You Can Expect:</Lead>
                {expectations.map((item) => (
                  <span key={item} className="text-foreground flex items-center gap-2 text-sm">
                    <CheckCircle className="text-accent size-5 shrink-0" />
                    {item}
                  </span>
                ))}
              </Stack>
              <P variant="muted">
                We treat your home like our own — leaving it clean and safe after every job.
              </P>
            </Stack>
          </SlideLeft>

          <SlideRight className="max-lg:hidden">
            <Image
              src="/images/why-choose-1.png"
              alt="Links Air & Electrical professional service"
              width={1050}
              height={581}
              className="rounded-xl shadow-lg"
            />
          </SlideRight>
        </div>
      </Container>
    </Section>
  );
}
