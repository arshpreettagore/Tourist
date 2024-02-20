import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
const url = "https://course-api.com/react-tours-project";


function App() {
  const [tourData, setData] =  useState([]);

  useEffect(() => { // fecthing ususally done in useeffect
    fetchData(); 
  }, [])

  const fetchData = async() => {
    try {
      const response = await fetch(url); // come in promise (some format dont need)
      const data = await response.json(); // convert to json objects in a list 
      setData(data); 
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Tours dataInfoArray={tourData} removeFunction={setData}/> 
    </>
  );
}

export default App;
