import React from 'react';
import { 
  PlayCircleIcon, 
  ArrowRightIcon 
} from '@heroicons/react/24/outline';

const AnimatedButton = ({ children, variant = 'primary', onClick }) => {
  const variants = {
    primary: 'bg-brand-blue text-white hover:bg-brand-blue/90',
    secondary: 'border-2 border-brand-blue text-brand-blue hover:bg-brand-blue/10'
  };

  return (
    <button 
      onClick={onClick}
      className={`
        group relative overflow-hidden rounded-full 
        px-6 py-3 
        flex items-center justify-center
        transition duration-300 ease-out
        ${variants[variant]}
        focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2
      `}
    >
      <span className="flex items-center gap-2">
        {children}
        <ArrowRightIcon 
          className="w-5 h-5 transition-transform group-hover:translate-x-1" 
        />
      </span>
    </button>
  );
};

const Hero = () => {
  const handleLearnMore = () => {
    console.log('Learn More clicked');
  };

  const handleWatchVideo = () => {
    console.log('Watch Video clicked');
  };

  return (
    <section 
      id="home" 
      className="min-h-screen pt-20 bg-gradient-to-br from-white to-blue-50 flex items-center"
    >
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-brand-blue leading-tight">
            Empowering Healthcare 
            <br />
            Through Digital Innovation
          </h1>
          <p className="text-xl text-gray-600">
            Streamline hospital operations with our intelligent software solutions, designed to enhance patient care and operational efficiency.
          </p>
          <div className="flex space-x-4">
            <AnimatedButton onClick={handleLearnMore}>
              Learn More
            </AnimatedButton>
            <AnimatedButton 
              variant="secondary" 
              onClick={handleWatchVideo}
            >
              <PlayCircleIcon className="w-6 h-6 mr-2" />
              Watch Video
            </AnimatedButton>
          </div>
        </div>

        <div className="flex justify-center">
          <img 
            src="/home.png" 
            alt="Healthcare Software" 
            className="
              rounded-2xl 
              transition-transform duration-300 
              hover:scale-105
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;