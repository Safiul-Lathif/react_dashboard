import React from "react";
import Navbar from "../../components/NavBar/NavBar";
import Sidebar from "../../components/SideBar/SideBar";
import { List, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import Products from "./Products";
import { useEffect, useState } from "react";
import ProductService from "../../db/ProductService";
import "./dataTable.scss";
const ProductManagement = () => {
  const [data, setData] = useState([]);
  const getLowStock = () => {
    ProductService.getAllProducts().then((products) => {
      const fmtProducts = products.docs.map((row) => ({
        ...row.data(),
        id: row.id,
        price: `MYR ${row.data().price}`,
        offer: `${row.data().offer} %`,
        stock: Number(row.data().price),
        sold: "1500",
        action: "...",
        sales: "15,345",
        name: capitalizeFirstLowercaseRest(row.data().name),
      }));
      setData(fmtProducts.filter((data) => data.stock < 30));
    });
  };
  const getOutofStock = () => {
    ProductService.getAllProducts().then((products) => {
      const fmtProducts = products.docs.map((row) => ({
        ...row.data(),
        id: row.id,
        price: `MYR ${row.data().price}`,
        offer: `${row.data().offer} %`,
        stock: Number(row.data().price),
        sold: "1500",
        action: "...",
        sales: "15,345",
        name: capitalizeFirstLowercaseRest(row.data().name),
      }));
      setData(fmtProducts.filter((data) => data.stock === 0));
    });
  };

  useEffect(() => {
    ProductService.getAllProducts().then((products) => {
      const fmtProducts = products.docs.map((row) => ({
        ...row.data(),
        id: row.id,
        price: `MYR ${row.data().price}`,
        offer: `${row.data().offer} %`,
        stock: `${row.data().price}`,
        sold: "1500",
        action: "...",
        sales: "15,345",
        name: capitalizeFirstLowercaseRest(row.data().name),
      }));
      console.log(fmtProducts);
      setData(fmtProducts);
    });
  }, []);
  const capitalizeFirstLowercaseRest = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };
  const productColumns = [
    {
      field: "name",
      headerName: "Name",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.image[0]} alt="avatar" />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "stock",
      headerName: "Stock",
      renderCell: (params) => {
        return (
          <div className=" bg-green-100 py-2 px-3  font-semibold rounded-md text-green-400">
            {params.row.stock}
          </div>
        );
      },
      width: 100,
    },
    {
      field: "offer",
      headerName: "Offer",
      width: 100,
    },
    {
      field: "price",
      headerName: "Price",
      width: 100,
    },
    {
      field: "category",
      headerName: "Category",
      width: 200,
    },
    {
      field: "sold",
      headerName: "Sold",
      width: 150,
    },
    {
      field: "sales",
      headerName: "Sales",
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      renderCell: (params) => {
        return (
          <div className=" text-blue-500 font-bold text-2xl">
            {params.row.action}
          </div>
        );
      },
      width: 150,
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <div className="font-bold text-3xl pt-5 pl-5 ">
            Product Management
          </div>
          <div className="flex items-center justify-right mr-10 mt-7 ">
            <Tooltip title="Top Selling">
              <button
                type="button"
                className=" pl-10 pr-10 pt-3 pb-3 text-black font-bold text-lg ml-6 border-2  rounded-md border-blue-950 hover:bg-blue-950 focus:bg-blue-950 focus:text-white hover:text-white active:bg-blue-900  "
              >
                {" "}
                Top Selling Product{" "}
              </button>
            </Tooltip>
            <Tooltip title="Low Stock">
              <button
                type="button"
                className="pl-10 pr-10 pt-3 pb-3 text-black font-bold text-lg ml-6 border-2 rounded-md border-blue-950 hover:bg-blue-950 focus:bg-blue-950 focus:text-white hover:text-white active:bg-blue-900  "
                onClick={getLowStock}
              >
                Low Stock
              </button>
            </Tooltip>
            <Tooltip title="Out of Stock">
              <button
                type="button"
                className="pl-10 pr-10 pt-3 pb-3 text-black font-bold text-lg ml-6 border-2 rounded-md border-blue-950 hover:bg-blue-950 focus:bg-blue-950 focus:text-white hover:text-white active:bg-blue-900  "
                onClick={getOutofStock}
              >
                Out of Stock
              </button>
            </Tooltip>
          </div>
          <div className=" flex items-center justify-between py-7 px-6 ">
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
                  className=" text-white border-2 rounded-full bg-blue-950 w-32 h-11 "
                >
                  Search
                </button>
              </Tooltip>
            </div>
            <Link to="/newproduct">
              <Tooltip title="Add Products">
                <button className=" text-white  border-2 rounded-md  bg-blue-950 w-44 h-11 ">
                  Add Products
                </button>
              </Tooltip>
            </Link>
          </div>
          <div className=" font-semibold text-2xl pl-6 "></div>
          <div className="">
            <Products data={data} productColumns={productColumns} />
            {/* <ProductList /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
