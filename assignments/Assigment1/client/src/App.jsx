import React, { useState, useEffect } from "react";
import Overview from "../screens/Overview";
import Education from "../screens/Education";
import Experience from "../screens/Experience";
import "./App.css";

function App() {
  const url = "http://localhost:8000/getEdu";
  const [eduData, setEduData] = useState([]);

  async function getEdu() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      console.log(json);
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
      <div className="container">
        <Overview/>
        <Experience/>
        <Education/>
      </div>
    </div>
  );
}
export default App;