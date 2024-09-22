"use client";

import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
} from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { selectComponent } from "@/components/ComponentsCenter";
import Editview from "@/components/Editview";

const removecontext = createContext();
export function useRemovecontext() {
  return useContext(removecontext);
}

export default function Editcenter({ fliename, path }) {
  const [imagepath, setImagepath] = useState(`${path}${fliename}images`);
  const [items, setItems] = useState([]);
  const [updatajson, setupdatajson] = useState(() => async () => {
    return;
  });
  const [deleteImage, setDeleteImage] = useState(() => async () => {
    return;
  });
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    }),

    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  const extractIds = (array) => {
    // 确保 array 是一个数组，如果不是则返回空数组
    if (!Array.isArray(array)) {
      return [];
    }

    return array.flatMap((item) => {
      const ids = item.id ? [item.id] : []; // 提取当前项的 id
      // 如果有 childrens，递归提取 childrens 中的 ids
      const childIds = item.childrens ? extractIds(item.childrens) : [];
      return [...ids, ...childIds]; // 合并当前 ids 和 childrens 中的 ids
    });
  };
  useEffect(() => {
    if (items.length > 0) {
      updata();
    }
  }, [items]);
  useEffect(
    () => async () => {
      if (process.env.NODE_ENV === "development") {
        const loadTest = async () => {
          const { jsonupdata } = await import("../api/jsonupdata"); // 动态导入 Server Action
          setupdatajson(() => jsonupdata);
          const { deleteImage } = await import("../api/deleteimage"); // 动态导入 Server Action
          setDeleteImage(() => deleteImage);
        };
        loadTest();
      }
    },
    []
  );
  useEffect(() => {
    const urls = [];

    let url = `${window.location}/${fliename}.json`; // 构建 JSON 文件的 URL
    urls.push(url);

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
        setItems(its);

        console.log(its); // 设置状态为正确的数据结构
      })
      .catch((err) => console.error("Error fetching JSON files:", err));
  }, []);
  console.log(items);

  const removeElement = useCallback(
    async (id) => {
      const result = findIndexInTree(items, id);
      if (!result) {
        console.error("Element not found");
        return; // 如果未找到元素，终止执行
      }
      const newArray = JSON.parse(JSON.stringify(items)); // 深拷贝原始数据

      // 如果是根级别元素
      if (!result.isChild) {
        if (newArray[result.index]?.hasOwnProperty("childrens")) {
          for (const item of newArray[result.index].childrens) {
            if (item?.data.image !== "./1.jpg") {
              try {
                await deleteImage(item.data.image); // 等待图片删除完成
                console.log("图片删除成功", item.data.image);
              } catch (error) {
                console.error("Failed to delete image:", error);
              }
            }
          }
        } else if (newArray[result.index]?.data?.image !== "./1.jpg") {
          try {
            await deleteImage(newArray[result.index].data.image); // 等待图片删除完成
            console.log("图片删除成功", newArray[result.index].data.image);
          } catch (error) {
            console.error("Failed to delete image:", error);
          }
        }
        newArray.splice(result.index, 1);
      } else if (result.isChild) {
        const { index, childIndex } = result;

        if (newArray[index].childrens[childIndex]?.data?.image !== "./1.jpg") {
          try {
            await deleteImage(newArray[index].childrens[childIndex].data.image); // 等待图片删除完成
            console.log(
              "图片删除成功",
              newArray[index].childrens[childIndex].data.image
            );
          } catch (error) {
            console.error("Failed to delete image:", error);
          }
        }
        newArray[index].childrens.splice(childIndex, 1);
      }

      setItems(newArray);
    },
    [deleteImage, items]
  );

  const mapodifElement = (id, data) => {
    const result = findIndexInTree(items, id); // 假设 'items' 是您存储树形数据的数组
    if (!result) {
      console.error("Element not found");
      return; // 如果未找到元素，终止执行
    }
    const newArray = JSON.parse(JSON.stringify(items)); // 深拷贝原始数据

    // 如果是根级别元素
    if (!result.isChild) {
      newArray[result.index].data = data; // 移除根级别元素
    } else {
      // 如果是子级元素
      const { index, childIndex } = result;
      newArray[index].childrens[childIndex].data = data; // 移除子级元素
    }

    setItems(newArray); // 更新状态
    console.log("修改成功");
    console.log(newArray);
  };
  const addcomponent = (id, Component) => {
    const now = new Date();
    // 获取年份（四位数）
    const year = now.getFullYear();
    // 获取月份（0-11，即1-12月）
    const month = now.getMonth();
    // 获取月份中的某一天（1-31）
    const day = now.getDate();
    // 获取小时（0-23）
    const hours = now.getHours();
    // 获取分钟（0-59）
    const minutes = now.getMinutes();
    // 获取秒（0-59）
    const seconds = now.getSeconds();

    const ID = `${year}${month}${day}${hours}${minutes}${seconds}`;
    if (id === null || id === undefined) {
      if (
        Component !== "Flexbox" &&
        Component !== "Gridbox" &&
        Component !== "Pageablecontainer" &&
        Component !== "Partingline"
      ) {
        setItems((items) => {
          return [
            ...items,
            {
              component: Component,
              id: ID,
              data: { image: "./1.jpg" },
            },
          ];
        });
      } else if (Component === "Partingline") {
        setItems((items) => {
          return [
            ...items,
            {
              component: Component,
              id: ID,
            },
          ];
        });
      } else if (
        Component === "Pageablecontainer" ||
        Component === "Flexbox" ||
        Component === "Gridbox"
      ) {
        setItems((items) => {
          return [
            ...items,
            {
              component: Component,
              id: ID,
              childrens: [],
            },
          ];
        });
      } else {
        console.error("未知组件");
      }
    } else {
      const father = findIndexInTree(items, id);

      if (father) {
        const newArray = JSON.parse(JSON.stringify(items)); // 创建 items 的深拷贝

        // 确保父元素存在，并且它有 children 属性
        if (!father.isChild && newArray[father.index].childrens) {
          newArray[father.index].childrens.push({
            component: Component, // 新元素的组件
            id: ID, // 新元素的 ID
            data: { image: "./1.jpg" }, // 新元素的数据
          });
        } else {
          console.error("父元素不存在或没有 childrens 属性");
        }

        setItems(newArray); // 更新状态
      }
    }
  };
  // 更新 JSON 文件
  const updata = useCallback(async () => {
    const response = await updatajson(items, `${path}/${fliename}`);
    console.log(response);
  }, [items, updatajson]);

  return (
    <removecontext.Provider
      value={{ removeElement, mapodifElement, addcomponent, imagepath }}
    >
      <Editview>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={extractIds(items)}
            strategy={verticalListSortingStrategy}
          >
            {items.map((item, index) => {
              return selectComponent(
                item.component,
                item?.id,
                item.data ? item.data : item.childrens
              );
            })}
            <div className="flex justify-center items-center gap-8 w-full mt-4">
              <button onClick={() => addcomponent(null, "Flexbox")}>
                添加弹性盒子
              </button>
              <button onClick={() => addcomponent(null, "Gridbox")}>
                添加网格盒子
              </button>
              <button onClick={() => addcomponent(null, "Pageablecontainer")}>
                添加可翻页盒子
              </button>
              <button onClick={() => addcomponent(null, "Tag")}>添加Tag</button>
              <button onClick={() => addcomponent(null, "Software")}>
                添加软件卡片
              </button>
              <button onClick={() => addcomponent(null, "Partingline")}>
                添加分割线
              </button>
            </div>
          </SortableContext>
          <DragOverlay>
            <div className="flex items-center justify-items-center w-full h-full bg-gray-500 opacity-50">
              <div className="mx-auto text-center text-white font-bold">
                Dragging
              </div>
            </div>
          </DragOverlay>
        </DndContext>
      </Editview>
    </removecontext.Provider>
  );

  function handleDragEnd(event) {
    const { active, over } = event;
    console.log(active.id, over.id);

    // 检查拖动的元素是否与目标位置不同
    if (active.id !== over.id) {
      // 处理不同类型的拖拽
      setItems((items) => {
        // 查找 activeIndex
        const activeResult = findIndexInTree(items, active.id);
        const overResult = findIndexInTree(items, over.id);
        console.log(activeResult, overResult); // 调试打印
        // 检查结果
        if (!activeResult || !overResult) {
          console.error("Active or Over index not found");
          return items; // 返回原数组
        }

        // 计算真实索引
        const activeIndex = activeResult.isChild
          ? [activeResult.index, activeResult.childIndex]
          : activeResult.index;
        const overIndex = overResult.isChild
          ? [overResult.index, overResult.childIndex]
          : overResult.index;

        console.log(`Active Index: ${activeIndex}, Over Index: ${overIndex}`); // 调试打印
        if (typeof activeIndex === "object" && typeof overIndex === "object") {
          return moveElement(items, activeIndex, overIndex);
        } else if (
          typeof activeIndex === "number" &&
          typeof overIndex === "number"
        ) {
          return arrayMove(items, activeIndex, overIndex);
        } else {
          return items;
        }
      });
    }
  }
}

