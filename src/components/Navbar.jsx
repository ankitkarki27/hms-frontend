import React, { useState } from 'react';
import { ChatBubbleLeftRightIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const ContactButton = ({ onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="group relative px-6 py-3 font-semibold text-white overflow-hidden rounded-lg"
    >
      <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-gray-800 group-hover:translate-x-0 group-hover:translate-y-0"></span>
      <span className="absolute inset-0 w-full h-full bg-brand-blue border-2 border-brand-blue opacity-90 group-hover:opacity-100"></span>
      
      <span className="relative flex items-center justify-center gap-2 text-sm">
        <ChatBubbleLeftRightIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
        Contact Us
      </span>
      
      <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></span>
    </button>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleContactClick = () => {
    // Add contact modal or navigation logic
    console.log('Contact button clicked');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#products", label: "Products" }
  ];

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-brand-blue">Swastha Nepal</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="hover:text-brand-blue transition"
            >
              {link.label}
            </a>
          ))}
          <ContactButton onClick={handleContactClick} />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-gray-600 hover:text-brand-blue transition"
          >
            {isMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
          <div className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="hover:text-brand-blue transition"
                onClick={toggleMenu}
              >
                {link.label}
              </a>
            ))}
            <ContactButton onClick={handleContactClick} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;