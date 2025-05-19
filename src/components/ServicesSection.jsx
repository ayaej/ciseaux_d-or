import React from 'react';

const services = [
  { title: "Coupe Homme", description: "Coupe classique ou moderne adaptée à votre style." },
  { title: "Barbe & Taille", description: "Entretien, rasage traditionnel et stylisation de la barbe." },
  { title: "Coloration", description: "Coloration cheveux ou barbe, sur mesure." },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-100 text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {services.map(({title, description}) => (
          <div key={title} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
