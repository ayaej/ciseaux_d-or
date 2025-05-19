import React from 'react';

const prestations = [
  {
    titre: 'Coupe Homme',
    description: 'Coupe classique ou moderne adaptée à votre style.',
    duree: '30 min',
    tarif: '14 €',
    image: '/images/coiffure2.JPG',
  },
  {
    titre: 'Coupe + Barbe',
    description: 'Coupe de cheveux et taille de barbe.',
    duree: '45 min',
    tarif: '20 €',
    image: '/images/coiffure_homme.JPG',
  },
  {
    titre: 'Barbe',
    description: 'Entretien et taille de la barbe.',
    duree: '15 min',
    tarif: '10 €',
    image: '/images/barbe_homme.JPG',
  },
  {
    titre: 'Coupe Enfant (-10 ans)',
    description: 'Coupe adaptée aux enfants de moins de 10 ans.',
    duree: '30 min',
    tarif: '10 €',
    image: '/images/coiffure_enfant.JPG',
  },
];

const Prestations = () => {
  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-serif text-anthracite text-center mb-8">Nos Prestations</h1>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Découvrez notre gamme complète de prestations pour hommes, adaptées à tous vos besoins de coiffure et barbe.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {prestations.map(({ titre, description, duree, tarif, image }, idx) => (
            <article
              key={idx}
              className="relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow h-64 flex flex-col justify-end p-6 text-white"
              style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="bg-black bg-opacity-50 p-4 rounded-md">
                <h2 className="text-2xl font-semibold mb-1">{titre}</h2>
                <p className="mb-2">{description}</p>
                <div className="flex justify-between text-sm font-medium">
                  <span>Durée : {duree}</span>
                  <span>Tarif : {tarif}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prestations;
