'use client';

import { useState, useRef, useEffect, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, ChevronRight, Phone, Mail, Wind, Zap, HardHat, MapPin } from 'lucide-react';
import { siteConfig, type NavItem } from '@/config/site.config';
import { P } from '@/components/ui/typography';

/* ───────────────────────── helpers ───────────────────────── */

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'Air Con': Wind,
  Electricals: Zap,
  'Building & Construction': HardHat,
  Areas: MapPin,
};

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
        <div className="mx-auto flex h-[84px] max-w-[1360px] items-center justify-between px-5 max-sm:h-[72px] sm:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="mr-6 shrink-0 lg:mr-10"
            aria-label="Links Air & Electrical home"
          >
            <Image
              src="/logo.webp"
              alt="Links Air & Electrical"
              width={160}
              height={62}
              className="h-[62px] w-auto object-contain max-sm:h-[50px]"
              priority
            />
          </Link>

          {/* Desktop nav — centered */}
          <nav className="mr-auto max-[1024px]:hidden">
            <ul className="m-0 flex list-none items-center gap-3 p-0 lg:gap-4 xl:gap-6">
              {siteConfig.nav.map((item) => (
                <DesktopNavItem key={item.label} item={item} />
              ))}
            </ul>
          </nav>

          {/* Right side: phone + CTA + mobile toggle */}
          <div className="flex shrink-0 items-center gap-4">
            {/* Phone number — visible on tablet+ */}
            <Link
              href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 rounded-full px-3 py-2 text-[14px] font-semibold text-[#0E1B2C] transition-colors hover:text-[#1779B8] max-xl:hidden"
            >
              <Phone className="h-4 w-4 text-[#2196D6]" />
              {siteConfig.phone}
            </Link>

            {/* CTA button */}
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-full bg-[#E73438] px-5 py-3 text-[14px] font-semibold whitespace-nowrap text-white shadow-[0_6px_16px_-6px_rgba(231,52,56,0.6)] transition-transform hover:-translate-y-px hover:bg-[#D62229] max-sm:px-4 max-sm:py-2.5 max-sm:text-[13px]"
            >
              Get a free quote
              <ChevronRight className="h-4 w-4 max-sm:hidden" strokeWidth={2.5} />
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative grid h-10 w-10 place-items-center rounded-lg border border-[#E3E9F0] bg-white text-[#0E1B2C] transition-colors hover:bg-[#F4F7FA] min-[1025px]:hidden"
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

  const isMega = item.children && item.children.length > 3;

  return (
    <li className="relative" onMouseEnter={enter} onMouseLeave={leave}>
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
        (isMega ? <MegaMenu item={item} /> : <SimpleDropdown items={item.children} />)}
    </li>
  );
}

/* ═══════════════════════ MEGA MENU ═══════════════════════ */

function MegaMenu({ item }: { item: NavItem }) {
  const Icon = categoryIcons[item.label];
  const children = item.children ?? [];
  const deep = hasGrandchildren(item);

  return (
    <div className="absolute top-full left-1/2 z-50 -translate-x-1/2 pt-3">
      <div className="w-[680px] rounded-2xl border border-[#E3E9F0] bg-white p-6 shadow-[0_16px_48px_-12px_rgba(14,27,44,0.20),0_4px_12px_rgba(14,27,44,0.06)]">
        <div className="mb-4 flex items-center gap-3 border-b border-[#E3E9F0] pb-4">
          {Icon && (
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-[#E9F4FB] text-[#1779B8]">
              <Icon className="h-[18px] w-[18px]" />
            </div>
          )}
          <div>
            <Link
              href={item.href}
              className="font-heading text-[15px] font-bold text-[#0E1B2C] transition-colors hover:text-[#1779B8]"
            >
              {item.label}
            </Link>
            <P className="text-[12px] text-[#6E7E8E]">
              View all {item.label.toLowerCase()} services
            </P>
          </div>
        </div>

        {deep ? (
          <div className="grid grid-cols-2 gap-6">
            {children.map((child) =>
              child.children ? (
                <div key={child.label}>
                  <Link
                    href={child.href}
                    className="font-heading mb-2 block text-[13px] font-bold tracking-[0.06em] text-[#0E1B2C] uppercase transition-colors hover:text-[#1779B8]"
                  >
                    {child.label}
                  </Link>
                  <ul className="m-0 flex list-none flex-col gap-0.5 p-0">
                    {child.children.map((gc) => (
                      <li key={gc.label}>
                        <Link
                          href={gc.href}
                          className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-[13px] text-[#4F6172] transition-colors hover:bg-[#F4F7FA] hover:text-[#1779B8]"
                        >
                          <ChevronRight className="h-3 w-3 opacity-30" />
                          {gc.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link
                  key={child.label}
                  href={child.href}
                  className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-[13px] text-[#4F6172] transition-colors hover:bg-[#F4F7FA] hover:text-[#1779B8]"
                >
                  <ChevronRight className="h-3 w-3 opacity-30" />
                  {child.label}
                </Link>
              ),
            )}
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-1">
            {children.map((child) => (
              <Link
                key={child.label}
                href={child.href}
                className="flex items-center gap-2 rounded-lg px-2.5 py-2 text-[13px] text-[#4F6172] transition-colors hover:bg-[#F4F7FA] hover:text-[#1779B8]"
              >
                <ChevronRight className="h-3 w-3 opacity-30" />
                {child.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ═══════════════════════ SIMPLE DROPDOWN ═══════════════════════ */

function SimpleDropdown({ items }: { items: NavItem[] }) {
  return (
    <div className="absolute top-full left-0 z-50 pt-3">
      <div className="min-w-[200px] rounded-xl border border-[#E3E9F0] bg-white p-1.5 shadow-[0_8px_24px_-8px_rgba(14,27,44,0.18),0_2px_6px_rgba(14,27,44,0.06)]">
        {items.map((child) => (
          <Link
            key={child.label}
            href={child.href}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-[13px] font-medium text-[#2A3A4E] transition-colors hover:bg-[#F4F7FA] hover:text-[#1779B8]"
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
            className="font-heading flex h-[50px] flex-1 items-center text-[16px] font-semibold text-[#0E1B2C]"
          >
            {item.label}
          </Link>
          {hasChildren && (
            <button
              onClick={() => setOpen(!open)}
              className="grid h-[50px] w-12 place-items-center text-[#6E7E8E]"
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
          className={`flex h-[42px] flex-1 items-center text-[14px] text-[#2A3A4E] transition-colors hover:text-[#1779B8] ${hasChildren ? 'font-semibold' : ''}`}
        >
          {item.label}
        </Link>
        {hasChildren && (
          <button
            onClick={() => setOpen(!open)}
            className="grid h-[42px] w-10 place-items-center text-[#6E7E8E]"
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
                className="flex h-[38px] items-center text-[13px] text-[#4F6172] transition-colors hover:text-[#1779B8]"
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
