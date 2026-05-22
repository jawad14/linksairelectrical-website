import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Heading, P } from '@/components/ui/typography';

export function Footer() {
  return (
    <footer className="bg-[#08111E] pt-[72px] pb-7 text-white/70">
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
        <div className="grid grid-cols-[1.4fr_1fr_1fr] gap-12 border-b border-white/[0.08] pb-12 max-[900px]:grid-cols-2 max-[520px]:grid-cols-1 max-[520px]:gap-8">
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
              Links Air &amp; Electrical is a leading name in the electrical and air conditioning
              industry, providing complete 360-degree solutions across Brisbane and the Gold Coast.
            </P>
            <div className="mt-5 flex gap-2.5">
              {siteConfig.social.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/[0.06] text-[13px] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#2196D6]"
                >
                  {s.label[0]}
                </Link>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <Heading
              level={5}
              className="font-heading mb-[18px] text-[13px] font-semibold tracking-[0.14em] text-white uppercase"
            >
              Useful Links
            </Heading>
            <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
              <li>
                <Link href="/" className="text-[14px] transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-[14px] transition-colors hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/air-conditioning"
                  className="text-[14px] transition-colors hover:text-white"
                >
                  AC Services
                </Link>
              </li>
              <li>
                <Link
                  href="/electricals"
                  className="text-[14px] transition-colors hover:text-white"
                >
                  Electrical Services
                </Link>
              </li>
              <li>
                <Link
                  href="/building-and-construction"
                  className="text-[14px] transition-colors hover:text-white"
                >
                  Building &amp; Construction
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-[14px] transition-colors hover:text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-[14px] transition-colors hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <Heading
              level={5}
              className="font-heading mb-[18px] text-[13px] font-semibold tracking-[0.14em] text-white uppercase"
            >
              Contact Us
            </Heading>
            <ul className="m-0 flex list-none flex-col gap-4 p-0">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#2196D6]" />
                <div>
                  <Link
                    href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                    className="text-[14px] font-semibold text-white transition-colors hover:text-[#4FB3E8]"
                  >
                    {siteConfig.phone}
                  </Link>
                  <div className="mt-0.5 text-[13px]">
                    Mobile:{' '}
                    <Link
                      href={`tel:${siteConfig.mobile.replace(/\s/g, '')}`}
                      className="transition-colors hover:text-white"
                    >
                      {siteConfig.mobile}
                    </Link>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#2196D6]" />
                <Link
                  href={`mailto:${siteConfig.email}`}
                  className="text-[14px] transition-colors hover:text-white"
                >
                  {siteConfig.email}
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#2196D6]" />
                <span className="text-[14px]">Brisbane and Gold Coast</span>
              </li>
            </ul>

            <div className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-[#82BD3F] px-3 py-1.5 text-[12px] font-semibold text-[#0E1B2C]">
              <span className="h-2 w-2 rounded-full bg-[#0E1B2C]" />
              We&apos;re On Call
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-6 text-[13px] text-white/50">
          <div>
            &copy; {new Date().getFullYear()} All Rights Reserved by Links Air &amp; Electrical
          </div>
          <div className="flex gap-6">
            <Link href="#" className="transition-colors hover:text-white">
              Terms &amp; Conditions
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
