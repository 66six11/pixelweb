"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Artist from "./Artist";

const jsondate = [
  {
    line: 4,
    key1: [{ test: "1" }],
    key2: [{ test: "2" }],
    key3: [{ test: "3" }],
  },
];

function Contanier({ data }) {
  const line = data.line ? data.line : 2; //确定行数
  var slices = 3;
  const keyCount = data.reduce((count, item) => {
    const keys = Object.keys(item);
    // 如果存在 "line" 键，则从总数中减去1
    return count + (keys.includes("line") ? keys.length - 1 : keys.length);
  }, 0);
  console.log(keyCount);
  if (keyCount > line * 3) {
    //超过行数
    slices = keyCount / (line * 3) + 1;
    console.log(slices);
    for (let i = 0; i < slices; i++) {} //TODO:分割
  }
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
    console.log(currentElementId);
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

      console.log(event.deltaY);
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
      contanier.current.addEventListener("wheel", handleWheel, {
        passive: false,
      });
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", update);
      }
    };
  }, [slices, change]);

  return (
    <div className="contanier relative  " ref={contanier}>
      <div
        className={`snap-mandatory snap-x flex relative overflow-x-auto hiddenOverflow`}
      >
        <Slice id="1">
          <Artist
            image="./1.jpg"
            author="author:"
            discription="测试测试测试测试测试测试测试测试测试测试测试测试
        测试测试测试测试测"
            link="a"
          />
          <Artist
            image="./1.jpg"
            author="author:"
            discription="测试测试测试测试测试测试测试测试测试测试测试测试
        测试测试测试测试测"
          />
          <Artist
            image="./1.jpg"
            author="author:"
            discription="测试测试测试测试测试测试测试测试测试测试测试测试
      测试测试测试测试测"
          />
          <Artist
            image="./1.jpg"
            author="author:"
            discription="测试测试测试测试测试测试测试测试测试测试测试测试
    测试测试测试测试测"
          />
          <Artist
            image="./1.jpg"
            author="author:"
            discription="测试测试测试测试测试测试测试测试测试测试测试测试
  测试测试测试测试测"
          />
          <Artist
            image="./1.jpg"
            author="author:"
            discription="测试测试测试测试测试测试测试测试测试测试测试测试
        测试测试测试测试测"
          />
        </Slice>
        <Slice id="2">
          <Artist
            image="./1.jpg"
            author="author:"
            discription="测试测试测试测试测试测试测试测试测试测试测试测试
        测试测试测试测试测"
          />
          <Artist
            image="./1.jpg"
            author="author:"
            discription="测试测试测试测试测试测试测试测试测试测试测试测试
        测试测试测试测试测"
          />
          <Artist
            image="./1.jpg"
            author="author:"
            discription="测试测试测试测试测试测试测试测试测试测试测试测试
      测试测试测试测试测"
          />
          <Artist
            image="./1.jpg"
            author="author:"
            discription="测试测试测试测试测试测试测试测试测试测试测试测试
    测试测试测试测试测"
          />
          <Artist
            image="./1.jpg"
            author="author:"
            discription="测试测试测试测试测试测试测试测试测试测试测试测试
  测试测试测试测试测"
          />
          <Artist
            image="./1.jpg"
            author="author:"
            discription="测试测试测试测试测试测试测试测试测试测试测试测试
        测试测试测试测试测"
          />
        </Slice>
      </div>
      <div className="flex justify-center my-2 relative select-none ">
        <SliceButton
          id="1"
          actived={activeId === "1"}
          onClick={() => change("1")}
        />
        <SliceButton
          id="2"
          actived={activeId === "2"}
          onClick={() => change("2")}
        />
        <SliceButton
          id="3"
          actived={activeId === "3"}
          onClick={() => change("3")}
        />
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
