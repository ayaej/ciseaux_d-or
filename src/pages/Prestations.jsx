import React from 'react';
import coiffure2 from '/images/coiffure2.JPG';
import coiffureHomme from '/images/coiffure_homme.JPG';
import barbeHomme from '/images/barbe_homme.JPG';
import coiffureEnfant from '/images/coiffure_enfant.JPG';

const prestations = [
  {
    titre: 'Coupe Homme',
    description: 'Coupe classique ou moderne adaptée à votre style.',
    duree: '30 min',
    tarif: '17 €',
    image: coiffure2,
  },
  {
    titre: 'Coupe + Barbe',
    description: 'Coupe de cheveux et taille de barbe.',
    duree: '45 min',
    tarif: '25 €',
    image: coiffureHomme,
  },
  {
    titre: 'Barbe',
    description: 'Entretien et taille de la barbe.',
    duree: '15 min',
    tarif: '10 €',
    image: barbeHomme,
  },
  {
    titre: 'Coupe Enfant (-10 ans)',
    description: 'Coupe adaptée aux enfants de moins de 10 ans.',
    duree: '30 min',
    tarif: '12 €',
    image: coiffureEnfant,
  },
];

const Prestations = () => (
  <section 
    className="py-16 bg-gray-100 min-h-screen"
    aria-label="Liste des prestations de coiffure proposées"
  >
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-serif text-center text-gray-800 mb-12">Nos Prestations</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {prestations.map(({ titre, description, duree, tarif, image }, index) => (
          <article key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={image}
              alt={`Photo de la prestation : ${titre}`}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">{titre}</h3>
              <p className="text-gray-600 mt-2">{description}</p>
              <div className="flex justify-between items-center mt-4">
                <time className="text-gray-500" dateTime={`PT${parseInt(duree)}M`}>{duree}</time>
                <span className="text-gray-800 font-bold">{tarif}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Prestations;
