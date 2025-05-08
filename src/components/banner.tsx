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
      <div className="mt-8 flex justify-center px-4">
  <div className="flex gap-2 w-full max-w-sm md:max-w-md bg-white rounded-full shadow items-center p-2 md:p-4 h-14 md:h-18">
    <input
      type="text"
      placeholder="Rechercher ici..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="flex-grow bg-transparent text-sm outline-none text-gray-800 placeholder-gray-400 px-2 md:px-0"
    />
    <button className="h-10 px-4 text-sm font-medium border border-[#BC208E] text-[#BC208E] bg-white hover:bg-[#BC208E] hover:text-white rounded-full transition whitespace-nowrap">
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
