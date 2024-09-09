import Authorcard from "@/components/Authorcard"; // 确保路径正确
import Flexbox from "@/components/Flexbox";

export default function Page() {
  return (
    <div>
      <p>Page</p>
      <Flexbox>
        <Authorcard
          image="./1.jpg"
          author="test"
          description="测试测试测试测试测试测试测试测试测试" // 注意属性名应为 description
          link="aa"
        />
        <Authorcard
          image="./1.jpg"
          author="test"
          description="测试测试测试测试测试测试测试测试测试" // 注意属性名应为 description
          link="aa"
        />
        <Authorcard
          image="./1.jpg"
          author="test"
          description="测试测试测试测试测试测试测试测试测试" // 注意属性名应为 description
          link="aa"
        />
        <Authorcard
          image="./1.jpg"
          author="test"
          description="测试测试测试测试测试测试测试测试测试" // 注意属性名应为 description
          link="aa"
        />
        <Authorcard
          image="./1.jpg"
          author="test"
          description="测试测试测试测试测试测试测试测试测试" // 注意属性名应为 description
          link="aa"
        />
      </Flexbox>
    </div>
  );
}
