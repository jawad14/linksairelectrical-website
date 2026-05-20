import Link from 'next/link';
import Image from 'next/image';
import { Phone, Star, CheckCircle } from 'lucide-react';
import { Container, Stack, Cluster } from '@/components/ui/layout';
import { Heading, Lead, Small } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0B3D6B_0%,#1B6EAA_100%)]">
      {/* Background image with overlay */}
      <Image
        src="/images/hero/hero-1.png"
        alt="Air conditioning and electrical services"
        fill
        className="object-cover opacity-20 mix-blend-luminosity"
        priority
      />
      {/* Decorative circles like brand collateral */}
      <div className="border-accent/30 pointer-events-none absolute -top-32 -right-32 size-[500px] rounded-full border-[3px]" />
      <div className="border-secondary/30 pointer-events-none absolute top-16 -right-16 size-[400px] rounded-full border-[3px]" />

      {/* Content */}
      <Container size="xl" className="relative z-10 py-20 sm:py-28 lg:py-36">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left — text */}
          <Stack gap="lg">
            {/* Tagline */}
            <Small className="text-accent font-bold tracking-[0.2em] uppercase">
              {siteConfig.tagline}
            </Small>

            <Heading level={1} variant="display" className="font-heading text-white">
              Electrical &amp; air, <span className="text-accent">done right.</span>
            </Heading>

            <Lead className="max-w-xl text-white/80">
              Fast, reliable electrical and air conditioning services across Brisbane &amp; Gold
              Coast. Serving the industry since 2014 with quality workmanship you can trust.
            </Lead>

            {/* Trust bullets */}
            <Cluster gap="lg" className="text-sm text-white/90">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="text-accent size-4" />
                Upfront quotes
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="text-accent size-4" />
                Licensed &amp; insured
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="text-accent size-4" />
                Workmanship guarantee
              </span>
            </Cluster>

            {/* CTA buttons */}
            <Cluster gap="md" className="mt-2">
              <Link
                href="/contact"
                className="bg-accent inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
              >
                Get a Free Quote
              </Link>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                className="bg-destructive inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
              >
                <Phone className="size-4" />
                {siteConfig.phone}
              </a>
            </Cluster>

            {/* Google reviews badge */}
            <Cluster gap="sm" className="mt-2 text-white/80">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-semibold">5.0 — 200+ Google Reviews</span>
            </Cluster>
          </Stack>

          {/* Right — feature image */}
          <div className="hidden lg:block">
            <Image
              src="/images/hero/hero-2.png"
              alt="Professional air conditioning installation"
              width={600}
              height={500}
              className="rounded-lg object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
