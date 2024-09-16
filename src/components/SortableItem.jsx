import React,{useContext} from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useRemovecontext } from "./Editcenter";

export function SortableItem({ id, children }) {
  const {removeElement} = useRemovecontext()
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: id,
      
    });

  const style = {

  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} key={id}>
      <button onClick={() => removeElement(id)}>X</button>
      {children}
    </div>
  );
}
