import React, { useState, useEffect } from "react";
import OverviewCard from "./OverviewCard";
import "./Styles.css"

function Overview() {
  const url = "http://localhost:8000/getOverview";
  const [overviewData, setOverviewData] = useState({});
  const [array, setArray] = useState([]);

  async function getOverview() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      console.log(json.skills);
      setOverviewData(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getOverview();
    setArray(overviewData.skills);
  }, []);

  return (
    <div>
        <p className="title">OVERVIEW</p>
        <div className='titleCard'>
            <p className='title'>{overviewData.name}</p>
            <p>Phone Number: {overviewData.phone}</p>
            <p>Email: {overviewData.email}</p>
            <p className="title">Skills</p>
            <OverviewCard overviewData={overviewData}/>

        </div>
    </div>
  );
}
  

export default Overview;