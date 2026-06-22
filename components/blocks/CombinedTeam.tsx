const steps = [
  { t: 'Inspect', d: 'On-site assessment and honest advice on the right system.' },
  { t: 'Quote', d: 'A clear, upfront quote with no hidden charges.' },
  { t: 'Install', d: 'Tidy, code-compliant workmanship by licensed technicians.' },
  { t: 'Test', d: 'Every job tested and verified to Australian standards.' },
  { t: 'Clean Handover', d: 'We leave your space as tidy as we found it.' },
];

export function CombinedTeam() {
  return (
    <section className="pad ice">
      <div className="wrap">
        <div className="split">
          <div className="copy reveal">
            <span className="eyebrow">One team for comfort &amp; power</span>
            <h2>
              Both trades under one roof — so you only make <span className="gtext">one call</span>
            </h2>
            <p>
              Most homes and projects need electrical and air conditioning work at some point.
              Instead of juggling separate trades and chasing two quotes, Links Air &amp; Electrical
              handles both — coordinated, compliant and finished to the same high standard.
            </p>
            <p>
              The result is fewer trades to manage, tighter scheduling, and one accountable team
              from first inspection to clean handover.
            </p>
            <a href="#contact" className="btn btn-dark" style={{ marginTop: '10px' }}>
              Book one team for the job
            </a>
          </div>
          <div className="process-stack reveal" data-d="1">
            {steps.map((s, i) => (
              <div className="pstep" key={s.t}>
                <span className="n">{i + 1}</span>
                <div>
                  <div className="pt">{s.t}</div>
                  <div className="pd">{s.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
