import Image from 'next/image';

const stages = [
  {
    num: 'STAGE 01',
    title: 'Under-Slab',
    body: 'Conduit and cabling set out and laid before the pour, coordinated to your plans.',
    img: 'https://linksairelectrical.com.au/wp-content/uploads/2024/09/builder_innerimg001.jpg',
    alt: 'Under-slab electrical rough-in',
  },
  {
    num: 'STAGE 02',
    title: 'Rough-Ins',
    body: 'Wiring, points and brackets installed through the frame ready for lining.',
    img: 'https://linksairelectrical.com.au/wp-content/uploads/2024/09/20210804_185915-scaled.jpg',
    alt: 'Electrical rough-in stage',
  },
  {
    num: 'STAGE 03',
    title: 'Fit-Offs',
    body: 'Final fixtures, switches, points and systems fitted, tested and handed over.',
    img: 'https://linksairelectrical.com.au/wp-content/uploads/2024/09/IMG_20191115_180842-scaled.jpg',
    alt: 'Electrical fit-off stage',
  },
];

const extras = [
  {
    label: 'Plan coordination',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    label: 'Builder communication',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 10h8M8 14h5M21 12a9 9 0 1 1-9-9 9 9 0 0 1 9 9zM3 21l2-4" />
      </svg>
    ),
  },
  {
    label: 'Safety & compliance',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3l7 4v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V7z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    label: 'Residential & commercial',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M3 18l4-6 3 4 3-5 4 7" />
      </svg>
    ),
  },
  {
    label: 'Clean handover',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    ),
  },
];

export function Builders() {
  return (
    <section className="pad builders" id="builders">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Builders &amp; Construction</span>
          <h2>
            Electrical &amp; air conditioning support for new builds, renovations and fit-outs
          </h2>
          <p>
            We partner with builders and developers from slab to handover — coordinating with plans,
            communicating clearly and keeping every stage compliant and on schedule.
          </p>
        </div>

        <div className="stages">
          {stages.map((s, i) => (
            <div className="stage reveal" data-d={i > 0 ? String(i) : undefined} key={s.title}>
              <div className="stage-img">
                <Image
                  src={s.img}
                  alt={s.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="sbody">
                <div className="snum">{s.num}</div>
                <h4>{s.title}</h4>
                <p>{s.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="builders-extra">
          {extras.map((e, i) => (
            <div
              className="bx reveal"
              data-d={i > 0 ? String(((i - 1) % 2) + 1) : undefined}
              key={e.label}
            >
              {e.svg}
              <span>{e.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
