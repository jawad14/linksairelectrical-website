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
    title: 'On-Time & Tidy Service',
    description:
      'We respect your time and property. Punctual arrivals and clean work sites, every time.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'We provide upfront quotes before we begin. No surprises, no hidden fees.',
  },
  {
    icon: CheckCircle,
    title: 'Australian Standard Compliance',
    description: 'Every job we complete meets or exceeds Australian safety and quality standards.',
  },
  {
    icon: MessageCircle,
    title: 'Great Communication',
    description:
      'From initial quote to project completion, we keep you informed every step of the way.',
  },
  {
    icon: Award,
    title: 'Warranties & Guarantees',
    description: 'We stand behind our work with comprehensive warranties on parts and labour.',
  },
];

export function WhyChooseUs() {
  return (
    <Section spacing="lg" className="bg-muted/50">
      <Container size="xl">
        <Stack gap="xl" align="center">
          <Stack gap="sm" align="center" className="text-center">
            <H2>Why Choose Links Air &amp; Electrical?</H2>
            <Lead className="max-w-2xl">
              Your trusted local experts delivering outstanding quality workmanship across Brisbane
              and Gold Coast.
            </Lead>
          </Stack>

          <Grid cols={3} gap="lg">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <Stack key={reason.title} gap="md" className="bg-card rounded-xl p-6 shadow-sm">
                  <div className="bg-accent/10 flex size-12 items-center justify-center rounded-lg">
                    <Icon className="text-accent size-6" />
                  </div>
                  <H3>{reason.title}</H3>
                  <P variant="muted">{reason.description}</P>
                </Stack>
              );
            })}
          </Grid>
        </Stack>
      </Container>
    </Section>
  );
}
