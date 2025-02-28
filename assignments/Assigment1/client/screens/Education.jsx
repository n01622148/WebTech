import React, { useState, useEffect } from "react";
import EduCard from "./EduCard";
import "./Styles.css"

function Education() {
  const url = "http://localhost:8000/getEdu";
  const [eduData, setEduData] = useState([]);

  async function getEdu() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      setEduData(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getEdu();
  }, []);

  return (
    <div>
        <p className="title">EDUCATION</p>
        {eduData.map((list) => {
          return(<div key={list.id}><EduCard info={list}/></div>)
        })}
    </div>
  );
}

export default Education;