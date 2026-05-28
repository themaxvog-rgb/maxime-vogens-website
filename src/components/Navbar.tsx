'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const localeLabels: Record<string, string> = { en: 'EN', pt: 'PT', fr: 'FR' };

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
  };

  const navLinks = [
    { href: `/${locale}/coaching`, label: t('coaching') },
    { href: `/${locale}/products`, label: t('products') },
    { href: `/${locale}/about`, label: t('about') },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0A0A0A]/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href={`/${locale}`} className="font-serif text-white font-bold text-xl tracking-tight hover:opacity-80 transition-opacity duration-200">
          Maxime<span className="text-[#D4AF37]">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-body font-medium text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-0.5 border border-white/10 rounded-full px-2 py-1.5 bg-white/3">
            {(['en', 'pt', 'fr'] as const).map((l) => (
              <button
                key={l}
                onClick={() => switchLocale(l)}
                className={`text-xs px-2.5 py-1 rounded-full transition-all duration-200 cursor-pointer font-medium ${
                  locale === l
                    ? 'bg-[#D4AF37] text-black font-semibold'
                    : 'text-gray-500 hover:text-white'
                }`}
              >
                {localeLabels[l]}
              </button>
            ))}
          </div>
          <Link
            href={`/${locale}/coaching`}
            className="bg-[#D4AF37] text-black text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#E8C84A] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            {t('cta')}
          </Link>
        </div>

        <button
          className="md:hidden text-gray-400 hover:text-white transition-colors duration-200 p-2 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-white/5 bg-[#0A0A0A]/95 backdrop-blur-xl px-6 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-2 pt-3 border-t border-white/5">
            {(['en', 'pt', 'fr'] as const).map((l) => (
              <button
                key={l}
                onClick={() => { switchLocale(l); setMenuOpen(false); }}
                className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-200 cursor-pointer ${
                  locale === l
                    ? 'border-[#D4AF37] text-[#D4AF37] font-semibold'
                    : 'border-white/10 text-gray-500 hover:text-white'
                }`}
              >
                {localeLabels[l]}
              </button>
            ))}
          </div>
          <Link
            href={`/${locale}/coaching`}
            className="bg-[#D4AF37] text-black text-sm font-semibold px-4 py-3 rounded-full text-center hover:bg-[#E8C84A] transition-colors duration-200 cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            {t('cta')}
          </Link>
        </div>
      )}
    </nav>
  );
}
