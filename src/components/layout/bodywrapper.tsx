'use client';

import { usePathname } from 'next/navigation';

export default function BodyWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  let bgClass = 'bg-gradient-to-br'; // default
  if (pathname.startsWith('/mon-compte')) {
    bgClass = 'bg-white';
  } else if (pathname.startsWith('/programme')) {
    bgClass = 'bg-[#F5F5F5]'; // Exemple : beige clair
  }

  return (
    <div className={`${bgClass} min-h-screen flex flex-col`}>
      {children}
    </div>
  );
}
