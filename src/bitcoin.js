import React, { useEffect } from "react";
import "./bitcoin.css";
import axios from "axios";

export default function Bitcoin() {
  const [marketData, setMarketData] = React.useState({});
  const [selectedData, setSelectedData] = React.useState("USD");

  useEffect(() => {
    axios
      .get(`https://api.coindesk.com/v1/bpi/currentprice.json`)
      .then((res) => {
        setMarketData(res.data.bpi);
      });
  }, [marketData, selectedData]);

  function handleChange(e) {
    const { value } = e.target;
    setSelectedData(value);
  }

  return (
    <div className="wrapper">
      <h1
        style={{
          backgroundColor: "lightblue",
          padding: "10px",
          textAlign: "center",
          fontFamily: "Arial",
        }}
      >
        Bitcoin Price Trading
      </h1>
      <div className="buttons" style={{ textAlign: "center" }}>
        {/* <button className="refresh" onClick={refreshPage}>
          <span>Refresh</span>
        </button> */}
        <select
          className="dropdown"
          onChange={handleChange}
          style={{ textAlign: "center" }}
        >
          {Object.keys(marketData).map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="card">
        <h5 className="card-body">
          Name:{" "}
          {Object.keys(marketData).length > 0
            ? marketData[selectedData].description
            : "Nodata"}
        </h5>
        <h5 className="card-body">
          Code:{" "}
          {Object.keys(marketData).length > 0
            ? marketData[selectedData].code
            : "Nodata"}
        </h5>
        <h5 className="card-body">
          Symbol:{" "}
          {Object.keys(marketData).length > 0
            ? marketData[selectedData].symbol
            : "Nodata"}
        </h5>
        <h5 className="card-body">
          Rate:{" "}
          {Object.keys(marketData).length > 0
            ? marketData[selectedData].rate
            : "Nodata"}
        </h5>
        <h5 className="card-body">
          Rate Float:{" "}
          {Object.keys(marketData).length > 0
            ? marketData[selectedData].rate_float
            : "Nodata"}
        </h5>
      </div>
    </div>
  );
}
