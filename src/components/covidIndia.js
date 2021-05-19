import React, { useEffect, useState } from "react";
import "../components/covidIndia.css";

const CovidIndia = () => {
  
  const [data, setData] = useState([]);

  const getCoviddata = async () => {
    try {
      const res = await fetch("https://api.covid19india.org/data.json");
      const actualData = await res.json(); 
      setData(actualData.statewise[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCoviddata();
  }, []);



  return (
    <>
      <h1>Covid-19 India Case</h1>
      <ul>
        <li className="card">
          <div className="card-view">
            <h3>India</h3>
          </div>
        </li>
        <li className="card">
          <div className="card-view">
            <h3>Total Recover</h3>
            <span>{data.recovered}</span>
          </div>
        </li>
        <li className="card">
          <div className="card-view">
            <h3>Toatal active</h3>
            <span>{data.active}</span>
          </div>
        </li>
        <li className="card">
          <div className="card-view">
            <h3>Total Confirmed </h3>
            <span>{data.confirmed}</span>
          </div>
        </li>
        <li className="card">
          <div className="card-view">
            <h3>Total Deaths</h3>
            <span>{data.deaths}</span>
          </div>
        </li>
        <li className="card">
          <div className="card-view">
            <h3>Last Update Time</h3>
            <span>{data.lastupdatedtime}</span>
          </div>
        </li>
      </ul>
    </>
  );
};

export default CovidIndia;
