'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Menu, X, ChevronDown, ShieldCheck, MapPin } from 'lucide-react';
import { Container } from '@/components/ui/layout';
import { siteConfig } from '@/config/site.config';
import { AnimatePresence, motion } from 'framer-motion';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 shadow-md">
      {/* Row 1 — Top bar: logo + contact info + phone CTA */}
      <div className="bg-primary text-primary-foreground">
        <Container
          size="xl"
          className="flex items-center justify-between gap-3 py-3 sm:gap-4 md:py-4"
        >
          {/* Logo — original colors on white glow (matching brand collateral) */}
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo.png"
              alt={siteConfig.name}
              width={200}
              height={55}
              className="h-9 w-auto sm:h-11 md:h-14"
              priority
            />
          </Link>

          {/* Center — contact info (xl+ only) */}
          <div className="text-primary-foreground/75 hidden items-center gap-6 text-sm xl:flex">
            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:text-primary-foreground flex items-center gap-2 transition-colors"
            >
              <Mail className="size-4 shrink-0" />
              <span>{siteConfig.email}</span>
            </a>
            {/* Red license badge — matching the red corner in brand collateral */}
            <span className="bg-destructive/90 inline-flex items-center gap-2 rounded px-3 py-1 text-xs font-bold tracking-wide text-white uppercase">
              <ShieldCheck className="size-3.5" />
              Lic. {siteConfig.license} · ARC {siteConfig.arc}
            </span>
            {/* Green 24/7 badge */}
            <span className="bg-accent inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold text-white">
              <span className="size-1.5 animate-pulse rounded-full bg-white" />
              24/7 Emergency Call-outs
            </span>
          </div>

          {/* Right — red phone button + green quote + hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Red phone button — matching brand collateral style */}
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
              className="bg-destructive inline-flex items-center gap-2 rounded-lg px-3 py-2 font-bold text-white transition-all hover:scale-105 hover:brightness-110 sm:px-4 sm:py-2.5 md:rounded-xl md:px-5"
            >
              <Phone className="size-4 sm:size-5" />
              <span className="hidden text-sm sm:inline md:text-base">{siteConfig.phone}</span>
            </a>

            {/* Green quote button — md+ */}
            <Link
              href="/contact"
              className="bg-accent hidden rounded-lg px-4 py-2 text-sm font-bold whitespace-nowrap text-white transition-all hover:scale-105 hover:brightness-110 md:inline-flex md:px-5 md:py-2.5"
            >
              Get a Quote
            </Link>

            {/* Hamburger — below lg */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-primary-foreground ml-1 rounded-md p-2 lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </Container>
      </div>

      {/* Row 2 — Desktop navigation bar (lg+) */}
      <nav aria-label="Primary" className="bg-secondary hidden lg:block">
        <Container size="xl" className="flex items-center justify-center">
          {siteConfig.nav.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1.5 px-4 py-3.5 text-[13px] font-bold tracking-wider text-white/90 uppercase transition-colors hover:bg-white/10 hover:text-white xl:px-5"
              >
                {item.label}
                {item.children && <ChevronDown className="size-3.5 opacity-60" />}
              </Link>

              {/* Desktop dropdown */}
              <AnimatePresence>
                {item.children && openDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 z-50 min-w-60 rounded-b-lg bg-white py-2 shadow-xl"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="text-foreground hover:bg-muted hover:text-secondary block px-5 py-2.5 text-sm transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </Container>
      </nav>

      {/* Mobile menu (below lg) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="border-primary-foreground/10 bg-primary overflow-hidden border-t lg:hidden"
          >
            <Container size="xl" className="py-3">
              {/* Badges row — visible on mobile (hidden on xl where they show in row 1) */}
              <div className="border-primary-foreground/10 mb-3 flex flex-wrap items-center gap-2 border-b pb-3">
                <span className="bg-destructive/90 inline-flex items-center gap-1.5 rounded px-2.5 py-1 text-[11px] font-bold tracking-wide text-white uppercase">
                  <ShieldCheck className="size-3" />
                  Lic. {siteConfig.license} · ARC {siteConfig.arc}
                </span>
                <span className="bg-accent inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold text-white">
                  <span className="size-1.5 animate-pulse rounded-full bg-white" />
                  24/7 Emergency
                </span>
              </div>

              <nav className="flex flex-col">
                {siteConfig.nav.map((item) => (
                  <div
                    key={item.href}
                    className="border-primary-foreground/5 border-b last:border-b-0"
                  >
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        className="text-primary-foreground hover:text-accent flex-1 px-3 py-3 text-sm font-semibold tracking-wide uppercase transition-colors"
                        onClick={() => {
                          if (!item.children) setMobileOpen(false);
                        }}
                      >
                        {item.label}
                      </Link>
                      {item.children && (
                        <button
                          type="button"
                          onClick={() =>
                            setMobileAccordion(mobileAccordion === item.label ? null : item.label)
                          }
                          className="text-primary-foreground/60 p-3"
                          aria-label={`Expand ${item.label} submenu`}
                        >
                          <motion.div
                            animate={{ rotate: mobileAccordion === item.label ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="size-4" />
                          </motion.div>
                        </button>
                      )}
                    </div>

                    <AnimatePresence initial={false}>
                      {item.children && mobileAccordion === item.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] as const }}
                          className="overflow-hidden"
                        >
                          <div className="border-primary-foreground/10 ml-3 border-l pb-2 pl-4">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="text-primary-foreground/70 hover:text-accent block py-2.5 text-sm transition-colors"
                                onClick={() => setMobileOpen(false)}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>

              {/* Mobile bottom strip */}
              <div className="border-primary-foreground/10 mt-3 flex flex-col gap-3 border-t pt-4">
                <div className="text-primary-foreground/60 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:text-primary-foreground flex items-center gap-2 transition-colors"
                  >
                    <Mail className="size-4 shrink-0" />
                    <span className="truncate">{siteConfig.email}</span>
                  </a>
                  <span className="flex items-center gap-2">
                    <MapPin className="size-4 shrink-0" />
                    Brisbane &amp; Gold Coast
                  </span>
                </div>
                {/* Full-width green CTA */}
                <Link
                  href="/contact"
                  className="bg-accent block rounded-lg py-3.5 text-center text-sm font-bold text-white transition-opacity hover:opacity-90"
                >
                  Get a Free Quote
                </Link>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
