import Image from 'next/image';
import { siteConfig } from '@/config/site.config';

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="17">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);
const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3 6 7 .5-5.3 4.5L18.5 20 12 16.5 5.5 20l1.8-7L2 8.5 9 8z" />
  </svg>
);
const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 12l2 2 4-4M12 3l7 4v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V7z" />
  </svg>
);

export function Hero() {
  const telMobile = siteConfig.mobile.replace(/\s/g, '');
  return (
    <section className="hero" id="top">
      <span className="orb o1" />
      <span className="orb o2" />
      <span className="orb o3" />
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-copy reveal in">
            <span className="eyebrow">Licensed Electrical &amp; Air Conditioning</span>
            <h1>
              Power, Comfort &amp;
              <br />
              <span className="hl">Air Conditioning</span>
              <br />
              Done Right.
            </h1>
            <p className="sub">
              Licensed electrical and air conditioning specialists serving Brisbane, the Gold Coast
              and surrounding suburbs — with clean workmanship, honest quotes and reliable service
              since 2014.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                Get a Free Quote
                <ArrowRight />
              </a>
              <a href={`tel:${telMobile}`} className="btn btn-ghost">
                <PhoneIcon />
                Call Now
              </a>
            </div>
            <div className="hero-badges">
              <span>
                <StarIcon /> 5.0 Google Rating
              </span>
              <span>200+ Reviews</span>
              <span>
                <ShieldIcon /> Licensed &amp; Insured
              </span>
              <span>No Hidden Charges</span>
            </div>
            <div className="hero-emergency">
              <span className="pulse" /> 24/7 Emergency Support across Brisbane &amp; Gold Coast
            </div>
          </div>

          <div className="hero-visual reveal in" data-d="1">
            <div className="hv-glow" />
            <div className="hv-card hv-main">
              <Image
                src="https://linksairelectrical.com.au/wp-content/uploads/2024/09/Tripple-installation.jpg"
                alt="Air conditioning installation by Links Air & Electrical"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 520px"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="hv-card hv-sub">
              <Image
                src="https://linksairelectrical.com.au/wp-content/uploads/2024/09/EV-Charger.png"
                alt="EV charger installation"
                fill
                sizes="210px"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="hv-rating">
              <div>
                <div className="num">5.0</div>
                <div className="stars">★★★★★</div>
              </div>
              <div>
                <small>
                  Rated on
                  <br />
                  <b
                    style={{
                      color: '#4285F4',
                      fontFamily: 'var(--font-heading), Sora, sans-serif',
                    }}
                  >
                    Google
                  </b>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
