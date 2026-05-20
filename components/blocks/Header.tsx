'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Menu, X, ChevronDown, ShieldCheck, MapPin } from 'lucide-react';
import { Small } from '@/components/ui/typography';
import { Container } from '@/components/ui/layout';
import { siteConfig } from '@/config/site.config';
import { AnimatePresence, motion } from 'framer-motion';

/* ── Mega-menu data ──────────────────────────────────────── */

type MegaColumn = { heading: string; links: { label: string; href: string }[] };
type NavItemDef =
  | { label: string; href: string; mega?: undefined }
  | { label: string; href: string; mega: MegaColumn[] };

const navItems: NavItemDef[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Air Con',
    href: '/services/air-conditioning',
    mega: [
      {
        heading: 'Split System Aircon',
        links: [
          {
            label: 'Back To Back Installation',
            href: '/services/air-conditioning/split-system/back-to-back',
          },
          {
            label: 'Side Entry Installation',
            href: '/services/air-conditioning/split-system/side-entry',
          },
          {
            label: 'Up & Over Installation',
            href: '/services/air-conditioning/split-system/up-and-over',
          },
        ],
      },
      {
        heading: 'Air Conditioning',
        links: [
          { label: 'Ducted Airconditioning', href: '/services/air-conditioning/ducted' },
          { label: 'VRV/VRF Air Conditioning', href: '/services/air-conditioning/vrv-vrf' },
          {
            label: 'Design and Construction',
            href: '/services/air-conditioning/design-construction',
          },
          {
            label: 'Repair & Installation',
            href: '/services/air-conditioning/repair-installation',
          },
          {
            label: 'Service & Maintenance',
            href: '/services/air-conditioning/service-maintenance',
          },
          { label: 'FAQ', href: '/services/air-conditioning/faq' },
        ],
      },
    ],
  },
  {
    label: 'Electricals',
    href: '/services/electrical',
    mega: [
      {
        heading: 'Residential Electrician',
        links: [
          { label: 'New House Wiring', href: '/services/electrical/residential' },
          {
            label: 'Bathroom Exhaust Heater Installations',
            href: '/services/electrical/residential',
          },
          { label: 'Ceiling Exhaust Fans', href: '/services/electrical/residential' },
          { label: 'Ceiling Fan Installation', href: '/services/electrical/residential' },
          { label: 'Data Points and Network Cabling', href: '/services/electrical/residential' },
          { label: 'Downlights', href: '/services/electrical/residential' },
          { label: 'Electrical Switchboard Upgrade', href: '/services/electrical/residential' },
        ],
      },
      {
        heading: 'General Electrical Maintenance',
        links: [
          { label: 'LED Lights Installation', href: '/services/electrical/maintenance' },
          { label: 'Meter Box Relocation/Upgrade', href: '/services/electrical/maintenance' },
          { label: 'Oven and Cooktop Installations', href: '/services/electrical/maintenance' },
          { label: 'Pendant Light Installer', href: '/services/electrical/maintenance' },
          { label: 'Power-Point Installation', href: '/services/electrical/maintenance' },
          { label: 'Smoke Detector Installation', href: '/services/electrical/maintenance' },
          {
            label: 'Switchboard Surge Protector Installation',
            href: '/services/electrical/maintenance',
          },
          { label: 'USB Sockets', href: '/services/electrical/maintenance' },
          { label: 'Other Electrical Services', href: '/services/electrical/maintenance' },
        ],
      },
      {
        heading: '',
        links: [
          { label: 'CCTV Camera Installation', href: '/services/electrical/residential' },
          { label: 'EV Charger Installation', href: '/services/electrical/residential' },
        ],
      },
    ],
  },
  { label: 'Building & Construction', href: '/services/builder' },
  {
    label: 'Areas',
    href: '/contact',
    mega: [
      {
        heading: 'Service Areas',
        links: [
          { label: 'Ipswich', href: '/contact' },
          { label: 'Gold Coast', href: '/contact' },
          { label: 'Logan', href: '/contact' },
          { label: 'Brisbane', href: '/contact' },
        ],
      },
    ],
  },
];

