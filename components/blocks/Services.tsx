import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Container, Section, Grid, Stack } from '@/components/ui/layout';
import { H2, H3, P, Lead } from '@/components/ui/typography';

const services = [
  {
    title: 'Air Conditioning Services',
    description:
      'From split systems to ducted AC, we handle installation, repairs, and maintenance for all major brands across Brisbane and Gold Coast.',
    image: '/images/services/airconditioning.jpg',
    href: '/services/air-conditioning',
  },
  {
    title: 'Electrical Services',
    description:
      'Professional electrical services including lighting, switchboard upgrades, EV chargers, CCTV installation, and emergency repairs.',
    image: '/images/services/electrical.jpg',
    href: '/services/electrical',
  },
  {
    title: 'Building & Construction',
    description:
      'Complete electrical and air conditioning solutions for new builds, renovations, and full house fit-outs.',
    image: '/images/services/construction.jpg',
    href: '/services/building-construction',
  },
];

export function Services() {
  return (
    <Section spacing="lg">
      <Container size="xl">
        <Stack gap="xl" align="center">
          <Stack gap="sm" align="center" className="text-center">
            <H2>What We Can Offer You</H2>
            <Lead className="max-w-2xl">
              Comprehensive air conditioning, electrical, and construction services delivered by
              licensed professionals.
            </Lead>
          </Stack>

          <Grid cols={3} gap="lg">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group border-border bg-card overflow-hidden rounded-xl border shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <Stack gap="sm" className="p-6">
                  <H3 className="group-hover:text-accent transition-colors">{service.title}</H3>
                  <P variant="muted">{service.description}</P>
                  <span className="text-accent inline-flex items-center gap-1 text-sm font-semibold">
                    Read More <ArrowRight className="size-4" />
                  </span>
                </Stack>
              </Link>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Section>
  );
}
