import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';             
import Prestations from './pages/Prestations';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="min-h-screen bg-background text-light flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prestations" element={<Prestations />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="p-6 bg-anthracite text-gold text-center text-sm mt-16">
        &copy; 2026 Ciseaux d’Or. Tous droits réservés.
        <div className="mt-2 text-light/50 text-xs">
          Conçu par <a href="https://www.linkedin.com/in/aya-el-janati-44b961240/" target="_blank" className="underline hover:text-gold">Aya El Janati</a>
        </div>
        <div className="mt-2 text-light/50 text-xs">
          Maintenance et évolution par <a href="https://www.linkedin.com/in/hicham-g-578759125/" target="_blank" className="underline hover:text-gold">Hicham Guendouz</a>
        </div>
      </footer>

    </div>
  );
}

export default App;
