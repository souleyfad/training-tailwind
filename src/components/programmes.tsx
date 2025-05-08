import React from 'react';
import Image from 'next/image';

interface ProgramItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

const programs: ProgramItem[] = [
  {
    id: 1,
    title: 'Nom du programme #1',
    description:
      "Since 2011, Black Girls Code has supported girls of color in tech through coding education and more."
      + "We partner with schools and organizations to offer a range of programs, both in-person and virtual, for ages 7–25."
      + "We partner with schools and organizations to offer a range of programs, both in-person and virtual, for ages 7–25."
      + "Our initiatives go beyond coding to build confidence and connections, enhancing technical skills, community bonds, and career paths.",
    imageUrl: '/image_perso/p1.png',
    imageAlt: 'Fille codant sur ordinateur',
  },
  {
    id: 2,
    title: 'Nom du programme #2',
    description:
      "Since 2011, Black Girls Code has supported girls of color in tech through coding education and more."
      + "We partner with schools and organizations to offer a range of programs, both in-person and virtual, for ages 7–25."
      + "We partner with schools and organizations to offer a range of programs, both in-person and virtual, for ages 7–25."
      + "Our initiatives go beyond coding to build confidence and connections, enhancing technical skills, community bonds, and career paths.",
    imageUrl: '/image_perso/p2.png',
    imageAlt: 'Atelier en groupe',
  },
  {
    id: 3,
    title: 'Nom du programme #3',
    description:
      "Since 2011, Black Girls Code has supported girls of color in tech through coding education and more."
      + "We partner with schools and organizations to offer a range of programs, both in-person and virtual, for ages 7–25."
      + "We partner with schools and organizations to offer a range of programs, both in-person and virtual, for ages 7–25."
      + "Our initiatives go beyond coding to build confidence and connections, enhancing technical skills, community bonds, and career paths.",
    imageUrl: '/image_perso/p3.png',
    imageAlt: 'Jeune femme avec tablette',
  }
];

const ProgramList = () => {
  return (
    <section className="">
      {programs.map((program) => (
        <div
          key={program.id}
          className={`flex flex-col lg:flex-row items-center gap-6 md:gap-12 p-6 md:p-10 ${program.id % 2 === 0 ? 'bg-white' : 'bg-[#F4F4F4]'
            }`}
        >
          {/* Image */}
          <img
            src={program.imageUrl}
            alt={program.title}
            className="rounded-xl object-cover h-85 w-85 md:m-16"
          />

          {/* Text Content */}
          <div className="w-full md:w-1/2 lg:w-3/5 space-y-4 relative">
            {/* Title Block */}
            <div className={`relative mb-8 flex items-center justify-between rounded-xl text-white font-bold text-[32px] px-10 py-5 overflow-hidden ${program.id % 2 === 0 ? 'bg-[#1E1E1E]' : 'bg-[#BC208E]'
                } w-full`}>
              <span className="z-10">{program.title}</span>
              <div className="absolute right-0 top-0 h-full w-12 bg-[#F86A93] rounded-l-full" />
            </div>

            {/* Description */}
            <p className="text-black text-[18px] leading-relaxed">
              {program.description}
            </p>
            <p className="text-black text-[18px] leading-relaxed">
              {program.description}
            </p>
          </div>
        </div>
      ))}
    </section>

  );
};

export default ProgramList;
