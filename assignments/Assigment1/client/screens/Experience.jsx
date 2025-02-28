import React, { useState, useEffect } from "react";
import ExpCard from "./ExpCard";
import "./Styles.css"

function Experience() {
  const url = "http://localhost:8000/getExp";
  const [expData, setExpData] = useState([]);

  async function getExp() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      setExpData(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getExp();
  }, []);

  return (
    <div>
        <p className="title">WORK EXPERIENCE</p>  
        {expData.map((list) => {
          return(<div key={list.id}><ExpCard info={list}/></div>)
        })}
    </div>
  );
}

export default Experience;