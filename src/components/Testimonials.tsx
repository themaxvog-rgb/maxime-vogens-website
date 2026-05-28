'use client';

import { useTranslations } from 'next-intl';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimateIn from './AnimateIn';

export default function Testimonials() {
  const t = useTranslations('testimonials');

  const testimonials = [
    { text: t('t1_text'), name: t('t1_name'), role: t('t1_role'), initials: 'CM' },
    { text: t('t2_text'), name: t('t2_name'), role: t('t2_role'), initials: 'AD' },
    { text: t('t3_text'), name: t('t3_name'), role: t('t3_role'), initials: 'JR' },
  ];

  return (
    <section className="py-28 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <AnimateIn className="text-center mb-20">
          <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.2em] font-body">{t('badge')}</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mt-4">{t('title')}</h2>
        </AnimateIn>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((item, i) => (
            <AnimateIn key={item.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
                className="glass-card hover:border-[#D4AF37]/15 rounded-2xl p-8 flex flex-col h-full transition-colors duration-300"
              >
                <Quote size={24} className="text-[#D4AF37] mb-6 opacity-50" />
                <p className="font-serif text-gray-300 leading-relaxed flex-1 mb-8 italic text-[15px]">
                  "{item.text}"
                </p>
                <div className="flex items-center gap-3 pt-6 border-t border-white/5">
                  <div className="w-9 h-9 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center shrink-0">
                    <span className="text-[#D4AF37] text-[10px] font-bold font-body">{item.initials}</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm font-body">{item.name}</div>
                    <div className="text-gray-600 text-xs font-body mt-0.5">{item.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
