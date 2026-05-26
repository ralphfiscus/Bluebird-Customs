import { Link } from 'react-router-dom';
import { ArrowRight, FileCheck2, Activity, FileLock2, Anchor, ShieldCheck, Briefcase } from 'lucide-react';

export function Services() {
  const services = [
    { 
      id: 'clearance',
      icon: FileCheck2, 
      title: "Customs Clearance", 
      desc: "Fast, accurate filing across all US ports of entry to eliminate shipment holds.",
      details: "Our core competency. We utilize direct ABI (Automated Broker Interface) connections to CBP, ensuring your entries are filed instantly and accurately. Whether it's ocean, air, or border freight, we clear it."
    },
    { 
      id: 'compliance',
      icon: Activity, 
      title: "Trade Compliance", 
      desc: "Mitigate risk with comprehensive compliance audits and strategic advisory.",
      details: "Avoid costly CBP audits and penalties. We review your entire import history, identify risk areas, and establish robust documented compliance procedures for your supply chain."
    },
    { 
      id: 'hts',
      icon: FileLock2, 
      title: "HTS Classification", 
      desc: "Expert assessment to ensure correct duty rates and avoid costly CBP penalties.",
      details: "Incorrect classification is the #1 cause of customs penalties. Our licensed brokers provide binding ruling requests and meticulous part catalog reviews to ensure 100% accuracy."
    },
    { 
      id: 'isf',
      icon: Anchor, 
      title: "ISF (10+2) Filing", 
      desc: "Timely ocean freight filings to avoid $5,000 liquidated damages claims.",
      details: "Missing an ISF deadline carries severe monetary penalties. Our automated workflows ensure your 10+2 data is submitted to CBP well before your cargo is loaded at the origin port."
    },
    { 
      id: 'fda',
      icon: ShieldCheck, 
      title: "FDA & Regulated Imports", 
      desc: "Specialized clearance for food, medical, and cosmetics requiring OGA approval.",
      details: "Partner Government Agencies (PGAs) like the FDA, EPA, and DOT require precise data sets. We navigate these complex agency requirements to prevent costly port detentions."
    },
    { 
      id: 'optimization',
      icon: Briefcase, 
      title: "Duty Optimization", 
      desc: "Strategic planning to legally minimize tariff impact on your supply chain.",
      details: "From Free Trade Agreement (FTA) qualification to Section 321 (De Minimis) strategies, we help you legally lower your landed costs and improve your bottom line."
    }
  ];

  return (
    <div className="bg-transparent min-h-screen">
      {/* Header */}
      <section className="bg-navy text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Brokerage Services</h1>
          <p className="text-lg text-gray-300">
            End-to-end import solutions engineered for speed, accuracy, and compliance.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 flex-1">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id}
              className={`flex flex-col md:flex-row gap-8 items-start p-8 rounded-xl border border-slate-200 ${index % 2 === 0 ? 'bg-steel-light' : 'bg-white shadow-sm'}`}
            >
              <div className="bg-white p-4 rounded-lg shadow-sm md:shrink-0 border border-slate-200">
                <service.icon size={40} className="text-navy" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-extrabold text-navy mb-3">{service.title}</h2>
                <p className="text-lg font-medium text-steel-gray mb-4">{service.desc}</p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.details}
                </p>
                <Link to="/quote" className="inline-flex items-center text-sm font-bold text-navy hover:text-sky-blue transition-colors">
                  Consult an Expert <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
