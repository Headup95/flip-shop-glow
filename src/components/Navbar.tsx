
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ShoppingCart, User, Search, Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`transparent-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-navy">ShopGlow</Link>
          
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="hover-link">Home</Link>
            <Link to="/shop" className="hover-link">Shop</Link>
            <Link to="/collections" className="hover-link">Collections</Link>
            <Link to="/about" className="hover-link">About</Link>
            <Link to="/contact" className="hover-link">Contact</Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <button aria-label="Search" className="text-navy hover:text-teal transition">
              <Search className="h-5 w-5" />
            </button>
            <Link to="/cart" aria-label="Cart" className="text-navy hover:text-teal transition">
              <ShoppingCart className="h-5 w-5" />
            </Link>
            <Link to="/dashboard" aria-label="Account" className="text-navy hover:text-teal transition">
              <User className="h-5 w-5" />
            </Link>
            <button 
              aria-label="Menu" 
              className="md:hidden text-navy hover:text-teal transition"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-3">
            <Link to="/" className="block py-2 hover-link">Home</Link>
            <Link to="/shop" className="block py-2 hover-link">Shop</Link>
            <Link to="/collections" className="block py-2 hover-link">Collections</Link>
            <Link to="/about" className="block py-2 hover-link">About</Link>
            <Link to="/contact" className="block py-2 hover-link">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
