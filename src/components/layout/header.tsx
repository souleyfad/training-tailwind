'use client';

import { useState, useRef, useEffect } from 'react';
import { FaUser, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import AuthModal from '../auth/auth_model';

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (showSearch && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showSearch]);

  return (
    <header className="rounded-lg shadow-sm bg-white sticky top-0 z-50 mt-4">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="KanKode Logo"
            className="h-10 w-auto"
          />
          <span className="text-2xl font-bold">KanKode</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 font-inter">
          <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">À propos</a>
          <a href="#programmes" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Nos programmes</a>
          <a href="#news" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">News</a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
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

          <button
            onClick={() => setShowAuth(true)}
            className="flex items-center bg-[#BC208E] hover:bg-[#a31c7b] text-white px-5 py-2 rounded-full space-x-2 transition"
          >
            <FaUser className="text-white text-sm" />
            <span className="text-sm font-medium">Sign In / Sign Up</span>
          </button>

          <div className="text-sm font-medium space-x-1">
            <span className="text-gray-800">EN</span>
            <span>/</span>
            <span className="text-fuchsia-600">FR</span>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-gray-800 focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4 bg-white rounded-b-lg shadow">
          <nav className="flex flex-col space-y-2">
            <a href="#about" className="text-gray-700 hover:text-purple-600 font-medium">À propos</a>
            <a href="#programmes" className="text-gray-700 hover:text-purple-600 font-medium">Nos programmes</a>
            <a href="#news" className="text-gray-700 hover:text-purple-600 font-medium">News</a>
          </nav>

          {/* Mobile Actions */}
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => setShowAuth(true)}
              className="flex items-center justify-center bg-[#BC208E] hover:bg-[#a31c7b] text-white py-2 rounded-full space-x-2 transition"
            >
              <FaUser className="text-white text-sm" />
              <span className="text-sm font-medium">Sign In / Sign Up</span>
            </button>

            <div className="flex justify-center space-x-2 text-sm font-medium">
              <span className="text-gray-800">EN</span>
              <span>/</span>
              <span className="text-fuchsia-600">FR</span>
            </div>
          </div>
        </div>
      )}

      {/* Modal */}
      <AuthModal isOpen={showAuth} onClose={() => setShowAuth(false)} />
    </header>
  );
}
