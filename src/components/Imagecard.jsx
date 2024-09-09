"use client";


import Image from "next/image";
import { useImgValue,useImgSrc } from "./ImageView";

function Imagecard({ image, author,description }) {
  const [isopen, setIsOpen] = useImgValue(false);
  const [data,setDate] = useImgSrc()

  const toggleOpen = () => {
    setIsOpen(!isopen);
    setDate({image,author,description})
  };


  return (
    <>
      <div className="relative" onClick={toggleOpen}>
        <div className="relative aspect-[2/1] w-full">
          <Image className="object-cover rounded-md" src={image} alt={author} fill />
        </div>
      </div>
    
    </>
  );
}

export default Imagecard;
