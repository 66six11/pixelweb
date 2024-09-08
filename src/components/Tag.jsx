'use client';

import Image from "next/image";

function Tag({ image, title, discription }) {
  return (
    <div className=" w-full ">
      <div className=" relative flex justify-center aspect-[7/1] items-center">
        <Image className=" object-cover rounded-lg " src={image} alt={title} fill />
        <div className="absolute inset-0 backdrop-blur-[5px] bg-black/30  rounded-lg"></div>
        <p className="z-10 text-5xl max-lg:text-3xl text-white">{title}</p>
      </div>
      <div className="my-4 text-center ">{discription}</div>
    </div>
  );
}

export default Tag;