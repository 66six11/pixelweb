"use client";
import Artist from "./Artist";
import Authorcard from "./Authorcard";
import Pageablecontainer from "./Pageablecontainer";
import Flexbox from "./Flexbox";
import Gridbox from "./Gridbox";
import Partingline from "./Partingline";
import Software from "./Software";
import Imagecard from "./Imagecard";
import Tag from "./Tag";
import Editmode from "./Editmode";
import { SortableItem } from "./SortableItem";
import { useRemovecontext } from "./Editcenter";

export default function ComponentsCenter({ data }) {
  if (!data) {
    return <p>Loading...</p>;
  }
  return (
    <>
      {data.map((item, index) =>
        selectsataicComponent(
          item.component,
          
          item.data ? item.data : item.childrens
          
        )
      )}
    </>
  );
}
function withEditmode(Component) {
  return function WrappedComponent(id, props, index) {
    return <Editmode key={id} id={id} component={Component} {...props} />;
  };
}
export function selectComponent(component, id, data, index) {
  if (
    component !== "Pageablecontainer" &&
    component !== "Flexbox" &&
    component !== "Gridbox"
  ) {
    switch (component) {
      case "Artist":
        return withEditmode(Artist)(id, data, index);
      case "Authorcard":
        return withEditmode(Authorcard)(id, data, index);
      case "Partingline":
        return setPartingline(id);
      case "Software":
        return withEditmode(Software)(id, data, index);
      case "Imagecard":
        return withEditmode(Imagecard)(id, data, index);
      case "Tag":
        return withEditmode(Tag)(id, data, index);
      default:
        console.log(
          "不存在组件：" +
            component +
            "，请检查组件名是否正确,或者该组件是需要放置子元素的组件"
        );
        return null;
    }
  } else if (
    component === "Pageablecontainer" ||
    component === "Flexbox" ||
    component === "Gridbox"
  ) {
    switch (component) {
      case "Pageablecontainer":
        return <SetContanier id={id} childrens={data}></SetContanier>;
      case "Flexbox":
        return <SetFlexbox id={id} childrens={data}></SetFlexbox>;
      case "Gridbox":
        return <SetGridbox id={id} childrens={data}></SetGridbox>;
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
export function selectsataicComponent(component, data) {
  if (
    component !== "Pageablecontainer" &&
    component !== "Flexbox" &&
    component !== "Gridbox"
  ) {
    switch (component) {
      case "Artist":
        return setAritst(data);
      case "Authorcard":
        return setAuthorcard(data);
      case "Partingline":
        return setsataicPartingline();
      case "Software":
        return setSoftware(data);
      case "Imagecard":
        return setImagecard(data);
      case "Tag":
        return setTag(data);
      default:
        console.log(
          "不存在组件：" +
            component +
            "，请检查组件名是否正确,或者该组件是需要放置子元素的组件"
        );
        return null;
    }
  } else if (
    component === "Pageablecontainer" ||
    component === "Flexbox" ||
    component === "Gridbox"
  ) {
    switch (component) {
      case "Pageablecontainer":
        return setstaticContanier(data);
      case "Flexbox":
        return serstaticFlexbox(data);
      case "Gridbox":
        return setsataicGridbox(data);
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

function SetContanier({ id, childrens }) {
  const { addcomponent } = useRemovecontext();
  console.log("行数" + childrens[0]?.line);
  console.log("子元素个数" + childrens);
  return (
    <SortableItem id={id}>
      <Pageablecontainer {...childrens[0]}>
        {childrens.map((item, index) =>
          selectComponent(item?.component, item?.id, item?.data, index)
        )}
        <div className="flex flex-col items-center justify-center my-2 relative w-full  ">
          <button
            onClick={() => addcomponent(id, "Artist")}
            className="bg-blue-600 text-white rounded-md p-2"
          >
            添加Artist
          </button>
          <button
            onClick={() => addcomponent(id, "Authorcard")}
            className="bg-blue-600 text-white rounded-md p-2"
          >
            添加Authorcard
          </button>
          <button
            onClick={() => addcomponent(id, "Imagecard")}
            className="bg-blue-600 text-white rounded-md p-2"
          >
            添加Imagecard
          </button>
        </div>
      </Pageablecontainer>
    </SortableItem>
  );
}

function SetFlexbox({ id, childrens }) {
  const { addcomponent } = useRemovecontext();
  console.log("行数" + childrens[0]?.line);
  console.log("子元素个数" + childrens);
  return (
    <SortableItem id={id}>
      <Flexbox {...childrens[0]}>
        {childrens.map((item, index) =>
          selectComponent(item?.component, item?.id, item?.data, index)
        )}
        <div className="flex flex-col items-center justify-center my-2 relative w-full  ">

          <button
            onClick={() => addcomponent(id, "Authorcard")}
            className="bg-blue-600 text-white rounded-md p-2"
          >
            添加Authorcard
          </button>

        </div>
      </Flexbox>
    </SortableItem>
  );
}

function SetGridbox({ id, childrens }) {
  const { addcomponent } = useRemovecontext();
  console.log("行数" + childrens[0]?.line);
  console.log("子元素个数" + childrens);
  return (
    <SortableItem id={id}>
      <Gridbox >
      {childrens.map((item, index) =>
          selectComponent(item?.component, item?.id, item?.data, index)
        )}
        <div className="flex flex-col items-center justify-center my-2 relative w-full  ">
          <button
            onClick={() => addcomponent(id, "Artist")}
            className="bg-blue-600 text-white rounded-md p-2"
          >
            添加Artist
          </button>
          <button
            onClick={() => addcomponent(id, "Authorcard")}
            className="bg-blue-600 text-white rounded-md p-2"
          >
            添加Authorcard
          </button>
          <button
            onClick={() => addcomponent(id, "Imagecard")}
            className="bg-blue-600 text-white rounded-md p-2"
          >
            添加Imagecard
          </button>
        </div>
      </Gridbox>
    </SortableItem>
  );
}
function setstaticContanier(childrens) {
  return <Pageablecontainer>{childrens}</Pageablecontainer>;
}
function serstaticFlexbox(childrens) {
  return <Flexbox>{childrens}</Flexbox>;
}
function setsataicGridbox(childrens) {
  return <Gridbox>{childrens}</Gridbox>;
}

function setsataicPartingline() {
  return <Partingline />;
}
function setPartingline(id) {
  return (
    <SortableItem id={id}>
      <Partingline />
    </SortableItem>
  );
}
