import React from 'react';
import faqs from './faqs';

export default function FAQAtahualpa({
  title = '❓ FAQ – Questions fréquentes',
  className = '',
}) {
  return (
    <div className={`faq-container faq-section margin-bottom-lg ${className}`}>
      <header className="mb-6 sm:mb-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          {title}
        </h2>
        <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
          Toutes les réponses pour bien préparer l’atelier d’Atahualpa Music
          Studio.
        </p>
      </header>

      <div className="grid gap-4">
        {faqs.map((item, i) => (
          <div key={i} className="margin-bottom-sm">
            <div className="">
              <h3 className="">
                {item.emoji} {item.q}
              </h3>
            </div>
            <div className="">{item.a}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
