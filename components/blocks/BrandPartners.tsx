import Image from 'next/image';
import { Container, Section } from '@/components/ui/layout';

const brands = [
  { name: 'Daikin', src: '/images/brands/daikin.webp' },
  { name: 'Mitsubishi', src: '/images/brands/mitsubishi.webp' },
  { name: 'Fujitsu', src: '/images/brands/fujitsu.png' },
  { name: 'Panasonic', src: '/images/brands/panasonic.jpg' },
  { name: 'ActronAir', src: '/images/brands/actronair.png' },
  { name: 'Hisense', src: '/images/brands/hisense.webp' },
  { name: 'TECO', src: '/images/brands/teco.webp' },
];

export function BrandPartners() {
  return (
    <Section spacing="sm" className="border-border/60 border-y bg-white">
      <Container size="xl">
        <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-14">
          {brands.map((brand) => (
            <Image
              key={brand.name}
              src={brand.src}
              alt={brand.name}
              width={100}
              height={48}
              className="h-8 w-auto object-contain opacity-50 transition-opacity hover:opacity-100 sm:h-10"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
