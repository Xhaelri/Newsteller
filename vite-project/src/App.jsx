import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Nav from "./Nav/Nav";
import axios from "axios";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Politics from "./Pages/Politics";
import World from "./Pages/World";
import Economy from "./Pages/Economy";
import Science from "./Pages/Science";
import Business from "./Pages/Business";
import Travel from "./Pages/Travel";
import Climate from "./Pages/Climate";
import Lifestyle from "./Pages/Lifestyle";
import Food from "./Pages/Food";
import Sports from "./Pages/Sports";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [newsData, setNewsData] = useState(null);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(6);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 4);
  };

  const handleButtonClick = () => {
    handleClick();
    loadMore();
  };

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=365775b0ba264ee5a157d7a6e0f74a21&pageSize=${page}`
      )
      .then((response) => {
        console.log("Data fetched:", response.data);
        setNewsData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
      });
  }, [page]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!newsData) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <div className="bg-[linear-gradient(to_bottom,_black_50%,_#F3F2EA_25%)] h-screen">
        <div className="container w-5/6 mx-auto">
          <Header />
        </div>
        <div className="container w-5/6 mx-auto">
          <Nav />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero newsData={newsData} />
                  <Body
                    newsData={newsData}
                    handleButtonClick={handleButtonClick}
                    page={page}
                    isLoading={isLoading}
                  />
                </>
              }
            />
            <Route path="/politics" element={<Politics />} />
            <Route path="/world" element={<World />} />
            <Route path="/economy" element={<Economy />} />
            <Route path="/science" element={<Science />} />
            <Route path="/business" element={<Business />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/climate" element={<Climate />} />
            <Route path="/lifestyle" element={<Lifestyle />} />
            <Route path="/food" element={<Food />} />
            <Route path="/sports" element={<Sports />} />
          </Routes>
        </div>
        <div className="bg-black w">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;