import { Link } from 'react-router-dom';
import { Plane, ShoppingCart, Factory, Shield, Stethoscope, ArrowRight } from 'lucide-react';

export function Industries() {
  const industries = [
    {
      id: 'aerospace',
      icon: Plane,
      title: 'Aerospace & Defense',
      desc: 'Precision clearance for ITAR-controlled goods and aircraft on ground (AOG) situations where minutes matter.'
    },
    {
      id: 'ecommerce',
      icon: ShoppingCart,
      title: 'E-Commerce & Retail',
      desc: 'High-volume clearance and Section 321 (De Minimis) strategies for global D2C brands.'
    },
    {
      id: 'manufacturing',
      icon: Factory,
      title: 'Industrial Manufacturing',
      desc: 'Managing complex BOM imports, machinery, and raw materials to keep assembly lines moving.'
    },
    {
      id: 'medical',
      icon: Stethoscope,
      title: 'Medical & Healthcare',
      desc: 'Specialized FDA clearance protocols for medical devices, pharmaceuticals, and PPE.'
    }
  ];

  return (
    <div className="bg-transparent min-h-screen">
      <section className="bg-navy text-white pt-24 pb-32 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Industries We Serve</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          We understand that aerospace components do not clear customs the same way apparel does. Our teams are separated by industry expertise.
        </p>
      </section>

      <section className="py-12 px-4 -mt-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((ind) => (
            <div key={ind.id} id={ind.id} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:border-sky-blue transition-colors relative group overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-sky-blue/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
               <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6 relative z-10">
                 <ind.icon size={24} className="text-navy group-hover:text-sky-blue transition-colors" />
               </div>
               <h2 className="text-2xl font-extrabold text-navy mb-4 relative z-10">{ind.title}</h2>
               <p className="text-steel-gray mb-8 relative z-10 leading-relaxed">{ind.desc}</p>
               <Link to="/quote" className="inline-flex items-center text-sm font-bold text-navy group-hover:text-sky-blue transition-colors relative z-10">
                 Discuss your supply chain <ArrowRight size={16} className="ml-1" />
               </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
