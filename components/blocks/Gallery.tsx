'use client';

import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Heading } from '@/components/ui/typography';

const galleryItems = [
  { src: '/images/gallery/gallery19.jpg', alt: 'Air conditioning installation Brisbane' },
  { src: '/images/gallery/gallery20.jpg', alt: 'Air conditioning service Brisbane' },
  { src: '/images/gallery/gallery3.jpg', alt: 'Indoor split system wall mount' },
  { src: '/images/gallery/gallery1.jpg', alt: 'Split system outdoor units installation' },
  { src: '/images/gallery/ev-charger.png', alt: 'EV charger installation in Oxley' },
  { src: '/images/gallery/airtouch5.png', alt: 'AirTouch 5 air conditioning controller' },
  { src: '/images/gallery/cooktop.png', alt: 'Cooktop electrical installation' },
  { src: '/images/gallery/gallery5.jpg', alt: 'Aircon installation in Springfield Brisbane' },
  { src: '/images/gallery/outlets.jpg', alt: 'Electrical outlets installation' },
  { src: '/images/gallery/daikin-ducted.webp', alt: 'Ducted air conditioning Brisbane' },
  { src: '/images/gallery/samsung-ducted.webp', alt: 'Samsung ducted outdoor unit' },
  { src: '/images/gallery/triple-install.jpg', alt: 'Triple split system installation' },
  { src: '/images/gallery/gallery6.jpg', alt: 'Ducted air conditioning in Capalaba' },
  { src: '/images/gallery/gallery7.jpg', alt: 'Air conditioning Gold Coast' },
  { src: '/images/gallery/gallery8.jpg', alt: 'Ducted air conditioning system in Wynnum' },
  { src: '/images/gallery/gallery9.jpg', alt: 'Electrical repair services in Brisbane' },
  { src: '/images/gallery/gallery10.jpg', alt: 'Ducted air conditioning in Camp Hill' },
  { src: '/images/gallery/gallery11.jpg', alt: 'Ducted air conditioning service in Logan' },
  { src: '/images/gallery/gallery12.jpg', alt: 'Air conditioning installation near me' },
  { src: '/images/gallery/gallery13.jpg', alt: 'Air conditioning installation Brisbane' },
  { src: '/images/gallery/gallery14.jpg', alt: 'Air conditioning installation Brisbane' },
  { src: '/images/gallery/gallery15.jpg', alt: 'Air conditioning installation Brisbane' },
  { src: '/images/gallery/gallery16.jpg', alt: 'Air conditioning installers near me' },
  { src: '/images/gallery/gallery17.jpg', alt: 'ActronAir stacked installation' },
  { src: '/images/gallery/ducted-outdoor.jpg', alt: 'Ducted outdoor unit installation' },
  { src: '/images/gallery/gallery18.jpg', alt: 'Air conditioning service Brisbane' },
  { src: '/images/gallery/multihead.jpg', alt: 'Multi-head AC system servicing' },
  { src: '/images/gallery/outdoor-unit.jpg', alt: 'Outdoor AC unit installation' },
];

export function Gallery() {
  return (
    <section className="bg-white py-[clamp(72px,9vw,120px)]">
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
        <div className="mx-auto mb-14 max-w-[760px] text-center">
          <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
            Work Gallery
          </span>
          <Heading
            level={2}
            className="font-heading text-[clamp(30px,3.8vw,48px)] leading-[1.08] font-bold tracking-[-0.02em] text-[#0E1B2C]"
          >
            Our Featured Works
          </Heading>
        </div>

        <Splide
          options={{
            type: 'loop',
            perPage: 4,
            gap: '16px',
            pagination: true,
            arrows: true,
            autoplay: true,
            interval: 3500,
            pauseOnHover: true,
            breakpoints: {
              1024: { perPage: 3 },
              768: { perPage: 2 },
              480: { perPage: 1 },
            },
          }}
          aria-label="Project gallery"
        >
          {galleryItems.map((item) => (
            <SplideSlide key={item.src}>
              <div className="group relative aspect-square overflow-hidden rounded-[14px]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#0E1B2C]/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="font-heading p-4 text-[13px] font-medium text-white">
                    {item.alt}
                  </span>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}
