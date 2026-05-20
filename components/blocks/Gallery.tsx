import Image from 'next/image';
import { Container, Section, Stack } from '@/components/ui/layout';
import { H2, Lead } from '@/components/ui/typography';

const galleryImages = [
  { src: '/images/gallery/gallery1.jpg', alt: 'Air conditioning installation' },
  { src: '/images/gallery/gallery2.jpg', alt: 'Split system installation' },
  { src: '/images/gallery/gallery3.jpg', alt: 'Ducted air conditioning' },
  { src: '/images/gallery/gallery4.jpg', alt: 'Electrical work' },
  { src: '/images/gallery/ev-charger.png', alt: 'EV charger installation' },
  { src: '/images/gallery/cooktop.png', alt: 'Cooktop installation' },
  { src: '/images/gallery/daikin-ducted.webp', alt: 'Daikin ducted system' },
  { src: '/images/gallery/samsung-ducted.webp', alt: 'Samsung ducted outdoor unit' },
];

export function Gallery() {
  return (
    <Section spacing="lg">
      <Container size="xl">
        <Stack gap="xl" align="center">
          <Stack gap="sm" align="center" className="text-center">
            <H2>Our Recent Work</H2>
            <Lead className="max-w-2xl">
              Browse our portfolio of air conditioning and electrical projects across Brisbane and
              Gold Coast.
            </Lead>
          </Stack>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {galleryImages.map((img) => (
              <div
                key={img.src}
                className="group relative aspect-square overflow-hidden rounded-lg"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="bg-primary/0 group-hover:bg-primary/40 absolute inset-0 transition-colors" />
                <div className="absolute inset-0 flex items-end p-3 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="text-xs font-medium text-white">{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
