import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white w-full p-4 flex flex-col md:flex-row items-center justify-between">
      <div className="text-3xl font-bold mb-4 md:mb-0">
        My Website
      </div>
      <nav className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
        <a href="#home" className="hover:underline">Home</a>
        <a href="#about" className="hover:underline">About</a>
        <a href="#services" className="hover:underline">Services</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
