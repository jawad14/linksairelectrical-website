'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, ArrowRight } from 'lucide-react';
import { Container, Section, Stack } from '@/components/ui/layout';
import { H2, P, Lead } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';
import { FadeUp, SlideLeft, SlideRight } from '@/components/ui/motion';

export function About() {
  return (
    <>
      {/* About section — exact copy from original */}
      <Section spacing="lg">
        <Container size="xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <SlideLeft>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/images/about.png"
                  alt="Links Air & Electrical team"
                  fill
                  className="object-cover"
                />
              </div>
            </SlideLeft>
            <SlideRight>
              <Stack gap="lg">
                <H2>Welcome to Links Air &amp; Electrical</H2>
                <Lead>
                  Heating &amp; Air Conditioning Repair &amp; Installation Service Company
                </Lead>
                <P>
                  Links Air &amp; Electrical is a leading name when it comes to 360 degree air
                  conditioning solutions at an unbeatable price. Serving the industry since 2014, we
                  provide comprehensive solutions to your air conditioning chores which include
                  installation, repairs and maintenance so that you enjoy peace of mind every time
                  you settle on bed to relax.
                </P>
                <Link
                  href="/about"
                  className="text-accent hover:text-secondary inline-flex w-fit items-center gap-2 text-sm font-semibold transition-colors"
                >
                  Read More <ArrowRight className="size-4" />
                </Link>
              </Stack>
            </SlideRight>
          </div>
        </Container>
      </Section>

      {/* 24/7 CTA Strip — exact copy from original */}
      <Section spacing="md" className="bg-primary text-primary-foreground">
        <Container size="xl">
          <FadeUp>
            <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
              <H2 className="text-primary-foreground">
                We&apos;re On Call 24/7 to React Promptly to Your Service Needs, Don&apos;t Hesitate
                to Call
              </H2>
              <div className="flex flex-col items-center gap-3 sm:flex-row">
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="bg-destructive inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-base font-bold text-white transition-all hover:scale-105 hover:brightness-110"
                >
                  <Phone className="size-5" />
                  {siteConfig.phone}
                </a>
                <Link
                  href="/contact"
                  className="bg-accent inline-flex items-center rounded-lg px-7 py-3.5 text-sm font-bold text-white transition-all hover:scale-105 hover:brightness-110"
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
