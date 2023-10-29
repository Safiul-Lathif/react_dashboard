import React from "react";
import logo from "../../data/logo.png";
function Navbar() {
  return (
    <div className=" bg-slate-900 h-16 ">
      <div className=" p-3 flex justify-between">
        <img
          src={logo}
          alt="logo"
          className="block btn- h-10 aspect-square box-content"
        />
        <input
          name="search-bar"
          placeholder="Type to search"
          type="search"
          className="border border-gray-300 focus:ring-indigo-600
focus:border-indigo-600 sm:text-sm rounded-full pt-2 pb-2 pl-10 px-3 py-2 w-1/6"
        />
        <div className="justify-center items-center flex relative pr-10">
          <img
            src="https://static01.nyt.com/images/2019/11/08/world/08quebec/08quebec-superJumbo.jpg"
            className="object-cover btn- h-9 w-9 rounded-full mr-2 bg-gray-300"
            alt=""
          />
          <p className="font-semibold text-sm text-white">Marrie Currie</p>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
