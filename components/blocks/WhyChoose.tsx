const items = [
  {
    title: 'Licensed & insured',
    body: 'Fully qualified technicians for both electrical and air conditioning work.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3l7 4v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V7z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'On-time & tidy',
    body: 'We arrive when we say we will and leave your space clean.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    title: 'Clear quotes, no hidden fees',
    body: 'Upfront pricing agreed before we begin — no surprises.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: 'Australian standard compliance',
    body: 'Every job completed and tested to current regulations.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    ),
  },
  {
    title: 'Quality parts & trusted brands',
    body: 'We install reliable equipment built to last.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l3 6 7 .5-5.3 4.5L18.5 20 12 16.5 5.5 20l1.8-7L2 8.5 9 8z" />
      </svg>
    ),
  },
  {
    title: 'Fast response times',
    body: 'Quick callouts and emergency support when it matters.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2l-2 7h5l-7 13 2-9H7z" />
      </svg>
    ),
  },
  {
    title: 'Friendly, respectful team',
    body: 'Polite, professional technicians who respect your home.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
      </svg>
    ),
  },
  {
    title: 'Zero-damage approach',
    body: 'Careful installation that protects your walls and finishes.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12h4l3 8 4-16 3 8h4" />
      </svg>
    ),
  },
  {
    title: '100% satisfaction mindset',
    body: "We're not done until you're genuinely happy with the work.",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l3 6 7 .5-5.3 4.5L18.5 20 12 16.5 5.5 20l1.8-7L2 8.5 9 8z" />
      </svg>
    ),
  },
];

export function WhyChoose() {
  return (
    <section className="pad dark-bg">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow center">Why Links Air &amp; Electrical</span>
          <h2>Honest work, fair prices, finished properly</h2>
          <p>
            We treat your home like our own — doing every job safely, cleanly and with care, the
            first time.
          </p>
        </div>
        <div className="why-grid">
          {items.map((it, i) => (
            <div
              className="why-card reveal"
              data-d={i % 3 === 0 ? undefined : String(i % 3)}
              key={it.title}
            >
              <span className="ic">{it.svg}</span>
              <h4>{it.title}</h4>
              <p>{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
