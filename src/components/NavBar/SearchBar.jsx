import React from "react";

const SearchBar = () => {
  return (
    <div className="lg:block mr-auto ml-40 hidden relative max-w-xs">
      <p className="pl-3 items-center flex absolute inset-y-0 left-0 pointer-events-none">
        <span className="justify-center items-center flex">
          <span className="justify-center items-center flex">
            <span className="items-center justify-center flex">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                viewbox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0
      11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
          </span>
        </span>
      </p>
      <input
        placeholder="Type to search"
        type="search"
        className="border border-gray-300 focus:ring-indigo-600
focus:border-indigo-600 sm:text-sm w-full rounded-full pt-2 pb-2 pl-10 px-3 py-2"
      />
    </div>
  );
};
export default SearchBar;
