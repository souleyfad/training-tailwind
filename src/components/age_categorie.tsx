// components/AgeCategories.tsx
import React from 'react';
import Image from 'next/image';

interface AgeCategory {
  id: number;
  title: string;
  ageRange: string;
  description: string;
  imageUrl: string; // Nouveau champ pour l'image
  imageAlt: string; // Texte alternatif
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
    <section className="container mx-auto">
        <div className="bg-[#1E1E1E] p-14 rounded-4xl text-white">
            <h2 className="font-inter font-bold text-[45px] leading-[100%] tracking-[0] mb-10 pl-0">
            Nos catégories d'âge
            </h2>

            <div className="flex justify-center gap-x-24">
            {ageCategories.map((category, index) => (
                <div key={index} className="w-[410px] flex-shrink-0">
                <div className="mb-6 overflow-hidden rounded-xl">
                    <img
                    src={category.imageUrl}
                    alt={category.title}
                    className="w-full h-64 object-cover"
                    />
                </div>
                <div>
                    <h3 className="font-inter font-bold text-[24px] leading-[100%] tracking-[0] mb-4">
                    {category.title} ({category.ageRange})
                    </h3>
                    <p className="font-inter text-[18px] leading-relaxed">
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