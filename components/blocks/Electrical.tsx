const cards = [
  {
    title: 'Power Points',
    body: 'New outlets, upgrades and USB sockets in any room.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <circle cx="9" cy="10" r="1.2" />
        <circle cx="15" cy="10" r="1.2" />
      </svg>
    ),
  },
  {
    title: 'LED Lights & Downlights',
    body: 'Indoor and outdoor lighting that lifts every space.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="9" r="5" />
        <path d="M9 18h6M10 21h4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Switchboard Upgrades',
    body: 'Safe, modern switchboard replacements and surge protection.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Safety Switches / RCDs',
    body: 'Protect your home and family from electrical faults.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3l7 4v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V7z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Ceiling Fans',
    body: 'Supply and installation of AC and DC ceiling fans.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="2" />
        <path d="M12 4l1.5 6M12 4l-1.5 6M20 12l-6 1.5M20 12l-6-1.5M12 20l-1.5-6M12 20l1.5-6M4 12l6-1.5M4 12l6 1.5" />
      </svg>
    ),
  },
  {
    title: 'Exhaust Fans',
    body: 'Bathroom and ceiling exhaust fans, including heat units.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v8M8 12h8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Oven & Cooktop Installs',
    body: 'Safe connection of ovens, cooktops and appliances.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="8" cy="10" r="1.5" />
        <circle cx="16" cy="10" r="1.5" />
      </svg>
    ),
  },
  {
    title: 'Data & Network Cabling',
    body: 'Reliable data points and structured cabling.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="11" width="18" height="9" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: 'CCTV & Security',
    body: 'Security camera supply and professional installation.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M3 12a9 9 0 0 1 18 0M6 12a6 6 0 0 1 12 0" />
      </svg>
    ),
  },
  {
    title: 'EV Chargers',
    body: 'Home and workplace electric vehicle charging.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="6" y="3" width="12" height="18" rx="2" />
        <path d="M11 7l-2 4h3l-2 4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Smoke Detectors',
    body: 'Compliant smoke alarm supply and installation.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v3M12 15h.01" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Emergency Repairs',
    body: 'Fast response for urgent electrical faults, day or night.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2l-2 7h5l-7 13 2-9H7z" />
      </svg>
    ),
  },
];

export function Electrical() {
  return (
    <section className="pad light" id="electrical">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow red">Electrical Services</span>
          <h2>Residential &amp; commercial electrical, done safely</h2>
          <p>
            From a single power point to a full house rewire, we handle all types of electrical work
            across Brisbane and the Gold Coast — efficiently, neatly and to Australian standards.
          </p>
        </div>
        <div className="elec-grid">
          {cards.map((c, i) => (
            <div
              className="elec-card reveal"
              data-d={i % 4 === 0 ? undefined : String(i % 4)}
              key={c.title}
            >
              <span className="ic">{c.svg}</span>
              <h4>{c.title}</h4>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
