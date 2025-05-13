'use client';

import { useState } from 'react';

const imageOptions = [
  '/image_perso/p1.png',
  '/image_perso/p2.png',
  '/image_perso/p3.png',
  '/image_perso/a2.png',
];

export default function ImagePicker({ value, onChange }: {
  value: string;
  onChange: (val: string) => void;
}) {
  const [showGrid, setShowGrid] = useState(false);

  const handleSelect = (img: string) => {
    onChange(img);
    setShowGrid(false);
  };

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
      <input
        type="text"
        readOnly
        value={value}
        onClick={() => setShowGrid(!showGrid)}
        placeholder="Cliquez pour choisir une image"
        className="w-full border px-3 py-2 rounded text-sm cursor-pointer bg-white"
      />

      {showGrid && (
        <div className="absolute z-10 bg-white border mt-2 p-2 rounded-lg shadow-lg w-full grid grid-cols-6 gap-2">
          {imageOptions.map((img, idx) => (
            <div
              key={idx}
              onClick={() => handleSelect(img)}
              className={`cursor-pointer border-2 rounded overflow-hidden transition ${
                value === img ? 'border-[#BC208E]' : 'border-transparent'
              }`}
            >
              <img src={img} alt={`Image ${idx + 1}`} className="w-full h-10 object-cover" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
