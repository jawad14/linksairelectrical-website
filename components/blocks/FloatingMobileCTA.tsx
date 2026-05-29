'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, MessageSquare } from 'lucide-react';
import { siteConfig } from '@/config/site.config';

export function FloatingMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 300);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#E3E9F0] bg-white/95 px-4 pt-0 pb-[env(safe-area-inset-bottom,0px)] backdrop-blur-sm md:hidden">
      <div className="flex gap-2.5 py-2.5">
        <Link
          href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#0E1B2C] py-3 text-[15px] font-semibold text-white"
        >
          <Phone className="h-4 w-4" />
          Call Now
        </Link>
        <Link
          href="/contact-us"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#E73438] py-3 text-[15px] font-semibold text-white"
        >
          <MessageSquare className="h-4 w-4" />
          Free Quote
        </Link>
      </div>
    </div>
  );
}
