import React from "react";
import { Todo } from "./Todo";

export const Todos = ({todos, onDelete}) => {
  let myStyle = {
    minHeight: "70vh",
  };
  return (
    <div className=" bg-blue-500 bg-opacity-25  " style={myStyle}>
      <h3 className="text-3xl font-bold text-center">Todos List</h3>
      <div className=" py-4">
        {todos.length === 0 ? (
          <p className=" text-xl mx-9">The list is empty add the item</p>
        ) : (
          todos.map((todo,index) => {
            return (
              <Todo todo={todo} key={index+1} onDelete={onDelete} />
            );
          })
        )}
      </div>
    </div>
  );
};
