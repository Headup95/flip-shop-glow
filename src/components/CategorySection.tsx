
import React from 'react';
import { cn } from '@/lib/utils';

interface CategoryCardProps {
  title: string;
  image: string;
  count: number;
  className?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, image, count, className }) => {
  return (
    <div className={cn(
      "group relative h-80 overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl",
      className
    )}>
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-6 text-white">
        <h3 className="text-2xl font-bold mb-1">{title}</h3>
        <p className="text-white/80">{count} Products</p>
      </div>
      <div className="absolute inset-0 bg-navy/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="px-6 py-3 bg-white text-navy font-medium rounded-full hover:bg-teal hover:text-white transition-colors cursor-pointer">
            Browse Category
          </span>
        </div>
      </div>
    </div>
  );
};

const CategorySection: React.FC = () => {
  const categories = [
    {
      id: 1,
      title: 'Electronics',
      image: 'https://images.unsplash.com/photo-1593344484962-796055d4a3a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      count: 120
    },
    {
      id: 2,
      title: 'Fashion',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
      count: 350
    },
    {
      id: 3,
      title: 'Home & Living',
      image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      count: 180
    },
    {
      id: 4,
      title: 'Beauty',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      count: 95
    },
    {
      id: 5,
      title: 'Sports',
      image: 'https://images.unsplash.com/photo-1518604600855-5e9f1f215ac2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      count: 145
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Shop by Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of categories to find exactly what you're looking for.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.slice(0, 2).map(category => (
            <CategoryCard
              key={category.id}
              title={category.title}
              image={category.image}
              count={category.count}
            />
          ))}
          {categories.slice(2, 3).map(category => (
            <CategoryCard
              key={category.id}
              title={category.title}
              image={category.image}
              count={category.count}
              className="col-span-2 lg:col-span-1"
            />
          ))}
          {categories.slice(3, 5).map(category => (
            <CategoryCard
              key={category.id}
              title={category.title}
              image={category.image}
              count={category.count}
              className="col-span-1"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
