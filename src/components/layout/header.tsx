'use client';
import { FaUser } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import AuthModal from '../auth/auth_model';

import { useState, useRef, useEffect } from 'react';

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (showSearch && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showSearch]);

  return (
    <header className="rounded-lg shadow-sm bg-white sticky top-0 z-10 mt-4">
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png" // Chemin relatif depuis le dossier public
            alt="KanKode Logo"
            className="h-10 w-auto" // Ajustez la taille selon votre logo
          />
          <span className="text-2xl font-bold">
            KanKode
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 font-inter">
          <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium">
            À propos
          </a>
          <a href="#programmes" className="text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium">
            Nos programmes
          </a>
          <a href="#news" className="text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium">
            News
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* Search Button + Input */}
          <div className="flex items-center space-x-1">
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition"
            >
              <FaSearch className="text-black" />
            </button>
            <input
              ref={inputRef}
              type="text"
              placeholder="Rechercher..."
              className={`transition-all duration-300 ease-in-out border border-gray-300 rounded-full px-4 py-2 outline-none text-sm ${showSearch ? 'w-48 opacity-100' : 'w-0 opacity-0 px-0 py-0 border-0'
                }`}
            />
          </div>

          {/* Sign In / Sign Up */}
          <button onClick={() => setShowAuth(true)}
            className="flex items-center bg-[#BC208E] hover:bg-[#a31c7b] text-white px-5 py-2 rounded-full space-x-2 transition">
            <FaUser className="text-white text-sm" />
            <span className="text-sm font-medium">Sign In / Sign Up</span>
          </button>

          {/* Language Switch */}
          <div className="text-sm font-medium space-x-1">
            <span className="text-gray-800">EN</span>
            <span>/</span>
            <span className="text-fuchsia-600">FR</span>
          </div>
        </div>
      </div>


      {/* Modal */}
      <AuthModal isOpen={showAuth} onClose={() => setShowAuth(false)} />
    </header>
  );
}