'use client';

import Link from 'next/link';
import { Phone, ArrowRight, Award, ThumbsUp, Shield, Star, Wrench, Ban } from 'lucide-react';
import { Container, Section, Stack } from '@/components/ui/layout';
import { H2, H3, P, Small } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';
import { FadeUp, StaggerGroup, StaggerItem } from '@/components/ui/motion';

const stats = [
  { icon: Award, value: '7+', label: 'Years Experience' },
  { icon: ThumbsUp, value: '100%', label: 'Client Satisfaction' },
  { icon: Shield, value: 'Zero', label: 'Damage Installation' },
  { icon: Star, value: 'Top', label: 'Brand Partners' },
  { icon: Wrench, value: '24/7', label: 'AC Maintenance' },
  { icon: Ban, value: '$0', label: 'Hidden Charges' },
];

export function About() {
  return (
    <>
      {/* Stats counter bar — dark, impactful numbers */}
      <Section spacing="none" className="bg-primary text-primary-foreground py-10 sm:py-14">
        <Container size="xl">
          <StaggerGroup className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 lg:gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <StaggerItem key={stat.label}>
                  <Stack gap="xs" align="center" className="text-center">
                    <Icon className="text-accent size-6 sm:size-7" />
                    <H3 className="text-primary-foreground text-2xl font-bold sm:text-3xl">
                      {stat.value}
                    </H3>
                    <Small className="text-primary-foreground/60 text-xs tracking-wider uppercase">
                      {stat.label}
                    </Small>
                  </Stack>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </Container>
      </Section>

      {/* Welcome text — centered, clean */}
      <Section spacing="lg">
        <Container size="md">
          <FadeUp>
            <Stack gap="lg" align="center" className="text-center">
              <Small className="text-accent font-bold tracking-widest uppercase">
                Welcome to Links Air &amp; Electrical
              </Small>
              <H2 className="text-3xl sm:text-4xl">
                Heating &amp; Air Conditioning{' '}
                <span className="text-secondary">Repair &amp; Installation</span> Service Company
              </H2>
              <P className="text-muted-foreground max-w-2xl text-base leading-relaxed">
                Links Air &amp; Electrical is a leading name when it comes to 360 degree air
                conditioning solutions at an unbeatable price. Serving the industry since 2014, we
                provide comprehensive solutions to your air conditioning chores which include
                installation, repairs and maintenance so that you enjoy peace of mind every time you
                settle on bed to relax.
              </P>
              <Link
                href="/about"
                className="bg-secondary inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold text-white transition-all hover:scale-105 hover:brightness-110"
              >
                Read More <ArrowRight className="size-4" />
              </Link>
            </Stack>
          </FadeUp>
        </Container>
      </Section>

      {/* 24/7 CTA Strip — gradient */}
      <Section
        spacing="none"
        className="from-primary to-secondary text-primary-foreground bg-gradient-to-r py-8 sm:py-10"
      >
        <Container size="xl">
          <FadeUp>
            <div className="flex flex-col items-center gap-5 text-center lg:flex-row lg:justify-between lg:text-left">
              <H2 className="text-primary-foreground text-xl sm:text-2xl lg:max-w-2xl">
                We&apos;re On Call 24/7 to React Promptly to Your Service Needs
              </H2>
              <div className="flex shrink-0 flex-col items-center gap-3 sm:flex-row">
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="bg-destructive inline-flex shrink-0 items-center gap-2 rounded-lg px-7 py-3.5 text-base font-bold whitespace-nowrap text-white transition-all hover:scale-105 hover:brightness-110"
                >
                  <Phone className="size-5" />
                  {siteConfig.phone}
                </a>
                <Link
                  href="/contact"
                  className="bg-accent inline-flex shrink-0 items-center rounded-lg px-7 py-3.5 text-sm font-bold whitespace-nowrap text-white transition-all hover:scale-105 hover:brightness-110"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </FadeUp>
        </Container>
      </Section>
    </>
  );
}
