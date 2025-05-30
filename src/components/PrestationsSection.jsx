import React from 'react';

const prestations = [
  {
    titre: 'Coupe Homme',
    description: 'Coupe classique adaptée à votre style.',
    duree: '30 min',
    tarif: '14 €',
    image: import.meta.env.BASE_URL + 'images/coupe-homme.jpg',
  },
  {
    titre: 'Coupe + Barbe',
    description: 'Coupe de cheveux et taille de barbe.',
    duree: '45 min',
    tarif: '20 €',
    image: import.meta.env.BASE_URL + 'images/coupe-barbe.jpg',
  },
  {
    titre: 'Barbe',
    description: 'Entretien et taille de la barbe.',
    duree: '15 min',
    tarif: '10 €',
    image: import.meta.env.BASE_URL + 'images/barbe.jpg',
  },
  {
    titre: 'Coupe Enfant (-10 ans)',
    description: 'Coupe adaptée aux enfants de moins de 10 ans.',
    duree: '30 min',
    tarif: '10 €',
    image: import.meta.env.BASE_URL + 'images/coupe-enfant.jpg',
  },
];

const PrestationsSection = () => (
  <section id="prestations" className="py-16 bg-gray-100">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-serif text-center text-gray-800 mb-12">Nos Prestations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {prestations.map((prestation, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
          >
            <img
              src={prestation.image}
              alt={prestation.titre}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-gray-800">{prestation.titre}</h3>
              <p className="text-gray-600 mt-2 flex-grow">{prestation.description}</p>
              <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                <span>{prestation.duree}</span>
                <span className="text-gray-800 font-bold">{prestation.tarif}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PrestationsSection;
