
import React from 'react';
import ProductCard from './ProductCard';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

const FeaturedProducts: React.FC = () => {
  const fashionProducts = [
    {
      id: 1,
      name: 'Man T-shirt',
      price: 29.99,
      image: '/lovable-uploads/51cefa6d-fb7e-424b-9444-cc11128b7b34.png',
      category: 'Fashion'
    },
    {
      id: 2,
      name: 'Man Shirt',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      category: 'Fashion'
    },
    {
      id: 3,
      name: 'Woman Dress',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=746&q=80',
      category: 'Fashion'
    }
  ];

  const electronicProducts = [
    {
      id: 4,
      name: 'Laptop',
      price: 899.99,
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80',
      category: 'Electronics'
    },
    {
      id: 5,
      name: 'Mobile',
      price: 499.99,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      category: 'Electronics'
    },
    {
      id: 6,
      name: 'Computer',
      price: 1299.99,
      image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1442&q=80',
      category: 'Electronics'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Man & Woman Fashion</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {fashionProducts.map(product => (
            <ProductCard 
              key={product.id} 
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              category={product.category}
            />
          ))}
        </div>

        <Separator className="my-16" />
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Electronic</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {electronicProducts.map(product => (
            <ProductCard 
              key={product.id} 
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