function moveElement(array, fromIndex, toIndex) {
  // 检查数组a的长度和索引的有效性

  // 检查fromIndex和toIndex是否指向有效的childrens数组
  if (
    !array[fromIndex[0]].hasOwnProperty("childrens") ||
    fromIndex[1] >= array[fromIndex[0]].childrens.length ||
    !array[toIndex[0]].hasOwnProperty("childrens") ||
    toIndex[1] >= array[toIndex[0]].childrens.length
  ) {
    console.error(
      "Invalid input: the indices do not point to valid childrens arrays"
    );
    return;
  }

  const newArray = JSON.parse(JSON.stringify(array));

  const elementToMove = newArray[fromIndex[0]].childrens[fromIndex[1]];
  console.log(elementToMove); // 调试打印
  // 从源数组中移除元素
  newArray[fromIndex[0]].childrens.splice(fromIndex[1], 1);
  console.log("Before move:", newArray); // 调试打印
  // 将元素插入到目标数组的指定位置
  newArray[toIndex[0]].childrens.splice(toIndex[1], 0, elementToMove);
  console.log("After move:", newArray); // 调试打印
  console.log(newArray); // 调试打印
  return [...newArray]; // 返回新数组
}
function findIndexInTree(nodes, id) {
  for (let i = 0; i < nodes.length; i++) {
    // 检查当前节点
    if (nodes[i].id === id) {
      return { index: i, isChild: false }; // 在当前级别找到元素
    }
    // 如果当前节点有子节点，继续查找
    if (nodes[i].childrens && nodes[i].childrens.length > 0) {
      const childResult = findIndexInTree(nodes[i].childrens, id);
      if (childResult) {
        return {
          index: i,
          childIndex: childResult.index,
          isChild: true,
        }; // 从子级找到了元素
      }
    }
  }
  return null; // 如果没有找到
}
