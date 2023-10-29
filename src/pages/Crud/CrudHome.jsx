import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Crudhome() {
  const [data, setData] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  //Delete buuton action
  const handleDelete = (id) => {
    const confirm = window.confirm("Would you like to delete");
    if (confirm) {
      axios
        .delete("http://localhost:3000/users/" + id)
        .then((res) => {
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="list pt-14">
      <h1 className="text text-center font-bold text-2xl">List of products</h1>
      <div className="w-75 rounded bg-white border shadow p-4">
        <div className="d-flex justify-end ">
          {/*Add user button*/}
          <Link
            to="/create"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2  px-4 rounded"
          >
            {" "}
            Add +
          </Link>
        </div>
        <br></br>

        <table className="min-w-full bg-white">
          {/*Table heading name*/}
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/6 text-left py-3 px-4 uppercase font-semibold text-sm">
                Product name
              </th>
              <th className="w-1/6 text-left py-3 px-4 uppercase font-semibold text-sm">
                offer
              </th>
              <th className="w-1/6 text-left py-3 px-4 uppercase font-semibold text-sm">
                Price
              </th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Sold
              </th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Sales
              </th>
              <th className="w-1/4 text-left py-3 px-4 uppercase font-semibold text-sm">
                Action
              </th>
            </tr>
          </thead>

          {/*Table data*/}
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td className='"w-1/3 text-left py-3 px-4'>{d.pname}</td>
                <td className='"w-1/3 text-left py-3 px-4'>{d.offer}</td>
                <td className='"w-1/3 text-left py-3 px-4'>{d.price}</td>
                <td className='"w-1/3 text-left py-3 px-4'>{d.sold}</td>
                <td className='"w-1/3 text-left py-3 px-4'>{d.sales}</td>
                <td>
                  <Link
                    to={`/read/${d.id}`}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded me-1"
                  >
                    Read
                  </Link>
                  <Link
                    to={`/update/${d.id}`}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded me-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={(e) => handleDelete(d.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded me-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Crudhome;
