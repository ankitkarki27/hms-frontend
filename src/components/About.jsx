import React from 'react';
import { 
  BellAlertIcon, 
  DocumentCheckIcon, 
  CodeBracketIcon 
} from '@heroicons/react/24/outline';

const AboutCard = ({ Icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
      <div className="flex flex-col items-center">
        <div className="mb-4 p-4 rounded-full bg-brand-blue/10 group-hover:bg-brand-blue/20 transition-colors">
          <Icon className="w-12 h-12 text-brand-blue group-hover:text-brand-blue/80 transition-colors" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-brand-blue transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-center group-hover:text-gray-800 transition-colors">
          {description}
        </p>
      </div>
    </div>
  );
};

const About = () => {
  const features = [
    {
      Icon: BellAlertIcon,
      title: 'Innovative Technology',
      description: 'Cutting-edge solutions that revolutionize hospital management'
    },
    {
      Icon: DocumentCheckIcon,
      title: 'Comprehensive Solutions',
      description: 'End-to-end software covering all hospital management needs'
    },
    {
      Icon: CodeBracketIcon,
      title: 'User-Friendly Design',
      description: 'Intuitive interfaces that enhance workflow efficiency'
    }
  ];

  return (
    <section id="about" className="py-20 bg-brand-gray">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-brand-blue mb-12 animate-fadeIn">
          About MedTech Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AboutCard 
              key={index}
              Icon={feature.Icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;