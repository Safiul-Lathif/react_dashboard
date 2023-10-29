import React from "react";
import "./sideBar.css";
import {
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaUserAlt />,
    },

    {
      path: "/productManagement",
      name: "Product Management",
      icon: <FaRegChartBar />,
    },
    {
      path: "/orderManagement",
      name: "Order Management",
      icon: <FaShoppingBag />,
    },
    {
      path: "/crm",
      name: "CRM",
      icon: <FaCommentAlt />,
    },
    {
      path: "/settings",
      name: "Settings",
      icon: <FaThList />,
    },
  ];
  return (
    <div className="container">
      <div
        style={{
          width: "340px",
          backgroundColor: "rgba(194, 0, 89, 0.2)",
        }}
      >
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link">
            <div className="icon">{item.icon}</div>
            <div style={{ display: "block" }} className="link_text">
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
