import Image from 'next/image';

export default function Partener() {
  return (
    <section>
    <h2 className="text-[35px] text-white font-bold text-center py-5 bg-[#BC208E]">Nos partenaires</h2>
    <div className="bg-white py-10">
      {/* Container centré */}
      <div className="container mx-auto px-4">
      <div className="grid grid-cols-7 gap-x-8 gap-y-8">
          {[...Array(14)].map((_, i) => {
            const row = Math.floor(i / 2); // 0 or 1
            return (
                <div className="items-center">
                  <img src="/image_perso/partener.png" alt="section" className="w-30 h-30 object-contain" />
                </div>
            );
          })}
        </div>
      </div>
    </div>
    </section>
  );
}
