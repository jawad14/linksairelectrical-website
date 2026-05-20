'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Wind, Zap, HardHat } from 'lucide-react';
import { Container, Section, Grid, Stack } from '@/components/ui/layout';
import { H2, H3, P, Lead } from '@/components/ui/typography';
import { FadeUp, StaggerGroup, StaggerItem } from '@/components/ui/motion';

const services = [
  {
    title: 'Air Conditioning',
    description:
      'Split systems, ducted AC, VRV/VRF — installation, repairs, and maintenance for all major brands.',
    image: '/images/services/airconditioning.jpg',
    href: '/services/air-conditioning',
    icon: Wind,
  },
  {
    title: 'Electrical',
    description:
      'Lighting, switchboards, EV chargers, CCTV, data cabling, and emergency repairs by licensed electricians.',
    image: '/images/services/electrical.jpg',
    href: '/services/electrical',
    icon: Zap,
  },
  {
    title: 'Building & Construction',
    description:
      'Complete electrical and air conditioning fit-outs for new builds, renovations, and commercial projects.',
    image: '/images/services/construction.jpg',
    href: '/services/builder',
    icon: HardHat,
  },
];

export function Services() {
  return (
    <Section spacing="lg" className="bg-muted/40">
      <Container size="xl">
        <Stack gap="xl" align="center">
          <FadeUp>
            <Stack gap="sm" align="center" className="text-center">
              <H2>What We Can Offer You</H2>
              <Lead className="max-w-2xl">
                Comprehensive solutions for residential and commercial properties across Brisbane
                and Gold Coast.
              </Lead>
            </Stack>
          </FadeUp>

          <StaggerGroup className="w-full" slow>
            <Grid cols={3} gap="lg">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <StaggerItem key={service.title}>
                    <Link
                      href={service.href}
                      className="group relative block overflow-hidden rounded-xl"
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="from-primary/95 via-primary/70 to-primary/40 group-hover:from-primary/98 absolute inset-0 bg-gradient-to-t transition-colors" />
                      <div className="relative z-10 flex min-h-[320px] flex-col justify-end p-8">
                        <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-white/10 transition-transform duration-300 group-hover:scale-110">
                          <Icon className="text-accent size-6" />
                        </div>
                        <H3 className="mb-2 text-white">{service.title}</H3>
                        <P className="mb-4 text-sm text-white/70">{service.description}</P>
                        <span className="text-accent inline-flex items-center gap-1 text-sm font-semibold transition-transform group-hover:translate-x-1">
                          Learn More <ArrowRight className="size-4" />
                        </span>
                      </div>
                    </Link>
                  </StaggerItem>
                );
              })}
            </Grid>
          </StaggerGroup>
        </Stack>
      </Container>
    </Section>
  );
}
