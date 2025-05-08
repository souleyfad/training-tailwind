import Image from 'next/image';

export default function ComingSection() {
  const backgrounds = ['#2CEA7B', '#BC208E']; // Couleurs par ligne
  const overlays = ['#47CB7E', '#F86A93']; // Couleurs du demi-cercle

  return (
    <div className="bg-[#1E1E1E] py-20">
      <div className="container mx-auto px-4">
        {/* Header & Nav */}
        <div className="w-full text-white mb-20">
          <h1 className="font-inter font-bold text-[45px] leading-[100%] mb-8">
            Session de formation à venir
          </h1>
          <div className="flex justify-between items-center">
            <nav className="hidden md:flex space-x-8 font-inter">
              {['Tous', 'Robotique', 'Marketing', 'Design and Art', 'Design and Art', 'Développement'].map((item, idx) => (
                <a key={idx} href="#" className="text-white hover:underline hover:decoration-[#BC208E] hover:decoration-2 hover:underline-offset-4 duration-300 font-medium">
                  {item}
                </a>
              ))}
            </nav>
            <a href="/news" className="text-[#BC208E] font-medium">
              Voir plus <span className="text-lg">→</span>
            </a>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid  grid-cols-1 sm:grid-cols-2 gap-x-24 gap-y-24">
          {[...Array(4)].map((_, i) => {
            const row = Math.floor(i / 2); // 0 or 1
            return (
              <div key={i} className="relative flex flex-col items-center">
                {/* Image section */}
                <div className="relative -mb-6 rounded-t-xl overflow-hidden w-full bg-black p-8 flex justify-center items-center">
                  <img src="/image_perso/session.png" alt="section" className="w-30 h-30 object-contain" />
                </div>

                {/* Text section */}
                <div
                  className="relative rounded-xl text-black text-[30px] md:text-[36px] px-10 py-6 font-inter font-medium overflow-hidden w-full"
                  style={{ backgroundColor: backgrounds[row] }}
                >
                  <span className="z-10 block">Boot Camp :</span>
                  <span className="z-10 font-bold block">La robotique</span>
                  <div
                    className="absolute right-0 top-0 h-full w-16 md:w-20 rounded-l-full"
                    style={{ backgroundColor: overlays[row] }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
