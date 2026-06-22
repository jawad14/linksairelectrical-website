import Image from 'next/image';

const Items = [
  {
    title: 'Split System Installation',
    sub: 'Back-to-back, side entry & up-and-over',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 13h14M5 9h14M9 5v14M15 5v14" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Ducted Air Conditioning',
    sub: 'Design, supply & whole-home install',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="6" width="18" height="6" rx="2" />
        <path d="M7 16v2M12 16v2M17 16v2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Repairs & Maintenance',
    sub: 'Fast diagnosis and lasting fixes',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2l-2 7h5l-7 13 2-9H7z" />
      </svg>
    ),
  },
  {
    title: 'Cleaning & Servicing',
    sub: 'Periodic servicing for healthy air',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    title: 'Replacement & Upgrades',
    sub: 'Modernise older, inefficient units',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 12a9 9 0 1 1-3-6.7M21 4v5h-5" />
      </svg>
    ),
  },
  {
    title: 'Wi-Fi & Zone Control',
    sub: 'Smart, room-by-room temperature',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 12.5a7 7 0 0 1 14 0M8 15.5a4 4 0 0 1 8 0M11 18.5a1 1 0 0 1 2 0" />
      </svg>
    ),
  },
];

const brands = [
  'Daikin',
  'Mitsubishi',
  'Fujitsu',
  'Panasonic',
  'ActronAir',
  'TECO',
  'Hisense',
  'Samsung',
];

export function AirConditioning() {
  return (
    <section className="pad dark-bg" id="aircon">
      <div className="wrap">
        <div className="feature-row">
          <div className="copy reveal">
            <span className="eyebrow">Air Conditioning</span>
            <h2>Cool, quiet comfort installed and serviced properly</h2>
            <p>
              We design, supply, install and maintain split system and ducted air conditioning
              across Brisbane and the Gold Coast — helping you choose the right size and system,
              then keeping it running smoothly for years.
            </p>
            <div className="ac-list">
              {Items.map((it) => (
                <div className="ac-item" key={it.title}>
                  <span className="ic">{it.svg}</span>
                  <div>
                    <b>{it.title}</b>
                    <span>{it.sub}</span>
                  </div>
                </div>
              ))}
            </div>
            <a href="#contact" className="btn btn-primary" style={{ marginTop: '30px' }}>
              Get an air conditioning quote
            </a>
          </div>
          <div className="ac-visual reveal" data-d="1">
            <div className="ac-img">
              <Image
                src="https://linksairelectrical.com.au/wp-content/uploads/2025/04/Ducted-aircon-zoning.jpg"
                alt="Ducted air conditioning with zone control"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="float-badge">
              <div>
                <div className="big">Wi-Fi</div>
                <small>Zone control ready</small>
              </div>
              <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                <div className="big">
                  Supply
                  <br />
                  &amp; Install
                </div>
                <small>Trusted brands</small>
              </div>
            </div>
          </div>
        </div>

        <div className="brands reveal">
          <div className="lab">We supply &amp; install trusted brands</div>
          <div className="brand-row">
            {brands.map((b) => (
              <span className="brand-chip" key={b}>
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
