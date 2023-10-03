import React, { useState } from "react";
import { useEffect } from "react";

export const Todo = ({ todo, onDelete, update}) => {
  const [style, setStyle] = useState("");

  const changeStyle = () => {
    setStyle("line-through");
  };




const onUpdate =()=>{
  let t=prompt("Change the task").toString();
  update(todo,t)
  
}
// const [title, settitle] = useState(todo.title);

// useEffect(() => {
//   todo=[{sno: 13, title : t},...todo ]
//       localStorage.setItem("List", JSON.stringify(todo));
//   }, [title]);
//   let t ;

// const changetitle = ()=>{
//  t=prompt("Change the task");
// settitle(t);}


  return (
    
      <div className="  h-full  w-fit m-5   bg-blue-600 p-5  bg-opacity-20  rounded-lg">
        <div className=" flex space-x-3 align-middle ">
          <div className="text-2xl font-bold w-32 ">
            <span className={style} >
              {todo.title}</span>
          </div>
          {todo.length - 1 === 0 ? (
            <p> </p>
          ) : (
            <>
              <div className="flex flex-col">
                <div className="flex my-4 space-x-3">
                  <button
                    onClick={() => {
                     onUpdate()
                    }}
                    className="group relative h-10  w-32 overflow-hidden rounded-lg bg-white text-lg shadow"
                  >
                    <div className="absolute inset-0 w-3 bg-yellow-600 transition-all duration-[450ms] ease-out group-hover:w-full"></div>
                    <span className="relative text-black group-hover:text-white">
                      Update
                    </span>
                  </button>
                  <button
                    
                    onClick={() => {
                      setStyle("");
                      onDelete(todo);
                    }}
                    className="group relative h-10  w-32 overflow-hidden rounded-lg bg-white text-lg shadow"
                  >
                    <div className="absolute inset-0 w-3 bg-red-600 transition-all duration-[450ms] ease-out group-hover:w-full"></div>
                    <span className="relative text-black group-hover:text-white">
                      Delete
                    </span>
                  </button>
                </div>
                <button
                  onClick={() => {
                    changeStyle();
                  }}
                  className="group relative h-10   w-70 overflow-hidden rounded-lg bg-white text-lg shadow"
                >
                  <div className="absolute inset-0 w-3 bg-green-600 transition-all duration-[650ms] ease-out group-hover:w-full"></div>
                  <span className="relative text-black group-hover:text-white">
                    Done
                  </span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    
  );
};
