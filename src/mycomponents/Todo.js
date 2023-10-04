export const Todo = ({ todo, onDelete, update, done, notdone }) => {
  let style = "";
  let kuch = false;
  let text = "Done";
  if (todo.done) {
    style = "line-through";
    kuch = true;
    text = "Not-Done";
  } else {
    style = "";
    kuch = false;
    text = "Done";
  }

  const tocheck = (todo) => {
    if (todo.done) {
      notdone(todo);
    } else {
      done(todo);
    }
  };
  return (
    <div className="  h-full  w-fit m-5   bg-blue-600 p-5  bg-opacity-20  rounded-lg flex flex-col  justify-start space-x-3 ">
      <div className="flex  flex-row-reverse justify-end">
        <div className="text-2xl font-bold w-32 ">
          <span className={style}>{todo.title}</span>
        </div>
        <div className="inline-flex ">
          <label
            className="relative flex cursor-pointer items-center rounded-full p-3"
            for="checkbox"
            data-ripple-dark="true"
          >
            <input
              type="checkbox"
              className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-500 checked:bg-green-500 checked:before:bg-green-500 hover:before:opacity-10"
              id="checkbox"
              checked={kuch}
              onClick={() => {
                tocheck(todo);
              }}
            />
            <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="1"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </label>
        </div>
      </div>
      <div>
        {todo.length - 1 === 0 ? (
          <p> </p>
        ) : (
          <>
            <div className="flex my-4 space-x-3">
              {" "}
              <button
                onClick={() => {
                  tocheck(todo);
                }}
                className="group relative h-10  w-28 overflow-hidden rounded-lg bg-white text-lg shadow"
              >
                <div className="absolute inset-0 w-3 bg-green-600 transition-all duration-[450ms] ease-out group-hover:w-full"></div>
                <span className="relative text-black group-hover:text-white">
                  {text}
                </span>
              </button>
              <button
                onClick={() => {
                  let t = prompt("Change the task");
                  console.log(t)
                  if (t ==null || t.length-1<0) {
                    alert("Text can't be empty");
                  } 
                  else if(t!==null) {
                    update(todo, t.toString());
                  }
                  
                }}
                className="group relative h-10  w-28 overflow-hidden rounded-lg bg-white text-lg shadow"
              >
                <div className="absolute inset-0 w-3 bg-yellow-600 transition-all duration-[450ms] ease-out group-hover:w-full"></div>
                <span className="relative text-black group-hover:text-white">
                  Update
                </span>
              </button>
              <button
                onClick={() => {
                  onDelete(todo);
                }}
                className="group relative h-10  w-28 overflow-hidden rounded-lg bg-white text-lg shadow"
              >
                <div className="absolute inset-0 w-3 bg-red-600 transition-all duration-[450ms] ease-out group-hover:w-full"></div>
                <span className="relative text-black group-hover:text-white">
                  Delete
                </span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
