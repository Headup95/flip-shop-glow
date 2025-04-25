
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
    <div className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-300">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-medium mb-2">{name}</h3>
        <p className="text-red-500 font-semibold mb-4">${price.toFixed(2)}</p>
        <div className="flex justify-center gap-2">
          <Button variant="default" className="bg-red-500 hover:bg-red-600">
            Buy Now
          </Button>
          <Button variant="outline">
            See More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
