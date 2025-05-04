import Image from 'next/image';

export default function About() {
  return (
    <div className="bg-[#1E1E1E] py-20 mt-15">
      {/* Container centré */}
      <div className="container mx-auto px-4 flex flex-col  md:flex-row items-end gap-24">
        {/* Image redimensionnée */}
        <img 
              src="/image_perso/about.png" // Chemin relatif depuis le dossier public
              alt="about"
              className="h-130 w-auto md:mr-16" // Ajustez la taille selon votre logo
            />

        {/* Texte */}
        <div className="w-full md:w-[45%] text-white mb-20">
          <h1 className="font-inter font-bold text-[45px] leading-[100%] tracking-[0] mb-8">
            Qui sommes-nous ?
          </h1>
          <p className="font-inter text-[18px] leading-relaxed mb-4">
            Since 2011, Black Girls Code has supported girls of color in tech through coding education and more.
            We partner with schools and organizations to offer a range of programs, both in-person and virtual, for ages 7–25.
            Our initiatives go beyond coding to build confidence and connections, enhancing technical skills, community bonds, and career paths.
          </p>
          <p className="font-inter text-[18px]leading-relaxed">
            Since 2011, Black Girls Code has supported girls of color in tech through coding education and more.
            We partner with schools and organizations to offer a range of programs, both in-person and virtual, for ages 7–25.
            Our initiatives go beyond coding to build confidence and connections, enhancing technical skills, community bonds, and career paths.
          </p>
        </div>
      </div>
    </div>
  );
}
