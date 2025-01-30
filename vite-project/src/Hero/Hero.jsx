import React, { useState, useEffect } from "react";

const Hero = ({ newsData }) => {
  // Check if newsData exists and has articles
  if (!newsData || !newsData.articles || newsData.articles.length === 0) {
    return <div>No news data available.</div>;
  }

  // Extract the first 5 articles
  const firstFiveArticles = newsData.articles.slice(1, 6);

  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % firstFiveArticles.length
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [firstFiveArticles.length]);

  // Handle bullet click to manually change the image
  const handleBulletClick = (index) => {
    setCurrentImageIndex(index);
  };

  // Get the current article based on the index
  const currentArticle = firstFiveArticles[currentImageIndex] || {};

  return (
    <div className="grid lg:grid-cols-2 g-0 max-md:grid-cols-1"> 
      {/* First Column */}
      <div className="bg-white p-4 grid grid-rows-[80%_25%]">
        <div className="bg-white h-72 shadow-lg relative">
          <div className="relative">
            <img
              className="w-full h-72 object-cover"
              src={currentArticle.urlToImage}
              alt={currentArticle.title || "No title"}
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4">
              <h5 className="text-2xl font-bold text-white">
                {currentArticle.title || "No title"}
              </h5>
              <p className="text-gray-200">
                {currentArticle.source?.name || "Unknown Source"}
              </p>
            </div>
          </div>
          {/* Bullets for manual navigation */}
          <div className="absolute top-4 right-4 flex space-x-2">
            {firstFiveArticles.map((_, index) => (
              <button
                key={index}
                onClick={() => handleBulletClick(index)}
                className={`w-3 h-3 rounded-full ${
                  currentImageIndex === index ? "bg-white" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
        {/* Second Row */}
        <div className="py-2 grid grid-cols-[70%_30%] gap-8 max-xl:pe-8">
          <div className="flex flex-col justify-center -mt-9">
            <h6 className="text-sm font-semibold line-clamp-1">
              {firstFiveArticles[1]?.title || "No title"}
            </h6>
            <p className="text-xs text-green-800 line-clamp-2">
              {firstFiveArticles[1]?.description || "No description available."}
            </p>
          </div>
          <img
            className="w-28 h-15 object-cover"
            src={firstFiveArticles[1]?.urlToImage}
            alt={firstFiveArticles[1]?.title || "No title"}
          />
        </div>
      </div>

      {/* Second Column */}
      <div className="grid grid-rows-2 max-lg:mt-5">
        <div className="bg-[#1A1A1A]">
          <div className="grid grid-cols-2 relative">
            <div className="flex flex-col justify-center p-4 relative z-10">
              <p className="text-gray-200">
                {firstFiveArticles[2]?.description}
              </p>
            </div>

            <div className="relative">
              <img
                src={firstFiveArticles[2]?.urlToImage}
                alt={firstFiveArticles[2]?.title || "No title"}
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,_rgba(26,26,26,0.9)_10%,_transparent_50%)]"></div>
            </div>
          </div>
        </div>
        <div className="bg-white py-5">
          <div className="grid grid-cols-[29%_2%_69%] relative">
            <div className="relative">
              <img
                src={firstFiveArticles[3]?.urlToImage}
                alt={firstFiveArticles[3]?.title || "No title"}
                className="w-full h-44 object-cover"
              />
            </div>
            <div className="border border-gray-300 bg-gray-300 w-[2px] opacity-35 h-[9.5rem]  rounded mt-3 mx-2"></div>
            <div className="flex flex-col justify-center p-4 relative z-10">
              <h4 className="font-semibold">
                {firstFiveArticles[3]?.title || "No title"}
              </h4>
              <p className="text-xs text-gray-500">
                {firstFiveArticles[3]?.source?.name || "Unknown Source"}
              </p>
              <div className="border border-gray-300 bg-gray-300  max-lg:w-[10rem] max-md:w-[10rem] opacity-35 h-[2px] rounded ms-4"></div>
              <p className="text-green-800 text-xs font-semibold p-1">
                {firstFiveArticles[3]?.description ||
                  "No description available."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
