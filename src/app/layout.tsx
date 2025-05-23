import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BodyWrapper from "@/components/layout/bodywrapper";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// ✅ viewport est maintenant une exportation séparée
export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <BodyWrapper>
          <div className="container mx-auto px-4 md:px-2">
            <Header />
          </div>
          <main className="flex-1">
            <div className="container mx-auto px-4 md:px-2">
              {children}
            </div>
          </main>
          <Footer />
        </BodyWrapper>
      </body>
    </html>
  );
}
