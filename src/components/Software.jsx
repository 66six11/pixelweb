"use client";

import Image from "next/image";

function Software({ image, title, specification, discription }) {
  var titleEle = <p className="text-4xl text-black dark:text-white">{title}</p>;
  var Url = null;
  const regex = /\[(.*?)\]\((.*?)\)/;
  const match = title.match(regex);
  if (match) {
    const [matchedText, url] = match.slice(1);
    Url = url;
    titleEle = (
      <a href={url} className="text-4xl text-black dark:text-white">
        {matchedText}
      </a>
    );
  }

  return (
    <div className="relative flex w-full aspect-[4/1]">
      <a href={Url} target="_blank" className="relative aspect-square">
        <Image
          className="object-cover rounded-md"
          src={image}
          alt={title}
          fill
        />
      </a>

      <div className="w-full h-full pl-10 flex flex-col flex-auto ">
        {titleEle}
        {specification.map((item, index) => (
          <Specification key={index} text={item} />
        ))}
        <p className="text-black dark:text-white">介绍：</p>
        <div className="grow overflow-auto hiddenOverflow">
          <p>{discription}</p>
        </div>
      </div>
    </div>
  );
}

export function Specification({ text }) {
  if (typeof text !== "string") {
    return null; // 或者返回一个默认的 JSX
  }

  const [platform, description] = text.split("：");

  if (description.includes("https://") || description.includes("http://")) {
    const regex = /\[(.*?)\]\((.*?)\)/;
    const match = description.match(regex);
    const [matchedText, url] = match.slice(1);

    return (
      <div className="my-2">
        <span className="text-black dark:text-white">{platform}：</span>
        <a href={url} target="_blank" className="text-cyan-500">
          {matchedText}
        </a>
      </div>
    );
  }
  return (
    <div className="my-2">
      <span className="text-black dark:text-white">{platform}：</span>
      <span>{description}</span>
    </div>
  );
}
export default Software;
