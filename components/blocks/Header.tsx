'use client';

import { useEffect, useState } from 'react';
import { siteConfig } from '@/config/site.config';

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);

const BoltLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M13 2L4.5 13.5H11L10 22L19.5 9.5H12.5L13 2Z" fill="#fff" />
  </svg>
);

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

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <header className={`site${scrolled ? 'scrolled' : ''}`} id="header">
        <div className="wrap">
          <nav className="nav">
            <a className="brand" href="#top" aria-label="Links Air & Electrical home">
              <span className="logo">
                <BoltLogo />
              </span>
              <span className="name">
                Links <span>Air</span> &amp; Electrical
                <small>Power · Comfort · Trust</small>
              </span>
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
              <a href="#contact" className="btn btn-primary">
                Get a Free Quote
              </a>
            </div>

            <button className="burger" aria-label="Open menu" onClick={() => setDrawerOpen(true)}>
              <span />
              <span />
              <span />
            </button>
          </nav>
        </div>
      </header>

      <div className={`drawer${drawerOpen ? 'open' : ''}`} aria-hidden={!drawerOpen}>
        <div className="dtop">
          <span className="brand">
            <span className="name" style={{ fontSize: '1rem' }}>
              Links Air &amp; Electrical
            </span>
          </span>
          <button className="close" aria-label="Close menu" onClick={closeDrawer}>
            &times;
          </button>
        </div>
        {siteConfig.nav.map((item) => (
          <a key={item.href} href={item.href} onClick={closeDrawer}>
            {item.label}
          </a>
        ))}
        <div className="dactions">
          <a href={`tel:${telMobile}`} className="btn btn-ghost" onClick={closeDrawer}>
            Call {siteConfig.mobile}
          </a>
          <a href="#contact" className="btn btn-primary" onClick={closeDrawer}>
            Get a Free Quote
          </a>
        </div>
      </div>
    </>
  );
}
