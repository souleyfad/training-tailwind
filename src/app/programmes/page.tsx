import Header from "@/components/layout/header";

export default function ProgrammesPage() {
    return (
      <main className="min-h-screen scroll-smooth">
            <div className="container mx-auto px-4 md:px-2 bg-gradient-to-br">
              <Header />
            </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Nos Programmes</h1>
        <p className="text-gray-600">
          Découvrez ici tous les programmes que nous proposons. Cette page est encore en construction.
        </p>
      </main>
    );
  }