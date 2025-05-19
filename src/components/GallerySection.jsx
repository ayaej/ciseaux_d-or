import React from 'react';

const images = [
  '/images/IMG-20250517-WA0016.jpg',
  '/images/IMG-20250517-WA0005.jpg',
  '/images/IMG-20250517-WA0006.jpg',
  '/images/IMG-20250517-WA0022.jpg',
  '/images/IMG-20250517-WA0008.jpg',
  '/images/IMG-20250517-WA0013.jpg',
];

const GallerySection = () => {
  return (
    <section
      id="galerie"
      aria-label="Galerie photos de nos réalisations"
      className="py-20 bg-gray-900 text-white"
    >
      <div className="text-center mb-12">
        <h2 className="text-5xl font-serif text-gold mb-4">Notre Galerie</h2>
        <p className="text-lg text-light/80 max-w-xl mx-auto">
          Découvrez quelques-unes de nos plus belles réalisations en images.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
        {images.map((src, index) => {
          const isLarge = index % 3 === 0;
          return (
            <div
              key={index}
              className={`relative rounded-lg overflow-hidden shadow-lg group cursor-pointer
                ${isLarge ? 'md:col-span-2 md:row-span-2' : ''}
              `}
              style={{ aspectRatio: isLarge ? '2 / 2' : '1 / 1' }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${src})` }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-15 transition" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default GallerySection;
