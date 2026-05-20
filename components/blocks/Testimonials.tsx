'use client';

import { Star } from 'lucide-react';
import { Container, Section, Stack } from '@/components/ui/layout';
import { H2, H3, P } from '@/components/ui/typography';
import { FadeUp } from '@/components/ui/motion';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const reviews = [
  {
    name: 'Margaret McFarlane',
    text: 'Excellent service. Would highly recommend for any aircon or electrical work. A pleasure to deal with.',
  },
  {
    name: 'Sharon Parker',
    text: "I can't recommend this business highly enough. After shopping around I contacted Links Electrical and Air that quoted instantly over the phone for a new Daikin Cora and it was installed next day. Sensational customer care with a couple of lovely installation technicians.",
  },
  {
    name: 'John Gould',
    text: 'Work was done for installation of air con unit. Work was done so professional and polite. Contacted links and next day was installed. Wife and I are extremely happy. Recommend this company to anyone and price was so affordable.',
  },
  {
    name: 'Safari Hair',
    text: 'Links Air & Electrical did an amazing job on a short notice of an Aircon install. Despite the challenging nature of the job. I am very satisfied with the outcome.',
  },
  {
    name: 'Sancha Ochsner',
    text: 'Polite and thorough. Economically priced, on time, and work completed well. Will definitely use again, Thank you.',
  },
  {
    name: 'Vinc Menn',
    text: 'Very professional team a wonderful job was done thanks.',
  },
  {
    name: 'Dmitry',
    text: "I'm very happy with Links. Needed a power outlet. The job was well done. Thanks.",
  },
  {
    name: 'Yann',
    text: 'Good service.',
  },
  {
    name: 'Sibi Varghese',
    text: 'Excellent Service and highly recommended.',
  },
];

export function Testimonials() {
  return (
    <Section spacing="lg">
      <Container size="xl">
        <Stack gap="xl" align="center">
          <FadeUp>
            <Stack gap="sm" align="center" className="text-center">
              <H2>Testimonials</H2>
              <P variant="muted">Trusted by Over 200 Reviewers on Google</P>
            </Stack>
          </FadeUp>

          <FadeUp className="w-full">
            <Splide
              options={{
                type: 'loop',
                perPage: 3,
                perMove: 1,
                gap: '1.5rem',
                autoplay: true,
                interval: 4000,
                pauseOnHover: true,
                speed: 600,
                arrows: true,
                pagination: false,
                breakpoints: {
                  640: { perPage: 1 },
                  1024: { perPage: 2 },
                },
              }}
              aria-label="Customer testimonials"
              className="testimonial-slider"
            >
              {reviews.map((review) => (
                <SplideSlide key={review.name}>
                  <Stack
                    gap="sm"
                    className="border-border bg-card h-full rounded-xl border p-6 shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-primary text-primary-foreground flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-bold">
                        {review.name.charAt(0)}
                      </div>
                      <Stack gap="xs">
                        <H3 className="text-sm">{review.name}</H3>
                        <div className="flex items-center gap-0.5">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} className="size-3 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </Stack>
                    </div>
                    <P variant="muted" className="text-sm leading-relaxed">
                      {review.text}
                    </P>
                  </Stack>
                </SplideSlide>
              ))}
            </Splide>
          </FadeUp>

          <FadeUp>
            <a
              href="https://www.google.com/maps/place/Links+Air+%26+Electrical"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold text-white transition-all hover:scale-105 hover:brightness-110"
            >
              View More Reviews
            </a>
          </FadeUp>
        </Stack>
      </Container>

      {/* Arrow styling */}
      <style jsx global>{`
        .testimonial-slider .splide__arrow {
          background: var(--color-primary);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          opacity: 1;
          transition: all 0.3s;
        }
        .testimonial-slider .splide__arrow:hover {
          opacity: 0.8;
        }
        .testimonial-slider .splide__arrow svg {
          fill: white;
          width: 18px;
          height: 18px;
        }
        .testimonial-slider .splide__arrow--prev {
          left: -0.5rem;
        }
        .testimonial-slider .splide__arrow--next {
          right: -0.5rem;
        }
        @media (min-width: 640px) {
          .testimonial-slider .splide__arrow--prev {
            left: -1.25rem;
          }
          .testimonial-slider .splide__arrow--next {
            right: -1.25rem;
          }
        }
      `}</style>
    </Section>
  );
}
