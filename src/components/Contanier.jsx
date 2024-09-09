"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

function Contanier({ children, lines }) {
  var line = lines?lines:2; //确定行数
  var slices = 1;

  const filteredChildren = React.Children.toArray(children).filter((child) =>
    React.isValidElement(child)
  );
  const childrenCount = filteredChildren.length;


  const [activeId, setActiveId] = useState(null);
  const contanier = useRef(null);

  const update = () => {
    const scrollContainer = contanier.current.querySelector(".snap-mandatory");

    const scrollSnapElements = Array.from(scrollContainer.children);
    const containerWidth = scrollContainer.clientWidth;
    const halfWidth = containerWidth / 2;
    let currentElementId = null;

    scrollSnapElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.left <= halfWidth && rect.right >= halfWidth) {
        currentElementId = element.id;
      }
    });

    setActiveId(currentElementId);
    return currentElementId; // 更新状态而不是直接操作 DOM
  };

  const change = useCallback((index) => {
    const elementToScroll = contanier.current.querySelector(`.slice${index}`);
    if (elementToScroll) {
      elementToScroll.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, []);

  useEffect(() => {
    update();
    const scrollContainer = contanier.current.querySelector(".snap-mandatory");
    const handleWheel = (event) => {
      event.stopPropagation();
      event.preventDefault();
      const currentId = update();

  
      if (event.deltaY > 0) {
        if (+currentId + 1 > slices) {
          change("1");
        } else {
          change(`${+currentId + 1}`);
        }
      } else if (event.deltaY < 0) {
        if (+currentId - 1 < 1) {
          change(slices.toString());
        } else {
          change(`${+currentId - 1}`);
        }
      }
    };
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", update);
      if (slices > 1) {
        contanier.current.addEventListener("wheel", handleWheel, {
          passive: false,
        });
      }
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", update);
      }
    };
  }, [slices, change]);
  if (childrenCount > line * 3) {
    //超过行数
    if (childrenCount % (line * 3) === 0) {
      slices =parseInt( childrenCount / (line * 3));
    } else {
      slices += parseInt( childrenCount / (line * 3));
    }
  
    const slicedChildren = [];
    for (let i = 0; i < childrenCount; i += line * 3) {
      slicedChildren.push(filteredChildren.slice(i, i + line * 3));
   
    }

    return (
      <div className="contanier relative  " ref={contanier}>
        <div
          className={`snap-mandatory snap-x flex relative overflow-x-auto hiddenOverflow`}
        >
          {slicedChildren.map((slice, index) => (
            <Slice key={index + 1} id={`${index + 1}`}>
              {slice}
            </Slice>
          ))}
        </div>
        <div className="flex justify-center my-2 relative select-none ">
          {Array.from({ length: slices }, (_, i) => (
            <SliceButton
              key={i + 1}
              id={`${i + 1}`}
              actived={activeId === `${i + 1}`}
              onClick={() => change(`${i + 1}`)}
            />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="contanier relative  " ref={contanier}>
      <div
        className={`snap-mandatory snap-x flex relative overflow-x-auto hiddenOverflow`}
      >
        <Slice id="1">{children}</Slice>
      </div>
    </div>
  );
}

export function Slice({ children, id }) {
  return (
    <div
      id={id}
      className={`slice${id} grid grid-cols-3 gap-x-3 gap-y-4 shrink-0 snap-normal w-full snap-center px-2 py-4 max-lg:grid-cols-2`}
    >
      {children}
    </div>
  );
}

export function SliceButton({ id, actived, onClick }) {
  return (
    <button
      id={id}
      onClick={onClick}
      className={`slicebutton w-14 h-2 mx-2 bg-[#6A60F8]/[.3] self-center rounded-md max-[450px]:w-6 max-[450px]:h-1 ${
        actived ? "buttonactive" : ""
      } `}
    ></button>
  );
}

export default Contanier;
