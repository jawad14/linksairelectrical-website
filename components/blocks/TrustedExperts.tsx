'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Container, Section, Grid, Stack } from '@/components/ui/layout';
import { H2, H3, P, Lead } from '@/components/ui/typography';
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

export function TrustedExperts() {
  return (
    <Section spacing="lg">
      <Container size="xl">
        <Stack gap="2xl">
          {/* Intro */}
          <FadeUp>
            <Stack gap="md" className="max-w-3xl">
              <H2>Your Trusted Local Experts in Electrical and Air Conditioning</H2>
              <P>
                Links Air Electrical is your trustworthy team for everything electrical and air
                conditioning. Whether you need light installation, power point upgrade, or an air
                conditioner fitting, we have all the right skills and experience to do the job
                flawlessly.
              </P>
              <P>
                We provide services in Brisbane and neighbouring areas and offer fast &amp;
                affordable solutions for homes and businesses.
              </P>
            </Stack>
          </FadeUp>

          {/* One Team — text left, image right */}
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <SlideLeft>
              <Stack gap="md">
                <H2>One Team for All Your Electrical and Air Conditioning Needs</H2>
                <Lead>
                  Links Air Electrical is not just electricians, we are a full-service provider in
                  both electrical and air conditioning. That signifies fewer trades to manage and
                  excellent results on the table.
                </Lead>
              </Stack>
            </SlideLeft>

            <SlideRight className="max-lg:hidden">
              <Image
                src="/images/about.png"
                alt="Electrical and Air Conditioning Team"
                width={1050}
                height={581}
                className="rounded-xl shadow-lg"
              />
            </SlideRight>
          </div>

          {/* What We Do — image cards linking to pages */}
          <FadeUp>
            <H2 className="mb-2">What We Do:</H2>
          </FadeUp>

          <StaggerGroup className="w-full" slow>
            <Grid cols={4} gap="md">
              {whatWeDo.map((item) => (
                <StaggerItem key={item.title}>
                  <Link
                    href={item.href}
                    className="group border-border bg-card block overflow-hidden rounded-xl border shadow-sm transition-shadow hover:shadow-md"
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
                      <H3 className="group-hover:text-secondary text-sm transition-colors">
                        {item.title}
                      </H3>
                      <P variant="muted" className="text-xs">
                        {item.desc}
                      </P>
                      <span className="text-accent inline-flex items-center gap-1 text-xs font-semibold transition-transform group-hover:translate-x-1">
                        Learn More <ArrowRight className="size-3" />
                      </span>
                    </Stack>
                  </Link>
                </StaggerItem>
              ))}
            </Grid>
          </StaggerGroup>

          <FadeUp>
            <P variant="muted">
              Whether you&apos;re building, renovating, or just need a quick fix — we&apos;ve got
              you covered.
            </P>
          </FadeUp>
        </Stack>
      </Container>
    </Section>
  );
}
