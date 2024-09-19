// src/Components/Navbar.js
import React from 'react';
import logo from '../Assets/logo.png'; // Adjust the path as necessary

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-[#121212] text-white">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-12 mr-4" />
        <h1 className="text-xl md:text-2xl">My E-commerce Site</h1>
      </div>
      <div className="hidden md:flex space-x-4">
        <a href="#home" className="hover:text-gray-400">Home</a>
        <a href="#shop" className="hover:text-gray-400">Shop</a>
        <a href="#contact" className="hover:text-gray-400">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;