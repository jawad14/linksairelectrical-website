'use client';

import { useState, useRef, useEffect, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Phone, Mail } from 'lucide-react';
import { siteConfig, type NavItem } from '@/config/site.config';
import { Text } from '@/components/ui/typography';

const NAVY = '#183964';
const NAV_NAVY = '#0E1B2C';
const RED = '#D2212F';
const RED_HOVER = '#B31C28';

function hasGrandchildren(item: NavItem) {
  return item.children?.some((c) => c.children && c.children.length > 0);
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(76);

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

  const telHref = `tel:${siteConfig.phone.replace(/\s/g, '')}`;

  return (
    <>
      <header ref={headerRef} className="sticky top-0 z-50 w-full">
        {/* ── Top row (logo + phone + CTA on desktop; logo + hamburger on mobile) ── */}
        <div className="w-full" style={{ background: NAVY }}>
          <div className="mx-auto flex w-[95%] max-w-[1400px] items-center justify-between gap-4 py-3 lg:py-2.5">
            {/* Logo */}
            <Link href="/" aria-label="Links Air & Electrical home" className="shrink-0">
              <Image
                src="/logo-cropped.webp"
                alt="Links Air & Electrical"
                width={280}
                height={86}
                priority
                className="h-[56px] w-auto object-contain sm:h-[68px] lg:h-[84px]"
              />
            </Link>

            {/* Right cluster — desktop only */}
            <div className="hidden items-center gap-5 lg:flex">
              <Link
                href={telHref}
                className="inline-flex items-center gap-2 text-[22px] leading-none font-bold text-white transition-colors hover:text-white/80 xl:text-[26px]"
              >
                <Phone className="h-6 w-6" strokeWidth={2.25} />
                {siteConfig.phone}
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center rounded-full px-7 py-3 text-[15px] font-bold whitespace-nowrap text-white transition-colors xl:text-[16px]"
                style={{ background: RED }}
                onMouseEnter={(e) => (e.currentTarget.style.background = RED_HOVER)}
                onMouseLeave={(e) => (e.currentTarget.style.background = RED)}
              >
                Get a free quote
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="grid h-11 w-11 place-items-center rounded text-white transition-colors hover:bg-white/10 lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <div className="flex h-4 w-[22px] flex-col justify-between">
                <span
                  className={`block h-[2.5px] w-full rounded-full bg-current transition-transform duration-200 ${mobileOpen ? 'translate-y-[7px] rotate-45' : ''}`}
                />
                <span
                  className={`block h-[2.5px] w-full rounded-full bg-current transition-opacity duration-200 ${mobileOpen ? 'opacity-0' : ''}`}
                />
                <span
                  className={`block h-[2.5px] w-full rounded-full bg-current transition-transform duration-200 ${mobileOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* ── Bottom row: nav (desktop) / red phone strip (mobile) ── */}
        <div className="hidden lg:block" style={{ background: NAV_NAVY }}>
          <nav className="mx-auto w-[95%] max-w-[1400px]">
            <ul className="m-0 flex list-none items-center justify-center gap-1 p-0 xl:gap-3">
              {siteConfig.nav.map((item) => (
                <DesktopNavItem key={item.label} item={item} />
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} topOffset={headerHeight} />}
    </>
  );
}

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
        className="inline-flex items-center gap-1 px-3 py-3.5 text-[15px] font-medium whitespace-nowrap text-white transition-colors hover:text-white/75"
      >
        {item.label}
        {item.children && (
          <ChevronDown
            className={`h-3.5 w-3.5 opacity-70 transition-transform ${open ? 'rotate-180' : ''}`}
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

function MegaMenu({ items, promo }: { items: NavItem[]; promo?: NavItem['promo'] }) {
  const columnItems = items.filter((i) => i.children && i.children.length > 0);
  const standaloneItems = items.filter((i) => !i.children || i.children.length === 0);

  return (
    <div className="absolute inset-x-0 top-full z-50 pt-0">
      <div className="mx-auto flex justify-center px-4">
        <div className="inline-flex border border-[#E3E9F0] bg-white shadow-[0_16px_40px_-12px_rgba(0,0,0,0.25)]">
          <div className="flex items-stretch p-2">
            {columnItems.map((col) => (
              <div key={col.label} className="w-[220px] px-3 py-3">
                <Link
                  href={col.href}
                  className="mb-2 block text-[14px] font-bold text-[#003366] transition-colors hover:text-[#D2212F]"
                >
                  {col.label}
                </Link>
                <ul className="m-0 list-none space-y-0.5 p-0">
                  {col.children!.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="block rounded-sm px-2 py-[5px] text-[13px] text-[#4F6172] transition-colors hover:bg-[#F4F7FA] hover:text-[#D2212F]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {standaloneItems.length > 0 && (
              <div className="w-[220px] px-3 py-3">
                <span className="mb-2 block text-[14px] font-bold text-[#003366]">
                  Other Services
                </span>
                <ul className="m-0 list-none space-y-0.5 p-0">
                  {standaloneItems.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="block rounded-sm px-2 py-[5px] text-[13px] text-[#4F6172] transition-colors hover:bg-[#F4F7FA] hover:text-[#D2212F]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {promo && (
              <div className="w-[360px] p-2">
                <Link
                  href={promo.href}
                  className="group relative block aspect-[4/3] w-full overflow-hidden rounded-sm"
                >
                  <Image
                    src={promo.image}
                    alt={promo.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="360px"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/35 to-transparent p-5">
                    <Text className="m-0 text-[20px] leading-tight font-bold text-white">
                      {promo.heading}
                    </Text>
                    <Text className="m-0 mt-1.5 text-[13px] text-white/90">{promo.subtitle}</Text>
                    <span
                      className="mt-3 inline-flex w-fit items-center rounded-full px-4 py-1.5 text-[12px] font-bold text-white transition-colors"
                      style={{ background: RED }}
                    >
                      {promo.cta}
                    </span>
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

function SimpleDropdown({ items }: { items: NavItem[] }) {
  return (
    <div className="absolute top-full left-0 z-50 pt-0">
      <div className="min-w-[220px] border border-[#E3E9F0] bg-white py-1 shadow-[0_12px_30px_-10px_rgba(0,0,0,0.25)]">
        {items.map((child) => (
          <Link
            key={child.label}
            href={child.href}
            className="block px-4 py-2 text-[13px] font-medium text-[#2A3A4E] transition-colors hover:bg-[#F4F7FA] hover:text-[#D2212F]"
          >
            {child.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

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
      className="fixed inset-x-0 bottom-0 z-[60] flex flex-col bg-white lg:hidden"
      style={{ top: topOffset }}
    >
      <nav className="flex-1 overflow-y-auto overscroll-contain">
        <ul className="m-0 list-none p-0">
          {siteConfig.nav.map((item) => (
            <MobileNavItem key={item.label} item={item} onClose={onClose} depth={0} />
          ))}
        </ul>
      </nav>

      <div className="shrink-0 border-t border-[#E3E9F0] bg-white px-5 py-4">
        <div className="flex gap-3">
          <Link
            href="/contact-us"
            onClick={onClose}
            className="flex flex-1 items-center justify-center gap-2 rounded-full py-3.5 text-[15px] font-bold text-white"
            style={{ background: RED }}
          >
            Get a Quote
          </Link>
          <Link
            href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
            onClick={onClose}
            className="flex flex-1 items-center justify-center gap-2 rounded-full border border-[#183964] bg-white py-3.5 text-[15px] font-bold text-[#183964]"
          >
            <Phone className="h-4 w-4" />
            Call Us
          </Link>
        </div>
        <div className="mt-3 flex items-center justify-center gap-4 text-[12px] text-[#6E7E8E]">
          <Link
            href={`mailto:${siteConfig.email}`}
            onClick={onClose}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-[#D2212F]"
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
        <div className="flex items-center px-5">
          <Link
            href={item.href}
            onClick={onClose}
            className="font-heading flex min-h-[48px] flex-1 items-center text-[15px] font-bold text-[#003366]"
          >
            {item.label}
          </Link>
          {hasChildren && (
            <button
              onClick={() => setOpen(!open)}
              className="grid min-h-[48px] w-11 place-items-center text-[#6E7E8E]"
              aria-label={open ? `Collapse ${item.label}` : `Expand ${item.label}`}
            >
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
              />
            </button>
          )}
        </div>

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

function MobileChildItem({ item, onClose }: { item: NavItem; onClose: () => void }) {
  const [open, setOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <li>
      <div className="flex items-center">
        <Link
          href={item.href}
          onClick={onClose}
          className={`flex min-h-[44px] flex-1 items-center text-[14px] text-[#2A3A4E] transition-colors hover:text-[#D2212F] ${hasChildren ? 'font-semibold' : ''}`}
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
                className="flex min-h-[44px] items-center text-[13px] text-[#4F6172] transition-colors hover:text-[#D2212F]"
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
