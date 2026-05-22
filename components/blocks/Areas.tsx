import Link from 'next/link';
import { Check, ChevronRight } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Heading, P } from '@/components/ui/typography';

const areas = [
  { label: 'Brisbane (North, South, East & West)', href: '/areas/brisbane' },
  { label: 'Gold Coast', href: '/areas/gold-coast' },
  { label: 'Logan & Ipswich', href: '/areas/logan' },
  { label: 'Redlands', href: '/areas/redlands' },
  { label: 'Moreton Bay & surrounding suburbs', href: '/areas/moreton-bay' },
];

export function Areas() {
  return (
    <section
      id="areas"
      className="relative overflow-hidden bg-[#0E1B2C] py-[clamp(72px,9vw,120px)] text-white before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(700px_400px_at_90%_10%,rgba(33,150,214,0.22),transparent_60%),radial-gradient(500px_300px_at_10%_90%,rgba(130,189,63,0.10),transparent_60%)]"
    >
      <div className="relative mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
        <div className="mx-auto mb-14 max-w-[760px] text-center">
          <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-white/85 uppercase before:inline-block before:h-0.5 before:w-6 before:bg-white/60">
            Where we work
          </span>
          <Heading
            level={2}
            className="font-heading mb-[18px] text-[clamp(30px,3.8vw,48px)] leading-[1.08] font-bold tracking-[-0.02em] text-white"
          >
            Areas We Service
          </Heading>
          <P className="text-white/75">
            Based locally, on the road daily. We service homes and businesses across South East
            Queensland.
          </P>
        </div>

        <div className="grid grid-cols-3 gap-4 max-[760px]:grid-cols-2 max-[420px]:grid-cols-1">
          {areas.map((area) => (
            <Link
              key={area.label}
              href={area.href}
              className="group flex items-center justify-between rounded-xl border border-white/[0.12] bg-white/[0.03] px-6 py-5 text-[16px] font-medium text-white transition-all hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.08]"
            >
              <span className="flex items-center gap-3">
                <Check className="h-4 w-4 shrink-0 text-[#82BD3F]" strokeWidth={2.5} />
                {area.label}
              </span>
              <ChevronRight className="h-4 w-4 text-white/30 transition-transform group-hover:translate-x-1 group-hover:text-white/60" />
            </Link>
          ))}
        </div>

        <P className="mt-8 text-center text-[15px] text-white/60">
          Not sure if we service your area? Just give us a call — we&apos;re local and flexible.
        </P>
      </div>
    </section>
  );
}
