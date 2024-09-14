import { createContext, useState, useContext, useEffect } from "react";
// 动态导入 Test 模块，禁用服务器端渲染

export default function Test1() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [flietest, setFlietest] = useState(() => async () => {
    return;
  });

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      const loadTest = async () => {
        const { Test } = await import("../api/test"); // 动态导入 Server Action
        setFlietest(() => async () => {
          const response = await Test();
          alert(JSON.stringify(response));
        });
        setIsLoaded(true);
      };
      loadTest();
    } else {
      // 在生产环境中使用替代方案
      setFlietest(() => async () => {
        const response = "This is a static response for production.";
        alert(response);
      });
      setIsLoaded(true);
    }
  }, []);

  return (
    <>
      <button onClick={flietest}>Test</button>
     
    </>
  );
}

