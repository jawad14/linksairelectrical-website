import Image from 'next/image';

const items = [
  {
    src: 'https://linksairelectrical.com.au/wp-content/uploads/2024/09/DaikinDuctedSystem_14kw.webp',
    alt: 'Ducted AC installation',
    title: 'Ducted AC Installation',
    loc: 'Camp Hill, Brisbane',
  },
  {
    src: 'https://linksairelectrical.com.au/wp-content/uploads/2024/09/EV-Charger.png',
    alt: 'EV charger installation',
    title: 'EV Charger Installation',
    loc: 'Oxley',
  },
  {
    src: 'https://linksairelectrical.com.au/wp-content/uploads/2024/09/6-outlets-900x442-1.jpg',
    alt: 'Switchboard upgrade',
    title: 'Switchboard Upgrade',
    loc: 'Woolloongabba',
  },
  {
    src: 'https://linksairelectrical.com.au/wp-content/uploads/2024/09/LED_lights.jpeg',
    alt: 'Downlights installation',
    title: 'Downlights Installation',
    loc: 'Teneriffe',
  },
  {
    src: 'https://linksairelectrical.com.au/wp-content/uploads/2024/09/2001_Ceiling-Fan-Installation-Albany-Creek-974x487-1.jpg',
    alt: 'Ceiling fan installation',
    title: 'Ceiling Fan Installation',
    loc: 'Albany Creek',
  },
  {
    src: 'https://linksairelectrical.com.au/wp-content/uploads/2024/09/Multihead-8Kw-scaled.jpg',
    alt: 'Multi-head split system',
    title: 'Multi-Head Split System',
    loc: 'Gold Coast',
  },
  {
    src: 'https://linksairelectrical.com.au/wp-content/uploads/2024/09/builder_innerimg001.jpg',
    alt: 'New build electrical',
    title: 'New Build Electrical',
    loc: 'Springfield',
  },
  {
    src: 'https://linksairelectrical.com.au/wp-content/uploads/2024/09/Cooktop.png',
    alt: 'Cooktop installation',
    title: 'Cooktop Installation',
    loc: 'Bulimba',
  },
];

export function Gallery() {
  return (
    <section className="pad-sm light" id="projects">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow center">Real work, real results</span>
          <h2>Recent projects across Brisbane &amp; the Gold Coast</h2>
          <p>A sample of completed installations — every job photographed on site, never stock.</p>
        </div>
      </div>
      <div className="gal-track reveal">
        {items.map((it) => (
          <figure className="gal-item" key={it.title + it.loc}>
            <div className="gal-img">
              <Image src={it.src} alt={it.alt} fill sizes="360px" style={{ objectFit: 'cover' }} />
            </div>
            <figcaption className="lab">
              <span className="t">{it.title}</span>
              <span className="loc">📍 {it.loc}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="gal-hint">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
        Scroll to see more projects
      </div>
    </section>
  );
}
