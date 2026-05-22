import Image from 'next/image';
import { Heading, P } from '@/components/ui/typography';

export function TrustedExperts() {
  return (
    <section className="bg-[#F4F7FA] py-[clamp(72px,9vw,120px)]">
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
        <div className="grid grid-cols-[1.1fr_1fr] items-center gap-[clamp(32px,6vw,80px)] max-[900px]:grid-cols-1">
          {/* Text */}
          <div>
            <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
              Who we are
            </span>
            <Heading
              level={2}
              className="font-heading text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
            >
              Your Trusted Local Experts in Electrical and Air Conditioning
            </Heading>
            <P className="mt-5 text-[17px] leading-[1.7] text-[#4F6172]">
              Links Air &amp; Electrical is your trustworthy team for everything electrical and air
              conditioning. Whether you need a light installation, power point upgrade, or an air
              conditioner fitting, we have all the right skills and experience to do the job
              flawlessly.
            </P>
            <P className="mt-4 text-[16px] leading-[1.7] text-[#4F6172]">
              We provide services across Brisbane and the Gold Coast, offering fast &amp; affordable
              solutions for homes and businesses.
            </P>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] max-[900px]:max-w-[560px]">
            <div className="absolute inset-0 overflow-hidden rounded-[22px] shadow-[0_24px_60px_-20px_rgba(14,27,44,0.25)]">
              <Image
                src="/images/services/construction.jpg"
                alt="Links Air & Electrical team at work"
                fill
                className="object-cover"
                sizes="(max-width: 900px) 560px, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
