'use client';


import { useEffect, useState } from "react";





export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // 构建指向 public 目录下 datalist.json 文件的 URL
    const dataUrl = `${window.location.origin}/datalist.json`;
    
    fetch(dataUrl)
      .then(res => res.json()) // 解析 JSON 数据
      .then(json => setData(json)) // 设置状态
      .catch(err => console.error('Error fetching datalist.json:', err));// 捕获错误
  }, []);
  console.log(data);


  

  return (
    <>
    <p>Home</p>
    <p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p><p>Home</p>
    </>
      
  );
}
