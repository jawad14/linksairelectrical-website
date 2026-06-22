import { siteConfig } from '@/config/site.config';

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);

export function QuoteCTA() {
  const telMobile = siteConfig.mobile.replace(/\s/g, '');
  return (
    <section className="cta-final" id="contact">
      <div className="wrap">
        <span className="eyebrow center reveal" style={{ color: '#7fd0f4' }}>
          Get started
        </span>
        <h2 className="reveal" data-d="1">
          Need electrical or air conditioning work done properly?
        </h2>
        <p className="reveal" data-d="1">
          Tell us what you need and our team will help you with a clear quote, fast response and
          professional workmanship.
        </p>
        <div className="cta-actions reveal" data-d="2">
          <a
            href={`mailto:${siteConfig.email}?subject=Free%20Quote%20Request`}
            className="btn btn-primary"
          >
            Request a Free Quote
          </a>
          <a href={`tel:${telMobile}`} className="btn btn-red">
            <PhoneIcon />
            Call {siteConfig.mobile}
          </a>
        </div>
      </div>
    </section>
  );
}