/* ── Component ───────────────────────────────────────────── */

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMega, setOpenMega] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 shadow-md">
      {/* ─── Row 1: Logo + contact + phone/quote ─── */}
      <div className="bg-primary text-primary-foreground">
        <Container
          size="xl"
          className="flex items-center justify-between gap-3 py-3 sm:gap-4 md:py-4"
        >
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

          {/* Center info — xl+ */}
          <div className="text-primary-foreground/75 hidden items-center gap-6 text-sm xl:flex">
            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:text-primary-foreground flex items-center gap-2 transition-colors"
            >
              <Mail className="size-4 shrink-0" />
              <span>{siteConfig.email}</span>
            </a>
            <span className="bg-destructive/90 inline-flex items-center gap-2 rounded px-3 py-1 text-xs font-bold tracking-wide text-white uppercase">
              <ShieldCheck className="size-3.5" />
              Lic. {siteConfig.license} · ARC {siteConfig.arc}
            </span>
            <span className="bg-accent inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold text-white">
              <span className="size-1.5 animate-pulse rounded-full bg-white" />
              24/7 Emergency Call-outs
            </span>
          </div>

          {/* Right — phone + quote + hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
              className="bg-destructive inline-flex items-center gap-2 rounded-lg px-3 py-2 font-bold text-white transition-all hover:scale-105 hover:brightness-110 sm:px-4 sm:py-2.5 md:rounded-xl md:px-5"
            >
              <Phone className="size-4 sm:size-5" />
              <span className="hidden text-sm sm:inline md:text-base">{siteConfig.phone}</span>
            </a>
            <Link
              href="/contact"
              className="bg-accent hidden rounded-lg px-4 py-2 text-sm font-bold whitespace-nowrap text-white transition-all hover:scale-105 hover:brightness-110 md:inline-flex md:px-5 md:py-2.5"
            >
              Get a Quote
            </Link>
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

      {/* ─── Row 2: Desktop mega-menu nav bar (lg+) ─── */}
      <nav aria-label="Primary" className="bg-secondary relative hidden lg:block">
        <Container size="xl" className="flex items-center justify-center">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.mega && setOpenMega(item.label)}
              onMouseLeave={() => setOpenMega(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1.5 px-4 py-3.5 text-[13px] font-bold tracking-wider text-white/90 uppercase transition-colors hover:bg-white/10 hover:text-white xl:px-5"
              >
                {item.label}
                {item.mega && <ChevronDown className="size-3.5 opacity-60" />}
              </Link>

              {/* Mega dropdown panel */}
              <AnimatePresence>
                {item.mega && openMega === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-1/2 z-50 -translate-x-1/2 rounded-b-xl bg-white shadow-2xl"
                    style={{
                      minWidth: item.mega.length > 1 ? `${item.mega.length * 220}px` : '240px',
                    }}
                  >
                    <div
                      className={`divide-border grid gap-0 divide-x ${
                        item.mega.length === 1
                          ? 'grid-cols-1'
                          : item.mega.length === 2
                            ? 'grid-cols-2'
                            : 'grid-cols-3'
                      }`}
                    >
                      {item.mega.map((col, colIdx) => (
                        <div key={col.heading || `col-${colIdx}`} className="px-6 py-5">
                          {col.heading && (
                            <Small className="text-secondary mb-3 block text-xs font-bold tracking-wider uppercase">
                              {col.heading}
                            </Small>
                          )}
                          <ul className="space-y-0.5">
                            {col.links.map((link) => (
                              <li key={link.label}>
                                <Link
                                  href={link.href}
                                  className="text-foreground hover:bg-muted hover:text-secondary block rounded-md px-2 py-1.5 text-sm transition-colors"
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </Container>
      </nav>

      {/* ─── Mobile menu (below lg) ─── */}
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
              {/* Badges */}
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
                {navItems.map((item) => (
                  <div
                    key={item.label}
                    className="border-primary-foreground/5 border-b last:border-b-0"
                  >
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        className="text-primary-foreground hover:text-accent flex-1 px-3 py-3 text-sm font-semibold tracking-wide uppercase transition-colors"
                        onClick={() => {
                          if (!item.mega) setMobileOpen(false);
                        }}
                      >
                        {item.label}
                      </Link>
                      {item.mega && (
                        <button
                          type="button"
                          onClick={() =>
                            setMobileAccordion(mobileAccordion === item.label ? null : item.label)
                          }
                          className="text-primary-foreground/60 p-3"
                          aria-label={`Expand ${item.label}`}
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
                      {item.mega && mobileAccordion === item.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] as const }}
                          className="overflow-hidden"
                        >
                          <div className="pb-3 pl-3">
                            {item.mega.map((col, colIdx) => (
                              <div key={col.heading || `col-${colIdx}`} className="mt-2">
                                {col.heading && (
                                  <Small className="text-accent block px-3 py-1.5 text-[11px] font-bold tracking-wider uppercase">
                                    {col.heading}
                                  </Small>
                                )}
                                <div className="border-primary-foreground/10 ml-3 border-l pl-3">
                                  {col.links.map((link) => (
                                    <Link
                                      key={link.label}
                                      href={link.href}
                                      className="text-primary-foreground/70 hover:text-accent block py-2 text-sm transition-colors"
                                      onClick={() => setMobileOpen(false)}
                                    >
                                      {link.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
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
