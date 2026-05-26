import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowRight, ShieldCheck, Clock, Globe,
  FileCheck2, Anchor, Activity, FileLock2, Briefcase, Zap, ShieldAlert, BadgeCheck
} from 'lucide-react';
import { cn } from '../lib/utils';

export function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden pb-16 pt-24 md:pt-32 md:pb-32 flex gap-12 items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-blue/10 text-sky-blue text-xs font-bold uppercase tracking-wider mb-6"
            >
              <BadgeCheck size={16} />
              <span>Licensed U.S. Customs Broker in Utah</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-navy leading-[1.1] mb-6"
            >
              Customs Clearance <br className="hidden md:block"/><span className="text-sky-blue underline decoration-slate-200 underline-offset-8">Without the Chaos.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-steel-gray mb-8 max-w-xl leading-relaxed"
            >
              Fast, reliable customs brokerage for modern importers. We simplify international trade so you can focus on scaling your business.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-4"
            >
              <Link to="/quote" className="px-8 py-4 bg-navy text-white font-bold rounded-lg text-md transition-all shadow-xl shadow-navy/20 flex items-center justify-center gap-2 hover:bg-navy-lighter">
                Request a Quote
                <ArrowRight size={18} />
              </Link>
              <a href="tel:+14356551817" className="px-8 py-4 bg-white border border-gray-300 text-steel-gray font-bold rounded-lg text-md hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                Speak to a Broker
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TRUST BAR */}
      <section className="bg-white border border-slate-200 py-8 mt-4 mx-4 md:mx-auto max-w-6xl rounded-2xl shadow-sm">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 divide-x divide-gray-100">
            {[
              { icon: ShieldCheck, label: "Compliance Rate", value: "99.9%" },
              { icon: Clock, label: "Avg. Clearance Time", value: "< 24 Hrs" },
              { icon: Globe, label: "Ports Served", value: "All U.S." },
              { icon: ShieldAlert, label: "Licensed Broker", value: "CBP" },
            ].map((stat, idx) => (
              <div key={idx} className={cn("flex flex-col items-center justify-center text-center px-4", idx === 0 ? "border-l-0" : "")}>
                <stat.icon size={28} className="text-aviation-blue mb-3" />
                <span className="text-3xl font-bold text-navy mb-1">{stat.value}</span>
                <span className="text-sm font-medium text-steel-gray uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES OVERVIEW */}
      <section className="py-24 bg-steel-light">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">Expertise You Can Trust</h2>
            <p className="text-lg text-steel-gray">
              Comprehensive brokerage services tailored to modern logistics networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: FileCheck2, title: "Customs Clearance", desc: "Fast, accurate filing across all US ports of entry to eliminate shipment holds." },
              { icon: Activity, title: "Trade Compliance", desc: "Mitigate risk with comprehensive compliance audits and strategic advisory." },
              { icon: FileLock2, title: "HTS Classification", desc: "Expert assessment to ensure correct duty rates and avoid costly CBP penalties." },
              { icon: Anchor, title: "ISF (10+2) Filing", desc: "Timely ocean freight filings to avoid $5,000 liquidated damages claims." },
              { icon: ShieldCheck, title: "FDA & Regulated Imports", desc: "Specialized clearance for food, medical, and cosmetics requiring OGA approval." },
              { icon: Briefcase, title: "Duty Optimization", desc: "Strategic planning to legally minimize tariff impact on your supply chain." },
            ].map((service, idx) => (
              <div key={idx} className="p-6 bg-white rounded-xl border border-slate-200 hover:border-sky-blue transition-colors shadow-sm group cursor-pointer relative overflow-hidden">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon size={24} className="text-navy group-hover:text-sky-blue transition-colors" />
                </div>
                <h4 className="text-lg font-bold text-navy mb-2">{service.title}</h4>
                <p className="text-steel-gray text-sm mb-6 leading-relaxed">{service.desc}</p>
                <Link to="/services" className="inline-flex items-center text-sm font-medium text-navy group-hover:translate-x-1 group-hover:text-sky-blue transition-all">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE BLUEBIRD */}
      <section className="py-24 bg-transparent overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <div>
                <span className="text-xs font-bold text-sky-blue uppercase tracking-wider mb-2 block">The Bluebird Advantage</span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-navy">Built for Speed and Precision</h2>
              </div>
              <p className="text-lg text-steel-gray leading-relaxed">
                Traditional brokerages rely on outdated software and slow manual processes. We pair modern technology with deep regulatory expertise to clear your freight faster, with fewer headaches.
              </p>
              
              <div className="space-y-6 pt-4">
                {[
                  { title: "Lightning-Fast Communication", desc: "No more waiting days for an email reply. Get immediate answers from licensed experts." },
                  { title: "Aviation-Grade Precision", desc: "We handle your declarations with the same scrutiny required in aerospace logistics." },
                  { title: "Proactive Issue Resolution", desc: "We identify regulatory roadblocks before your cargo even leaves the origin port." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="shrink-0 mt-1">
                      <div className="bg-blue-50 text-aviation-blue p-2 rounded-lg">
                        <Zap size={20} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-navy text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex-1 w-full relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-blue/20 to-transparent rounded-3xl transform translate-x-4 translate-y-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=2670&auto=format&fit=crop" 
                alt="Modern logistics and freight handling" 
                className="rounded-3xl shadow-2xl relative z-10 w-full h-[600px] object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <ShieldCheck size={32} className="text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-navy">100%</p>
                  <p className="text-sm font-medium text-steel-gray uppercase">Compliant Filings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW IT WORKS */}
      <section className="py-24 bg-navy text-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Importing, Simplified.</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A frictionless process designed to get your goods cleared and delivered on time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-800 -translate-y-1/2 z-0"></div>
            
            {[
              { step: "01", title: "Submit Details", desc: "Upload commercial docs via our secure, simple portal." },
              { step: "02", title: "We Process", desc: "Our brokers classify and file entry with CBP." },
              { step: "03", title: "Clearance", desc: "Customs released and PGA approvals secured." },
              { step: "04", title: "Delivery", desc: "Freight is dispatched for final mile delivery." },
            ].map((process, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-navy border-4 border-navy-light flex items-center justify-center text-xl font-bold text-sky-blue mb-6 shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="py-24 bg-navy text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready for Hassle-Free Customs Clearance?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Stop losing sleep over supply chain delays. Talk to a licensed customs expert today and get a quote in under 2 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote" className="bg-white text-aviation-blue hover:bg-gray-50 px-8 py-4 rounded-lg font-bold transition-all shadow-xl text-lg">
              Get Your Free Quote
            </Link>
            <a href="tel:+14356551817" className="bg-transparent border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-bold transition-all text-lg backdrop-blur-sm">
              Call (435) 655-1817
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
