import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const timeline = [
  { year: '2017', event: 'Started as a professional photographer' },
  { year: '2020', event: 'Founded a digital marketing agency' },
  { year: '2022', event: 'Scaled the agency to 6-figure revenue' },
  { year: '2023', event: 'Launched first online coaching program' },
  { year: '2024', event: 'Helped 50+ clients build profitable businesses' },
  { year: '2025', event: 'Expanding to English and Portuguese markets globally' },
];

export default function AboutPage() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen">
      <Navbar />
      <div className="pt-24 pb-24 px-6">
        <div className="max-w-4xl mx-auto">

          {/* Hero */}
          <div className="mb-16">
            <span className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest">About</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6 leading-tight">
              Maxime Vogens
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              Photographer turned entrepreneur. Agency founder. Business coach. Working globally.
            </p>
          </div>

          {/* Photo + intro */}
          <div className="grid md:grid-cols-2 gap-12 mb-20 items-start">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="/maxime.jpg"
                alt="Maxime Vogens"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                I started my career as a photographer. I loved the craft, but I quickly realized that trading time for money had a ceiling.
              </p>
              <p>
                So I built an agency. Then I systemized it. Then I started teaching others how to do the same — and that's when I found my real purpose.
              </p>
              <p>
                Today I work with ambitious employees and early entrepreneurs across 3 continents, helping them build businesses that generate income without requiring their constant presence.
              </p>

              <p className="text-white font-medium">
                My obsession: leverage. AI, content, and smart systems to build more with less.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-10">My Journey</h2>
            <div className="space-y-0">
              {timeline.map((item, i) => (
                <div key={item.year} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#111111] border border-[#D4AF37]/30 flex items-center justify-center shrink-0 group-hover:border-[#D4AF37] transition-colors">
                      <span className="text-[#D4AF37] text-xs font-bold">{item.year.slice(2)}</span>
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="w-px h-full bg-[#1E1E1E] my-2 min-h-[32px]" />
                    )}
                  </div>
                  <div className="pb-8">
                    <div className="text-[#D4AF37] text-sm font-semibold mb-1">{item.year}</div>
                    <div className="text-gray-300">{item.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#111111] border border-[#1E1E1E] rounded-2xl p-10 text-center">
            <h3 className="text-white font-bold text-2xl mb-3">Ready to Write Your Own Story?</h3>
            <p className="text-gray-400 mb-8">Let's build your business together.</p>
            <Link
              href="/en/coaching"
              className="inline-flex items-center gap-2 bg-[#D4AF37] text-black font-bold px-8 py-3.5 rounded-full hover:bg-[#E8C84A] transition-colors"
            >
              Apply for Coaching
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </div>
      <Footer />
    </main>
  );
}
