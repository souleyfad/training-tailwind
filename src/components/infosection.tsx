import Image from 'next/image';

export default function InfoSection() {
  return (
    <section className="relative w-full h-[400px] flex items-center justify-center p-20">
      {/* Image de fond */}
      <Image
        src="/image_perso/p2.png" // Mets ici ton chemin d'image
        alt="Filles dans la technologie"
        layout="fill"
        objectFit="cover"
        className="z-0 brightness-50"
        priority
      />

      {/* Contenu par-dessus l'image */}
      <div className="relative mb-20 text-center text-white mt-20">
        <h1 className="text-[45px] md:text-5xl font-bold mb-4">
          Les filles dans la technologie, aujourd’hui c’est réalité
        </h1>
        <p className="text-[35px] mb-12">
          Une fille formée c’est une génération sauvée
        </p>
        <button className="bg-[#BC208E] text-white px-6 py-4 font-[600] rounded-full text-[14px] hover:bg-pink-700 transition">
          S’inscrire gratuitement
        </button>
      </div>
    </section>
  );
}
