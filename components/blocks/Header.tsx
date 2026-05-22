'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import { siteConfig, type NavItem } from '@/config/site.config';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E3E9F0] bg-white/[0.92] backdrop-blur-[10px] backdrop-saturate-[140%]">
      <div className="mx-auto flex h-[84px] max-w-[1240px] items-center justify-between px-[clamp(20px,4vw,56px)] max-sm:h-[72px]">
        <Link href="/" className="flex items-center" aria-label="Links Air & Electrical home">
          <Image
            src="/logo.jpg"
            alt="Links Air & Electrical"
            width={160}
            height={62}
            className="h-[62px] w-auto object-contain max-sm:h-[50px]"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="max-[960px]:hidden">
          <ul className="m-0 flex list-none items-center gap-7 p-0">
            {siteConfig.nav.map((item) => (
              <li key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 text-[15px] font-medium text-[#2A3A4E] transition-colors hover:text-[#1779B8]"
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-3.5 w-3.5 opacity-50" />}
                </Link>

                {item.children && (
                  <div className="pointer-events-none absolute top-full left-0 z-50 pt-2 opacity-0 transition-all group-hover:pointer-events-auto group-hover:opacity-100">
                    <DropdownMenu items={item.children} />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-2.5 rounded-full px-3.5 py-2 text-[14px] font-semibold text-[#0E1B2C] max-sm:hidden"
          >
            <Phone className="h-4 w-4 text-[#2196D6]" />
            {siteConfig.phone}
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2.5 rounded-full bg-[#E73438] px-[22px] py-3.5 text-[15px] font-semibold text-white shadow-[0_6px_16px_-6px_rgba(231,52,56,0.6)] transition-transform hover:-translate-y-px hover:bg-[#D62229]"
          >
            Get a Quote
            <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="ml-1 grid h-11 w-11 place-items-center rounded-lg text-[#0E1B2C] min-[961px]:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t border-[#E3E9F0] bg-white min-[961px]:hidden">
          <div className="mx-auto max-h-[70vh] max-w-[1240px] overflow-y-auto px-[clamp(20px,4vw,56px)] py-4">
            <MobileNav items={siteConfig.nav} onClose={() => setMobileOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
}

function DropdownMenu({ items }: { items: NavItem[] }) {
  return (
    <div className="min-w-[240px] rounded-[14px] border border-[#E3E9F0] bg-white p-2 shadow-[0_8px_24px_-8px_rgba(14,27,44,0.18),0_2px_6px_rgba(14,27,44,0.06)]">
      {items.map((child) => (
        <div key={child.label} className="group/sub relative">
          <Link
            href={child.href}
            className="flex items-center justify-between rounded-lg px-3.5 py-2.5 text-[14px] font-medium text-[#2A3A4E] transition-colors hover:bg-[#F4F7FA] hover:text-[#1779B8]"
          >
            {child.label}
            {child.children && <ChevronRight className="h-3.5 w-3.5 opacity-40" />}
          </Link>

          {child.children && (
            <div className="pointer-events-none absolute top-0 left-full z-50 pl-1 opacity-0 transition-all group-hover/sub:pointer-events-auto group-hover/sub:opacity-100">
              <DropdownMenu items={child.children} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function MobileNav({ items, onClose }: { items: NavItem[]; onClose: () => void }) {
  return (
    <ul className="m-0 flex list-none flex-col gap-1 p-0">
      {items.map((item) => (
        <MobileNavItem key={item.label} item={item} onClose={onClose} />
      ))}
    </ul>
  );
}

function MobileNavItem({
  item,
  onClose,
  depth = 0,
}: {
  item: NavItem;
  onClose: () => void;
  depth?: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <li>
      <div className="flex items-center">
        <Link
          href={item.href}
          onClick={onClose}
          className="flex-1 rounded-lg px-3 py-2.5 text-[15px] font-medium text-[#2A3A4E] transition-colors hover:bg-[#F4F7FA] hover:text-[#1779B8]"
          style={{ paddingLeft: `${12 + depth * 16}px` }}
        >
          {item.label}
        </Link>
        {item.children && (
          <button
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-lg text-[#6E7E8E] hover:bg-[#F4F7FA]"
          >
            <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
          </button>
        )}
      </div>
      {open && item.children && (
        <ul className="m-0 list-none p-0">
          {item.children.map((child) => (
            <MobileNavItem key={child.label} item={child} onClose={onClose} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  );
}
