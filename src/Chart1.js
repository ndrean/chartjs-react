import "./index.css";
import React, { useRef, useEffect } from "react";
import Chart from "chart.js";

const chartStyle = {
  width: "30vw",
  height: "30vh",
};

function Chart1() {
  const chartRef = useRef();

  useEffect(() => {
    const chart = new Chart(chartRef.current, {
      type: "pie",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "Red",
              "Blue",
              "Yellow",
              "Green",
              "Purple",
              "Orange",
            ],
            borderColor: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            borderWidth: 1,
          },
        ],
      },
    });
    return () => chart.destroy();
  }, []);
  return <canvas style={chartStyle} ref={chartRef}></canvas>;
}

export default Chart1;
