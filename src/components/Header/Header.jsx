import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="shadow  z-50 top-0">
      <nav className="border-gray-900 ">
        <div className="flex flex-wrap flex-col md:flex-row  items-center justify-between">
          <Link
            to="/"
            className="flex flex-col md:flex-row w-full  shadow-md overflow-hidden md:max-w-4xl"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/chatbot2306125.appspot.com/o/arrow.png?alt=media&token=6dd31316-2e99-46b9-aaa3-993c72fed801"
              className=" absolute h-14 w-14 ml-3 md:border-0 rounded-full md:rounded-none md:rounded-l-full"
              alt="Logo"
            />
          

       
            <div className="ml-16 font-sans text-3xl md:text-5xl font-bold flex flex-wrap justify-center items-center ">
              IdeationLab
            </div>
            <div className="md:mt-9 md:ml-4 text-sm font-bold flex flex-wrap justify-center items-center ">
              Where Ideas Meets Reality
            </div>
          
          </Link>

          <button class="m-3 btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-indigo-100 rounded hover:bg-white group py-1.5 px-2.5">
            <span class="w-56 h-48 rounded bg-black absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span class="relative w-full text-left transition-colors duration-300 ease-in-out group-hover:text-white">
                ABOUT US
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}
