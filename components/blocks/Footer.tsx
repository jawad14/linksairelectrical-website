import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site.config';
import { Heading, P } from '@/components/ui/typography';

export function Footer() {
  return (
    <footer className="bg-[#08111E] pt-[72px] pb-7 text-white/70">
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
        <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 border-b border-white/[0.08] pb-12 max-[900px]:grid-cols-2 max-[520px]:grid-cols-1 max-[520px]:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo.jpg"
                alt="Links Air & Electrical"
                width={140}
                height={54}
                className="h-[54px] w-auto rounded-[10px] bg-white p-1.5 px-2.5"
              />
            </div>
            <P className="mt-[18px] max-w-[320px] text-[14px] leading-[1.6]">
              Locally-run electricians and air conditioning specialists. Punctual, properly
              certified, and tidy enough you&apos;d let us back inside.
            </P>
            <div className="mt-5 flex gap-2.5">
              <SocialIcon href="#" label="Facebook">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </SocialIcon>
              <SocialIcon href="#" label="Instagram" stroke>
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </SocialIcon>
              <SocialIcon href="#" label="Google">
                <path d="M21.35 11.1H12v2.83h5.42c-.24 1.46-1.7 4.27-5.42 4.27-3.26 0-5.93-2.7-5.93-6.05S8.74 6.1 12 6.1c1.86 0 3.1.79 3.81 1.47l2.6-2.5C16.78 3.6 14.6 2.7 12 2.7 6.85 2.7 2.7 6.85 2.7 12s4.15 9.3 9.3 9.3c5.37 0 8.93-3.77 8.93-9.08 0-.61-.07-1.07-.18-1.42z" />
              </SocialIcon>
            </div>
          </div>

          {/* Services */}
          <div>
            <Heading
              level={5}
              className="font-heading mb-[18px] text-[13px] font-semibold tracking-[0.14em] text-white uppercase"
            >
              Services
            </Heading>
            <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
              <li>
                <Link href="#services" className="text-[14px] transition-colors hover:text-white">
                  General electrical
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-[14px] transition-colors hover:text-white">
                  Switchboard upgrades
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-[14px] transition-colors hover:text-white">
                  Air conditioning
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-[14px] transition-colors hover:text-white">
                  LED lighting
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-[14px] transition-colors hover:text-white">
                  EV chargers
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-[14px] transition-colors hover:text-white">
                  Smoke alarms
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <Heading
              level={5}
              className="font-heading mb-[18px] text-[13px] font-semibold tracking-[0.14em] text-white uppercase"
            >
              Company
            </Heading>
            <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
              <li>
                <Link href="#about" className="text-[14px] transition-colors hover:text-white">
                  About us
                </Link>
              </li>
              <li>
                <Link href="#process" className="text-[14px] transition-colors hover:text-white">
                  How we work
                </Link>
              </li>
              <li>
                <Link href="#areas" className="text-[14px] transition-colors hover:text-white">
                  Service areas
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-[14px] transition-colors hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[14px] transition-colors hover:text-white">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <Heading
              level={5}
              className="font-heading mb-[18px] text-[13px] font-semibold tracking-[0.14em] text-white uppercase"
            >
              Contact
            </Heading>
            <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
              <li>
                <Link
                  href="tel:0468432538"
                  className="text-[14px] transition-colors hover:text-white"
                >
                  {siteConfig.phone}
                </Link>
              </li>
              <li>
                <Link
                  href={`mailto:${siteConfig.email}`}
                  className="text-[14px] transition-colors hover:text-white"
                >
                  {siteConfig.email}
                </Link>
              </li>
              <li className="text-[14px]">Sydney metro &amp; surrounds</li>
              <li className="text-[14px]">{siteConfig.hours}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-6 text-[13px] text-white/50">
          <div>
            &copy; {new Date().getFullYear()} Links Air &amp; Electrical Pty Ltd · NSW Electrical
            Licence #{siteConfig.license} · ARC AU#{siteConfig.arc}
          </div>
          <div className="flex gap-6">
            <Link href="#" className="transition-colors hover:text-white">
              Privacy
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              Terms
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  stroke,
  children,
}: {
  href: string;
  label: string;
  stroke?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-full bg-white/[0.06] text-white transition-all hover:-translate-y-0.5 hover:bg-[#2196D6]"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill={stroke ? 'none' : 'currentColor'}
        stroke={stroke ? 'currentColor' : 'none'}
        strokeWidth={stroke ? 2 : 0}
      >
        {children}
      </svg>
    </Link>
  );
}
