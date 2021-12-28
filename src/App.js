import React from "react";
import { useState, useEffect } from "react";
import "./index.css";
import Navbar from "./Components/Navbar";
import { PulseLoader } from "react-spinners";
import Header from "./Components/Header";
import Products from "./Components/Products";
import About from "./Components/About";
import Contact from "./Components/Order";

function App() {

const [loading, setLoading]=useState(false);


useEffect(() => {
  setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    }, 5000);
  
},[])

  return (
    <div className="App">
      { 
      
      loading ? <PulseLoader color={"red"}  size={"20"}/> :
      <>
      <Navbar/>
      <Header/>
      <Products/>
      <About/>
      <Contact/>
      </> 
      
      }
    </div>
  );
}




export default App;
