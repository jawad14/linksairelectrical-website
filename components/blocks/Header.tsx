'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { siteConfig } from '@/config/site.config';

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);
const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
const SparkIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" />
  </svg>
);
const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
    <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
  </svg>
);
const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 7 9-7" />
  </svg>
);

const navIcons: Record<string, React.ReactElement> = {
  '#top': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 11l9-8 9 8M5 10v10h14V10" />
    </svg>
  ),
  '#aircon': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" strokeLinecap="round" />
    </svg>
  ),
  '#electrical': (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M13 2L4.5 13.5H11L10 22L19.5 9.5H12.5L13 2Z" />
    </svg>
  ),
  '#builders': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
    </svg>
  ),
  '#projects': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 16l5-5 4 4 3-3 6 6" />
      <circle cx="9" cy="9" r="1.5" />
    </svg>
  ),
  '#reviews': (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3 6 7 .5-5.3 4.5L18.5 20 12 16.5 5.5 20l1.8-7L2 8.5 9 8z" />
    </svg>
  ),
  '#areas': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s7-7.5 7-13a7 7 0 0 0-14 0c0 5.5 7 13 7 13z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  ),
  '#contact': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  ),
};

const socialIcons: Record<string, React.ReactElement> = {
  Facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  ),
  WhatsApp: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.4A10 10 0 1 0 12 2zm5 14c-.3.8-1.5 1.5-2.1 1.5-.6.1-1.3.2-3.7-.8s-3.8-3.5-3.9-3.7c-.1-.2-.9-1.2-.9-2.3s.6-1.6.8-1.8c.2-.2.4-.3.6-.3h.5c.2 0 .4 0 .6.5l.7 1.7c.1.2.1.4 0 .5l-.3.5c-.1.2-.3.3-.1.6s.6 1 1.3 1.6c.9.8 1.6 1 1.8 1.1.2.1.4.1.5-.1l.6-.8c.2-.2.3-.2.6-.1l1.6.8c.2.1.4.2.5.3 0 .2 0 .7-.2 1z" />
    </svg>
  ),
};

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>('top');
  const telMobile = siteConfig.mobile.replace(/\s/g, '');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      let cur = 'top';
      const sections = document.querySelectorAll<HTMLElement>('section[id]');
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 120) cur = s.id;
      });
      setActiveId(cur);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  useEffect(() => {
    if (!drawerOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDrawerOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [drawerOpen]);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <header className={`site ${scrolled ? 'scrolled' : ''}`.trim()} id="header">
        <div className="wrap">
          <nav className="nav">
            <a className="brand" href="#top" aria-label="Links Air & Electrical home">
              <Image
                src="/logo.png"
                alt="Links Air & Electrical"
                width={213}
                height={68}
                priority
                className="brand-logo"
              />
            </a>

            <div className="menu">
              {siteConfig.nav.map((item) => {
                const targetId = item.href.replace(/^#/, '');
                const isActive = activeId === targetId;
                return (
                  <a key={item.href} href={item.href} className={isActive ? 'active' : undefined}>
                    {item.label}
                  </a>
                );
              })}
            </div>

            <div className="nav-cta">
              <a className="nav-phone" href={`tel:${telMobile}`}>
                <PhoneIcon />
                {siteConfig.mobile}
              </a>
              <a href="#contact" className="btn btn-primary nav-quote">
                Free Quote
              </a>
            </div>

            <button
              className="burger"
              aria-label="Open menu"
              aria-expanded={drawerOpen}
              onClick={() => setDrawerOpen(true)}
            >
              <span />
              <span />
              <span />
            </button>
          </nav>
        </div>
      </header>

      <div
        className={`drawer-backdrop ${drawerOpen ? 'open' : ''}`.trim()}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      <aside
        className={`drawer ${drawerOpen ? 'open' : ''}`.trim()}
        aria-hidden={!drawerOpen}
        aria-label="Mobile navigation"
        role="dialog"
      >
        <div className="drawer-orb d1" aria-hidden="true" />
        <div className="drawer-orb d2" aria-hidden="true" />

        <div className="dtop">
          <Image
            src="/logo.png"
            alt="Links Air & Electrical"
            width={213}
            height={68}
            className="brand-logo"
          />
          <button className="close" aria-label="Close menu" onClick={closeDrawer}>
            <CloseIcon />
          </button>
        </div>

        <div className="dcta">
          <a href={`tel:${telMobile}`} className="dcta-row call" onClick={closeDrawer}>
            <span className="dcta-ic">
              <PhoneIcon />
            </span>
            <span className="dcta-text">
              <span className="dcta-label">Call now</span>
              <span className="dcta-value">{siteConfig.mobile}</span>
            </span>
            <ArrowRight />
          </a>
          <a href="#contact" className="dcta-row quote" onClick={closeDrawer}>
            <span className="dcta-ic">
              <SparkIcon />
            </span>
            <span className="dcta-text">
              <span className="dcta-label">Free</span>
              <span className="dcta-value">Get a Free Quote</span>
            </span>
            <ArrowRight />
          </a>
        </div>

        <div className="drawer-divider" />

        <nav className="dnav" aria-label="Sections">
          {siteConfig.nav.map((item) => {
            const targetId = item.href.replace(/^#/, '');
            const isActive = activeId === targetId;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={closeDrawer}
                className={`dnav-link ${isActive ? 'active' : ''}`.trim()}
              >
                <span className="dnav-dot" aria-hidden="true" />
                <span className="dnav-ic" aria-hidden="true">
                  {navIcons[item.href] ?? null}
                </span>
                <span className="dnav-label">{item.label}</span>
                <ArrowRight />
              </a>
            );
          })}
        </nav>

        <div className="drawer-divider" />

        <div className="dfoot">
          <div className="dfoot-socials">
            {siteConfig.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
              >
                {socialIcons[s.label] ?? null}
              </a>
            ))}
          </div>
          <a href={`mailto:${siteConfig.email}`} className="dfoot-mail">
            <MailIcon />
            <span>{siteConfig.email}</span>
          </a>
        </div>
      </aside>
    </>
  );
}
