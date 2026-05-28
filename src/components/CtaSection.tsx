'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimateIn from './AnimateIn';

export default function CtaSection() {
  const t = useTranslations('cta_section');
  const locale = useLocale();

  return (
    <section className="py-28 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <AnimateIn>
          <div className="relative rounded-3xl overflow-hidden glass-card p-14 md:p-24 text-center">
            {/* Pulsing gold glow */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.07, 0.14, 0.07] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#D4AF37] blur-[100px] pointer-events-none"
            />
            {/* Corner accents */}
            <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-[#D4AF37]/20 rounded-tl-lg" />
            <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-[#D4AF37]/20 rounded-tr-lg" />
            <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-[#D4AF37]/20 rounded-bl-lg" />
            <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-[#D4AF37]/20 rounded-br-lg" />

            <div className="relative">
              <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 leading-[1.1]">
                {t('title')}
              </h2>
              <p className="font-body text-lg text-gray-500 mb-12 max-w-md mx-auto leading-relaxed">
                {t('sub')}
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
                <Link
                  href={`/${locale}/coaching`}
                  className="inline-flex items-center gap-2 bg-[#D4AF37] text-black font-semibold px-8 py-4 rounded-full hover:bg-[#E8C84A] transition-colors duration-200 text-sm font-body cursor-pointer shadow-[0_0_40px_rgba(212,175,55,0.3)]"
                >
                  {t('cta')}
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
