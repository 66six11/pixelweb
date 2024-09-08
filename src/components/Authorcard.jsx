'use client';

import Image from "next/image";

function Authorcard({ image, author, description, link }) {
    return (
        <a href={link} target="_blank" className="flex flex-col items-center relative w-64 max-lg:w-32 mt-10">
            <div className="aspect-square size-3/5 relative">
                <Image className="object-cover rounded-full" src={image} alt={author} layout="fill"/>
            </div>
            <p className="text-black dark:text-white text-4xl my-3 max-sm:text-xl">{author}</p>
            <p className="text-center max-sm:text-sm">
                {description}
            </p>
        </a>
    );
}
export default Authorcard;
