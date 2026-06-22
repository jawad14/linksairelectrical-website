import { siteConfig } from '@/config/site.config';

export function Areas() {
  return (
    <section className="pad areas" id="areas">
      <div className="wrap">
        <div className="area-layout">
          <div className="reveal">
            <span className="eyebrow">Service Areas</span>
            <h2>Local across South-East Queensland</h2>
            <p className="area-intro">
              We&rsquo;re a local, flexible team covering Brisbane and the Gold Coast and everywhere
              in between. Not sure if we reach you? Give us a call — we probably do.
            </p>
            <div className="area-chips">
              {siteConfig.serviceAreas.map((a) => (
                <span className="area-chip" key={a}>
                  <span className="d" />
                  {a}
                </span>
              ))}
            </div>
          </div>
          <div className="area-visual reveal" data-d="1">
            <div className="area-ring r1" />
            <div className="area-ring r2" />
            <div className="area-ring r3" />
            <div className="area-core">
              <b>
                Brisbane
                <br />
                &amp; Gold Coast
              </b>
            </div>
            <span className="area-pin p1" />
            <span className="area-pin p2" />
            <span className="area-pin p3" />
            <span className="area-pin p4" />
            <span className="area-pin p5" />
          </div>
        </div>
      </div>
    </section>
  );
}
