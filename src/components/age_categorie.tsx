'use client';

import React from 'react';

interface AgeCategory {
  id: number;
  title: string;
  ageRange: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

const ageCategories: AgeCategory[] = [
  {
    id: 1,
    title: 'Juniors',
    ageRange: '7 à 12 ans',
    description:
      "We partner with schools and organizations to offer a range of programs, both in-person and virtual, for ages 7–25.",
    imageUrl: '/image_perso/about.png',
    imageAlt: 'Enfants codant sur ordinateur'
  },
  {
    id: 2,
    title: 'Trans',
    ageRange: '13 à 18 ans',
    description:
      "We partner with schools and organizations to offer a range of programs, both in-person and virtual, for ages 7–25.",
    imageUrl: '/image_perso/about.png',
    imageAlt: 'Adolescents en atelier tech'
  },
  {
    id: 3,
    title: 'Makers',
    ageRange: '19 à 23 ans',
    description:
      "We partner with schools and organizations to offer a range of programs, both in-person and virtual, for ages 7–25.",
    imageUrl: '/image_perso/about.png',
    imageAlt: 'Jeunes adultes travaillant sur un projet'
  }
];

const AgeCategories = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="bg-[#1E1E1E] p-6 sm:p-10 md:p-14 rounded-3xl text-white">
        <h2 className="font-inter font-bold text-3xl md:text-[45px] mb-10">
          Nos catégories d'âge
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {ageCategories.map((category) => (
            <div key={category.id} className="w-full">
              <div className="mb-6 overflow-hidden rounded-xl">
                <img
                  src={category.imageUrl}
                  alt={category.imageAlt}
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
              <div>
                <h3 className="font-inter font-bold text-xl md:text-[24px] mb-4">
                  {category.title} ({category.ageRange})
                </h3>
                <p className="font-inter text-base md:text-[18px] leading-relaxed">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgeCategories;
