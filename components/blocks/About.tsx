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
      {/* About section */}
      <Section spacing="lg">
        <Container size="xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <SlideLeft>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/images/hero/hero-3.png"
                  alt="Links Air & Electrical team at work"
                  fill
                  className="object-cover"
                />
              </div>
            </SlideLeft>
            <SlideRight>
              <Stack gap="lg">
                <H2>About Links Air &amp; Electrical</H2>
                <Lead>Locally owned. Quality-driven. Trusted since 2014.</Lead>
                <P>
                  Links Air &amp; Electrical is a leading name when it comes to 360-degree air
                  conditioning and electrical solutions at an unbeatable price. Our expert team
                  provides comprehensive services including installation, repairs, and maintenance —
                  so you enjoy peace of mind every time.
                </P>
                <P>
                  Servicing Brisbane, Gold Coast, Logan, Ipswich, and surrounding areas, our fully
                  licensed and insured technicians deliver quality workmanship with transparent,
                  upfront pricing.
                </P>
                <Link
                  href="/about"
                  className="text-accent hover:text-secondary inline-flex w-fit items-center gap-2 text-sm font-semibold transition-colors"
                >
                  Read More About Us <ArrowRight className="size-4" />
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
            <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
              <Stack gap="xs">
                <H2 className="text-primary-foreground">We&apos;re On Call 24/7</H2>
                <P className="text-primary-foreground/70">
                  Don&apos;t hesitate to call — we react promptly to your service needs.
                </P>
              </Stack>
              <div className="flex flex-col items-center gap-3 sm:flex-row">
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="bg-accent inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-bold text-white transition-all hover:scale-105 hover:opacity-90"
                >
                  <Phone className="size-5" />
                  {siteConfig.phone}
                </a>
                <Link
                  href="/contact"
                  className="border-primary-foreground/30 text-primary-foreground hover:border-primary-foreground/60 inline-flex items-center rounded-full border-2 px-7 py-3.5 text-sm font-bold transition-all hover:scale-105"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </FadeUp>
        </Container>
      </Section>
    </>
  );
}
