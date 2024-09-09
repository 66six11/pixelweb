import Tag from "@/components/Tag";
import Software from "@/components/Software";
import Artist from "@/components/Artist";
import Container from "@/components/Contanier";
import Imagecard from "@/components/Imagecard";
import Partingline from "@/components/Partingline";
import Gridbox from "@/components/Gridbox";
    

export default function Page() {
  var data = [
    {
      title: "软件教程",
      description:
        "Visual Studio Code is a source-code editor developed by Microsoft for Windows, Linux and macOS.",
      image: "./1.jpg",
    },
    {
      title: "软件教程",
      description:
        "Visual Studio Code is a source-code editor developed by Microsoft for Windows, Linux and macOS.",
      image: "./1.jpg",
    },
  ];
  const jsondate = [
    {
      line: 4,
      key1: [{ test: "1" }],
      key2: [{ test: "2" }],
      key3: [{ test: "3" }],
    },
  ];
  return (
    <div>
      <Gridbox>
      <Imagecard image="./1.jpg" />
      <Imagecard image="./1.jpg" />
      <Imagecard image="./1.jpg" />
      <Imagecard image="./1.jpg" />
      <Imagecard image="./1.jpg" />
      <Imagecard image="./1.jpg" />
      <Imagecard image="./logo.png" author="1" description={(<p>试测试测试测试测试测试</p>)}/>
      </Gridbox>
      <Container data={jsondate} />
      <Partingline />
      <Container data={jsondate} />
      <Artist
        image="./1.jpg"
        author="author:"
        description="测试测试测试测试测试测试测试测试测试测试测试测试
        测试测试测试测试测"
        link="a"
      />
      <Software
        image="./1.jpg"
        title="[软件教程](https://aa)"
        specification={[
          "适用平台：pc",
          "适用平台：pc",
          "直达：[链接](https://aa)",
        ]}
        description="测试测试测试测试测试测试测试测试测试测试测试测试
        测试测试测试测试测试测试测试测试测试测试试测试测试测试测试测试测试测试测试测试
        试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测
        试测试测试测试测试测试测试测试测试测试试测试测试测试测试测试测试测试测试测试
        试测试测试测试测试测试测试测试测试测试试测试测试测试测试测试测试测试测试测试试
        试测试测试测试测试测试测试测试测试测试试测试测试测试测试测试测试测试测试测试
        试测试测试测试测试测试测试测试测试测试试测试测试测试测试测试测试测试测试测试测
        试测试试测试测试测试测试测试试测试试测试测试测试测试测试
        试测试试测试测试测试测试测试试测试试测试测试测试测试测试测试测试测试测试测试测试"
      />
      {data.map((item, index) => (
        <>
          <Tag
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
          <Partingline />
        </>
      ))}
    </div>
  );
}
