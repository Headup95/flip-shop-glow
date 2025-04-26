import React from 'react';
import FlipSign from './FlipSign';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <div className="relative min-h-[600px] bg-gradient-to-r from-yellow-400 to-yellow-300 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
          alt="Fashion Collection"
          className="w-full h-full object-cover opacity-90"
        />
      </div>
      
      <div className="relative container mx-auto px-4 pt-32 pb-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            GET START
          </h1>
          <FlipSign
            texts={[
              "YOUR FAVRIOT SHOPING",
              "AMAZING DEALS AWAIT",
              "DISCOVER NEW STYLES"
            ]}
            className="text-3xl md:text-5xl font-bold text-white mb-8"
          />
          <Button
            size="lg"
            className="bg-white text-gray-800 hover:bg-gray-100"
          >
            BUY NOW
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-0 w-full bg-white/90 backdrop-blur-sm py-4 text-center">
        <h2 className="text-2xl font-playfair font-semibold text-gray-800">Man & Woman Fashion</h2>
      </div>
    </div>
  );
};

export default HeroSection;
