import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          data: [1, 4, 7, 5, 2, 9, 4, 1],
        },
      ],
      options: {
        chart: {
          height: 150,
          type: "line",
        },
        stroke: {
          width: 3,
          curve: "smooth",
        },
        xaxis: {
          type: "week",
          categories: ["S", "M", "T", "W", "T", "F", "S"],
          tickAmount: 10,
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "light",
            gradientToColors: ["black"],
            shadeIntensity: 1,
            type: "horizontal",
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 100, 100],
          },
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height={140}
        />
      </div>
    );
  }
}
export default ApexChart;
