import { Heading, P } from '@/components/ui/typography';

export function About() {
  return (
    <section id="about" className="py-[clamp(72px,9vw,120px)]">
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
        <div className="grid grid-cols-[1.1fr_1fr] items-center gap-20 max-[900px]:grid-cols-1 max-[900px]:gap-12">
          {/* Text */}
          <div>
            <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
              About Links Air &amp; Electrical
            </span>
            <Heading
              level={2}
              className="font-heading text-[clamp(30px,3.8vw,48px)] leading-[1.08] font-bold tracking-[-0.02em] text-[#0E1B2C]"
            >
              A locally-run team that treats your home like our own.
            </Heading>
            <P className="mt-5 text-[17px] text-[#4F6172]">
              Links Air &amp; Electrical was founded by a small group of qualified electricians
              who&apos;d had enough of the no-shows, the runaround quotes, and the rough work that
              goes on in our trade.
            </P>
            <P className="mt-4 text-[16px] text-[#4F6172]">
              We built Links to be the opposite — punctual, honest, and obsessive about doing the
              work properly. Today we service hundreds of homes, builders and small businesses
              across the region, with the same hands-on approach we started with.
            </P>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[#E3E9F0] pt-8 max-[520px]:grid-cols-2">
              <div>
                <div className="font-heading text-[38px] leading-none font-extrabold text-[#1779B8]">
                  15+
                </div>
                <div className="mt-1.5 text-[13px] text-[#4F6172]">Years in the trade</div>
              </div>
              <div>
                <div className="font-heading text-[38px] leading-none font-extrabold text-[#E73438]">
                  2,400+
                </div>
                <div className="mt-1.5 text-[13px] text-[#4F6172]">Jobs completed</div>
              </div>
              <div>
                <div className="font-heading text-[38px] leading-none font-extrabold text-[#6BA432]">
                  4.9★
                </div>
                <div className="mt-1.5 text-[13px] text-[#4F6172]">Average rating</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-gradient-to-br from-[#82BD3F] to-[#6BA432] shadow-[0_24px_60px_-20px_rgba(14,27,44,0.25)]">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,rgba(255,255,255,0.08)_0_2px,transparent_2px_20px)]" />
            <div className="absolute top-12 -left-[22px] max-w-[260px] rounded-[14px] bg-white p-[18px_22px] shadow-[0_8px_24px_-8px_rgba(14,27,44,0.18),0_2px_6px_rgba(14,27,44,0.06)]">
              <div className="text-[14px] leading-[1.4] font-medium text-[#0E1B2C]">
                &ldquo;If it&apos;s not work I&apos;d put in my own house, it doesn&apos;t leave the
                van.&rdquo;
              </div>
              <div className="mt-2 text-[12px] text-[#4F6172]">
                — Mark, Director &amp; Licensed Electrician
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
