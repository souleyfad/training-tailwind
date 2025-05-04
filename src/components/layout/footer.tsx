// components/Footer.js
export default function Footer() {
    return (
        <footer className="bg-[#1E1E1E] text-white">
            <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
                {/* Logo + Contact */}
                <div>
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
                    <p className="mt-10 text-sm">Nous contacter</p>
                </div>

                {/* Newsletter */}
                <div className="items-center space-x-4">
                    <div>
                        <h4 className="text-white font-semibold mb-2">Newsletter</h4>
                        <p className="text-sm text-white mb-4">
                            Abonnez-vous à notre newsletter pour ne rien rater de nos dernières news
                        </p>
                    </div>
                </div>
                {/* Form */}
                <form className="flex flex-col sm:flex-row items-center">
                    <div className="flex overflow-hidden rounded-full bg-white">
                        <input
                            type="email"
                            placeholder="Veuillez saisir votre mail"
                            className="px-4 py-2 w-full sm:w-auto text-black focus:outline-none"
                        />
                        <button type="submit"
                            className="bg-[#BC208E] hover:bg-pink-700 text-white px-4 py-2">
                            S'abonner
                        </button>
                    </div>
                </form>

            </div>

            {/* Footer Bottom */}
            <div className="bg-[#BC208E] text-white text-sm py-3">
                <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
                    <p>©2025 Kankode. Tous droits réservés.</p>
                    <div className="flex gap-4 mt-2 sm:mt-0">
                        <a href="#" className="hover:underline">Conditions d'utilisation</a>
                        <span>|</span>
                        <a href="#" className="hover:underline">Politique de confidentialité</a>
                        <span>|</span>
                        <a href="#" className="hover:underline">Carrière</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
