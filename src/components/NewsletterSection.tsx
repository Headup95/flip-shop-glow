
import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const NewsletterSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would typically handle the newsletter signup
    console.log('Newsletter signup submitted');
  };

  return (
    <section className="py-20 bg-navy text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="text-white/80 mb-8">
            Subscribe to our newsletter and be the first to know about new products, special offers, and exclusive discounts.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-teal"
              required
            />
            <Button type="submit" className="bg-teal hover:bg-teal/80 text-white">
              Subscribe
            </Button>
          </form>
          
          <p className="mt-4 text-sm text-white/60">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
