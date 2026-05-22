import Image from 'next/image';
import Link from 'next/link';
import { Phone, ChevronRight } from 'lucide-react';
import { siteConfig } from '@/config/site.config';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E3E9F0] bg-white/[0.92] backdrop-blur-[10px] backdrop-saturate-[140%]">
      <div className="mx-auto flex h-[84px] max-w-[1240px] items-center justify-between px-[clamp(20px,4vw,56px)] max-sm:h-[72px]">
        <Link href="#" className="flex items-center" aria-label="Links Air & Electrical home">
          <Image
            src="/logo.jpg"
            alt="Links Air & Electrical"
            width={160}
            height={62}
            className="h-[62px] w-auto object-contain max-sm:h-[50px]"
            priority
          />
        </Link>

        <nav className="max-[960px]:hidden">
          <ul className="m-0 flex list-none items-center gap-8 p-0">
            {siteConfig.nav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-[15px] font-medium text-[#2A3A4E] transition-colors hover:text-[#1779B8]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <span className="flex items-center gap-2.5 rounded-full px-3.5 py-2 text-[14px] font-semibold text-[#0E1B2C] max-sm:hidden">
            <Phone className="h-4 w-4 text-[#2196D6]" />
            {siteConfig.phone}
          </span>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2.5 rounded-full bg-[#E73438] px-[22px] py-3.5 text-[15px] font-semibold text-white shadow-[0_6px_16px_-6px_rgba(231,52,56,0.6)] transition-transform hover:-translate-y-px hover:bg-[#D62229]"
          >
            Get a free quote
            <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </header>
  );
}
