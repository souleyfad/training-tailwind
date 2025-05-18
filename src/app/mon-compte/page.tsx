'use client';

import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from '../../../firebase.config';
import { FaSignOutAlt, FaUser, FaKey, FaCalendarAlt } from 'react-icons/fa';

const MOCK_EVENTS = [
    {
        name: "Python développement",
        price: "Gratuit",
        address: "En ligne",
        date: "11/04/2024",
        image: "/events/python.png"
    },
    {
        name: "Javascript développement",
        price: "15 000 XOF",
        address: "Bp. 2301, Cotonou, Benin",
        date: "11/04/2024",
        image: "/events/js.png"
    },
    {
        name: "Java développement",
        price: "Gratuit",
        address: "En ligne",
        date: "11/04/2024",
        image: "/events/java.png"
    }
];

export default function MonCompte() {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [activeView, setActiveView] = useState('events');
    const router = useRouter();
    const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                router.push('/');
            } else {
                setUser(user);
                setLoading(false);
            }
        });
        return () => unsubscribe();
    }, [router]);

    const handleLogout = async () => {
        await signOut(auth);
        router.push('/');
    };

    if (loading) return <p className="p-8">Chargement...</p>;

    return (
        <div className="container mx-auto px-4 md:px-2 flex flex-col md:flex-row min-h-screen">
            {/* Sidebar */}
            <div className="w-full md:w-1/4 p-0">
                {/* Breadcrumb */}
                <h2 className="text-sm font-semibold mt-10 mb-10 text-black font-inter">
                    Accueil › <span className="font-normal text-gray-600">Mon compte</span>
                </h2>

                {/* Sidebar */}
                <aside className="bg-[#F5F5F5] rounded-lg min-h-[calc(80vh-8rem)] flex flex-col justify-start">
                    <nav className="flex flex-col text-[16px]">
                        <button
                            onClick={() => setActiveView('events')}
                            className={`text-left w-full py-6 px-6 ${activeView === 'events'
                                ? 'bg-[#FFD9EF] font-bold text-black rounded-t-lg'
                                : 'hover:bg-gray-100 text-black'
                                }`}
                        >
                            Événements
                        </button>
                        <button
                            onClick={() => setActiveView('profile')}
                            className={`text-left w-full py-6 px-6 ${activeView === 'profile'
                                ? 'bg-[#FFD9EF] font-bold text-black'
                                : 'hover:bg-gray-100 text-black'
                                }`}
                        >
                            Détails du compte
                        </button>
                        <button
                            onClick={() => setActiveView('password')}
                            className={`text-left w-full py-6 px-6 ${activeView === 'password'
                                ? 'bg-[#FFD9EF] font-bold text-black'
                                : 'hover:bg-gray-100 text-black'
                                }`}
                        >
                            Mot de passe
                        </button>
                        {!showLogoutConfirm ? (
                            <button
                                onClick={() => setShowLogoutConfirm(true)}
                                className="text-left w-full py-3 px-6 text-red-600 hover:bg-gray-100"
                            >
                                Déconnexion
                            </button>
                        ) : (
                            <div className="bg-white text-sm text-gray-700 rounded-md mt-2 px-4 py-3 shadow border mx-4">
                                <p className="mb-3">Déconnecter ?</p>
                                <div className="flex justify-between">
                                    <button
                                        onClick={handleLogout}
                                        className="text-red-600 hover:text-red-800 flex items-center text-sm"
                                    >
                                        <FaSignOutAlt className="mr-1" /> Oui
                                    </button>
                                    <button
                                        onClick={() => setShowLogoutConfirm(false)}
                                        className="text-gray-600 hover:text-black text-sm"
                                    >
                                        Non
                                    </button>
                                </div>
                            </div>
                        )}
                    </nav>
                </aside>
            </div>



            {/* Main content */}
            <main className="flex-1 p-4 md:p-10 mt-5 md:mt-20">
                {activeView === 'events' && (
                    <section>
                        <div className="flex justify-between items-center mb-6">
                            <h1 className="text-2xl font-semibold">Événements</h1>
                            <button className="text-sm text-gray-600 hover:text-black flex items-center space-x-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 12.414V19a1 1 0 01-1.447.894l-4-2A1 1 0 019 17V12.414L3.293 6.707A1 1 0 013 6V4z" />
                                </svg>
                                <span>Filtrer</span>
                            </button>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white rounded-lg overflow-hidden">
                                <thead className="text-sm text-gray-600 uppercase bg-gray-50 border-b border-b-[#D9D9D9]">
                                    <tr>
                                        <th className="px-4 py-3 text-left">Nom évènement</th>
                                        <th className="px-4 py-3 text-left">Prix</th>
                                        <th className="px-4 py-3 text-left hidden md:table-cell">Adresse</th>
                                        <th className="px-4 py-3 text-left">Date</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm text-gray-800">
                                    {MOCK_EVENTS.map((event, idx) => (
                                        <tr key={idx} className="border-b border-b-[#D9D9D9] hover:bg-gray-50 transition">
                                            <td className="px-4 py-3 flex items-center space-x-3">
                                                <img
                                                    src={event.image}
                                                    alt={event.name}
                                                    className="w-10 h-10 rounded-[5px] object-cover"
                                                />
                                                <span className="text-[#667085]">
                                                    {event.name}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 font-semibold">{event.price}</td>
                                            <td className="px-4 py-3 hidden md:table-cell">{event.address}</td>
                                            <td className="px-4 py-3">{event.date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                )}


                {activeView === 'profile' && (
                    <section>
                        <h1 className="text-2xl font-semibold mb-4">Détails du compte</h1>
                        <p><strong>Email :</strong> {user.email}</p>
                        <p><strong>Nom :</strong> {user.displayName || 'Non spécifié'}</p>
                    </section>
                )}

                {activeView === 'password' && (
                    <section>
                        <h1 className="text-2xl font-semibold mb-4">Mot de passe</h1>
                        <p>Pour modifier votre mot de passe, veuillez suivre le processus de récupération via Firebase ou contacter le support.</p>
                    </section>
                )}
            </main>
        </div>
    );
}
