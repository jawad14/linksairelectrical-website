'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Clock, MapPin, Menu, X, ChevronDown, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/ui/layout';
import { siteConfig } from '@/config/site.config';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40">
      {/* Top bar — license, contact info, 24/7 badge */}
      <div className="bg-primary text-primary-foreground">
        <Container size="xl" className="flex items-center justify-between py-2 text-sm">
          <div className="hidden items-center gap-6 md:flex">
            <span className="text-primary-foreground/80 flex items-center gap-2">
              <ShieldCheck className="size-4" />
              <span>
                Lic. {siteConfig.license} · ARC {siteConfig.arc}
              </span>
            </span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 transition-opacity hover:opacity-80"
            >
              <Mail className="size-4" />
              <span>{siteConfig.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-6">
            <span className="hidden items-center gap-2 lg:flex">
              <Clock className="size-4" />
              <span>{siteConfig.hours}</span>
            </span>
            <span className="bg-accent/20 text-accent inline-flex items-center gap-1.5 rounded-full px-3 py-0.5 text-xs font-bold">
              <span className="bg-accent size-1.5 animate-pulse rounded-full" />
              24/7 Emergency Call-outs
            </span>
          </div>
          {/* Mobile phone */}
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-2 md:hidden"
          >
            <Phone className="size-4" />
            <span className="font-bold">{siteConfig.phone}</span>
          </a>
        </Container>
      </div>

      {/* Main nav bar */}
      <div className="border-border/60 border-b bg-white shadow-sm">
        <Container size="xl" className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo.png"
              alt={siteConfig.name}
              width={180}
              height={50}
              className="h-10 w-auto md:h-12"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {siteConfig.nav.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="text-foreground hover:text-secondary flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold tracking-wide uppercase transition-colors"
                >
                  {item.label}
                  {item.children && <ChevronDown className="size-3.5" />}
                </Link>
                {item.children && openDropdown === item.label && (
                  <div className="border-border absolute top-full left-0 z-50 min-w-56 rounded-b-md border bg-white py-2 shadow-lg">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="text-foreground hover:bg-muted hover:text-secondary block px-4 py-2 text-sm transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Phone + Get a Quote + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
              className="text-primary hidden items-center gap-2 text-sm font-bold md:flex"
            >
              <Phone className="size-4" />
              {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              className="bg-destructive rounded-full px-5 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
            >
              Get a Quote
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-foreground rounded-md p-2 lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </Container>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-border border-t bg-white lg:hidden">
            <Container size="xl" className="py-4">
              <nav className="flex flex-col gap-1">
                {siteConfig.nav.map((item) => (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      className="text-foreground hover:bg-muted block rounded-md px-3 py-2.5 text-sm font-semibold tracking-wide uppercase"
                      onClick={() => !item.children && setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="ml-4 flex flex-col gap-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="text-muted-foreground hover:bg-muted hover:text-foreground block rounded-md px-3 py-2 text-sm"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </Container>
          </div>
        )}
      </div>
    </header>
  );
}
