import Image from 'next/image';

export default function InfoSection() {
  return (
    <section className="relative w-full h-[300px] sm:h-[400px] flex items-center justify-center px-4 py-16 sm:p-20">
      {/* Image de fond optimisée */}
      <Image
        src="/image_perso/p2.png"
        alt="Filles dans la technologie"
        fill
        priority
        className="z-0 brightness-50 object-cover"
      />

      {/* Contenu responsive */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl md:text-[45px] font-bold mb-3 sm:mb-4 leading-tight">
          Les filles dans la technologie,<br />aujourd'hui c'est réalité
        </h1>
        <p className="text-xl sm:text-2xl md:text-[35px] mb-6 sm:mb-12">
          Une fille formée c'est une génération sauvée
        </p>
        <button className="bg-[#BC208E] hover:bg-[#9c1a75] text-white px-6 py-3 sm:px-8 sm:py-4 font-semibold rounded-full text-sm sm:text-base transition duration-300 transform hover:scale-105">
          S'inscrire gratuitement
        </button>
      </div>
    </section>
  );
}