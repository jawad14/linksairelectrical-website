const reviews = [
  {
    body: 'Booked a ducted system for our new home and the whole job was seamless. Clear quote, on time, and they left the place spotless. Couldn’t fault the workmanship.',
    initials: 'SM',
    name: 'Sarah M.',
    loc: 'Camp Hill, Brisbane',
  },
  {
    body: 'Upgraded our switchboard and added safety switches. Professional, tidy and explained everything clearly. Honest pricing with no surprises at the end.',
    initials: 'DT',
    name: 'David T.',
    loc: 'Gold Coast',
  },
  {
    body: "As a builder I've used Links Air across several projects. Reliable on site, great communication, and they always hit the program. Highly recommend.",
    initials: 'RK',
    name: 'Ryan K.',
    loc: 'Logan',
  },
  {
    body: 'Quick response for an emergency electrical fault on a weekend. Sorted it fast and at a fair price. Will be using them for all our future work.',
    initials: 'EJ',
    name: 'Emma J.',
    loc: 'Ipswich',
  },
  {
    body: 'Had multi-head splits installed across the house. The team was friendly, careful with our walls, and the Wi-Fi control setup is fantastic. Great value.',
    initials: 'MP',
    name: 'Michael P.',
    loc: 'Redlands',
  },
];

export function Reviews() {
  return (
    <section className="pad ice" id="reviews">
      <div className="wrap">
        <div className="reviews-head">
          <div className="sec-head reveal" style={{ marginBottom: 0 }}>
            <span className="eyebrow">Reviews</span>
            <h2>Trusted by over 200 local customers</h2>
            <p>
              Real reviews from homeowners, landlords and builders across Brisbane and the Gold
              Coast.
            </p>
          </div>
          <div className="gcard reveal" data-d="1">
            <div className="score">5.0</div>
            <div>
              <div className="stars">★★★★★</div>
              <small>
                <b style={{ color: '#4285F4' }}>Google</b> · 200+ reviews
              </small>
            </div>
          </div>
        </div>

        <div className="rev-track reveal">
          {reviews.map((r) => (
            <article className="rev" key={r.name + r.loc}>
              <div className="stars">★★★★★</div>
              <p>{r.body}</p>
              <div className="who">
                <span className="av">{r.initials}</span>
                <div>
                  <b>{r.name}</b>
                  <small>{r.loc}</small>
                </div>
                <span className="gicon">G</span>
              </div>
            </article>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 30 }} className="reveal">
          <a
            href="https://www.google.com/maps/place/Links+Air+%26+Electrical"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark"
          >
            Read more Google reviews
          </a>
        </div>
      </div>
    </section>
  );
}
