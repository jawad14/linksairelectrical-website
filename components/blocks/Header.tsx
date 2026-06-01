'use client';

import { useState, useRef, useEffect, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, ChevronRight, Phone, Mail } from 'lucide-react';
import { siteConfig, type NavItem } from '@/config/site.config';
import { Text } from '@/components/ui/typography';

/* ───────────────────────── helpers ───────────────────────── */

function hasGrandchildren(item: NavItem) {
  return item.children?.some((c) => c.children && c.children.length > 0);
}

/* ═══════════════════════════ HEADER ═══════════════════════════ */

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(76);

  // Measure the bottom edge of the header in the viewport
  useEffect(() => {
    function measure() {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.getBoundingClientRect().bottom);
      }
    }
    measure();
    window.addEventListener('resize', measure);
    window.addEventListener('scroll', measure);
    return () => {
      window.removeEventListener('resize', measure);
      window.removeEventListener('scroll', measure);
    };
  }, [mobileOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 z-50 border-b border-[#E3E9F0] bg-white/[0.92] backdrop-blur-[10px] backdrop-saturate-[140%]"
      >
        <div className="mx-auto flex h-[64px] max-w-[1360px] items-center justify-between px-5 max-sm:h-[56px] sm:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="mr-6 shrink-0 lg:mr-10"
            aria-label="Links Air & Electrical home"
          >
            <Image
              src="/logo-cropped.webp"
              alt="Links Air & Electrical"
              width={160}
              height={62}
              className="h-[44px] w-auto object-contain max-sm:h-[38px]"
              priority
            />
          </Link>

          {/* Desktop nav — centered */}
          <nav className="mr-auto max-[1024px]:hidden">
            <ul className="m-0 flex list-none items-center gap-1.5 p-0 lg:gap-2.5 xl:gap-4">
              {siteConfig.nav.map((item) => (
                <DesktopNavItem key={item.label} item={item} />
              ))}
            </ul>
          </nav>

          {/* Right side: phone + CTA + mobile toggle */}
          <div className="flex shrink-0 items-center gap-3">
            {/* Phone icon — mobile only */}
            <Link
              href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
              className="grid h-11 w-11 place-items-center rounded-full bg-[#E9F4FB] text-[#1779B8] sm:hidden"
              aria-label="Call us"
            >
              <Phone className="h-5 w-5" />
            </Link>

            {/* Phone number — tablet+ */}
            <Link
              href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
              className="hidden items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[13px] font-semibold text-[#0E1B2C] transition-colors hover:text-[#1779B8] sm:flex xl:flex"
            >
              <Phone className="h-4 w-4 text-[#2196D6]" />
              {siteConfig.phone}
            </Link>

            {/* CTA button */}
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-full bg-[#E73438] px-4 py-2.5 text-[13px] font-semibold whitespace-nowrap text-white shadow-[0_6px_16px_-6px_rgba(231,52,56,0.6)] transition-transform hover:-translate-y-px hover:bg-[#D62229] max-sm:px-3.5 max-sm:py-2.5"
            >
              Get a free quote
              <ChevronRight className="h-4 w-4 max-sm:hidden" strokeWidth={2.5} />
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative grid h-11 w-11 place-items-center rounded-lg border border-[#E3E9F0] bg-white text-[#0E1B2C] transition-colors hover:bg-[#F4F7FA] min-[1025px]:hidden"
              aria-label="Toggle menu"
            >
              <div className="flex h-4 w-[18px] flex-col justify-between">
                <span
                  className={`block h-[2px] w-full rounded-full bg-current transition-transform duration-200 ${mobileOpen ? 'translate-y-[7px] rotate-45' : ''}`}
                />
                <span
                  className={`block h-[2px] w-full rounded-full bg-current transition-opacity duration-200 ${mobileOpen ? 'opacity-0' : ''}`}
                />
                <span
                  className={`block h-[2px] w-full rounded-full bg-current transition-transform duration-200 ${mobileOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} topOffset={headerHeight} />}
    </>
  );
}

/* ═══════════════════════ DESKTOP NAV ITEM ═══════════════════════ */

function DesktopNavItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>(null);

  function enter() {
    if (timeout.current) clearTimeout(timeout.current);
    setOpen(true);
  }
  function leave() {
    timeout.current = setTimeout(() => setOpen(false), 150);
  }

  const isMega = hasGrandchildren(item);

  return (
    <li className={isMega ? 'static' : 'relative'} onMouseEnter={enter} onMouseLeave={leave}>
      <Link
        href={item.href}
        className="inline-flex items-center gap-1 text-[14px] font-medium whitespace-nowrap text-[#2A3A4E] transition-colors hover:text-[#1779B8]"
      >
        {item.label}
        {item.children && (
          <ChevronDown
            className={`h-3 w-3 opacity-50 transition-transform ${open ? 'rotate-180' : ''}`}
          />
        )}
      </Link>
      {item.children &&
        open &&
        (isMega ? (
          <MegaMenu items={item.children} promo={item.promo} />
        ) : (
          <SimpleDropdown items={item.children} />
        ))}
    </li>
  );
}

/* ═══════════════════════ MEGA MENU ═══════════════════════ */

function MegaMenu({ items, promo }: { items: NavItem[]; promo?: NavItem['promo'] }) {
  // Split items: those with children get their own column, those without are grouped
  const columnItems = items.filter((i) => i.children && i.children.length > 0);
  const standaloneItems = items.filter((i) => !i.children || i.children.length === 0);

  return (
    <div className="absolute inset-x-0 top-full z-50 pt-1.5">
      <div className="mx-auto max-w-[1060px] px-5">
        <div className="rounded-xl border border-[#E3E9F0] bg-white shadow-[0_12px_36px_-12px_rgba(14,27,44,0.18),0_2px_8px_rgba(14,27,44,0.06)]">
          {/* Content: columns + promo */}
          <div className="flex">
            {/* Nav columns */}
            <div className="flex flex-1 p-2">
              {/* Items with children — each gets its own column */}
              {columnItems.map((col) => (
                <div key={col.label} className="flex-1 px-4 py-3">
                  <Link
                    href={col.href}
                    className="mb-2 block text-[13px] font-semibold text-[#0E1B2C] transition-colors hover:text-[#1779B8]"
                  >
                    {col.label}
                  </Link>
                  <ul className="m-0 list-none space-y-0.5 p-0">
                    {col.children!.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="block rounded-md px-2 py-[5px] text-[13px] text-[#4F6172] transition-colors hover:bg-[#F4F7FA] hover:text-[#1779B8]"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Standalone items (no children) — grouped into one column */}
              {standaloneItems.length > 0 && (
                <div className="flex-1 px-4 py-3">
                  <span className="mb-2 block text-[13px] font-semibold text-[#0E1B2C]">
                    Other Services
                  </span>
                  <ul className="m-0 list-none space-y-0.5 p-0">
                    {standaloneItems.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="block rounded-md px-2 py-[5px] text-[13px] text-[#4F6172] transition-colors hover:bg-[#F4F7FA] hover:text-[#1779B8]"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Promo card */}
            {promo && (
              <div className="w-[280px] shrink-0 p-3">
                <Link href={promo.href} className="group block overflow-hidden rounded-lg">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                      src={promo.image}
                      alt={promo.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="280px"
                    />
                    {/* Overlay content */}
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4">
                      <Text className="m-0 text-[18px] leading-tight font-bold text-white">
                        {promo.heading}
                      </Text>
                      <Text className="m-0 mt-1 text-[13px] text-white/90">{promo.subtitle}</Text>
                      <span className="mt-2.5 inline-flex w-fit items-center rounded-full bg-[#E73438] px-4 py-1.5 text-[12px] font-semibold text-white transition-colors group-hover:bg-[#D62229]">
                        {promo.cta}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════ SIMPLE DROPDOWN ═══════════════════════ */

function SimpleDropdown({ items }: { items: NavItem[] }) {
  return (
    <div className="absolute top-full left-0 z-50 pt-1.5">
      <div className="min-w-[220px] rounded-lg border border-[#E3E9F0] bg-white py-1 shadow-[0_8px_24px_-8px_rgba(14,27,44,0.18),0_2px_6px_rgba(14,27,44,0.06)]">
        {items.map((child) => (
          <Link
            key={child.label}
            href={child.href}
            className="flex items-center gap-2 px-3.5 py-[7px] text-[13px] text-[#2A3A4E] transition-colors hover:bg-[#F4F7FA] hover:text-[#1779B8]"
          >
            {child.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════ MOBILE MENU ═══════════════════════ */

const emptySubscribe = () => () => {};

function MobileMenu({ onClose, topOffset }: { onClose: () => void; topOffset: number }) {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  if (!mounted) return null;

  return createPortal(
    <div
      className="fixed inset-x-0 bottom-0 z-[60] flex flex-col bg-white min-[1025px]:hidden"
      style={{ top: topOffset }}
    >
      {/* Scrollable nav area */}
      <nav className="flex-1 overflow-y-auto overscroll-contain">
        <ul className="m-0 list-none p-0">
          {siteConfig.nav.map((item) => (
            <MobileNavItem key={item.label} item={item} onClose={onClose} depth={0} />
          ))}
        </ul>
      </nav>

      {/* Fixed bottom bar */}
      <div className="shrink-0 border-t border-[#E3E9F0] bg-white px-5 py-4">
        <div className="flex gap-3">
          <Link
            href="/contact-us"
            onClick={onClose}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#E73438] py-3.5 text-[15px] font-semibold text-white"
          >
            Get a Quote
          </Link>
          <Link
            href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
            onClick={onClose}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-[#E3E9F0] bg-white py-3.5 text-[15px] font-semibold text-[#0E1B2C]"
          >
            <Phone className="h-4 w-4 text-[#2196D6]" />
            Call Us
          </Link>
        </div>
        <div className="mt-3 flex items-center justify-center gap-4 text-[12px] text-[#6E7E8E]">
          <Link
            href={`mailto:${siteConfig.email}`}
            onClick={onClose}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-[#1779B8]"
          >
            <Mail className="h-3.5 w-3.5" />
            {siteConfig.email}
          </Link>
        </div>
      </div>
    </div>,
    document.body,
  );
}

/* ═══════════════════════ MOBILE NAV ITEM ═══════════════════════ */

function MobileNavItem({
  item,
  onClose,
  depth,
}: {
  item: NavItem;
  onClose: () => void;
  depth: number;
}) {
  const [open, setOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;
  const isTopLevel = depth === 0;

  if (isTopLevel) {
    return (
      <li className="border-b border-[#F0F3F6]">
        {/* Top-level row */}
        <div className="flex items-center px-5">
          <Link
            href={item.href}
            onClick={onClose}
            className="font-heading flex min-h-[44px] flex-1 items-center text-[15px] font-semibold text-[#0E1B2C]"
          >
            {item.label}
          </Link>
          {hasChildren && (
            <button
              onClick={() => setOpen(!open)}
              className="grid min-h-[44px] w-11 place-items-center text-[#6E7E8E]"
              aria-label={open ? `Collapse ${item.label}` : `Expand ${item.label}`}
            >
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
              />
            </button>
          )}
        </div>

        {/* Expanded children */}
        {open && hasChildren && (
          <div className="bg-[#F8FAFC] px-5 py-2">
            <ul className="m-0 list-none p-0">
              {item.children!.map((child) => (
                <MobileChildItem key={child.label} item={child} onClose={onClose} />
              ))}
            </ul>
          </div>
        )}
      </li>
    );
  }

  return null;
}

/* ═══════════════════ MOBILE CHILD ITEM (depth 1+) ═══════════════════ */

function MobileChildItem({ item, onClose }: { item: NavItem; onClose: () => void }) {
  const [open, setOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <li>
      <div className="flex items-center">
        <Link
          href={item.href}
          onClick={onClose}
          className={`flex min-h-[44px] flex-1 items-center text-[14px] text-[#2A3A4E] transition-colors hover:text-[#1779B8] ${hasChildren ? 'font-semibold' : ''}`}
        >
          {item.label}
        </Link>
        {hasChildren && (
          <button
            onClick={() => setOpen(!open)}
            className="grid min-h-[44px] w-11 place-items-center text-[#6E7E8E]"
            aria-label={open ? `Collapse ${item.label}` : `Expand ${item.label}`}
          >
            <ChevronDown
              className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            />
          </button>
        )}
      </div>

      {open && hasChildren && (
        <ul className="m-0 list-none border-l-2 border-[#E3E9F0] py-1 pl-4">
          {item.children!.map((gc) => (
            <li key={gc.label}>
              <Link
                href={gc.href}
                onClick={onClose}
                className="flex min-h-[44px] items-center text-[13px] text-[#4F6172] transition-colors hover:text-[#1779B8]"
              >
                {gc.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
