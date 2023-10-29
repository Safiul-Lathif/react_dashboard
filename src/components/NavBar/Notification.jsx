import React from 'react'

const Nitification = () => {
  return (
    <div className="relative">
    <p className="pt-1 pr-1 pb-1 pl-1 bg-white text-gray-700 rounded-full transition-all duration-200
  hover:text-gray-900 focus:outline-none hover:bg-gray-100">
      <span className="justify-center items-center flex">
        <span className="justify-center items-center flex">
          <span className="items-center justify-center flex">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24"
              stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4
          0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6
          0H9"/></svg>
          </span>
        </span>
      </span>
    </p>
    <p className="px-1.5 py-0.5 font-semibold text-xs items-center bg-indigo-600 text-white rounded-full inline-flex
  absolute -top-px -right-1">2</p>
  </div>  )
}

export default Nitification