'use client';

import Image from 'next/image';
import {
  Lightbulb,
  Zap,
  Lamp,
  Wind,
  Wrench,
  UtensilsCrossed,
  Fan,
  AlertTriangle,
} from 'lucide-react';
import { Container, Section, Grid, Stack } from '@/components/ui/layout';
import { H2, H3, P, Lead } from '@/components/ui/typography';
import { FadeUp, SlideLeft, SlideRight, StaggerGroup, StaggerItem } from '@/components/ui/motion';

const whatWeDo = [
  { icon: Lightbulb, title: 'General electrical work', desc: 'Lights, fans, power points' },
  { icon: Zap, title: 'Switchboard upgrades', desc: 'Switchboard upgrades & safety checks' },
  { icon: Lamp, title: 'Lighting installations', desc: 'Indoor & outdoor lighting installations' },
  {
    icon: Wind,
    title: 'Split system & ducted AC',
    desc: 'Split system & ducted air conditioning installs',
  },
  { icon: Wrench, title: 'AC servicing', desc: 'Air conditioning servicing & maintenance' },
  {
    icon: UtensilsCrossed,
    title: 'Appliance installation',
    desc: 'Oven, cooktop & appliance installation',
  },
  { icon: Fan, title: 'Ceiling fans', desc: 'Ceiling fan installations' },
  { icon: AlertTriangle, title: 'Emergency repairs', desc: 'Emergency electrical repairs' },
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

          {/* One Team section */}
          <Stack gap="lg">
            <FadeUp>
              <Stack gap="sm">
                <H2>One Team for All Your Electrical and Air Conditioning Needs</H2>
                <Lead>
                  Links Air Electrical is not just electricians, we are a full-service provider in
                  both electrical and air conditioning. That signifies fewer trades to manage and
                  excellent results on the table.
                </Lead>
              </Stack>
            </FadeUp>

            <StaggerGroup className="w-full" slow>
              <Grid cols={4} gap="md">
                {whatWeDo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <StaggerItem key={item.title}>
                      <Stack
                        gap="sm"
                        className="border-border bg-card rounded-xl border p-5 text-center shadow-sm"
                      >
                        <div className="bg-accent/10 mx-auto flex size-12 items-center justify-center rounded-lg">
                          <Icon className="text-accent size-6" />
                        </div>
                        <H3 className="text-sm">{item.title}</H3>
                        <P variant="muted" className="text-xs">
                          {item.desc}
                        </P>
                      </Stack>
                    </StaggerItem>
                  );
                })}
              </Grid>
            </StaggerGroup>

            <FadeUp>
              <P variant="muted">
                Whether you&apos;re building, renovating, or just need a quick fix — we&apos;ve got
                you covered.
              </P>
            </FadeUp>
          </Stack>
        </Stack>
      </Container>
    </Section>
  );
}
