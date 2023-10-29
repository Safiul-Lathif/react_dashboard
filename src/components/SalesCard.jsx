import React from "react";
import Chart from "../pages/Home/data/line.png";
import Arrow from "../pages/Graph/arrow-small-down 5.svg";
const SalesCard = ({ bgColor, title, count, percent }) => {
  return (
    <div>
      <div
        className="widget pe-6"
        style={{
          width: "340px",
          height: "150px",
          backgroundImage: bgColor,
        }}
      >
        <div className="left pe-6">
          <span className="title">{title}</span> <br />
          <span className="counter">{count}</span>
          <span className="dots1">...</span>
          <img src={Arrow} alt="arrow" className="topArrow1"></img>
          <span className="right1"> {percent}% last week </span>
          <div>
            <img src={Chart} className="charts1" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesCard;
