import Link from 'next/link';
import Image from 'next/image';
import { Phone, Star, CheckCircle } from 'lucide-react';
import { Container, Stack, Cluster } from '@/components/ui/layout';
import { Heading, Lead, Small } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(160deg,#0B3D6B_0%,#1B6EAA_60%,#0F4C81_100%)]">
      {/* Background image — subtle, not overpowering */}
      <Image
        src="/images/hero/hero-1.png"
        alt="Air conditioning and electrical services"
        fill
        className="object-cover opacity-15 mix-blend-luminosity"
        priority
      />

      {/* Content — centered like Jaric, generous vertical padding */}
      <Container size="xl" className="relative z-10 py-24 sm:py-32 lg:py-40">
        <Stack gap="lg" align="center" className="text-center">
          {/* Tagline */}
          <Small className="text-accent font-bold tracking-[0.2em] uppercase">
            {siteConfig.tagline}
          </Small>

          {/* Main headline — light weight like Jaric (font-light) */}
          <Heading
            level={1}
            className="font-heading max-w-4xl text-4xl font-light tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Brisbane Air Conditioning
            <br className="hidden sm:block" />
            &amp; Electrical Experts
          </Heading>

          <Lead className="max-w-2xl text-white/75">
            Links Air &amp; Electrical has delivered outstanding quality workmanship across Brisbane
            and Gold Coast since 2014. We&apos;re locally owned, and we take our reputation
            seriously.
          </Lead>

          {/* Trust bullets — horizontal, subtle */}
          <Cluster gap="lg" className="text-sm text-white/70">
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

          {/* CTA pair — Jaric style: one solid, one bordered */}
          <Cluster gap="md" justify="center" className="mt-4">
            <Link
              href="/contact"
              className="bg-accent inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90"
            >
              Get a Free Quote
            </Link>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-sm font-bold text-white transition-colors hover:border-white/60"
            >
              <Phone className="size-4" />
              {siteConfig.phone}
            </a>
          </Cluster>

          {/* Google reviews — subtle badge below CTAs */}
          <Cluster gap="sm" className="mt-2 text-white/60">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="size-3.5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-xs font-medium">5.0 — 200+ Google Reviews</span>
          </Cluster>
        </Stack>
      </Container>
    </section>
  );
}
