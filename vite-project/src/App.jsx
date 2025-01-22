import { useState } from "react";
import "./App.css";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Nav from "./Nav/Nav";
import axios from "axios";
import { useEffect } from "react";
import Trendings from "./Trendings/Trendings";
import React from "react";
import { v4 as uuidv4 } from 'uuid';
import Body from "./Body/Body";
import HeaderMain from "./HeaderMain/HeaderMain";
function App() {

    const [newsData, setNewsData] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      axios
        .get(
          `http://api.mediastack.com/v1/news?access_key=11087a75960e02f9918a130be7598d60&languages=en&sources=cnn,-bbc`
        )
        .then((response) => {
          console.log("Data fetched:", response.data);
          setNewsData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setError(error);
        });
    }, []);
  

  return (
    <div className="bg-[linear-gradient(to_bottom,_black_50%,_#F3F2EA_25%)] h-screen">
      <div className=" container w-5/6 mx-auto">
        <Header />
      </div>
      <div className=" container w-5/6 mx-auto">
        <Nav />
{/*         <Trendings newsData={newsData}/>
 */}        <Hero newsData={newsData}/>
{/*             <HeaderMain/>
 */}            <Body newsData={newsData}/>
      </div>
    </div>
  );
}

export default App;
