import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const LearnMoreButton = ({ onClick, className }) => {
  return (
    <button 
      onClick={onClick}
      className={`
        group relative overflow-hidden rounded-full 
        bg-brand-green text-white 
        px-6 py-2 
        flex items-center justify-center
        transition duration-300 ease-out
        hover:bg-brand-green/90
        focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-offset-2
        ${className}
      `}
    >
      <span className="flex items-center gap-2">
        Learn More
        <ArrowRightIcon 
          className="w-5 h-5 transition-transform group-hover:translate-x-1" 
        />
      </span>
      <span 
        className="
          absolute top-0 left-0 w-full h-full 
          bg-white opacity-0 group-hover:opacity-10 
          transition-opacity duration-300
        "
      />
    </button>
  );
};

const ProductCard = ({ image, title, description, onLearnMore }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
      <div className="overflow-hidden rounded-t-lg mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="text-2xl font-bold mb-4 text-brand-blue">{title}</h3>
      <p className="mb-6 text-gray-600">{description}</p>
      <LearnMoreButton 
        onClick={onLearnMore} 
        className="w-full"
      />
    </div>
  );
};

const Products = () => {
  const products = [
    {
      image: `${process.env.PUBLIC_URL}/1.png`,
      title: 'Patient Management',
      description: 'Comprehensive patient tracking and management system',
      onLearnMore: () => {/* Add navigation or modal logic */}
    },
    {
      image: `${process.env.PUBLIC_URL}/2.png`,
      title: 'Billing System',
      description: 'Streamlined billing and financial management solutions',
      onLearnMore: () => {/* Add navigation or modal logic */}
    },
    {
      image: `${process.env.PUBLIC_URL}/home.png`,
      title: 'EHR System',
      description: 'Secure and efficient electronic health record management',
      onLearnMore: () => {/* Add navigation or modal logic */}
    }
  ];

  return (
    <section id="products" className="bg-brand-blue py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-12 animate-fadeIn">
          Our Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard 
              key={index}
              {...product}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;