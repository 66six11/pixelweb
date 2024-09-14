'use client';

import Image from "next/image";
import React from "react";

const Authorcard = React.forwardRef( function Authorcard({ image, author, description, link, keyid },ref) {
    return (
        <a href={link}  keyid={keyid} ref={ref} target="_blank" className="flex flex-col items-center relative w-72 max-lg:w-32 ">
            <div className="aspect-square size-3/5 relative h-auto">
                <Image className="object-cover rounded-full" src={image} alt={author} layout="fill"/>
            </div>
            <p className="text-black dark:text-white text-4xl my-3 max-sm:text-xl">{author}</p>
            <p className="text-center max-sm:text-sm">
                {description}
            </p>
        </a>
    );
})
Authorcard.displayName = "Authorcard";
export default Authorcard;
