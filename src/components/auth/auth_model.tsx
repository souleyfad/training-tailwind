'use client';

import { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';

export default function AuthModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
            <div className="bg-white rounded-[20px] w-full max-w-md p-6 pb-15 relative">
                {/* Close button */}
                <button
                    className="absolute top-6 right-6 w-6 h-6 flex items-center justify-center font-bold rounded-sm border-2 border-[#828282] text-[#828282] hover:bg-gray-100 transition"
                    onClick={onClose}
                >
                    ✕
                </button>

                {/* Tabs */}
                <div className="flex justify-center space-x-6 pb-6">
                    <button
                        className={`text-[18px] font-bold ${activeTab === "login"
                            ? "text-[#BC208E] border-b-4 border-[#BC208E]"
                            : "text-[#25321E]"
                            }`}
                        onClick={() => setActiveTab("login")}
                    >
                        Log in
                    </button>
                    <button
                        className={`text-[18px] font-bold ${activeTab === "register"
                            ? "text-[#BC208E] border-b-4 border-[#BC208E]"
                            : "text-[#25321E]"
                            }`}
                        onClick={() => setActiveTab("register")}
                    >
                        Register
                    </button>
                </div>

                <div className="border-b border-gray-300 -mx-6" />

                {/* Google Login */}
                <button className="w-full bg-[#F0F8F1] hover:bg-gray-200 py-4 rounded-md flex items-center justify-center space-x-4 mb-10 mt-8 shadow-md">
                    <svg
                        className="w-5 h-5 mr-2"
                        viewBox="0 0 533.5 544.3"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path fill="#4285f4" d="M533.5 278.4c0-17.4-1.4-34-4-50.2H272v95.1h146.9c-6.3 33.8-25 62.4-53.4 81.5v67h86.4c50.5-46.5 81.6-115.1 81.6-193.4z" />
                        <path fill="#34a853" d="M272 544.3c72.5 0 133.4-23.9 177.8-64.9l-86.4-67c-24 16.1-54.8 25.4-91.4 25.4-70 0-129.3-47.2-150.5-110.6H33.5v69.6c44.4 88.3 135.4 147.5 238.5 147.5z" />
                        <path fill="#fbbc04" d="M121.5 327.2c-10.4-30.7-10.4-63.7 0-94.4V163.2H33.5c-35.3 70.4-35.3 153.3 0 223.6l88-69.6z" />
                        <path fill="#ea4335" d="M272 107.7c38.9-.6 76 13.6 104.5 39.2l78.2-78.2C406.9 24.3 341.3 0 272 0 169 0 78 59.2 33.5 147.5l88 69.6c21.1-63.4 80.4-109.6 150.5-109.4z" />
                    </svg>
                    <span className="font-bold text-[16px]">Log in with Google</span>
                </button>

                {/* Email Login */}
                {activeTab === 'login' ? (
                    <form className="space-y-3">

                        <p className="font-bold text-[16px] mb-6">Se connecter avec l’email</p>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Phone number / Email Address</label>
                            <input type="text" className="w-full border rounded-[8px] px-3 py-4 mt-1" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mt-1">Password</label>
                            <input type="password" className="w-full border rounded-[8px] px-3 py-4 mt-1" />
                        </div>
                        <div className="flex justify-between items-center text-sm mb-3">
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" />
                                <span>Remember me</span>
                            </label>
                            <a href="#" className="text-black">Lost your password?</a>
                        </div>
                        <button type="submit" className="w-full bg-[#BC208E] text-white rounded-[8px] py-4">Login</button>
                    </form>
                ) : (
                    <form className="space-y-4">

                        <p className="font-bold text-[16px] mb-6">Rejoindre Kankode</p>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input type="email" className="w-full border rounded-[8px] px-3 py-4 mt-1" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Street Address</label>
                            <input type="password" className="w-full border rounded-[8px] px-3 py-4 mt-1" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" className="w-full border rounded-[8px] px-3 py-4 mt-1" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input type="password" className="w-full border rounded-[8px] px-3 py-4 mt-1" />
                        </div>
                        <button type="submit" className="w-full bg-[#BC208E] text-white rounded-[8px] py-4 mb-3">Register</button>
                        <label className="flex items-start space-x-2">
                            <input type="checkbox" className="mt-1 border-4" />
                            <span>I would like to receive news, special offers and other marketing from Afiapharma</span>
                        </label>
                    </form>
                )}
            </div>
        </div>
    );
}
