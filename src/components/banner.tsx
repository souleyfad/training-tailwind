'use client';

import { useState } from 'react';
import Image from 'next/image'

export default function Banner() {
  const [search, setSearch] = useState('');

  return (
    <section className="text-center pt-10">
      {/* Titre principal */}
      <h1 className="font-inter font-bold text-[35px] md:text-[45px] leading-[100%] tracking-[0] text-black">
        Les filles s'amusent et l'apprentissage
      </h1>

      {/* Sous-titre rose avec point noir */}
      <p className="font-inter text-[45px] leading-[100%] tracking-[0] text-[#BC208E] font-normal">
        progresse
        <span className="font-bold text-black">.</span>
      </p>

      {/* Espace vertical */}
      <div className="mt-8 md:mt-10 flex justify-center">
        {/* Boîte de recherche */}
        <div className="flex items-center rounded-full px-4 py-4 shadow-sm bg-white w-full max-w-sm md:max-w-md">
          <input
            type="text"
            placeholder="Rechercher ici..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-grow outline-none bg-transparent text-gray-800 placeholder-gray-400 px-4 text-sm truncate"
          />
          <button className="bg-white text-[#BC208E] border border-[#BC208E] py-3 px-6 rounded-full text-sm font-medium hover:bg-[#BC208E] hover:text-white transition">
            Rechercher
          </button>
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <Image
          src="/image_perso/banner.png"
          alt="Illustration banner"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
    </section>
  );
}
