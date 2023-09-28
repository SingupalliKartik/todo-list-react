import { prototype } from "postcss/lib/previous-map";
import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  const [title, setTitle] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (title) {
      props.addTodo(title);
      setTitle('');
    }
  };

  return (
    <div>
      <nav className="flex justify-between bg-gray-900 text-white w-screen">
        <div className="px-5 xl:px-12 py-6 flex w-full items-center">
          <Link className="text-3xl font-bold font-heading" to="/">
            {props.title}
          </Link>
          <div className="mx-auto">
            {props.searchbox == true ? (
              <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li>
                  <Link className="hover:text-gray-200" to="#">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-200" to="#">
                    Catagory
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-200" to="#">
                    Collections
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-200" to="#">
                    Contact Us
                  </Link>
                </li>
              </ul>
            ) : (
              <form className="w-96" onSubmit={submit}>
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Enter Todo
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      width="25px"
                      height="25px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M20 10V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V10M20 10V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V10M20 10H4M8 3V7M16 3V7"
                          stroke="#ffffff"
                          strokeWidth="2"
                          strokeLinecap="round"
                        ></path>{" "}
                        <rect
                          x="6"
                          y="12"
                          width="3"
                          height="3"
                          rx="0.5"
                          fill="#ffffff"
                        ></rect>{" "}
                        <rect
                          x="10.5"
                          y="12"
                          width="3"
                          height="3"
                          rx="0.5"
                          fill="#ffffff"
                        ></rect>{" "}
                        <rect
                          x="15"
                          y="12"
                          width="3"
                          height="3"
                          rx="0.5"
                          fill="#ffffff"
                        ></rect>{" "}
                      </g>
                    </svg>
                  </div>
                  <input
                    value={title}
                    type="search"
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    id="default-search"
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Todo "
                    required
                  />
                  <button
                    type="submit"
                    className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add
                  </button>
                </div>
              </form>
            )}
          </div>
          <div className="hidden xl:flex  space-x-5 items-center">
            <Link className="hover:text-gray-200" to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </Link>

            <Link className="flex items-center hover:text-gray-200" to="/about">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="flex absolute -mt-5 ml-4">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
              </span>
            </Link>
          </div>
        </div>

        <Link className="xl:hidden flex mr-6 items-center" to="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 hover:text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="flex absolute -mt-5 ml-4">
            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
          </span>
        </Link>
        <Link className="navbar-burger self-center mr-12 xl:hidden" to="/about">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 hover:text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </Link>
      </nav>
    </div>
  );
}

Header.defaultProps = {
  title: "Your Title Here",
  searchBar: true,
};
Header.PropsType = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired,
};
