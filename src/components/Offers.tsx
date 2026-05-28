'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { BookOpen, Play, Users, ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimateIn from './AnimateIn';

export default function Offers() {
  const t = useTranslations('offers');
  const locale = useLocale();

  const offers = [
    {
      badge: t('products_badge'),
      icon: <BookOpen size={22} className="text-[#D4AF37]" />,
      title: t('products_title'),
      desc: t('products_desc'),
      price: t('products_price'),
      cta: t('products_cta'),
      href: `/${locale}/products`,
      featured: false,
    },
    {
      badge: t('coaching_badge'),
      icon: <Users size={22} className="text-black" />,
      title: t('coaching_title'),
      desc: t('coaching_desc'),
      price: t('coaching_price'),
      cta: t('coaching_cta'),
      href: `/${locale}/coaching`,
      featured: true,
    },
    {
      badge: t('course_badge'),
      icon: <Play size={22} className="text-[#D4AF37]" />,
      title: t('course_title'),
      desc: t('course_desc'),
      price: t('course_price'),
      cta: t('course_cta'),
      href: `/${locale}/products`,
      featured: false,
    },
  ];

  return (
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimateIn className="text-center mb-20">
          <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.2em] font-body">{t('badge')}</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mt-4 mb-4 leading-tight">{t('title')}</h2>
          <p className="text-gray-500 max-w-md mx-auto font-body leading-relaxed">{t('sub')}</p>
        </AnimateIn>

        <div className="grid md:grid-cols-3 gap-5 items-start">
          {offers.map((offer, i) => (
            <AnimateIn key={offer.title} delay={i * 0.1} className={offer.featured ? 'pt-5' : ''}>
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
                className={`relative rounded-2xl p-8 flex flex-col h-full cursor-default group gold-shimmer overflow-visible ${
                  offer.featured
                    ? 'bg-[#D4AF37] text-black shadow-[0_8px_40px_rgba(212,175,55,0.25)]'
                    : 'glass-card hover:border-[#D4AF37]/20 transition-colors duration-300'
                }`}
              >
                {offer.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0A0A0A] text-[#D4AF37] text-xs font-bold px-4 py-1.5 rounded-full border border-[#D4AF37]/40 flex items-center gap-1.5 font-body">
                    <Star size={9} fill="currentColor" />
                    {offer.badge}
                  </div>
                )}
                {!offer.featured && (
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37] mb-5 font-body">
                    {offer.badge}
                  </span>
                )}

                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-6 ${offer.featured ? 'bg-black/10' : 'bg-white/5 border border-white/5'}`}>
                  {offer.icon}
                </div>

                <h3 className="font-serif text-xl font-bold mb-3 leading-snug">{offer.title}</h3>
                <p className={`text-sm leading-relaxed mb-8 flex-1 font-body ${offer.featured ? 'text-black/65' : 'text-gray-500'}`}>
                  {offer.desc}
                </p>

                <div className="mt-auto">
                  <div className={`font-serif text-3xl font-bold mb-5 ${offer.featured ? 'text-black' : 'text-white'}`}>
                    {offer.price}
                  </div>
                  <Link
                    href={offer.href}
                    className={`w-full flex items-center justify-center gap-2 py-3 rounded-full font-semibold text-sm transition-all duration-200 cursor-pointer group-hover:gap-3 font-body ${
                      offer.featured
                        ? 'bg-black text-[#D4AF37] hover:bg-black/80 active:scale-95'
                        : 'border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37]/8 hover:border-[#D4AF37] active:scale-95'
                    }`}
                  >
                    {offer.cta}
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
