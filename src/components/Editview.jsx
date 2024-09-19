"use client";

import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
} from "react";
import { useRemovecontext } from "./Editcenter";

const EditviewcreateContext = createContext();
export const useEditviewcreateContext = () => {
  return useContext(EditviewcreateContext);
};

export default function Editview({ children }) {
  const [component, setComponent] = useState(null);

  const [editProps, setviewEditProps] = useState({});
  const [isopen, setIsOpen] = useState(false);
  const [interProps, setinterProps] = useState({});
  const [id, setId] = useState(null);
  const [formData, setFormdata] = useState(new FormData());
  const [addImage, setAddImage] = useState(() => async () => {
    return;
  });

  const { mapodifElement ,imagepath} = useRemovecontext();

  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  const toggleOpen = () => {
    setIsOpen(!isopen);
  };
  const handleInputChange = (key, value) => {
    const newEditProps = { ...interProps, [key]: value };
    setinterProps(newEditProps);
  };
  const handleFileChange = (key, file) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newInterProps = { ...interProps, [key]: reader.result };
        setinterProps(newInterProps);
      };

      reader.readAsDataURL(file);
      const formdata = new FormData();
      formdata.set("image", file);
      setFormdata(formdata);
    }
  };

  const setdata = useCallback(async () => {
    console.log("formdata", formData.get("image"));
    console.log("editProps", editProps.image);
    const response = await addImage(formData, "image",editProps.image,imagepath,id);
    alert(JSON.stringify(response));
    const newprops = { ...interProps, image: response.Path };
    mapodifElement(id, newprops);
    toggleOpen();
    console.log(interProps);
  }, [interProps, formData]);
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      const loadTest = async () => {
        const { addImage } = await import("../api/addimage"); // 动态导入 Server Action
        setAddImage(() => addImage);
      };
      loadTest();
    }
  }, []);
  useEffect(() => {
    if (isopen) {
      setinterProps(editProps);
      console.log(Object.entries(interProps));
    }
  }, [isopen]);

  return (
    <>
      <div
        className={`${
          isopen
            ? "fixed top-0 left-0 flex items-center justify-center size-full z-50 bg-black/15"
            : "absolute scale-0"
        }`}
        onClick={toggleOpen}
      >
        <div
          className={` flex max-[450px]:flex-col ${
            isopen
              ? "scale-100 size-3/4 max-[450px]:size-full relative bg-white dark:bg-slate-900 p-5 rounded-lg"
              : "scale-0"
          }`}
          onClick={stopPropagation}
        >
          <div className="relative flex  w-2/5 h-full max-[450px]:w-full max-[450px]:h-auto">
            <div className="my-auto mx-auto w-full">
              {component
                ? React.createElement(component, { ...interProps })
                : null}
            </div>
          </div>
          <div className="ml-5 max-[450px]:ml-0 relative w-3/5 overflow-x-hidden overflow-y-auto ">
            {
              // TODO: 列出组件的参数，并且可以修改
              Object.entries(interProps).map(([key, value], index) => {
                return (
                  <div key={index} className="mb-4 ">
                    <label className="block text-sm  mb-2 ">{key}</label>
                    {key === "image" ? (
                      <>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) =>
                            handleFileChange(key, e.target.files[0])
                          }
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {value && (
                          <p className="mt-2 text-gray-700 truncate ">
                            当前图片:{" "}
                            {typeof value === "string" ? value : value.name}
                          </p>
                        )}
                      </>
                    ) : key === "keyid" ? (
                      <p>{value}</p>
                    ) : (
                      <input
                        type="text"
                        value={value}
                        onChange={(e) => handleInputChange(key, e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    )}
                  </div>
                );
              })
            }
            <div className=" flex justify-between w-full right-0 bottom-0">
              <button
                className=" w-3/12 h-10 bg-violet-700/50 rounded-md"
                onClick={setdata}
              >
                确定
              </button>
              <button
                className="h-10 w-3/12 bg-violet-700/50 rounded-md"
                onClick={toggleOpen}
              >
                取消
              </button>
            </div>
          </div>
        </div>
      </div>
      <EditviewcreateContext.Provider
        value={{ setComponent, setId, setviewEditProps, setIsOpen }}
      >
        {children}
      </EditviewcreateContext.Provider>
    </>
  );
}
