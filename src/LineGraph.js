import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

function LineGraph() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);
  const buildDataChart = (data) => {
    const chartData = [];
    let lastDataPoint;
    data.cases.forEach((date) => {
      if (lastDataPoint) {
        const newDataPoint = {
          x: date,
        };
      }
    });
  };
  return <div>{/* <Line /> */}</div>;
}

export default LineGraph;
