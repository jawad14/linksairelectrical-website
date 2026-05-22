'use client';

import Link from 'next/link';
import { Star, ExternalLink } from 'lucide-react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
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
  {
    quote:
      'Had three split systems installed across the house. The team was professional from the quote right through to cleanup. Pipework was neat and they even helped us pick the right units for each room.',
    initials: 'DK',
    name: 'Daniel K.',
    meta: 'Carindale · 3x Split System Install',
    color: 'from-[#2196D6] to-[#0F5E94]',
  },
  {
    quote:
      'Called about a dodgy power point that was sparking. They came out same day, found the issue and replaced the lot. Very safety-conscious and explained what went wrong so we understood.',
    initials: 'LT',
    name: 'Lisa T.',
    meta: 'Logan · Emergency Electrical',
    color: 'from-[#E73438] to-[#D62229]',
  },
  {
    quote:
      'Needed a full electrical fit-out for our new office space. Links handled everything from the switchboard to data cabling. Delivered on time and the final walkthrough was thorough.',
    initials: 'RB',
    name: 'Ryan B.',
    meta: 'Fortitude Valley · Commercial Fit-out',
    color: 'from-[#82BD3F] to-[#6BA432]',
  },
  {
    quote:
      'As a property manager I deal with a lot of tradies. Links are consistently reliable — they show up on time, send invoices promptly, and the tenants always report a good experience.',
    initials: 'MW',
    name: 'Michelle W.',
    meta: 'Gold Coast · Property Management',
    color: 'from-[#2196D6] to-[#0F5E94]',
  },
  {
    quote:
      'Fantastic service from start to finish. Had a ducted system installed and the team kept the house spotless throughout. Very impressed with the attention to detail.',
    initials: 'AT',
    name: 'Andrew T.',
    meta: 'Ipswich · Ducted A/C Install',
    color: 'from-[#E73438] to-[#D62229]',
  },
  {
    quote:
      'Quick, affordable, and friendly. Got our ceiling fans, downlights and safety switches all done in one visit. Will definitely use again for our next reno.',
    initials: 'NC',
    name: 'Nina C.',
    meta: 'Redlands · Lighting + Safety Switches',
    color: 'from-[#82BD3F] to-[#6BA432]',
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#F4F7FA] py-[clamp(72px,9vw,120px)]">
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
        <div className="mx-auto mb-14 max-w-[760px] text-center">
          <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#E73438] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#E73438]">
            What customers say
          </span>
          <Heading
            level={2}
            className="font-heading text-[clamp(30px,3.8vw,48px)] leading-[1.08] font-bold tracking-[-0.02em] text-[#0E1B2C]"
          >
            Don&apos;t Take Our Word for It — Hear From 200+ Happy Homeowners
          </Heading>
        </div>

        <Splide
          options={{
            type: 'loop',
            perPage: 3,
            gap: '20px',
            pagination: true,
            arrows: true,
            autoplay: true,
            interval: 5000,
            pauseOnHover: true,
            breakpoints: {
              900: { perPage: 2 },
              560: { perPage: 1 },
            },
          }}
          aria-label="Customer testimonials"
        >
          {reviews.map((r) => (
            <SplideSlide key={r.name}>
              <article className="flex h-full flex-col rounded-[14px] border border-[#E3E9F0] bg-white p-8">
                <div className="mb-4 flex gap-0.5 text-[#F5A524]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <P className="font-heading grow text-[16px] leading-[1.55] font-medium text-[#0E1B2C]">
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
            </SplideSlide>
          ))}
        </Splide>

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
