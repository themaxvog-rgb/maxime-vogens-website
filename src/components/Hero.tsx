'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const easeCurve: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeCurve } },
  };

  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 px-6 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5, ease: 'easeOut' }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#D4AF37]/4 blur-[140px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, delay: 0.5 }}
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#D4AF37]/3 blur-[100px]"
        />
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 border border-[#D4AF37]/25 bg-[#D4AF37]/5 rounded-full px-4 py-2 mb-10">
            <TrendingUp size={13} className="text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs font-semibold tracking-[0.15em] uppercase font-body">{t('badge')}</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={itemVariants} className="font-serif text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-7">
            <span className="text-white">{t('headline1')}</span>
            <br />
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#E8C84A] to-[#D4AF37] bg-clip-text text-transparent">
              {t('headline2')}
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p variants={itemVariants} className="font-body text-lg text-gray-500 max-w-lg mb-12 leading-[1.7]">
            {t('sub')}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 mb-20">
            <Link
              href={`/${locale}/coaching`}
              className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] text-black font-semibold px-7 py-3.5 rounded-full hover:bg-[#E8C84A] hover:scale-105 active:scale-95 transition-all duration-200 text-sm font-body cursor-pointer shadow-[0_0_30px_rgba(212,175,55,0.2)]"
            >
              {t('cta_primary')}
              <ArrowRight size={16} />
            </Link>
            <Link
              href={`/${locale}/products`}
              className="inline-flex items-center justify-center gap-2 border border-white/10 text-white font-medium px-7 py-3.5 rounded-full hover:border-[#D4AF37]/40 hover:bg-white/3 hover:scale-105 active:scale-95 transition-all duration-200 text-sm font-body cursor-pointer"
            >
              {t('cta_secondary')}
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-12">
            {[
              { value: t('stat1_value'), label: t('stat1_label') },
              { value: t('stat2_value'), label: t('stat2_label') },
              { value: t('stat3_value'), label: t('stat3_label') },
            ].map((stat, i) => (
              <div key={stat.label} className="relative">
                {i > 0 && <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-px h-6 bg-white/10" />}
                <div className="font-serif text-3xl font-bold text-white">{stat.value}</div>
                <div className="font-body text-xs text-gray-600 mt-1 uppercase tracking-[0.1em]">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
