import React from 'react';
import Image from 'next/image';

interface ProgramItem {
    id: number;
    author: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
}

const archives: ProgramItem[] = [
    {
        id: 1,
        author: 'Anaïs TOBO',
        description:
            "Since 2011, Black Girls Code has supported girls of color in tech through coding education and more."
            + "We partner with schools and organizations to offer a range of programs, both in-person and virtual, for ages 7–25."
            + "Our initiatives go beyond coding to build confidence and connections, enhancing technical skills, community bonds, and career paths.",
        imageUrl: '/image_perso/p1.png',
        imageAlt: 'Fille codant sur ordinateur',
    },
    {
        id: 3,
        author: 'Anaïs TOBO',
        description:
            "Since 2011, Black Girls Code has supported girls of color in tech through coding education and more."
            + "We partner with schools and organizations to offer a range of programs, both in-person and virtual, for ages 7–25."
            + "Our initiatives go beyond coding to build confidence and connections, enhancing technical skills, community bonds, and career paths.",
        imageUrl: '/image_perso/a2.png',
        imageAlt: 'Jeune femme avec tablette',
    },
    {
        id: 2,
        author: 'Anaïs TOBO',
        description:
            "Since 2011, Black Girls Code has supported girls of color in tech through coding education and more."
            + "We partner with schools and organizations to offer a range of programs, both in-person and virtual, for ages 7–25."
            + "Our initiatives go beyond coding to build confidence and connections, enhancing technical skills, community bonds, and career paths.",
        imageUrl: '/image_perso/about.png',
        imageAlt: 'Atelier en groupe',
    },
    {
        id: 3,
        author: 'Anaïs TOBO',
        description:
            "Since 2011, Black Girls Code has supported girls of color in tech through coding education and more."
            + "We partner with schools and organizations to offer a range of programs, both in-person and virtual, for ages 7–25."
            + "Our initiatives go beyond coding to build confidence and connections, enhancing technical skills, community bonds, and career paths.",
        imageUrl: '/image_perso/p2.png',
        imageAlt: 'Jeune femme avec tablette',
    }
];

const ArchivesList = () => {
    return (
        <section className="container mx-auto mb-10">
            <h2 className="text-[45px] font-bold text-center p-10">Nos archives</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-24 gap-y-8">
                {archives.map((item) => (
                    <div className="p-2">
                        {/* Image */}
                        <div className="w-full h-85 overflow-hidden rounded-xl mb-8">
                            <img
                                src={item.imageUrl}
                                alt={item.author}
                                className="w-full h-full object-cover"
                            />
                        </div>


                        {/* Text Content */}
                        <div className="text-left md:ml-12">
                            <p className="text-[18px] text-black mb-4">{item.description}</p>
                            <p className="font-bold">{item.author}</p>
                            <p className="text-sm ">Cohorte #3</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    );
};

export default ArchivesList;
