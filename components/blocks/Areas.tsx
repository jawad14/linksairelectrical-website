import { Check } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Heading, P } from '@/components/ui/typography';

export function Areas() {
  return (
    <section
      id="areas"
      className="relative overflow-hidden bg-[#0E1B2C] py-[clamp(72px,9vw,120px)] text-white before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(700px_400px_at_90%_10%,rgba(33,150,214,0.22),transparent_60%),radial-gradient(500px_300px_at_10%_90%,rgba(130,189,63,0.10),transparent_60%)]"
    >
      <div className="relative mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
        <div className="mb-14 max-w-[760px]">
          <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-white/85 uppercase before:inline-block before:h-0.5 before:w-6 before:bg-white/60">
            Where we work
          </span>
          <Heading
            level={2}
            className="font-heading mb-[18px] text-[clamp(30px,3.8vw,48px)] leading-[1.08] font-bold tracking-[-0.02em] text-white"
          >
            Servicing homes and businesses across the region.
          </Heading>
          <P className="text-white/75">
            Based locally, on the road daily. If your suburb isn&apos;t listed, give us a call — we
            likely cover it.
          </P>
        </div>

        <div className="grid grid-cols-4 gap-3 max-[760px]:grid-cols-2 max-[420px]:grid-cols-1">
          {siteConfig.serviceAreas.map((area) => (
            <div
              key={area}
              className="flex items-center gap-3 rounded-xl border border-white/[0.12] bg-white/[0.03] px-5 py-[18px] text-[15px] text-white transition-all hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.08]"
            >
              <Check className="h-4 w-4 shrink-0 text-[#82BD3F]" strokeWidth={2.5} />
              {area}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
