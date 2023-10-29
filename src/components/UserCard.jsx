import React from "react";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ApexChart from "./ApexChart";
const UserCard = ({ title, count, sales, color }) => {
  return (
    <div className="p-2">
      <div
        className={color}
        style={{
          width: "240px",
          height: "270px",
          borderRadius: "10px",
        }}
      >
        <h1 className=" text-white text-xl font-normal pl-5 p-3 ">
          <i>
            <GroupOutlinedIcon />
          </i>
          {title}
        </h1>
        <h1 className="text-white text-2xl font-bold pl-5">{count}</h1>
        <h1 className="pl-5 pt-3 pb-4 text-white text-sm">
          <i className="pr-2">
            <ArrowDownwardIcon sx={{ fontSize: 16 }} />
          </i>
          {sales}% Last Week
        </h1>
        <ApexChart />
      </div>
    </div>
  );
};

export default UserCard;
