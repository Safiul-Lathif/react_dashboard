import React from "react";
import Navbar from "../../components/NavBar/NavBar";
import Sidebar from "../../components/SideBar/SideBar";
import Users from "./Users";
import { Tooltip } from "@mui/material";
const Crm = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <div className="font-bold text-2xl pb-5 pt-5 pl-5 ">
            Customer Relationship Management CRM
          </div>
          <div className="flex items-center justify-right mr-10 mt-5">
            <Tooltip title="Normal Users">
              <button
                type="button"
                className="pl-10 pr-10 pt-3 pb-3 text-black font-bold text-lg ml-6 border-2 rounded-md border-blue-950 hover:bg-blue-950 focus:bg-blue-950 focus:text-white hover:text-white active:bg-blue-900  "
                >
                {" "}
                Normal Users{" "}
              </button>
            </Tooltip>
            <Tooltip title="B2B Users">
              <button
                type="button"
                className="pl-10 pr-10 pt-3 pb-3 text-black font-bold text-lg ml-6 border-2 rounded-md border-blue-950 hover:bg-blue-950 focus:bg-blue-950 focus:text-white hover:text-white active:bg-blue-900  "
              >
                B2B Users
              </button>
            </Tooltip>
          </div>
          <div className=" flex items-center j py-7 px-6 " >
            <div>
            <input
              name="search-bar"
              placeholder="Search Products,Products ID "
              type="search"
              className="border border-gray-300 focus:ring-indigo-600
              focus:border-indigo-600 sm:text-sm rounded-xl pt-2 pb-2 pl-3 py-2 w-64  "
            />
            <Tooltip title="search">
              <button
                type="button"
                className=" text-white m-5 border-2 rounded-full bg-blue-950 w-32 h-11 "
              >
                Search
              </button>
            </Tooltip>
            </div>
          </div>
          <div className="">
            <div className="font-semibold text-2xl justify-start ml-7" >List of Users</div>
            <Users />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crm;
