import { ReactNode, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Plane, ChevronRight, Phone } from 'lucide-react';
import { cn } from '../lib/utils';

interface NavLinkProps {
  to: string;
  children: ReactNode;
  isActive: boolean;
  onClick?: () => void;
  key?: string | number;
}

const NavLink = ({ to, children, isActive, onClick }: NavLinkProps) => (
  <Link
    to={to}
    onClick={onClick}
    className={cn(
      "text-sm font-semibold transition-colors hover:text-navy px-3 py-2 rounded-md",
      isActive ? "text-navy bg-slate-100" : "text-steel-gray"
    )}
  >
    {children}
  </Link>
);

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Resources', path: '/resources' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-slate-200 bg-white shadow-sm shrink-0",
        isScrolled ? "py-3" : "h-20 flex flex-col justify-center"
      )}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src="https://images.squarespace-cdn.com/content/v1/57fd17b8be659435d97c7961/1503949645557-5GPDXARRBZI3KWIQN32K/1_Primary_logo_on_transparent_1024+%283%29.png?format=1500w" 
              alt="Bluebird Customs Label" 
              className="h-10 w-auto group-hover:opacity-90 transition-opacity" 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                isActive={location.pathname === link.path}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+14356551817" className="text-sm font-medium text-steel-gray hover:text-navy flex items-center gap-2 transition-colors">
              <Phone size={16} />
              <span>(435) 655-1817</span>
            </a>
            <Link
              to="/quote"
              className="bg-navy hover:bg-navy-lighter text-white px-6 py-2.5 rounded-md font-bold text-sm transition-all shadow-lg shadow-navy/10"
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-navy"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-md font-medium flex items-center justify-between",
                    location.pathname === link.path ? "bg-blue-50 text-aviation-blue" : "text-navy hover:bg-gray-50"
                  )}
                >
                  {link.name}
                  <ChevronRight size={16} className="opacity-50" />
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3">
                <a href="tel:+14356551817" className="flex items-center justify-center gap-2 px-4 py-3 text-steel-gray bg-gray-50 rounded-md font-medium">
                  <Phone size={18} />
                  <span>Call us: (435) 655-1817</span>
                </a>
                <Link
                  to="/quote"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-navy text-white text-center px-4 py-3 rounded-md font-medium"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
