import Image from 'next/image';

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const cards = [
  {
    href: '#aircon',
    tag: 'Climate Comfort',
    title: 'Air Conditioning',
    body: 'Split systems, ducted air conditioning, repairs, maintenance, Wi-Fi and zone control.',
    cta: 'Explore air conditioning',
    img: 'https://linksairelectrical.com.au/wp-content/uploads/2024/09/DaikinDuctedSystem_14kw.webp',
    alt: 'Air conditioning services',
  },
  {
    href: '#electrical',
    tag: 'Safe & Compliant',
    title: 'Electrical Services',
    body: 'Power points, lighting, switchboards, safety switches, fans, appliances and emergency repairs.',
    cta: 'Explore electrical',
    img: 'https://linksairelectrical.com.au/wp-content/uploads/2024/09/6-outlets-900x442-1.jpg',
    alt: 'Electrical services',
  },
  {
    href: '#builders',
    tag: 'B2B Support',
    title: 'Builders & Construction',
    body: 'New builds, under-slab, rough-ins, fit-offs, shop fit-outs, renovations and full builder support.',
    cta: 'Explore construction',
    img: 'https://linksairelectrical.com.au/wp-content/uploads/2024/09/builder_innerimg001.jpg',
    alt: 'Builders and construction',
  },
];

export function ServiceGateway() {
  return (
    <section className="pad light">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow center">What we do</span>
          <h2>Three trades, one trusted team</h2>
          <p>
            From a single power point to a full new-build fit-out, Links Air &amp; Electrical
            delivers clean, compliant work across every job — big or small.
          </p>
        </div>
        <div className="svc-grid">
          {cards.map((card, i) => (
            <a
              key={card.href}
              href={card.href}
              className="svc-card reveal"
              data-d={i > 0 ? String(i) : undefined}
            >
              <div className="svc-img">
                <Image
                  src={card.img}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="ring" />
              <div className="body">
                <span className="tag">{card.tag}</span>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
                <span className="more">
                  {card.cta} <ArrowRight />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
