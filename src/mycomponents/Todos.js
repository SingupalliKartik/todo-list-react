import React from "react";
import { Todo } from "./Todo";

export const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
  };
  return (
    <div className=" bg-blue-500 bg-opacity-25  " style={myStyle}>
      <h3 className="text-3xl font-bold text-center">Todos List</h3>
      <div className=" py-4">
        {props.todos.length === 0 ? (
          <p className=" text-xl mx-9">The list is empty add the item</p>
        ) : (
          props.todos.map((todo) => {
            return (
              <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />
            );
          })
        )}
      </div>
    </div>
  );
};
