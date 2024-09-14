"use client";

import Image from "next/image";
import React from "react";

const Artist = React.forwardRef(function Artist({ image, author, description, link, keyid }, ref)  {
  return (
    <a ref={ref} href={link} keyid={keyid} target="_blank" className=" flex flex-col aspect-[9/8] relative rounded-md shadow-lg dark:shadow-gray-900">
      <div className="relative h-2/3">
        <Image
          className="object-cover rounded-t-md"
          src={image}
          alt="Picture of the author"
          fill
        />
      </div>
      <div className="relative grow w-full px-2 mt-3">
        <p className="text-black dark:text-white text-xl max-sm:text-sm">{author}</p>
        <p className="text-left max-md:hidden">{description}</p>
      </div>
    </a>
  );
});
Artist.displayName = "Artist";
export default Artist;
