import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="px-10 py-4 bg-anthracite text-white shadow sticky top-0 z-50 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-3xl font-serif font-bold cursor-pointer">
        Ciseaux d’Or
      </Link>

      {/* Menu central */}
      <nav>
        <ul className="flex space-x-10 text-lg font-medium">
          <li>
            <Link to="/prestations" className="hover:text-gold transition">
              Prestations
            </Link>
          </li>

          <li>
            <a href="/Contact" className="hover:text-gold transition">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Bouton Prendre rendez-vous */}
      <a
        href="https://www.planity.com/ciseaux-dor-77500-chelles" // Remplace ce lien par le tien
        className="bg-gold text-anthracite px-6 py-2 rounded-full font-semibold hover:bg-rose-600 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        Prendre rendez-vous
      </a>
    </header>
  );
};

export default Navbar;
