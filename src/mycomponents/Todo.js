import React from "react";

export const Todo = ({ todo, onDelete }) => {
  return (
    <div>
      <div className="  h-full  w-full   m-5 md:mx-32 ">
        <div className=" flex space-x-3 align-middle">
        <p className="text-xl font-bold ">{todo.title}</p>
        {todo.length-1===0? <p> </p>
        :
          <button onClick={()=>{onDelete(todo)}} className="group relative h-10 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
            <div className="absolute inset-0 w-3 bg-red-700 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black group-hover:text-white">
              Delete
            </span>
          </button>
          }
        </div>
       
      </div>
    </div>
  );
};
