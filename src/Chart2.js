import "./index.css";
import React, { useRef, useEffect } from "react";
import Chart from "chart.js";

const chartStyle = {
  width: "30vw",
  height: "30vh",
};

const colors = {
  safari: "#25AEEE",
  chrome: "#FECD52",
  firefox: "#FD344B",
  edge: "#57D269",
};

const dataBrowser = {
  labels: ["Safari", "Chrome", "Firefox", "Edge"],
  datasets: [
    {
      label: "Browser's usage share 2019",
      data: [16.74, 64.26, 4.47, 2.11],
      backgroundColor: [
        colors.safari,
        colors.chrome,
        colors.firefox,
        colors.edge,
      ],
      borderWidth: 3,
    },
  ],
};

const beginAtZero = {
  scales: {
    yAxes: [
      {
        ticks: { beginAtZero: true },
      },
    ],
  },
};

function Chart2() {
  const chart2Ref = useRef();
  const [type, setType] = React.useState("bar");

  const handleChange = (e) => {
    setType(e.target.value);
  };

  useEffect(() => {
    const chartInstance = new Chart(chart2Ref.current, {
      type: type, //or line, doughnut, etc.
      data: dataBrowser,
      options: beginAtZero,
    });
    return () => chartInstance.destroy();
  }, [type]);
  return (
    <>
      <select id="chart-type" onChange={handleChange}>
        <option value="bar">Bar</option>
        <option value="line">line</option>
        <option value="pie">Pie</option>
        <option value="doughnut">Doughnut</option>
      </select>
      <canvas style={chartStyle} ref={chart2Ref}></canvas>
    </>
  );
}

export default Chart2;
