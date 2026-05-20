'use client';

import Image from 'next/image';
import { Container, Section, Stack } from '@/components/ui/layout';
import { H2, Lead } from '@/components/ui/typography';
import { FadeUp } from '@/components/ui/motion';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const galleryImages = [
  { src: '/images/gallery/gallery1.jpg', alt: 'Air conditioning installation' },
  { src: '/images/gallery/gallery2.jpg', alt: 'Split system installation' },
  { src: '/images/gallery/gallery3.jpg', alt: 'Ducted air conditioning' },
  { src: '/images/gallery/gallery4.jpg', alt: 'Electrical work' },
  { src: '/images/gallery/ev-charger.png', alt: 'EV charger installation' },
  { src: '/images/gallery/cooktop.png', alt: 'Cooktop installation' },
  { src: '/images/gallery/ceiling-fan.jpg', alt: 'Ceiling fan installation' },
  { src: '/images/gallery/ducted-outdoor.jpg', alt: 'Ducted outdoor unit' },
  { src: '/images/gallery/triple-install.jpg', alt: 'Triple split system installation' },
  { src: '/images/gallery/led-lights.jpeg', alt: 'LED lights installation' },
  { src: '/images/gallery/multihead.jpg', alt: 'Multi-head split system' },
  { src: '/images/gallery/outdoor-unit.jpg', alt: 'Outdoor AC unit installation' },
];

export function Gallery() {
  return (
    <Section spacing="lg" className="bg-muted/40">
      <Container size="xl">
        <Stack gap="xl" align="center">
          <FadeUp>
            <Stack gap="sm" align="center" className="text-center">
              <H2>Our Featured Works</H2>
              <Lead className="max-w-xl">
                A selection of projects across Brisbane and Gold Coast.
              </Lead>
            </Stack>
          </FadeUp>

          <FadeUp className="w-full">
            <Splide
              options={{
                type: 'loop',
                perPage: 4,
                perMove: 1,
                gap: '0.75rem',
                autoplay: true,
                interval: 3000,
                pauseOnHover: true,
                speed: 500,
                arrows: true,
                pagination: false,
                breakpoints: {
                  480: { perPage: 1, gap: '0.5rem' },
                  640: { perPage: 2, gap: '0.5rem' },
                  1024: { perPage: 3 },
                },
              }}
              aria-label="Work gallery"
              className="gallery-slider"
            >
              {galleryImages.map((img) => (
                <SplideSlide key={img.src}>
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="bg-primary/0 group-hover:bg-primary/30 absolute inset-0 transition-colors" />
                    <div className="from-primary/80 absolute inset-x-0 bottom-0 bg-gradient-to-t to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
                      <span className="text-xs font-medium text-white">{img.alt}</span>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </FadeUp>
        </Stack>
      </Container>

      {/* Arrow styling */}
      <style jsx global>{`
        .gallery-slider .splide__arrow {
          background: var(--color-primary);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          opacity: 1;
          transition: all 0.3s;
        }
        .gallery-slider .splide__arrow:hover {
          opacity: 0.8;
        }
        .gallery-slider .splide__arrow svg {
          fill: white;
          width: 18px;
          height: 18px;
        }
        .gallery-slider .splide__arrow--prev {
          left: -0.5rem;
        }
        .gallery-slider .splide__arrow--next {
          right: -0.5rem;
        }
        @media (min-width: 640px) {
          .gallery-slider .splide__arrow--prev {
            left: -1.25rem;
          }
          .gallery-slider .splide__arrow--next {
            right: -1.25rem;
          }
        }
      `}</style>
    </Section>
  );
}
