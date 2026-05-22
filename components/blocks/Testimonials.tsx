import Link from 'next/link';
import { Star, ExternalLink } from 'lucide-react';
import { Heading, P } from '@/components/ui/typography';

const reviews = [
  {
    quote:
      'Booked a switchboard upgrade and a new split system install. They turned up early, were genuinely tidy and explained everything as they went. Quote matched the invoice exactly.',
    initials: 'SA',
    name: 'Sarah A.',
    meta: 'Hornsby · Switchboard + Split A/C',
    color: 'from-[#2196D6] to-[#0F5E94]',
  },
  {
    quote:
      'We use Links across our renovation projects. Drawings done properly, certificates back the same week, never a callback. Hard to find that combo these days.',
    initials: 'JM',
    name: 'Josh M.',
    meta: 'Marrickville · Builder, ongoing',
    color: 'from-[#E73438] to-[#D62229]',
  },
  {
    quote:
      'Lost power on a Friday night with a newborn at home. They answered on the second ring and had it sorted within the hour. Properly grateful.',
    initials: 'PD',
    name: 'Priya D.',
    meta: 'Chatswood · Emergency call-out',
    color: 'from-[#82BD3F] to-[#6BA432]',
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-[clamp(72px,9vw,120px)]">
      {/* Subtle background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_0%,rgba(33,150,214,0.06),transparent_60%)]" />

      <div className="relative mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
        <div className="mx-auto mb-14 max-w-[760px] text-center">
          <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#E73438] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#E73438]">
            What customers say
          </span>
          <Heading
            level={2}
            className="font-heading text-[clamp(30px,3.8vw,48px)] leading-[1.08] font-bold tracking-[-0.02em] text-[#0E1B2C]"
          >
            Trusted by Over 200 Reviewers on Google
          </Heading>
        </div>

        <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-1">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="flex flex-col rounded-[14px] border border-[#E3E9F0] bg-white p-8"
            >
              <div className="mb-4 flex gap-0.5 text-[#F5A524]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <P className="font-heading grow text-[17px] leading-[1.5] font-medium text-[#0E1B2C]">
                &ldquo;{r.quote}&rdquo;
              </P>
              <div className="mt-6 flex items-center gap-3 border-t border-[#E3E9F0] pt-5">
                <div
                  className={`grid h-[42px] w-[42px] shrink-0 place-items-center rounded-full bg-gradient-to-br ${r.color} font-heading text-[15px] font-bold text-white`}
                >
                  {r.initials}
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-[#0E1B2C]">{r.name}</div>
                  <div className="mt-0.5 text-[12px] text-[#4F6172]">{r.meta}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="https://www.google.com/maps/place/Links+Air+%26+Electrical"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#1779B8] transition-colors hover:text-[#0F5E94]"
          >
            View More Reviews on Google
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
