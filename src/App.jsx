import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Prestations from './pages/Prestations';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prestations" element={<Prestations />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;