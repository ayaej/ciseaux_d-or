import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
      style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/photo_arriere.JPG)` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
          Bienvenue chez Ciseaux d’Or
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-8 drop-shadow-md">
          Découvrez nos services de coiffure et barbier, dans un cadre moderne et chic.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
