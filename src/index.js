import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import Chart1 from "./Chart1";
import Chart2 from "./Chart2";

ReactDOM.render(
  <React.StrictMode>
    <Chart1 />
    <Chart2 />
  </React.StrictMode>,
  document.getElementById("root")
);
