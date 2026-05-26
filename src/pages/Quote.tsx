import React, { useState } from 'react';
import { ShieldCheck, Clock, CheckCircle } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

export function Quote() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-transparent min-h-screen py-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy mb-6">Request a Customs Quote</h1>
          <p className="text-lg text-steel-gray">
            Provide details about your import/export needs below. One of our licensed brokers will respond within 2 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Left Column: Form */}
          <div className="lg:col-span-2 bg-white p-8 md:p-10 rounded-xl shadow-sm border border-slate-200">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-16"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={40} className="text-green-600" />
                </div>
                <h3 className="text-3xl font-extrabold text-navy mb-4">Request Received</h3>
                <p className="text-steel-gray text-lg max-w-md">
                  Thank you for reaching out. A licensed customs broker is reviewing your details and will likely contact you within the next 2 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-navy block">First Name *</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-navy block">Last Name *</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-navy block">Company / Business Name *</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-navy block">Email Address *</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-navy block">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-navy block">Shipment Frequency</label>
                    <select className="w-full px-4 py-3 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent transition-all bg-white">
                      <option value="">Select frequency</option>
                      <option value="one-time">One-time shipment</option>
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                      <option value="annual">Annual / Seasonal</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-navy block">Commodity / Product Description *</label>
                  <textarea required rows={4} placeholder="e.g. Industrial machinery parts from Germany" className="w-full px-4 py-3 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent transition-all"></textarea>
                </div>

                <button type="submit" className="w-full bg-navy hover:bg-navy-lighter text-white font-bold text-lg py-4 rounded-md transition-all shadow-lg shadow-navy/10 mt-6">
                  Submit Request
                </button>
                <p className="text-xs text-slate-400 text-center flex items-center justify-center gap-1 mt-4">
                  <ShieldCheck size={14} /> Your information is encrypted and secure.
                </p>
              </form>
            )}
          </div>

          {/* Right Column: Info */}
          <div className="space-y-6">
            <div className="bg-navy text-white p-8 rounded-xl shadow-sm">
              <h3 className="font-sans font-extrabold text-xl mb-4 text-white">Why Bluebird?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 opacity-90">
                  <Clock size={20} className="text-sky-blue shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">Lightning fast responses. We average under 2 hours for quote requests.</span>
                </li>
                <li className="flex items-start gap-3 opacity-90">
                  <ShieldCheck size={20} className="text-sky-blue shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">Licensed expertise. No trainees handling your complex freight.</span>
                </li>
                <li className="flex items-start gap-3 opacity-90">
                  <CheckCircle size={20} className="text-sky-blue shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">Clear pricing structure. No hidden fees or surprise clearance charges.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="font-sans font-extrabold text-navy mb-2">Need immediate help?</h3>
              <p className="text-sm text-steel-gray mb-4">If your shipment is stuck at the port, call us directly.</p>
              <a href="tel:+14356551817" className="block text-center font-bold text-navy text-xl py-3 border border-slate-200 rounded-md hover:bg-slate-50 transition-colors">
                (435) 655-1817
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
