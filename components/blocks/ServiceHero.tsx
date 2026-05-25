import Image from 'next/image';
import { Heading } from '@/components/ui/typography';

export function ServiceHero({
  eyebrow,
  title,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative h-[280px] overflow-hidden sm:h-[360px]">
      <Image src={image} alt={imageAlt} fill className="object-cover" priority sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0E1B2C]/85 to-[#0E1B2C]/40" />
      <div className="relative mx-auto flex h-full max-w-[1240px] items-center px-[clamp(20px,4vw,56px)]">
        <div>
          <span className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-white/80 uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
            {eyebrow}
          </span>
          <Heading
            level={1}
            className="font-heading mt-4 max-w-[600px] text-[clamp(30px,4vw,50px)] leading-[1.1] font-extrabold tracking-[-0.02em] text-white"
          >
            {title}
          </Heading>
        </div>
      </div>
    </section>
  );
}
