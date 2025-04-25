
import React from 'react';
import { Button } from './ui/button';
import FlipSign from './FlipSign';

const HeroSection: React.FC = () => {
  const flipTexts = ['Summer Collection', 'New Arrivals', 'Limited Edition', 'Best Sellers'];

  return (
    <div className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Discover Our <FlipSign texts={flipTexts} className="text-teal inline-block" /> Today
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Elevate your style with our premium collection of fashion and accessories
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-teal hover:bg-teal/80 text-white px-8 py-6 text-lg">
              Shop Now
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-navy px-8 py-6 text-lg">
              Explore Collections
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
