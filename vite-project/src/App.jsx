import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Nav from "./Nav/Nav";
import axios from "axios";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";

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
        `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=365775b0ba264ee5a157d7a6e0f74a21&pageSize=${page}`
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
    <div className="bg-[linear-gradient(to_bottom,_black_50%,_#F3F2EA_25%)] h-screen">
      <div className="container w-5/6 mx-auto">
        <Header />
      </div>
      <div className="container w-5/6 mx-auto">
        <Nav />
        <Hero newsData={newsData} />
        <Body
          newsData={newsData}
          handleButtonClick={handleButtonClick}
          page={page}
          isLoading={isLoading}
        />
      </div>
      <div className="bg-black w">
        <Footer />
      </div>
    </div>
  );
}

export default App;
