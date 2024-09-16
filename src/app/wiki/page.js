"use client";

import Editcenter from "@/components/Editcenter";
import ComponentsCenter from "@/components/ComponentsCenter";
import { useState, useEffect } from "react";

export default function Page() {
  const [data, setData] = useState([]);
  const [preview, setPreview] = useState(false);
  const fliename = "0"; // JSON 文件的名称
  var jsx = null;
  useEffect(() => {
    let url = `${window.location}/${fliename}.json`; // 构建 JSON 文件的 URL
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch ${url}`);
        }
        return res.json();
      })

      .then((results) => {
        if (typeof results === "array") {
          var its = [];
          its.push(results);
        } else {
          var its = results;
        }
        setData(its);
        console.log(its); // 设置状态为正确的数据结构
      })
      .catch((err) => console.error("Error fetching JSON files:", err));
  }, [fliename]);
  if (process.env.NODE_ENV === "development" && !preview) {
    return (
      <>
        <button onClick={() => setPreview(true)}> 预览模式 </button>
        <Editcenter fliename={fliename} path={"wiki"}></Editcenter>
      </>
    );
  }
  return (
    <>
    {process.env.NODE_ENV === "development"?(<button onClick={() => setPreview(false)}> 编辑模式 </button>):null}
      <ComponentsCenter data={data}></ComponentsCenter>
    </>
  );
}
