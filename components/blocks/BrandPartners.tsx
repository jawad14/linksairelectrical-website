'use client';

import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const brands = [
  { src: '/images/brands/daikin.webp', alt: 'Daikin', width: 120, height: 40 },
  {
    src: '/images/brands/mitsubishi.webp',
    alt: 'Mitsubishi Heavy Industries',
    width: 130,
    height: 40,
  },
  { src: '/images/brands/fujitsu.webp', alt: 'Fujitsu', width: 120, height: 40 },
  { src: '/images/brands/panasonic.webp', alt: 'Panasonic', width: 120, height: 40 },
  { src: '/images/brands/actronair.webp', alt: 'ActronAir', width: 120, height: 40 },
  { src: '/images/brands/hisense.webp', alt: 'Hisense', width: 110, height: 40 },
  { src: '/images/brands/teco.webp', alt: 'TECO', width: 100, height: 40 },
  {
    src: '/images/brands/mitsubishi-electric.webp',
    alt: 'Mitsubishi Electric',
    width: 130,
    height: 40,
  },
];

export function BrandPartners() {
  return (
    <section className="border-y border-[#E3E9F0] bg-white py-10">
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
        <Splide
          options={{
            type: 'loop',
            perPage: 6,
            gap: '40px',
            pagination: false,
            arrows: false,
            autoplay: true,
            interval: 2500,
            speed: 800,
            pauseOnHover: true,
            drag: true,
            breakpoints: {
              1024: { perPage: 5 },
              768: { perPage: 4 },
              520: { perPage: 3 },
              380: { perPage: 2 },
            },
          }}
          aria-label="Brand partners"
        >
          {brands.map((brand) => (
            <SplideSlide key={brand.alt}>
              <div className="flex h-16 items-center justify-center">
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={brand.width}
                  height={brand.height}
                  className="max-h-10 w-auto object-contain opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}
