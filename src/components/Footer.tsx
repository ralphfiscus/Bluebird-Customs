import { Link } from 'react-router-dom';
import { Plane, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-navy text-gray-300 pt-16 pb-8 border-t border-navy-light">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center group">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/57fd17b8be659435d97c7961/1503949645557-5GPDXARRBZI3KWIQN32K/1_Primary_logo_on_transparent_1024+%283%29.png?format=1500w" 
                alt="Bluebird Customs Label" 
                className="h-10 w-auto group-hover:opacity-90 transition-opacity" 
              />
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Premium customs brokerage services for modern importers and exporters. Simplifying international trade with speed, precision, and expertise.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a href="tel:+14356551817" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone size={18} className="text-gray-500" />
                (435) 655-1817
              </a>
              <a href="mailto:emily@bluebirdchb.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail size={18} className="text-gray-500" />
                emily@bluebirdchb.com
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-gray-500 shrink-0 mt-1" />
                <span>2117 Venus Court<br/>Park City, UT 84060</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-6 uppercase tracking-wider text-sm">Services</h3>
            <ul className="space-y-4">
              {[
                { name: 'Customs Clearance', path: '/services#clearance' },
                { name: 'Trade Compliance', path: '/services#compliance' },
                { name: 'HTS Classification', path: '/services#hts' },
                { name: 'ISF Filing', path: '/services#isf' },
                { name: 'FDA Clearance', path: '/services#fda' },
                { name: 'Duty Optimization', path: '/services#optimization' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm hover:text-white transition-colors flex items-center gap-2 group">
                    <ArrowRight size={14} className="text-gray-600 group-hover:text-aviation-blue transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-6 uppercase tracking-wider text-sm">Industries Served</h3>
            <ul className="space-y-4">
              {[
                { name: 'Aerospace & Defense', path: '/industries#aerospace' },
                { name: 'E-commerce & Retail', path: '/industries#ecommerce' },
                { name: 'Manufacturing', path: '/industries#manufacturing' },
                { name: 'Medical Devices', path: '/industries#medical' },
                { name: 'Industrial Equipment', path: '/industries#industrial' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm hover:text-white transition-colors flex items-center gap-2 group">
                    <ArrowRight size={14} className="text-gray-600 group-hover:text-aviation-blue transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-6 uppercase tracking-wider text-sm">Stay Compliant</h3>
            <p className="text-sm text-gray-400 mb-4">
              Get the latest trade updates and regulatory changes delivered to your inbox.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Work email address"
                className="bg-navy-light text-white px-4 py-3 rounded-md text-sm border border-gray-800 focus:outline-none focus:border-aviation-blue focus:ring-1 focus:ring-aviation-blue transition-all"
                required
              />
              <button
                type="submit"
                className="bg-aviation-blue hover:bg-blue-600 text-white font-medium px-4 py-3 rounded-md text-sm transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-navy-light flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Bluebird Customs Brokerage. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
