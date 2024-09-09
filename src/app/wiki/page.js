'use client';

import ComponentsCenter from "@/components/ComponentsCenter";
import { useEffect,useState } from "react";




export default function Page() {

  const [data, setData] = useState(null);

  useEffect(() => {
    const urls =[];
    for (let i = 0; i < 10; i++) {
    let url = `${window.location}/${i}.json`;// 构建 JSON 文件的 URL
    urls.push(url);  
    }
      
    Promise.allSettled(urls.map(url => fetch(url).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to fetch ${url}`);
      }
      return res.json();
    })))
    .then(results => {
      // 过滤出成功的请求
      const successfulResults = results
        .filter(result => result.status === 'fulfilled')
        .map(result => result.value);
    
      // 合并所有成功的 JSON 数据
      const mergedData = successfulResults.flat();
      setData(mergedData); // 设置状态
    })
    .catch(err => console.error('Error fetching JSON files:', err));
  }, []);
  console.log(JSON.stringify(data));

  return (
    <div>
    
      <ComponentsCenter data={data} />
    </div>
  );
}
