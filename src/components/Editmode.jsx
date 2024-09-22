"use client";
import React, { useRef, useState, useEffect } from "react";
import { useEditviewcreateContext } from "./Editview";
import { useRemovecontext } from "./Editcenter";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const componentProps = {
  Authorcard: ["image", "author", "description", "link", ],
  Imagecard: ["image", "author", "description", ],
  Partingline: ["keyid"],
  Artist: ["image", "author", "description", "link", ],
  Tag: ["image","title", "description", ],
  Software: [
    "image",
    "author",
    "specification",
    "description",
    "link"
  ],
  // 其他组件的属性列表
};

export default function Editmode({ component, id, ...props }) {
  const { setComponent, setId, setviewEditProps, setIsOpen } =
    useEditviewcreateContext();
  const { removeElement,mapodifElement } = useRemovecontext();
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

  const style = {};
  const ref = useRef(null);
  const handleClick = (event) => {
    //TODO：编辑模式的代码，弹出编辑框
    event.stopPropagation();
    setComponent(component);
    setviewEditProps({ ...props });
    setIsOpen(true);
    setId(id);
  };
  useEffect(() => {
    // 清空现有的 editProps 并重新分配
    const newEditProps = { ...props }; // 基于新 props 初始化 editProps

    componentProps[component.displayName].forEach((prop) => {
     
      if (newEditProps[prop] === undefined||newEditProps[prop] === null) {
        newEditProps[prop] = "初始值";
      }
    });
    console.log("newEditProps",newEditProps)
    mapodifElement(id, newEditProps); // 更新 editProps
  }, []); // 监视 component 和 props 的变化

  return (
    <div className={component.displayName==='Authorcard'?'':'w-full'}>
      <button onClick={() => removeElement(id)}>X</button>
      <div
        onClick={handleClick}
        className="relative"
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        key={id}
      >
        <div className="pointer-events-none">
          {React.createElement(component, { ...props, ref })}
        </div>
      </div>
    </div>
  );
}
