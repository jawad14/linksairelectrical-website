const items = [
  { big: '200+', lbl: 'Google Reviews' },
  { big: '5.0★', lbl: 'Average Rating' },
  { big: '2014', lbl: 'Serving Since' },
  { big: '100%', lbl: 'Licensed & Insured' },
  { big: '2', lbl: 'Regions Covered' },
  { big: '✓', lbl: 'Warranties & Guarantees' },
];

export function TrustStrip() {
  return (
    <div className="trust">
      <div className="wrap">
        {items.map((item, i) => (
          <div
            key={item.lbl}
            className="item reveal"
            data-d={i > 0 ? String(((i - 1) % 3) + 1) : undefined}
          >
            <span className="big">{item.big}</span>
            <span className="lbl">{item.lbl}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
