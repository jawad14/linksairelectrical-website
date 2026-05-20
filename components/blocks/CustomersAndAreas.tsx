'use client';

import Image from 'next/image';
import { Users, Home, HardHat, Building2, Landmark, MapPin } from 'lucide-react';
import { Container, Section, Stack } from '@/components/ui/layout';
import { H2, P, Lead } from '@/components/ui/typography';
import { SlideLeft, SlideRight, StaggerGroup, StaggerItem } from '@/components/ui/motion';

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
      {/* Our Customers — text left, image right */}
      <Section spacing="lg">
        <Container size="xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <SlideLeft>
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
            </SlideLeft>

            <SlideRight className="max-lg:hidden">
              <Image
                src="/images/why-choose-2.png"
                alt="Air conditioning services"
                width={1050}
                height={581}
                className="rounded-xl shadow-lg"
              />
            </SlideRight>
          </div>
        </Container>
      </Section>

      {/* Areas We Service — image left, text right */}
      <Section spacing="lg" className="bg-muted/40">
        <Container size="xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <SlideLeft className="max-lg:hidden">
              <Image
                src="/images/hero/hero-4.png"
                alt="Links Air & Electrical service area"
                width={1050}
                height={581}
                className="rounded-xl shadow-lg"
              />
            </SlideLeft>

            <SlideRight>
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
            </SlideRight>
          </div>
        </Container>
      </Section>
    </>
  );
}
