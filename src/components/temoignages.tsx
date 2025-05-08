'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';

const testimonials = [
  {
    name: 'Anaïs TOBO',
    cohort: 'Cohorte #1',
    message:
      "Since 2011, Black Girls Code has supported girls of color in tech through coding education and more. " +
      "We partner with schools and organizations to offer a range of programs, both in-person and virtual, for ages 7–25. " +
      "Our initiatives go beyond coding to build confidence and connections, enhancing technical skills, community bonds, and career paths.",
    image: '/image_perso/p1.png',
  },
  {
    name: 'Fadel ABDOU.',
    cohort: 'Cohorte #2',
    message:
      "Since 2011, Black Girls Code has supported girls of color in tech through coding education and more. " +
      "We partner with schools and organizations to offer a range of programs, both in-person and virtual, for ages 7–25. " +
      "Our initiatives go beyond coding to build confidence and connections, enhancing technical skills, community bonds, and career paths.",
    image: '/image_perso/p2.png',
  },
  {
    name: 'Mike CONOR.',
    cohort: 'Cohorte #3',
    message:
      "Since 2011, Black Girls Code has supported girls of color in tech through coding education and more. " +
      "We partner with schools and organizations to offer a range of programs, both in-person and virtual, for ages 7–25. " +
      "Our initiatives go beyond coding to build confidence and connections, enhancing technical skills, community bonds, and career paths.",
    image: '/image_perso/p3.png',
  },
];

export default function Temoignages() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-16 bg-[#F9F9F9] px-4">
      <h2 className="text-3xl md:text-[45px] font-bold text-center mb-10">
        Témoignages
      </h2>

      <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-16">
        <button
          onClick={scrollPrev}
          className="text-[#BC208E] text-4xl md:text-6xl cursor-pointer"
        >
          ‹
        </button>

        <div className="overflow-hidden w-full max-w-5xl" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="min-w-full flex flex-col md:flex-row items-center gap-6 md:gap-16 p-6 box-border"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full max-w-xs h-auto rounded-lg object-cover"
                />
                <div className="text-left mt-4 md:mt-0">
                  <p className="text-sm sm:text-base md:text-lg text-black mb-4 leading-relaxed">
                    {item.message}
                  </p>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.cohort}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollNext}
          className="text-[#BC208E] text-4xl md:text-6xl cursor-pointer"
        >
          ›
        </button>
      </div>
    </section>
  );
}
