"use client";

import Image from "next/image";
import React from "react";

const Software =React.forwardRef( function Software({ image, author, specification, description,keyid },ref) {
  var titleEle = <p className="text-4xl text-black dark:text-white max-[450px]:text-xl">{author}</p>;
  console.log(specification);
  
  
  const authorStr = author || '';
  var Url = null;
  const regex = /\[(.*?)\]\((.*?)\)/;
  const match = authorStr.match(regex);
  if (match) {
    const [matchedText, url] = match.slice(1);
    Url = url;
    titleEle = (
      <a href={url} className="text-4xl text-black dark:text-white max-[450px]:text-xl">
        {matchedText}
      </a>
    );
  }

  return (
    <div keyid={keyid} ref={ref} className="relative flex w-full aspect-[4/1]">
      <a href={Url} target="_blank" className="relative aspect-square">
        <Image
          className="object-cover rounded-md"
          src={image}
          alt={author}
          fill
        />
      </a>

      <div className="w-full h-full pl-10 max-[450px]:pl-3 flex flex-col flex-auto ">
        {titleEle}
        <div className="max-[800px]:hidden">
         
          {specification&&specification.split("\n").map((item, index) => (
            <Specification key={index} text={item} />
          ))}
        

        <p className="text-black dark:text-white max-xl:hidden">介绍：</p>
        </div>
        <div className="grow overflow-auto hiddenOverflow">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
})

export function Specification({ text }) {
  if (typeof text !== "string") {
    return null; // 或者返回一个默认的 JSX
  }

  const [platform, description] = text.split("：");

  if (description?.includes("https://") || description?.includes("http://")) {
    const regex = /\[(.*?)\]\((.*?)\)/;
    const match = description.match(regex);
    const [matchedText, url] = match.slice(1);

    return (
      <div className="my-2 max-xl:my-0">
        <span className="text-black dark:text-white">{platform}：</span>
        <a href={url} target="_blank" className="text-cyan-500">
          {matchedText}
        </a>
      </div>
    );
  }
  return (
    <div className="my-2 max-xl:my-0">
      <span className="text-black dark:text-white">{platform}：</span>
      <span>{description}</span>
    </div>
  );
}
Software.displayName = "Software";
export default Software;
