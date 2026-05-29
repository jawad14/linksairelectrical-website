import Image from 'next/image';
import Link from 'next/link';
import { Phone, Smartphone, Mail, MapPin } from 'lucide-react';
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
                src="/logo-cropped.webp"
                alt="Links Air & Electrical"
                width={140}
                height={54}
                className="h-[54px] w-auto"
              />
            </div>
            <P className="mt-[18px] max-w-[320px] text-[14px] leading-[1.6] text-white/70">
              Links Air &amp; Electrical is a leading name when it comes to 360-degree air
              conditioning solutions at an unbeatable price.
            </P>
            <div className="mt-5 flex gap-2.5">
              <SocialIcon href={siteConfig.social[1]?.href || '#'} label="Instagram">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </SocialIcon>
              <SocialIcon href={siteConfig.social[0]?.href || '#'} label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </SocialIcon>
              <SocialIcon href={siteConfig.social[2]?.href || '#'} label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785c-1.795 0-3.56-.482-5.1-1.396l-.366-.217-3.795.995 1.013-3.7-.238-.378A9.86 9.86 0 0 1 2.15 12.05C2.15 6.58 6.58 2.15 12.05 2.15c2.655 0 5.152 1.035 7.028 2.91A9.88 9.88 0 0 1 21.95 12.05c0 5.47-4.43 9.735-9.9 9.735zM12.05 0C5.405 0 0 5.37 0 12.05c0 2.125.555 4.2 1.61 6.03L0 24l6.105-1.6A11.94 11.94 0 0 0 12.05 24c6.645 0 12.05-5.37 12.05-11.95S18.695 0 12.05 0z" />
                </svg>
              </SocialIcon>
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
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about-us">About Us</FooterLink>
              <FooterLink href="/air-conditioning">AC Services</FooterLink>
              <FooterLink href="/electricals">Electrical Services</FooterLink>
              <FooterLink href="/building-and-construction">Building &amp; Construction</FooterLink>
              <FooterLink href="/faq">FAQs</FooterLink>
              <FooterLink href="/contact-us">Contact Us</FooterLink>
              <FooterLink href="/blog">Our Blogs</FooterLink>
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
                <Link
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="text-[14px] transition-colors hover:text-white"
                >
                  {siteConfig.phone}
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <Smartphone className="mt-0.5 h-4 w-4 shrink-0 text-[#2196D6]" />
                <Link
                  href={`tel:${siteConfig.mobile.replace(/\s/g, '')}`}
                  className="text-[14px] transition-colors hover:text-white"
                >
                  {siteConfig.mobile}
                </Link>
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
                <span className="text-[14px]">brisbane and gold coast</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-6 text-[13px] text-white/50">
          <div>
            Copyright {new Date().getFullYear()} &copy; All Rights Reserved by Links Air &amp;
            Electrical
          </div>
          <div className="flex gap-6">
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-[14px] transition-colors hover:text-white">
        {children}
      </Link>
    </li>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-full bg-white/[0.06] text-white transition-all hover:-translate-y-0.5 hover:bg-[#2196D6]"
    >
      {children}
    </Link>
  );
}
