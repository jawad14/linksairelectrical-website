import Image from 'next/image';
import { siteConfig } from '@/config/site.config';

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);

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

export function Footer() {
  const year = 2026;
  return (
    <footer className="site">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <a className="brand" href="#top">
              <Image
                src="/logo.png"
                alt="Links Air & Electrical"
                width={183}
                height={68}
                className="brand-logo"
              />
            </a>
            <p>
              Licensed electrical and air conditioning specialists serving Brisbane, the Gold Coast
              and surrounding suburbs since 2014 — delivering clean workmanship, honest quotes and
              reliable service.
            </p>
            <div className="foot-social">
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
          </div>

          <div className="foot-col">
            <h5>Services</h5>
            <a href="#aircon">Air Conditioning</a>
            <a href="#electrical">Electrical Services</a>
            <a href="#builders">Builders &amp; Construction</a>
            <a href="#electrical">Switchboard Upgrades</a>
            <a href="#electrical">EV Chargers</a>
            <a href="#electrical">CCTV &amp; Security</a>
          </div>

          <div className="foot-col">
            <h5>Service Areas</h5>
            <a href="#areas">Brisbane</a>
            <a href="#areas">Gold Coast</a>
            <a href="#areas">Logan</a>
            <a href="#areas">Ipswich</a>
            <a href="#areas">Redlands</a>
            <a href="#areas">Moreton Bay</a>
          </div>

          <div className="foot-col foot-contact">
            <h5>Get in touch</h5>
            <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>
              <PhoneIcon />
              {siteConfig.phone}
            </a>
            <a href={`tel:${siteConfig.mobile.replace(/\s/g, '')}`}>
              <PhoneIcon />
              {siteConfig.mobile}
            </a>
            <p className="em">
              <a href={`mailto:${siteConfig.email}`} style={{ display: 'inline' }}>
                {siteConfig.email}
              </a>
            </p>
            <p className="em">Brisbane &amp; Gold Coast · On call 24/7</p>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© {year} Links Air &amp; Electrical. All rights reserved.</span>
          <span>
            <a href="#">Terms &amp; Conditions</a> · <a href="#">Privacy Policy</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
