"use client";

import { useState } from "react";
import Image from "next/image";

function Imagecard({ image, author }) {
  const [isopen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isopen);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className="relative" onClick={toggleOpen}>
        <div className="relative aspect-[2/1] w-full">
          <Image className="object-cover" src={image} alt={author} fill />
        </div>
      </div>

      <div
        className={`${
          isopen
            ? "fixed top-0 left-0 flex items-center justify-center size-full z-50 bg-black/15"
            : "absolute"
        }`}
        onClick={toggleOpen}
      >
        <div
          className={`transition delay-75 ease-out duration-300 flex ${
            isopen
              ? "scale-100 size-3/4 relative bg-white dark:bg-slate-900  p-5 rounded-lg"
              : "scale-0"
          }`}
          onClick={stopPropagation}
        >
          <div className="relative aspect-[2/1] w-2/3 h-full  ">
            <Image className="object-contain" src={image} alt={author} fill />
          </div>
          <div className="ml-5 relative grow">
            {
                //TODO:图片描述
            }
            <button className="absolute h-10 w-full bg-violet-700/50 right-0 bottom-0 rounded-md" onClick={toggleOpen}>
              关闭
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Imagecard;
