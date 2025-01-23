import React from "react";
import { v4 as uuidv4 } from "uuid";
import HeaderMain from "../HeaderMain/HeaderMain";
import Spinner from "../Spinner/Spinner";
import MoreBtn from "../MoreBtn/MoreBtn";

const Main = ({ newsData, handleButtonClick }) => {
  // Check if newsData exists and has articles
  if (!newsData || !newsData.articles || newsData.articles.length === 0) {
    return <div>No news data available.</div>;
  }


  return (
    <div>
      <HeaderMain />
      {/* Grid with 2 columns */}
      <div className="grid grid-cols-2 gap-4">
        {/* Map through articles */}
        {newsData.articles.map((article) => (
          <div
            key={uuidv4()}
            className="mb-4 relative hover:shadow-lg transition-shadow"
          >
            {/* Image with Smoky Overlay */}
            <div className="relative">
              <img
                src={article.urlToImage || "https://via.placeholder.com/400x200"}
                alt={article.title}
                className="w-full h-72 object-cover"
              />
              {/* Smoky Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              {/* Text on Image */}
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-xl sm:text-lg font-semibold text-white line-clamp-1">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-xs line-clamp-2">
                  {article.description || "No description available."}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* "View More" Button */}
      <div className="flex justify-center items-center p-2">
        <button
          onClick={handleButtonClick}
          className="text-white px-4 py-1 bg-green-900"
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default Main;