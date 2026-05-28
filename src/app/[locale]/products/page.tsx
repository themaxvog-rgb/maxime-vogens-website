import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Download, Play } from 'lucide-react';

const products = [
  {
    type: 'ebook',
    icon: <Download size={20} />,
    title: 'From Employee to Entrepreneur in 90 Days',
    desc: 'A step-by-step guide to validate your idea, get your first clients, and quit your job — without burning out.',
    price: '$27',
    tag: 'Bestseller',
  },
  {
    type: 'template',
    icon: <Download size={20} />,
    title: 'Agency CRM — Notion Template',
    desc: 'A complete client management system for freelancers and small agencies. Track clients, projects, invoices, and deadlines.',
    price: '$47',
    tag: 'Templates',
  },
  {
    type: 'template',
    icon: <Download size={20} />,
    title: '90-Day Content Calendar',
    desc: 'A ready-to-use content calendar for LinkedIn, TikTok, and Instagram. 90 days of post ideas included.',
    price: '$37',
    tag: 'Templates',
  },
  {
    type: 'course',
    icon: <Play size={20} />,
    title: 'Build Your Business With AI — Full Course',
    desc: 'Learn how to use AI tools (ChatGPT, Claude, HeyGen, Make) to automate your business and create content that sells.',
    price: '$497',
    tag: 'Course',
    featured: true,
  },
  {
    type: 'ebook',
    icon: <Download size={20} />,
    title: 'AI Prompts Kit for Entrepreneurs',
    desc: '100+ proven prompts for marketing, sales, content creation, and business strategy. Copy, paste, win.',
    price: '$37',
    tag: 'Toolkit',
  },
  {
    type: 'template',
    icon: <Download size={20} />,
    title: 'Freelance Finance Tracker',
    desc: 'Manage irregular income like a pro. Budget, savings, and tax tracker built for independent workers.',
    price: '$27',
    tag: 'Templates',
  },
];

export default function ProductsPage() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen">
      <Navbar />
      <div className="pt-24 pb-24 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest">Digital Products</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
              Tools That Work.<br />
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#E8C84A] bg-clip-text text-transparent">
                While You Sleep.
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-xl mx-auto">
              Ebooks, templates, and courses built from real experience. No filler. Pure value.
            </p>
          </div>

          {/* Products grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.title}
                className={`rounded-2xl p-8 flex flex-col border ${
                  product.featured
                    ? 'bg-[#D4AF37]/5 border-[#D4AF37]/30'
                    : 'bg-[#111111] border-[#1E1E1E]'
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full ${
                    product.featured
                      ? 'bg-[#D4AF37] text-black'
                      : 'bg-[#1E1E1E] text-[#D4AF37]'
                  }`}>
                    {product.tag}
                  </span>
                  <div className={`text-[#D4AF37]`}>{product.icon}</div>
                </div>

                <h3 className="text-white font-bold text-lg mb-3 leading-snug">{product.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-6">{product.desc}</p>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-2xl font-bold text-white">{product.price}</span>
                  <button className={`flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full transition-colors ${
                    product.featured
                      ? 'bg-[#D4AF37] text-black hover:bg-[#E8C84A]'
                      : 'border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10'
                  }`}>
                    Get it
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bundle banner */}
          <div className="mt-12 bg-[#111111] border border-[#1E1E1E] rounded-2xl p-10 text-center">
            <h3 className="text-white font-bold text-2xl mb-2">Want Everything?</h3>
            <p className="text-gray-400 mb-6">Get all products + the full course for one discounted price.</p>
            <button className="inline-flex items-center gap-2 bg-[#D4AF37] text-black font-bold px-8 py-3.5 rounded-full hover:bg-[#E8C84A] transition-colors">
              Get the Full Bundle — $197
              <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </div>
      <Footer />
    </main>
  );
}
