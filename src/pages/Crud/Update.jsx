import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const [values, setValues] = useState({
    pname: "",
    offer: "",
    price: "",
    sold: "",
    sales: "",
  });

  //Navigation
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/users/" + id)
      .then((res) => {
        setValues(res.data);
      })
      .catch((err) => console.log(err));
  }, [ ]);

  //Update process
  const handleUpdate = (event) => {
    event.preventDefault();
    axios
      .put("http://localhost:3000/users/" + id, values)
      .then((res) => {
        console.log(res);
        navigate("/crudhome");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-indigo-600">
      <div className="w-96 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1 className="text-center font-bold text-2xl">Update Product:</h1>
        <form onSubmit={handleUpdate}>
          {/*Product name*/}
          <div className="mb-2">
            <label
              htmlFor="pname"
              className="block text-gray-700 text-sm font-bold mb-2 pt-10"
            >
              Product name:
            </label>

            <input
              type="text"
              name="pname"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter the product name"
              value={values.pname}
              onChange={(e) => setValues({ ...values, pname: e.target.value })}
            />
          </div>

          {/*Offer*/}
          <div className="mb-2">
            <label
              htmlFor="offer"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Offer:
            </label>

            <input
              type="text"
              name="offer"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter the Offer"
              value={values.offer}
              onChange={(e) => setValues({ ...values, offer: e.target.value })}
            />
          </div>

          {/*Price*/}
          <div className="mb-2">
            <label
              htmlFor="price"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Product name:
            </label>

            <input
              type="text"
              name="pricw"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter the price"
              value={values.price}
              onChange={(e) => setValues({ ...values, price: e.target.value })}
            />
          </div>

          {/*Sold*/}
          <div className="mb-2">
            <label
              htmlFor="sold"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Sold:
            </label>

            <input
              type="text"
              name="sold"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter the Sold"
              value={values.sold}
              onChange={(e) => setValues({ ...values, sold: e.target.value })}
            />
          </div>

          {/*Sales*/}
          <div className="mb-2">
            <label
              htmlFor="sales"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Sales:
            </label>

            <input
              type="text"
              name="sales"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter the Sales"
              value={values.sales}
              onChange={(e) => setValues({ ...values, sales: e.target.value })}
            />
          </div>

          {/*Buttons*/}
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded me-2">
            Update
          </button>
          <Link
            to="/crudhome"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded me-2"
          >
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Update;
