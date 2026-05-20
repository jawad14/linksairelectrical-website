'use client';

import { Users, Home, HardHat, Building2, Landmark, MapPin } from 'lucide-react';
import { Container, Section, Grid, Stack } from '@/components/ui/layout';
import { H2, H3, P, Lead } from '@/components/ui/typography';
import { FadeUp, StaggerGroup, StaggerItem } from '@/components/ui/motion';
import { siteConfig } from '@/config/site.config';

const customers = [
  { icon: Home, label: 'Homeowners' },
  { icon: Users, label: 'Landlords and property managers' },
  { icon: HardHat, label: 'Builders and renovators' },
  { icon: Building2, label: 'Office and retail businesses' },
  { icon: Landmark, label: 'Body corporates and developers' },
];

const areas = [
  'Brisbane (North, South, East & West)',
  'Gold Coast',
  'Logan & Ipswich',
  'Redlands',
  'Moreton Bay & surrounding suburbs',
];

export function CustomersAndAreas() {
  return (
    <>
      {/* Our Customers */}
      <Section spacing="lg">
        <Container size="xl">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <FadeUp>
              <Stack gap="lg">
                <H2>Our Customers</H2>
                <P>
                  We work with all types of clients, from homeowners to real estate agencies and
                  builders.
                </P>
                <Stack gap="sm">
                  <Lead>Who We Work With:</Lead>
                  <StaggerGroup slow>
                    <Stack gap="sm">
                      {customers.map((c) => {
                        const Icon = c.icon;
                        return (
                          <StaggerItem key={c.label}>
                            <span className="text-foreground flex items-center gap-3 text-sm">
                              <Icon className="text-accent size-5 shrink-0" />
                              {c.label}
                            </span>
                          </StaggerItem>
                        );
                      })}
                    </Stack>
                  </StaggerGroup>
                </Stack>
                <P variant="muted">
                  Whether you need one job done or ongoing support, we&apos;re happy to help.
                </P>
              </Stack>
            </FadeUp>

            {/* Areas We Service */}
            <FadeUp delay={0.15}>
              <Stack gap="lg">
                <H2>Areas We Service</H2>
                <P>We provide expert electrical and air conditioning services across:</P>
                <Stack gap="sm">
                  {areas.map((area) => (
                    <span key={area} className="text-foreground flex items-center gap-3 text-sm">
                      <MapPin className="text-accent size-5 shrink-0" />
                      {area}
                    </span>
                  ))}
                </Stack>
                <P variant="muted">
                  Not sure if we service your area? Just give us a call — we&apos;re local and
                  flexible.
                </P>
              </Stack>
            </FadeUp>
          </div>
        </Container>
      </Section>
    </>
  );
}
