'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Container, Section, Grid, Stack } from '@/components/ui/layout';
import { H2, H3, P, Lead, Small } from '@/components/ui/typography';
import { FadeUp, SlideLeft, SlideRight, StaggerGroup, StaggerItem } from '@/components/ui/motion';

const whatWeDo = [
  {
    title: 'General electrical work',
    desc: 'Lights, fans, power points',
    image: '/images/services/cards/general-electrical.webp',
    href: '/services/electrical/maintenance',
  },
  {
    title: 'Switchboard upgrades',
    desc: 'Switchboard upgrades & safety checks',
    image: '/images/services/cards/switchboard.webp',
    href: '/services/electrical/residential',
  },
  {
    title: 'Lighting installations',
    desc: 'Indoor & outdoor lighting installations',
    image: '/images/services/cards/lighting.webp',
    href: '/services/electrical/maintenance',
  },
  {
    title: 'Split system & ducted AC',
    desc: 'Split system & ducted air conditioning installs',
    image: '/images/services/cards/split-ducted.webp',
    href: '/services/air-conditioning/split-system',
  },
  {
    title: 'AC servicing',
    desc: 'Air conditioning servicing & maintenance',
    image: '/images/services/cards/ac-servicing.webp',
    href: '/services/air-conditioning/service-maintenance',
  },
  {
    title: 'Appliance installation',
    desc: 'Oven, cooktop & appliance installation',
    image: '/images/services/cards/appliances.webp',
    href: '/services/electrical/maintenance',
  },
  {
    title: 'Ceiling fan installations',
    desc: 'Ceiling fan installations',
    image: '/images/services/cards/ceiling-fan.webp',
    href: '/services/electrical/residential',
  },
  {
    title: 'Emergency electrical repairs',
    desc: 'Emergency electrical repairs',
    image: '/images/services/cards/emergency.webp',
    href: '/services/electrical',
  },
];

/* ── Section 1: Trusted Local Experts ── */

export function TrustedExperts() {
  return (
    <Section spacing="lg">
      <Container size="xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <SlideLeft>
            <Stack gap="lg">
              <Small className="text-accent font-bold tracking-widest uppercase">
                About Our Team
              </Small>
              <H2 className="text-3xl sm:text-4xl">
                Your Trusted Local Experts in Electrical and Air Conditioning
              </H2>
              <P>
                Links Air Electrical is your trustworthy team for everything electrical and air
                conditioning. Whether you need light installation, power point upgrade, or an air
                conditioner fitting, we have all the right skills and experience to do the job
                flawlessly.
              </P>
              <P variant="muted">
                We provide services in Brisbane and neighbouring areas and offer fast &amp;
                affordable solutions for homes and businesses.
              </P>
              <Link
                href="/about"
                className="bg-accent inline-flex w-fit items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold text-white transition-all hover:scale-105 hover:brightness-110"
              >
                Learn More About Us <ArrowRight className="size-4" />
              </Link>
            </Stack>
          </SlideLeft>

          <SlideRight className="max-lg:hidden">
            <Image
              src="/images/about.png"
              alt="Links Air & Electrical team"
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

/* ── Section 2: One Team + What We Do cards ── */

export function OneTeam() {
  return (
    <Section spacing="lg" className="bg-primary text-primary-foreground">
      <Container size="xl">
        <Stack gap="xl" align="center">
          {/* Heading */}
          <FadeUp>
            <Stack gap="sm" align="center" className="max-w-2xl text-center">
              <Small className="text-accent font-bold tracking-widest uppercase">
                Full-Service Provider
              </Small>
              <H2 className="text-primary-foreground text-2xl sm:text-3xl">
                One Team for All Your Electrical and Air Conditioning Needs
              </H2>
              <Lead className="text-primary-foreground/70">
                Links Air Electrical is not just electricians, we are a full-service provider in
                both electrical and air conditioning. Fewer trades to manage and excellent results.
              </Lead>
            </Stack>
          </FadeUp>

          {/* Image cards */}
          <StaggerGroup className="w-full" slow>
            <Grid cols={4} gap="md">
              {whatWeDo.map((item) => (
                <StaggerItem key={item.title}>
                  <Link
                    href={item.href}
                    className="group block overflow-hidden rounded-xl bg-white/5 transition-all hover:bg-white/10"
                  >
                    <div className="relative aspect-[3/2] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <Stack gap="xs" className="p-4">
                      <H3 className="group-hover:text-accent text-sm text-white transition-colors">
                        {item.title}
                      </H3>
                      <P className="text-xs text-white/50">{item.desc}</P>
                    </Stack>
                  </Link>
                </StaggerItem>
              ))}
            </Grid>
          </StaggerGroup>

          <FadeUp>
            <P className="text-primary-foreground/50 text-sm">
              Whether you&apos;re building, renovating, or just need a quick fix — we&apos;ve got
              you covered.
            </P>
          </FadeUp>
        </Stack>
      </Container>
    </Section>
  );
}
