import Image from 'next/image';
import { ShieldCheck, Clock, DollarSign, CheckCircle, MessageCircle, Award } from 'lucide-react';
import { Container, Section, Grid, Stack } from '@/components/ui/layout';
import { H2, H3, P, Lead } from '@/components/ui/typography';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Fully Licensed & Insured',
    description:
      'All our technicians are fully licensed and insured for both electrical and aircon work.',
  },
  {
    icon: Clock,
    title: 'On-Time & Tidy',
    description: 'Punctual arrivals, drop sheets down, mess cleaned up. We respect your property.',
  },
  {
    icon: DollarSign,
    title: 'Upfront Pricing',
    description: 'Fixed quotes before we begin. No surprises, no hidden fees.',
  },
  {
    icon: CheckCircle,
    title: 'Australian Compliance',
    description: 'Every job meets or exceeds Australian safety and quality standards.',
  },
  {
    icon: MessageCircle,
    title: 'Great Communication',
    description: 'From quote to completion, we keep you informed every step of the way.',
  },
  {
    icon: Award,
    title: '5-Year Warranty',
    description: 'We stand behind our work with comprehensive workmanship warranties.',
  },
];

export function WhyChooseUs() {
  return (
    <Section spacing="lg">
      <Container size="xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left — text + reasons grid */}
          <Stack gap="xl">
            <Stack gap="sm">
              <H2>Why Choose Us?</H2>
              <Lead>Your trusted local experts delivering outstanding quality workmanship.</Lead>
            </Stack>

            <Grid cols={2} gap="md">
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <Stack key={reason.title} gap="xs">
                    <div className="flex items-center gap-2">
                      <Icon className="text-accent size-5" />
                      <H3 className="text-base">{reason.title}</H3>
                    </div>
                    <P variant="muted" className="text-sm">
                      {reason.description}
                    </P>
                  </Stack>
                );
              })}
            </Grid>
          </Stack>

          {/* Right — image */}
          <div className="relative aspect-square overflow-hidden rounded-xl shadow-lg max-lg:hidden">
            <Image
              src="/images/hero/hero-4.png"
              alt="Professional electrical and AC work"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
