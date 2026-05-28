'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="font-serif text-white font-bold text-xl mb-1">
            Maxime<span className="text-[#D4AF37]">.</span>
          </div>
          <p className="font-body text-gray-600 text-sm">{t('tagline')}</p>
        </div>

        <div className="flex items-center gap-6">
          {[
            { href: `/${locale}/coaching`, label: t('coaching') },
            { href: `/${locale}/products`, label: t('products') },
            { href: `/${locale}/about`, label: t('about') },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="font-body text-sm text-gray-600 hover:text-white transition-colors duration-200 cursor-pointer">
              {link.label}
            </Link>
          ))}
        </div>

        <p className="font-body text-gray-700 text-xs">
          © {new Date().getFullYear()} Maxime Vogens. {t('rights')}
        </p>
      </div>
    </footer>
  );
}
