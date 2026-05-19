import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import Logo from './Logo';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMobileMenuOpen(false);
  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);

  // Helper to determine if a link is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="h-full bg-white text-dark-text antialiased font-body flex flex-col min-h-screen">
      {/* Global Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center" onClick={closeMenu}>
              <Logo className="h-14 w-auto text-primary" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <Link to="/about" className={`${isActive('/about') ? 'text-primary font-bold' : 'hover:text-primary font-medium'} transition-colors`}>About Us</Link>
              <Link to="/services" className={`${isActive('/services') ? 'text-primary font-bold' : 'hover:text-primary font-medium'} transition-colors`}>Services</Link>
              <Link to="/caregivers" className={`${isActive('/caregivers') ? 'text-primary font-bold' : 'hover:text-primary font-medium'} transition-colors`}>Our Caregivers</Link>
              <Link to="/careers" className={`${isActive('/careers') ? 'text-primary font-bold' : 'hover:text-primary font-medium'} transition-colors`}>Careers</Link>
              <Link to="/contact" className={`${isActive('/contact') ? 'text-primary font-bold' : 'hover:text-primary font-medium'} transition-colors`}>Contact</Link>
              <Link to="/contact" className="bg-primary text-white px-6 py-3 rounded-button font-semibold hover:bg-red-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Free Consultation
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="lg:hidden p-2 hover:text-primary transition-colors">
              <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg`}>
          <div className="px-4 py-6 space-y-4">
            <Link to="/about" onClick={closeMenu} className={`block ${isActive('/about') ? 'text-primary font-bold' : 'hover:text-primary font-medium'} py-2 transition-colors`}>About Us</Link>
            <Link to="/services" onClick={closeMenu} className={`block ${isActive('/services') ? 'text-primary font-bold' : 'hover:text-primary font-medium'} py-2 transition-colors`}>Services</Link>
            <Link to="/caregivers" onClick={closeMenu} className={`block ${isActive('/caregivers') ? 'text-primary font-bold' : 'hover:text-primary font-medium'} py-2 transition-colors`}>Our Caregivers</Link>
            <Link to="/careers" onClick={closeMenu} className={`block ${isActive('/careers') ? 'text-primary font-bold' : 'hover:text-primary font-medium'} py-2 transition-colors`}>Careers</Link>
            <Link to="/contact" onClick={closeMenu} className={`block ${isActive('/contact') ? 'text-primary font-bold' : 'hover:text-primary font-medium'} py-2 transition-colors`}>Contact</Link>
            <Link to="/contact" onClick={closeMenu} className="block bg-primary text-white px-6 py-3 rounded-button font-semibold text-center mt-4">
              Get Your Free Consultation
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      {/* Global Footer */}
      <footer className="bg-dark-bg text-white border-t border-white/5 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            <div className="lg:col-span-1">
              <Logo className="h-14 w-auto brightness-0 invert mb-6" />
              <p className="text-white/70 mb-6">Providing dependable Home Health services in Addison, Illinois, since 2008.</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"><i className="fa-brands fa-yelp"></i></a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-accent font-heading">Quick Links</h4>
              <ul className="space-y-3 text-white/70">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
                <li><Link to="/caregivers" className="hover:text-white transition-colors">Our Caregivers</Link></li>
                <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-accent font-heading">Services</h4>
              <ul className="space-y-3 text-white/70">
                <li><Link to="/services" className="hover:text-white transition-colors">Personal Care</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Companionship</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-accent font-heading">Contact Us</h4>
              <ul className="space-y-4 text-white/70">
                <li className="flex gap-3"><i className="fa-solid fa-map-marker-alt text-primary mt-1"></i> <span>311 N Chestnut St Ste B2<br />Addison, IL 60101</span></li>
                <li className="flex items-center gap-3"><i className="fa-solid fa-phone text-primary"></i> <a href="tel:+16307583430" className="hover:text-primary transition-colors">(630) 758-3430</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/60 text-sm">
            <p>&copy; 2024 CareStat Healthcare Services. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sticky Phone Number Button providing constant access */}
      <motion.div 
        className="fixed bottom-6 right-6 z-50"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      >
        <a 
          href="tel:+16307583430" 
          className="flex items-center gap-3 bg-primary text-white px-5 py-4 rounded-full shadow-2xl hover:bg-red-700 hover:scale-105 transition-all group"
          aria-label="Call (630) 758-3430"
        >
          <div className="relative">
            <i className="fa-solid fa-phone text-xl relative z-10"></i>
            {/* Pulsing ring effect */}
            <div className="absolute inset-0 bg-white rounded-full opacity-50 animate-ping"></div>
          </div>
          <span className="font-bold text-lg hidden sm:block group-hover:underline">(630) 758-3430</span>
        </a>
      </motion.div>
    </div>
  );
}
