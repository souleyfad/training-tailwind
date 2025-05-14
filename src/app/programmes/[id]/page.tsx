// app/programmes/[id]/page.tsx
import { getProgrammeById } from '../../../lib/api';
import { Programme } from '../../../lib/api';
import { notFound } from 'next/navigation';
import Header from "@/components/layout/header";

type Props = {
  params: { id: string };
};

export default async function ProgrammeDetailPage({ params }: Props) {
    let programme: Programme | null = null;

    try {
        programme = await getProgrammeById(params.id);
    } catch (err) {
        console.error(err);
    }

    if (!programme) return notFound();

    return (
        <main className="container mx-auto px-4">
            <div className="bg-gradient-to-br">
                <Header />
            </div>

            <div className="w-full mb-10 mt-10">
                <h1 className="flex items-center justify-center text-2xl item-center md:text-4xl font-bold">{programme.title}</h1>
            </div>

            <div>
                <img src={programme.image} alt={programme.title} className="w-full h-128 object-cover rounded-md" />
                <p className="flex text-sm item-center justify-center text-gray-500 mt-10 mb-10">{programme.date}</p>
                <p className="text-gray-700 text-base whitespace-pre-line">{programme.message}</p>
            </div>
        </main>
    );
}
