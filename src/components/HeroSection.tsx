
import React from 'react';
import FlipSign from './FlipSign';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <div className="relative min-h-[600px] bg-gradient-to-r from-yellow-400 to-yellow-300 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/644e95de-9299-4f05-abe4-dd1e584a39a7.png"
          alt="Hero background"
          className="w-full h-full object-cover"
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
      
      <div className="absolute bottom-0 w-full bg-white py-4 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Man & Woman Fashion</h2>
      </div>
    </div>
  );
};

export default HeroSection;
