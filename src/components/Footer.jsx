import React from 'react';

const Footer = () => {
  return (
    <footer className="p-6 bg-anthracite text-gold text-center text-sm mt-16">
      &copy; 2025 Ciseaux d'Or. Tous droits réservés.

      <div className="mt-2 text-light/50 text-xs">
        Conçu par
        <a href="https://www.linkedin.com/in/aya-el-janati-44b961240/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gold">
          &nbsp;Aya El Janati
        </a> &nbsp;|&nbsp;
        Maintenu par
        <a href="https://github.com/Hicham77500" target="_blank" rel="noopener noreferrer" className="underline hover:text-gold">&nbsp;Hicham Guendouz</a>
        (<a href="https://www.linkedin.com/in/hicham-g-578759125/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gold">LinkedIn</a>)
      </div>
    </footer>
  );
};

export default Footer;
