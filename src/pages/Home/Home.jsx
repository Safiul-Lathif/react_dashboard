import React from "react";
import "./Home.scss";
import SalesCard from "../../components/SalesCard";
import UserCard from "../../components/UserCard";
import Charts from "../Chart/Chart";
import Navbar from "../../components/NavBar/NavBar";
import Sidebar from "../../components/SideBar/SideBar";
import LatestTransactions from "../LatestProducts/latestProducts";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="pl-10">
          <div className="flex">
            <div className="font-semibold text-2xl pb-5 pt-5">Dashboard</div>
          </div>
          <div className="flex items-center justify-around">
            <SalesCard
              bgColor={"linear-gradient(#D74986,#B1529E)"}
              title={"Total Sales"}
              count={"$56,22312.5"}
              percent={"75"}
            />
            <SalesCard
              bgColor={"linear-gradient(#6D51B5,#9A7FC6)"}
              title={"No.of B2B Users"}
              count={"15,00,000+"}
              percent={"26"}
            />
            <SalesCard
              bgColor={"linear-gradient(#4BB3E7,#6290CB)"}
              title={"Total Orders"}
              count={"1,042,665"}
              percent={"15"}
            />
          </div>
          <div className="pt-10 flex items-stretch justify-center">
            <div className="pr-10">
              <UserCard
                color={`bg-gradient-to-br from-orange-500 to-orange-300`}
                title={"Total Users"}
                count={"5CR+ Users"}
                sales={"05"}
              />
              <UserCard
                color={`bg-gradient-to-br from-green-500 to-green-300`}
                title={"Total Sellers"}
                count={"10 Millions+"}
                sales={"11"}
              />
            </div>
            <Charts />
          </div>
          <div className="font-semibold text-2xl pb-5 pt-5">
            Latest Products
          </div>
          <div className="flex items-stretch pb-10">
            <LatestTransactions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
