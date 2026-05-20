'use client';

import Link from 'next/link';
import { Phone, ArrowRight, Award, ThumbsUp, Shield, Star, Wrench, Ban } from 'lucide-react';
import { Container, Section, Stack } from '@/components/ui/layout';
import { H2, H3, P, Lead } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';
import { FadeUp, SlideLeft, SlideRight } from '@/components/ui/motion';

const stats = [
  { icon: Award, label: '7 years of Experience', color: 'bg-primary' },
  { icon: Star, label: 'Servicing Top Brands', color: 'bg-accent' },
  { icon: ThumbsUp, label: '100% Client Satisfaction', color: 'bg-accent' },
  { icon: Wrench, label: 'Periodic AC Maintenance', color: 'bg-primary' },
  { icon: Shield, label: 'Zero Damage Installation', color: 'bg-primary' },
  { icon: Ban, label: 'No Hidden Charges', color: 'bg-accent' },
];

export function About() {
  return (
    <>
      {/* About section — stats left, text right (matching original) */}
      <Section spacing="lg" className="bg-[#f5f8ed]">
        <Container size="xl">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left — staggered stat cards */}
            <SlideLeft>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className={`${stat.color} flex items-center gap-3 rounded-xl p-4 text-white sm:p-5 ${
                        i % 2 === 0 ? '' : 'mt-6'
                      }`}
                    >
                      <Icon className="size-8 shrink-0 opacity-80 sm:size-10" />
                      <H3 className="text-sm font-bold text-white sm:text-base">{stat.label}</H3>
                    </div>
                  );
                })}
              </div>
            </SlideLeft>

            {/* Right — welcome text */}
            <SlideRight>
              <Stack gap="md">
                <P variant="muted">Welcome to Links Air &amp; Electrical</P>
                <H2>
                  Heating &amp; Air Conditioning{' '}
                  <span className="text-secondary">Repair &amp; Installation Service Company</span>
                </H2>
                <P>
                  Links Air &amp; Electrical is a leading name when it comes to 360 degree air
                  conditioning solutions at an unbeatable price. Serving the industry since 2014, we
                  provide comprehensive solutions to your air conditioning chores which include
                  installation, repairs and maintenance so that you enjoy peace of mind every time
                  you settle on bed to relax.
                </P>
                <Link
                  href="/about"
                  className="bg-secondary inline-flex w-fit items-center gap-2 rounded-md px-5 py-2.5 text-sm font-bold tracking-wide text-white uppercase transition-all hover:scale-105 hover:brightness-110"
                >
                  Read More <ArrowRight className="size-4" />
                </Link>
              </Stack>
            </SlideRight>
          </div>
        </Container>
      </Section>

      {/* 24/7 CTA Strip */}
      <Section spacing="md" className="bg-primary text-primary-foreground">
        <Container size="xl">
          <FadeUp>
            <div className="flex flex-col items-center gap-5 text-center lg:flex-row lg:justify-between lg:text-left">
              <H2 className="text-primary-foreground lg:max-w-2xl">
                We&apos;re On Call 24/7 to React Promptly to Your Service Needs, Don&apos;t Hesitate
                to Call
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
