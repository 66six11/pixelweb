"use client";
import React, { useRef, useState, useEffect } from "react";
import { useEditviewcreateContext } from "./Editview";

const componentProps = {
  Authorcard: ["image", "author", "description", "link", "keyid"],
  Imagecard: ["image", "author", "description", "keyid"],
  Partingline: ["keyid"],
  Artist: ["image", "author", "description", "link", "keyid"],
  Tag: ["image", "description", "keyid"],
  Software: [
    "image",
    "author",
    "specification",
    "description",
    "link",
    "keyid",
  ],
  // 其他组件的属性列表
};

export default function Editmode({ component, ...props }) {
  const { setComponent, setEditPropsMethod, setviewEditProps, setIsOpen } =
    useEditviewcreateContext();

  const ref = useRef(null);

  const [editProps, setEditProps] = useState({ ...props });
  const handleClick = () => {
    //TODO：编辑模式的代码，弹出编辑框

    setComponent(component);
    setEditPropsMethod(() => setEditProps);
    setIsOpen(true);
    setviewEditProps(editProps);
    console.log("点击了组件");
  };

  // useEffect(() => {
  //   console.log(editProps);
  //   componentProps[component.displayName].forEach((prop) => {
  //     if (!editProps[prop]&&prop!=="image"&&prop!=="specification") {
  //       setEditProps((prev) => ({ ...prev, [prop]: "" }));
  //     }
  //     else if(prop==="image"&&!editProps[prop]){
  //       setEditProps((prev) => ({ ...prev, [prop]: "./1.jpg" }));
  //     }
  //     else if(prop==="specification"&&!editProps[prop]){
  //       setEditProps((prev) => ({ ...prev, [prop]: [""] }));
  //     }
  //   });

  //   // console.log(ref.current);
  //   // console.log(editProps);
  // }, [component, editProps]);

  return (
    <div onClick={handleClick} className="relative">
      <div className="pointer-events-none">
        {React.createElement(component, { ...editProps, ref })}
      </div>
    </div>
  );
}
