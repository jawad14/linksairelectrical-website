import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { Container, Section, Stack } from '@/components/ui/layout';
import { H2, P, Lead } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

export function About() {
  return (
    <>
      {/* About section */}
      <Section spacing="lg">
        <Container size="xl">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/images/hero/hero-3.png"
                alt="Links Air & Electrical team"
                fill
                className="object-cover"
              />
            </div>
            <Stack gap="lg">
              <H2>Welcome to Links Air &amp; Electrical</H2>
              <Lead>Heating &amp; Air Conditioning Repair &amp; Installation Service Company</Lead>
              <P>
                Links Air &amp; Electrical is a leading name when it comes to 360 degree air
                conditioning solutions at an unbeatable price. Serving the industry since 2014, we
                provide comprehensive solutions to your air conditioning chores which include
                installation, repairs and maintenance so that you enjoy peace of mind every time you
                settle on bed to relax.
              </P>
              <P>
                We provide fast, reliable electrical and air conditioning services across Brisbane,
                Gold Coast, Logan, Ipswich, and surrounding areas. Our fully licensed and insured
                technicians deliver quality workmanship with transparent pricing — no hidden fees.
              </P>
              <Link
                href="/about"
                className="bg-accent inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
              >
                Read More About Us
              </Link>
            </Stack>
          </div>
        </Container>
      </Section>

      {/* 24/7 CTA Strip */}
      <Section spacing="md" className="bg-secondary text-secondary-foreground">
        <Container size="xl">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
            <Stack gap="xs">
              <H2 className="text-secondary-foreground">We&apos;re On Call 24/7</H2>
              <P className="text-secondary-foreground/80">
                React promptly to your service needs. Don&apos;t hesitate to call.
              </P>
            </Stack>
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <a
                href={`tel:${siteConfig.mobile.replace(/\s/g, '')}`}
                className="bg-destructive inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-bold text-white transition-opacity hover:opacity-90"
              >
                <Phone className="size-5" />
                {siteConfig.mobile}
              </a>
              <Link
                href="/contact"
                className="border-secondary-foreground/40 text-secondary-foreground hover:border-secondary-foreground/70 inline-flex items-center rounded-full border-2 px-7 py-3.5 text-sm font-bold transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
