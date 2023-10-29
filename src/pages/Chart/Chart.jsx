import Chart from "react-apexcharts";
import React, { useState } from "react";
const Charts = () => {
  const [state] = useState({
    options: {
      stroke: {
        width: 4,
        curve: "smooth",
      },

      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    },
    series: [
      {
        name: "Revenue",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 105, 30, 48, 4],
      },
      {
        name: "Orders",
        data: [30, 54, 31, 50, 40, 6, 71, 9, 100, 30, 40, 3],
      },
    ],
  });
  return (
    <div className=" bg-slate-100 rounded-3xl p-2">
      <Chart
        options={state.options}
        series={state.series}
        type="line"
        width={800}
        height={520}
      />
    </div>
  );
};

export default Charts;
