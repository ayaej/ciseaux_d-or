import React from 'react';

const Contact = () => {
  const basePath = import.meta.env.BASE_URL; // récupère la base définie dans vite.config.js

  return (
    <section
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-white px-4 py-20 relative"
      style={{ backgroundImage: `url('${basePath}images/coiffure_arr.JPG')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      {/* Contenu */}
      <div className="relative z-10 max-w-3xl text-center space-y-8">
        <h1 className="text-5xl font-serif text-gold mb-4">Contactez-nous</h1>

        <div className="space-y-4 text-lg">
          <p>📍 <strong>Adresse :</strong> 19 Av. du Maréchal Foch, 77500 Chelles</p>
          <p>
            📞 <strong>Téléphone :</strong>{' '}
            <a href="tel:+33751260337" className="text-gold hover:underline">
              07 51 26 03 37
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-serif text-gold mb-2">Horaires d’ouverture</h2>
          <dl className="space-y-1 text-lg">
            <div>
              <dt className="inline font-semibold">Lundi :</dt>{' '}
              <dd className="inline">10:00–20:00</dd>
            </div>
            <div>
              <dt className="inline font-semibold">Mardi :</dt>{' '}
              <dd className="inline">10:00–20:00</dd>
            </div>
            <div>
              <dt className="inline font-semibold">Mercredi :</dt>{' '}
              <dd className="inline">10:00–20:00</dd>
            </div>
            <div>
              <dt className="inline font-semibold">Jeudi :</dt>{' '}
              <dd className="inline">10:00–20:00</dd>
            </div>
            <div>
              <dt className="inline font-semibold">Vendredi :</dt>{' '}
              <dd className="inline">10:00–20:00</dd>
            </div>
            <div>
              <dt className="inline font-semibold">Samedi :</dt>{' '}
              <dd className="inline">09:00–20:00</dd>
            </div>
            <div>
              <dt className="inline font-semibold">Dimanche :</dt>{' '}
              <dd className="inline">09:00–20:00</dd>
            </div>
          </dl>
        </div>

        {/* Carte Google Maps */}
        <div className="w-full max-w-4xl mx-auto mt-12 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Localisation Ciseaux d'Or"
            aria-label="Carte Google Maps pour la localisation du salon Ciseaux d'Or à Chelles"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2639.156086493756!2d2.5899844767998957!3d48.87575379738124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e613a30f13fe75%3A0x4a6a9401b2c3f8e0!2s19%20Av.%20du%20Mar%C3%A9chal%20Foch%2C%2077500%20Chelles!5e0!3m2!1sfr!2sfr!4v1716133700000!5m2!1sfr!2sfr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
