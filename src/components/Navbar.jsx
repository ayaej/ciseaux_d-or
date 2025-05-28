import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-anthracite text-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="text-3xl font-serif font-bold cursor-pointer">
          Ciseaux d’Or
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-8 font-medium text-lg items-center">
          <Link to="/prestations" className="hover:text-gold transition">
            Prestations
          </Link>
          <Link to="/contact" className="hover:text-gold transition">
            Contact
          </Link>
          <a
            href="https://www.planity.com/ciseaux-dor-77500-chelles"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-anthracite px-4 py-1 rounded-full font-semibold hover:bg-rose-600 transition"
          >
            Prendre rendez-vous
          </a>
        </nav>

        {/* Hamburger Button Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <nav className="md:hidden bg-anthracite px-6 py-4 space-y-4 text-lg font-medium">
          <Link
            to="/prestations"
            className="block hover:text-gold transition"
            onClick={() => setIsOpen(false)}
          >
            Prestations
          </Link>
          <Link
            to="/contact"
            className="block hover:text-gold transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <a
            href="https://www.planity.com/ciseaux-dor-77500-chelles"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gold text-anthracite px-4 py-2 rounded-full font-semibold hover:bg-rose-600 transition text-center"
            onClick={() => setIsOpen(false)}
          >
            Prendre rendez-vous
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
