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
import Editmode from "./Editmode";

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
function withEditmode(Component) {
  return function WrappedComponent(props) {
    return <Editmode component={Component} {...props} />;
  };
}
function selectComponent(component, data) {
  if (
    component !== "Contanier" &&
    component !== "Flexbox" &&
    component !== "Gridbox"
  ) {
    switch (component) {
      case "Artist":
        return withEditmode(Artist)(data);
      case "Authorcard":
        return withEditmode(Authorcard)(data);
      case "Partingline":
        return withEditmode(Partingline)(data);
      case "Software":
        return withEditmode(Software)(data);
      case "Imagecard":
        return withEditmode(Imagecard)(data);
      case "Tag":
        return withEditmode(Tag)(data);
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
        return setContanier(data);
      case "Flexbox":
        return setFlexbox(data);
      case "Gridbox":
        return setGridbox(data);
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
  return <Artist {...data}></Artist>;
}

function setAuthorcard(data) {
  return <Authorcard {...data}></Authorcard>;
}

function setSoftware(data) {
  return <Software {...data}></Software>;
}

function setImagecard(data) {
  return <Imagecard {...data}></Imagecard>;
}

function setTag(data) {
  return <Tag {...data}></Tag>;
}

function setContanier(childrens) {
  console.log("行数" + childrens[0].line);
  return (
    <Contanier {...childrens[0]}>
      {childrens.map((item, index) =>
        selectComponent(item.component, item.data)
      )}
    </Contanier>
  );
}

function setFlexbox(childrens) {
  return (
    <Flexbox {...childrens[0]}>
      {childrens.map((item, index) =>
        selectComponent(item.component, item.data)
      )}
    </Flexbox>
  );
}

function setGridbox(childrens) {
  return (
    <Gridbox {...childrens[0]}>
      {childrens.map((item, index) =>
        selectComponent(item.component, item.data)
      )}
    </Gridbox>
  );
}

function setPartingline(data) {
  return <Partingline {...data} />;
}
