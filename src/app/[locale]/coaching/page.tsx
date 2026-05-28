import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle, ArrowRight } from 'lucide-react';

const included = [
  '12 weekly 1-on-1 strategy sessions',
  'Custom business roadmap (90-day plan)',
  'Client acquisition system setup',
  'Personal brand & content strategy',
  'Sales scripts and closing techniques',
  'AI tools integration for your business',
  'Unlimited WhatsApp support',
  'Access to all digital products & courses',
];

export default function CoachingPage() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen">
      <Navbar />
      <div className="pt-24 pb-24 px-6">
        <div className="max-w-4xl mx-auto">

          {/* Hero */}
          <div className="text-center mb-16">
            <span className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest">1-on-1 Coaching</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6 leading-tight">
              Build Your Business.<br />
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#E8C84A] bg-clip-text text-transparent">
                In 90 Days.
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-xl mx-auto leading-relaxed">
              This is not a course. This is not group coaching. This is a dedicated 1-on-1 partnership where we build your business together.
            </p>
          </div>

          {/* Main card */}
          <div className="bg-[#111111] border border-[#1E1E1E] rounded-3xl p-10 md:p-14 mb-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">What's Included</h2>
                <p className="text-gray-400">Everything you need to go from employee to entrepreneur.</p>
              </div>
              <div className="text-right">
                <div className="text-5xl font-bold text-white">$1,997</div>
                <div className="text-gray-500 text-sm mt-1">Full program</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#D4AF37] mt-0.5 shrink-0" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-[#1E1E1E] pt-8">
              <a
                href="mailto:maxime@maxime-vogens.com?subject=Coaching Application"
                className="w-full flex items-center justify-center gap-2 bg-[#D4AF37] text-black font-bold py-4 rounded-full hover:bg-[#E8C84A] transition-colors text-base"
              >
                Apply Now — Limited Spots
                <ArrowRight size={18} />
              </a>
              <p className="text-center text-gray-600 text-sm mt-4">
                Only 5 spots available per month. Application required.
              </p>
            </div>
          </div>

          {/* Guarantee */}
          <div className="bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-2xl p-8 text-center">
            <h3 className="text-white font-bold text-xl mb-2">30-Day Money-Back Guarantee</h3>
            <p className="text-gray-400 text-sm max-w-lg mx-auto">
              If after 30 days you feel this isn't for you, I'll refund every dollar. Zero risk.
            </p>
          </div>

        </div>
      </div>
      <Footer />
    </main>
  );
}
