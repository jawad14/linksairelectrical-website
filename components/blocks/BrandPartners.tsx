import Image from 'next/image';
import { Container, Section, Stack } from '@/components/ui/layout';
import { H2 } from '@/components/ui/typography';

const brands = [
  { name: 'Daikin', src: '/images/brands/daikin.webp' },
  { name: 'Mitsubishi', src: '/images/brands/mitsubishi.webp' },
  { name: 'Fujitsu', src: '/images/brands/fujitsu.png' },
  { name: 'Panasonic', src: '/images/brands/panasonic.jpg' },
  { name: 'ActronAir', src: '/images/brands/actronair.png' },
  { name: 'Hisense', src: '/images/brands/hisense.webp' },
  { name: 'TECO', src: '/images/brands/teco.webp' },
  { name: 'Mitsubishi Electric', src: '/images/brands/mitsubishi-electric.png' },
];

export function BrandPartners() {
  return (
    <Section spacing="md">
      <Container size="xl">
        <Stack gap="lg" align="center">
          <H2 className="text-center">Brands We Service &amp; Install</H2>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="flex items-center justify-center grayscale transition-all hover:grayscale-0"
              >
                <Image
                  src={brand.src}
                  alt={brand.name}
                  width={120}
                  height={60}
                  className="h-10 w-auto object-contain sm:h-12"
                />
              </div>
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
