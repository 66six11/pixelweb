"use client";

import Image from "next/image";
import React from "react";

const Tag = React.forwardRef(function Tag(
  { image, title, description, keyid },
  ref
) {
  return (
    <div keyid={keyid} className=" w-full ">
      <div className=" relative flex justify-center aspect-[7/1] items-center">
        <Image
          className=" object-cover rounded-lg "
          src={image}
          alt={title}
          fill
        />
        <div className="absolute inset-0 backdrop-blur-[5px] bg-black/30  rounded-lg"></div>
        <p className="z-10 text-5xl max-lg:text-3xl text-white">{title}</p>
      </div>
      <p className="my-4 text-center whitespace-pre-line">{description}</p>
    </div>
  );
});
Tag.displayName = "Tag";
export default Tag;
