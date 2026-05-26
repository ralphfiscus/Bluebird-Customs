import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';

export function Resources() {
  const articles = [
    {
      title: "The Importer's Guide to HTS Classification",
      category: "Compliance",
      desc: "Learn the fundamentals of the Harmonized Tariff Schedule and how to avoid the most common classification errors."
    },
    {
      title: "Navigating FDA Requirements for Imports",
      category: "Regulated Goods",
      desc: "A breakdown of Prior Notice, Facility Registration, and what to do when your shipment is held by the FDA."
    },
    {
      title: "Section 321: De Minimis Value Rules Explained",
      category: "E-Commerce",
      desc: "How D2C brands are legally importing goods duty-free under the $800 threshold."
    }
  ];

  return (
    <div className="bg-transparent min-h-screen py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy mb-6">Trade Resources</h1>
          <p className="text-lg text-steel-gray max-w-2xl mx-auto">
            Actionable insights, compliance updates, and guides to help you navigate international trade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <div key={i} className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:border-sky-blue transition-colors">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-blue mb-4 block">
                {article.category}
              </span>
              <h2 className="text-xl font-extrabold text-navy mb-3 line-clamp-2">
                {article.title}
              </h2>
              <p className="text-steel-gray mb-6 line-clamp-3">
                {article.desc}
              </p>
              <Link to="#" className="inline-flex items-center text-sm font-bold text-navy hover:text-sky-blue transition-colors">
                Read Guide <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-navy text-white rounded-xl p-10 text-center">
          <BookOpen size={48} className="mx-auto text-sky-blue mb-6" />
          <h2 className="text-2xl font-extrabold mb-4">Need specific guidance?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Trade compliance isn't one-size-fits-all. If you have questions about your specific commodity, speak with one of our licensed brokers.
          </p>
          <Link to="/quote" className="inline-block bg-white text-navy hover:bg-slate-50 px-8 py-3 rounded-lg font-bold transition-colors shadow-sm">
            Ask a Broker
          </Link>
        </div>
      </div>
    </div>
  );
}
