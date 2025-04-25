
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ShoppingCart, User, Search, Menu } from 'lucide-react';
import { Input } from './ui/input';
import LanguageSwitcher from './LanguageSwitcher';

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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 shadow-md' : ''}`}>
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="hidden md:flex space-x-6 text-sm text-gray-700">
              <Link to="/" className="hover:text-gray-900">Start Gallery</Link>
              <Link to="/gift-cards" className="hover:text-gray-900">Gift Cards</Link>
              <Link to="/news" className="hover:text-gray-900">News</Link>
              <Link to="/today-deals" className="hover:text-gray-900">Today's Deals</Link>
              <Link to="/customer-service" className="hover:text-gray-900">Customer Service</Link>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
      
      <div className="bg-white py-4 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-4">
            <Link to="/" className="text-2xl font-bold text-gray-800">Eflyer</Link>
            
            <button 
              className="md:hidden text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>

            <div className="hidden md:flex items-center flex-1 max-w-2xl mx-4">
              <div className="relative flex-1 flex items-center">
                <select className="h-10 rounded-l-md border border-r-0 border-input bg-background px-3 py-2 text-sm focus:outline-none">
                  <option>All Categories</option>
                  <option>Men</option>
                  <option>Women</option>
                  <option>Electronics</option>
                </select>
                <Input 
                  type="search"
                  placeholder="Search for products..."
                  className="rounded-l-none"
                />
                <Button 
                  variant="default"
                  size="icon"
                  className="absolute right-0 rounded-l-none bg-yellow-400 hover:bg-yellow-500"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link to="/cart" className="text-gray-700 hover:text-gray-900">
                <ShoppingCart className="h-5 w-5" />
              </Link>
              <Link to="/account" className="text-gray-700 hover:text-gray-900">
                <User className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <Input 
                type="search"
                placeholder="Search for products..."
                className="mb-2"
              />
              <Link to="/" className="text-gray-700 hover:text-gray-900">Start Gallery</Link>
              <Link to="/gift-cards" className="text-gray-700 hover:text-gray-900">Gift Cards</Link>
              <Link to="/news" className="text-gray-700 hover:text-gray-900">News</Link>
              <Link to="/today-deals" className="text-gray-700 hover:text-gray-900">Today's Deals</Link>
              <Link to="/customer-service" className="text-gray-700 hover:text-gray-900">Customer Service</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
