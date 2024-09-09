"use client";
import Artist from "./Artist";
import Authorcard from "./Authorcard";
import Contanier from "./Contanier";
import Flexbox from "./Flexbox";
import Gridbox from "./Gridbox";
import Partingline from "./Partingline";
import Software from "./Software";
import Imagecard from "./Imagecard";
import Tag from "./Tag";



export default function ComponentsCenter({ data }) {
    if (!data) {
        return <p>Loading...</p>;
      }
  return (
    <>
      {data.map((item, index) =>
        selectComponent(item.component, item.data ? item.data : item.childrens)
      )}
    </>
  );
}

function selectComponent(component, param) {
  
  if (
    component !== "Contanier" &&
    component !== "Flexbox" &&
    component !== "Gridbox"
  ) {
    switch (component) {
      case "Artist":
        return setAritst(param);
      case "Authorcard":
        return setAuthorcard(param);
      case "Partingline":
        return setPartingline();
      case "Software":
        return setSoftware(param);
      case "Imagecard":
        return setImagecard(param);
      case "Tag":
        return setTag(param);
      default:
        console.log(
          "不存在组件：" +
            component +
            "，请检查组件名是否正确,或者该组件是需要放置子元素的组件"
        );
        return null;
    }
  } else if (
    component === "Contanier" ||
    component === "Flexbox" ||
    component === "Gridbox"
  ) {
    switch (component) {
      case "Contanier":
        return setContanier(param);
      case "Flexbox":
        return setFlexbox(param);
      case "Gridbox":
        return setGridbox(param);
      default:
        console.log(
          "不存在组件：" +
            component +
            "，请检查组件名是否正确,或者该组件是不需要放置子元素的组件"
        );
        return null;
    }
  } else {
    console.log("不存在组件：" + component + "，请检查组件名是否正确");
    return null;
  }
}
function setAritst(data) {
  return (
    <Artist
      image={data?.image}
      author={data?.author}
      description={data?.description}
      link={data?.link}
    ></Artist>
  );
}
function setAuthorcard(data) {
  return (
    <Authorcard
      image={data?.image}
      author={data?.author}
      description={data?.description}
      link={data?.link}
    ></Authorcard>
  );
}
function setSoftware(data) {
  return (
    <Software
      image={data?.image}
      title={data?.title}
      specification={data?.specification}
      description={data?.description}
    ></Software>
  );
}
function setImagecard(data) {
  return (
    <Imagecard
      image={data?.image}
      author={data?.author}
      description={data?.description}
    ></Imagecard>
  );
}
function setTag(data) {
    console.log("Tag"+data?.description)
  return (
    <Tag
      image={data?.image}
      title={data?.title}
      description = {data?.description}
    ></Tag>
  );
}
function setContanier(childrens) {
   console.log("行数"+childrens[0].line); 
  return <Contanier lines={childrens[0].line} > {childrens.map((item, index) => selectComponent(item.component, item.data))} </Contanier>;
}
function setFlexbox(childrens) {
  return (
    <Flexbox>
      {childrens.map((item, index) =>
        selectComponent(item.component, item.data)
      )}
    </Flexbox>
  );
}
function setGridbox(childrens) {
  return (
    <Gridbox>
      {childrens.map((item, index) =>
        selectComponent(item.component, item.data)
      )}
    </Gridbox>
  );
}
function setPartingline() {
  return <Partingline />;
}
