import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';             
import Prestations from './pages/Prestations';

function App() {
  return (
    <div className="min-h-screen bg-background text-light flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prestations" element={<Prestations />} />
        </Routes>
      </main>

      <footer className="p-6 bg-anthracite text-gold text-center text-sm mt-16">
        &copy; 2025 Ciseaux d’Or. Tous droits réservés.
      </footer>
    </div>
  );
}

export default App;
