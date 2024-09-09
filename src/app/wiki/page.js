'use client';

import ComponentsCenter from "@/components/ComponentsCenter";
import { useEffect,useState } from "react";

const exampleJson = [
  {
    component: "Artist",
    data: { image: "./1.jpg", author: "test", description: "测试", link: "aa" },
  },
  {
    component: "Authorcard",
    data: { image: "./1.jpg", author: "test", description: "测试", link: "aa" },
  },
  {
    component: "Contanier",
    childrens: [
      { line :3},
      {
        component: "Artist",
        data: {
          image: "./1.jpg",
          author: "test",
          description: "测试",
          link: "aa",
        },
      },
      {
        component: "Artist",
        data: {
          image: "./1.jpg",
          author: "test",
          description: "测试",
          link: "aa",
        },
      },
      {
        component: "Artist",
        data: {
          image: "./1.jpg",
          author: "test",
          description: "测试",
          link: "aa",
        },
        
      },
      {
        component: "Artist",
        data: {
          image: "./1.jpg",
          author: "test",
          description: "测试",
          link: "aa",
        },
      },
      {
        component: "Artist",
        data: {
          image: "./1.jpg",
          author: "test",
          description: "测试",
          link: "aa",
        },
      },
      {
        component: "Artist",
        data: {
          image: "./1.jpg",
          author: "test",
          description: "测试",
          link: "aa",
        },
        
      },
      {
        component: "Artist",
        data: {
          image: "./1.jpg",
          author: "test",
          description: "测试",
          link: "aa",
        },
      },
      {
        component: "Artist",
        data: {
          image: "./1.jpg",
          author: "test",
          description: "测试",
          link: "aa",
        },
      },
      {
        component: "Artist",
        data: {
          image: "./1.jpg",
          author: "test",
          description: "测试",
          link: "aa",
        },
        
      },
      {
        component: "Artist",
        data: {
          image: "./1.jpg",
          author: "test",
          description: "测试",
          link: "aa",
        },
      },
      {
        component: "Artist",
        data: {
          image: "./1.jpg",
          author: "test",
          description: "测试",
          link: "aa",
        },
      },
      {
        component: "Artist",
        data: {
          image: "./1.jpg",
          author: "test",
          description: "测试",
          link: "aa",
        },
        
      },
    ],
  },
  {
    component: "Flexbox",
    childrens: [
      {
        component: "Authorcard",
        data: {
          image: "./1.jpg",
          author: "test",
          description: "测试",
          link: "aa",
        },
      },
      {
        component: "Authorcard",
        data: {
          image: "./1.jpg",
          author: "test",
          description: "测试",
          link: "aa",
        },
      },
      {
        component: "Authorcard",
        data: {
          image: "./1.jpg",
          author: "test",
          description: "测试",
          link: "aa",
        },
      },
    ],
  },
  {
    component: "Gridbox",
    childrens: [
      {
        component: "Imagecard",
        data: {
          image: "./1.jpg",
        },
      },
      {
        component: "Imagecard",
        data: {
          image: "./1.jpg",
        },
      },
      {
        component: "Imagecard",
        data: {
          image: "./1.jpg",
          author: "1",
          description: <p>试测试测试测试测试测试</p>,
        },
      },
    ],
  },
  {
    component: "Partingline",
  },
  {
    component: "Software",
    data: {
      image: "./1.jpg",
      title: "软件教程",
      specification: [
        "适用平台：pc",
        "适用平台：pc",
        "直达：[链接](https://aa)",
      ],
      description: "测试",
    },
  },
  {
    component: "Imagecard",
    data: { image: "./1.jpg" },
  },
  {
    component: "Tag",
    data: { image: "./1.jpg", title: "test", description: "测试" },
  },
];
const exampleJson2 = [
  {
    "component": "Artist",
    "data": {
      "image": "./1.jpg",
      "author": "test",
      "description": "测试",
      "link": "aa"
    }
  },
  {
    "component": "Authorcard",
    "data": {
      "image": "./1.jpg",
      "author": "test",
      "description": "测试",
      "link": "aa"
    }
  },
  {
    "component": "Contanier",
    "childrens": [
      {
        "component": "Artist",
        "data": {
          "image": "./1.jpg",
          "author": "test",
          "description": "测试",
          "link": "aa"
        }
      },
      {
        "component": "Artist",
        "data": {
          "image": "./1.jpg",
          "author": "test",
          "description": "测试",
          "link": "aa"
        }
      },
      {
        "component": "Artist",
        "data": {
          "image": "./1.jpg",
          "author": "test",
          "description": "测试",
          "link": "aa"
        }
      },
      {
        "component": "Artist",
        "data": {
          "image": "./1.jpg",
          "author": "test",
          "description": "测试",
          "link": "aa"
        }
      },
      {
        "component": "Artist",
        "data": {
          "image": "./1.jpg",
          "author": "test",
          "description": "测试",
          "link": "aa"
        }
      },
      {
        "component": "Artist",
        "data": {
          "image": "./1.jpg",
          "author": "test",
          "description": "测试",
          "link": "aa"
        }
      },
      {
        "component": "Artist",
        "data": {
          "image": "./1.jpg",
          "author": "test",
          "description": "测试",
          "link": "aa"
        }
      },
      {
        "component": "Artist",
        "data": {
          "image": "./1.jpg",
          "author": "test",
          "description": "测试",
          "link": "aa"
        }
      },
      {
        "component": "Artist",
        "data": {
          "image": "./1.jpg",
          "author": "test",
          "description": "测试",
          "link": "aa"
        }
      },
      {
        "component": "Artist",
        "data": {
          "image": "./1.jpg",
          "author": "test",
          "description": "测试",
          "link": "aa"
        }
      },
      {
        "component": "Artist",
        "data": {
          "image": "./1.jpg",
          "author": "test",
          "description": "测试",
          "link": "aa"
        }
      },
      {
        "component": "Artist",
        "data": {
          "image": "./1.jpg",
          "author": "test",
          "description": "测试",
          "link": "aa"
        }
      }
    ]
  },
  {
    "component": "Flexbox",
    "childrens": [
      {
        "component": "Authorcard",
        "data": {
          "image": "./1.jpg",
          "author": "test",
          "description": "测试",
          "link": "aa"
        }
      },
      {
        "component": "Authorcard",
        "data": {
          "image": "./1.jpg",
          "author": "test",
          "description": "测试",
          "link": "aa"
        }
      },
      {
        "component": "Authorcard",
        "data": {
          "image": "./1.jpg",
          "author": "test",
          "description": "测试",
          "link": "aa"
        }
      }
    ]
  },
  {
    "component": "Gridbox",
    "childrens": [
      {
        "component": "Imagecard",
        "data": {
          "image": "./1.jpg"
        }
      },
      {
        "component": "Imagecard",
        "data": {
          "image": "./1.jpg"
        }
      },
      {
        "component": "Imagecard",
        "data": {
          "image": "./1.jpg",
          "author": "1",
          "description": "试测试测试测试测试测试"
        }
      }
    ]
  },
  {
    "component": "Partingline"
  },
  {
    "component": "Software",
    "data": {
      "image": "./1.jpg",
      "title": "软件教程",
      "specification": [
        "适用平台：pc",
        "适用平台：pc",
        "直达：[链接](https://aa)"
      ],
      "description": "测试"
    }
  },
  {
    "component": "Imagecard",
    "data": {
      "image": "./1.jpg"
    }
  },
  {
    "component": "Tag",
    "data": {
      "image": "./1.jpg",
      "title": "test",
      "description": "测试"
    }
  }
]


export default function Page() {

  const [data, setData] = useState(null);

  useEffect(() => {
    // 构建指向 public 目录下 datalist.json 文件的 URL
    const dataUrl = `${window.location}/1.json`;
    console.log(dataUrl);
    fetch(dataUrl)
      .then(res => res.json()) // 解析 JSON 数据
      .then(json => setData(json)) // 设置状态
      .catch(err => console.error('Error fetching 1.json:', err));// 捕获错误
  }, []);
  
  console.log("data:" + JSON.stringify(data));
  console.log("exampleJson:"+exampleJson2);
  console.log(JSON.stringify(data) == JSON.stringify(exampleJson2));
  return (
    <div>
      <p>Page</p>
      <ComponentsCenter data={data} />
    </div>
  );
}
function Jsonreader(flie) {
  const dataUrl = `${window.location.origin}/${flie}`;
  console.log(dataUrl);
  fetch(dataUrl)
  .then(res => res.json()) // 解析 JSON 数据
  .then(json => {return(json)})
  .catch(err => console.error('Error fetching datalist.json:', err));// 捕获错误
}