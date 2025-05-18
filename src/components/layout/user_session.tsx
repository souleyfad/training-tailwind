'use client';

import { FaUser, FaSignOutAlt } from 'react-icons/fa';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase.config';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function UserSession({ 
  currentUser,
  isMobile = false 
}: { 
  currentUser: any;
  isMobile?: boolean;
}) {
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Erreur lors de la déconnexion:", error);
    }
  };

  if (!currentUser) return null;

  return (
    <div className={isMobile ? "w-full" : "relative group"}>
      {/* Bouton principal */}
      <button
        onClick={() => router.push('/mon-compte')}
        className={`flex items-center space-x-2 ${
          isMobile 
            ? "w-full justify-center py-2 rounded-full bg-[#BC208E] hover:bg-[#a31c7b] text-white" 
            : "px-3 py-2 rounded-full bg-[#BC208E] hover:bg-[#a31c7b] text-white"
        } transition`}
      >
        <FaUser className="text-white hover:text-[#BC208E]" />
        <span className="font-medium">
          {currentUser.displayName || currentUser.email?.split('@')[0]}
        </span>
      </button>
      
      {/* Confirmation de déconnexion */}
      {showLogoutConfirm && (
        <div className={`
          ${isMobile 
            ? "mt-2 p-4 bg-white rounded-md shadow border w-full" 
            : "absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
          }
        `}>
          <div className="px-4 py-2 text-sm text-gray-700">
            <p>Déconnecter ?</p>
          </div>
          <div className={`flex ${isMobile ? "justify-between" : "justify-between px-4"} py-2`}>
            <button
              onClick={handleLogout}
              className="text-sm text-red-600 hover:text-red-800 flex items-center"
            >
              <FaSignOutAlt className="mr-1" /> Oui
            </button>
            <button
              onClick={() => setShowLogoutConfirm(false)}
              className="text-sm text-gray-700 hover:text-gray-900"
            >
              Non
            </button>
          </div>
        </div>
      )}
    </div>
  );
}