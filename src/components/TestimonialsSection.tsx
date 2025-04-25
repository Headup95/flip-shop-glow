
import React from 'react';
import { cn } from '@/lib/utils';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  image: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, name, role, image, className }) => {
  return (
    <div className={cn(
      "bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-1",
      className
    )}>
      <div className="flex items-center mb-6">
        <img 
          src={image} 
          alt={name} 
          className="w-16 h-16 rounded-full object-cover mr-4" 
        />
        <div>
          <h4 className="text-lg font-semibold">{name}</h4>
          <p className="text-gray-500">{role}</p>
        </div>
      </div>
      <div>
        <svg className="h-8 w-8 text-teal/20 mb-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
        </svg>
        <p className="text-gray-700 mb-6">{quote}</p>
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg key={star} className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      quote: "I'm absolutely thrilled with my purchase! The quality exceeded my expectations and the customer service was outstanding. Will definitely be shopping here again.",
      name: "Sarah Johnson",
      role: "Fashion Enthusiast",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
    },
    {
      id: 2,
      quote: "The attention to detail in both the product and packaging shows how much this company cares about quality. Very impressed with my order.",
      name: "Michael Chen",
      role: "Designer",
      image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
    },
    {
      id: 3,
      quote: "Fast shipping and excellent products. The website made it so easy to find exactly what I was looking for. Highly recommend!",
      name: "Olivia Martinez",
      role: "Business Owner",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied customers about their shopping experience with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-float">
          {testimonials.map(testimonial => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
