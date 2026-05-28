'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimateIn from './AnimateIn';

export default function About() {
  const t = useTranslations('about');
  const locale = useLocale();

  return (
    <section className="py-24 px-6 border-t border-[#1E1E1E]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Photo */}
        <AnimateIn direction="right">
          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.35 }}
              className="aspect-[4/5] rounded-2xl overflow-hidden"
            >
              <img
                src="/maxime.jpg"
                alt="Maxime Vogens"
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-[#D4AF37]/20 rounded-2xl -z-10" />
          </div>
        </AnimateIn>

        {/* Content */}
        <AnimateIn direction="left" delay={0.1}>
          <span className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest">{t('badge')}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">{t('title')}</h2>

          <div className="space-y-4 text-gray-400 leading-relaxed mb-8">
            <p>{t('p1')}</p>
            <p>{t('p2')}</p>
            <p className="text-white font-medium">{t('p3')}</p>
          </div>

          <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
            <Link
              href={`/${locale}/about`}
              className="inline-flex items-center gap-2 text-[#D4AF37] font-semibold"
            >
              {t('cta')}
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </AnimateIn>
      </div>
    </section>
  );
}
