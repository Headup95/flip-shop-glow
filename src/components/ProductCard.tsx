
import React from 'react';
import { Button } from './ui/button';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image, category }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative aspect-[4/5] overflow-hidden rounded-t-lg">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-medium mb-2 font-playfair">{name}</h3>
        <p className="text-red-500 font-semibold mb-4">${price.toFixed(2)}</p>
        <div className="flex justify-center gap-2">
          <Button variant="default" className="bg-red-500 hover:bg-red-600 transition-colors duration-300">
            Buy Now
          </Button>
          <Button variant="outline" className="transition-colors duration-300 hover:bg-gray-100">
            See More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
