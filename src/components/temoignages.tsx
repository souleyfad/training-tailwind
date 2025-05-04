// components/TestimonialCarousel.tsx
'use client';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';

const testimonials = [
  {
    name: 'Anaïs TOBO',
    cohort: 'Cohorte #1',
    message:
        "Since 2011, Black Girls Code has supported girls of color in tech through coding education and more."
        + "We partner with schools and organizations to offer a range of programs, both in-person and virtual, for ages 7–25."
        + "Our initiatives go beyond coding to build confidence and connections, enhancing technical skills, community bonds, and career paths.",
    image: '/image_perso/p1.png',
  },
  {
    name: 'Fadel ABDOU.',
    cohort: 'Cohorte #2',
    message:
        "Since 2011, Black Girls Code has supported girls of color in tech through coding education and more."
        + "We partner with schools and organizations to offer a range of programs, both in-person and virtual, for ages 7–25."
        + "Our initiatives go beyond coding to build confidence and connections, enhancing technical skills, community bonds, and career paths.",
    image: '/image_perso/p2.png',
  },
  {
    name: 'Mike CONOR.',
    cohort: 'Cohorte #3',
    message:
    "Since 2011, Black Girls Code has supported girls of color in tech through coding education and more."
    + "We partner with schools and organizations to offer a range of programs, both in-person and virtual, for ages 7–25."
    + "Our initiatives go beyond coding to build confidence and connections, enhancing technical skills, community bonds, and career paths.",
    image: '/image_perso/p3.png',
  },
];

export default function Temoignages() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="py-20 bg-[#F9F9F9]">
      <h2 className="text-[45px] font-bold text-center mb-10">Témoignages</h2>
      <div className="flex justify-center gap-24">
        <button onClick={scrollPrev} className="text-[#BC208E] text-[100px] cursor-pointer">
          ‹
        </button>

        <div className="overflow-hidden w-full max-w-4xl" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="min-w-full flex gap-18 items-center rounded-xl p-6"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-80 h-80 rounded-lg object-cover"
                />
                <div className="text-left">
                  <p className="text-[18px] text-black mb-4">{item.message}</p>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.cohort}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button onClick={scrollNext} className="text-[#BC208E] text-[100px] cursor-pointer">
          ›
        </button>
      </div>
    </div>
  );
}
