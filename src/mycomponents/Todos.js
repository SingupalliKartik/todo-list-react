import React from "react";
import { Todo } from "./Todo";

export const Todos = ({todos, onDelete, update, done, notdone}) => {
  let myStyle = {
    minHeight: "70vh",
  };
  return (
    <div className=" bg-blue-500 bg-opacity-25  " style={myStyle}>
      <h3 className="text-5xl  py-4 font-bold text-center  font-Bungee">Todos List</h3>
      <div className="  flex justify-center flex-wrap">
        {todos.length === 0 ? (
          <p className=" text-xl md:mx-9">The list is empty add the item</p>
        ) : 
        (
          todos.map((todo,index) => {
            return (  
              <Todo todo={todo} key={index+1} onDelete={onDelete} update = {update} done ={done} notdone={notdone}/>
            );
           
          })
        )}
      </div>
    </div>
  );
};
