'use client';

import Image from 'next/image';
import { Container, Section, Stack } from '@/components/ui/layout';
import { H2, Lead } from '@/components/ui/typography';
import { FadeUp, StaggerGroup, StaggerItem } from '@/components/ui/motion';

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
              <H2>Our Recent Work</H2>
              <Lead className="max-w-xl">
                A selection of projects across Brisbane and Gold Coast.
              </Lead>
            </Stack>
          </FadeUp>

          <StaggerGroup className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {galleryImages.map((img) => (
              <StaggerItem key={img.src}>
                <div className="group relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="bg-primary/0 group-hover:bg-primary/30 absolute inset-0 transition-colors" />
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Stack>
      </Container>
    </Section>
  );
}
