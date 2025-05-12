// app/programmes/page.tsx
'use client';

import { useEffect, useState } from 'react';
import Header from "@/components/layout/header";
import { Programme, getProgrammes, createProgramme } from '../../lib/api';
import Link from 'next/link'
import { FaSearch } from 'react-icons/fa';
//'../../../lib/api/programmes.api';

export default function ProgrammesPage() {
  const [programmes, setProgrammes] = useState<Programme[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState<Programme>({
    title: '',
    date: '',
    message: '',
    image: '',
  });

  const fetchData = async () => {
    try {
      const data = await getProgrammes();
      setProgrammes(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async () => {
    try {
      await createProgramme(form);
      setShowModal(false);
      setForm({ title: '', date: '', message: '', image: '' });
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };
  const [query, setQuery] = useState('');

  const handleSearch = (): void => { };

  return (
    <main className="container mx-auto px-4 md:px-2">

      <div className="bg-gradient-to-br">
        <Header />
      </div>

      <div className="relative h-40 md:h-54 w-full rounded-lg overflow-hidden mb-10 mt-10">
        <img
          src="/image_perso/p2.png"
          alt="pg"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-4xl font-bold">Nos programmes</h1>
        </div>
      </div>

      <div className="flex justify-between items-center mb-6 mt-6">
        <div className='flex'>
          <div className="flex items-center w-full max-w-xl rounded-full bg-white shadow overflow-hidden">
            <div className="pl-4 text-gray-400">
              <FaSearch />
            </div>
            <input
              type="text"
              placeholder="Rechercher article"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-grow px-4 py-2 text-sm outline-none bg-transparent text-gray-800"
            />
          </div>
          <button
            onClick={handleSearch}
            className="ml-4 px-6 py-2 bg-[#C2188C] hover:bg-[#a51576] text-white rounded-full text-sm font-medium transition"
          >
            Recherche
          </button>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-[#BC208E] hover:bg-[#a31c7b] text-white px-4 py-2 rounded-full text-sm font-medium"
        >
          + Ajouter un programme
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programmes.map((programme) => (
          <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 flex flex-col">
            <img
              src={programme.image}
              alt={programme.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4 flex flex-col justify-between flex-grow">
              <p className="text-xs text-gray-500 mb-1">{programme.date}</p>
              <h3 className="font-semibold text-lg leading-snug text-gray-800 mb-2">
                {programme.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4 line-clamp-3">{programme.message}</p>
              <Link
                href="#"
                className="mt-auto inline-block bg-white border border-black text-black text-sm font-medium py-2 px-4 rounded hover:bg-black hover:text-white transition"
              >
                En savoir plus
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0  bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-md w-full max-w-lg p-6 space-y-4">
            <h2 className="text-lg font-semibold">Ajouter un programme</h2>

            <input
              type="text"
              placeholder="Titre"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full border px-3 py-2 rounded text-sm"
            />

            <input
              type="text"
              placeholder="Date (JJ/MM/AAAA)"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="w-full border px-3 py-2 rounded text-sm"
            />

            <input
              type="text"
              placeholder="URL de l'image"
              value={form.image}
              onChange={(e) => setForm({ ...form, image: e.target.value })}
              className="w-full border px-3 py-2 rounded text-sm"
            />

            <textarea
              placeholder="Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full border px-3 py-2 rounded text-sm"
            />

            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
              >
                Annuler
              </button>
              <button
                onClick={handleSubmit}
                className="bg-[#BC208E] hover:bg-[#a31c7b] text-white px-4 py-2 rounded text-sm"
              >
                Enregistrer
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
