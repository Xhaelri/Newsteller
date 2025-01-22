import React from "react";
import { v4 as uuidv4 } from "uuid";
import HeaderTrinding from "../HeaderTrending/HeaderTrinding";

const Trendings = ({ newsData }) => {
  // Check if newsData exists and has data
  if (!newsData || !newsData.data || newsData.data.length === 0) {
    return <div>No news data available.</div>;
  }

  // Limit the articles to 8
  const articles = newsData.data.slice(0, 8);

  return (
    <div className="bg-white px-4 py-4">
      <HeaderTrinding />
      <div className="grid grid-cols-1 gap-2 bg-white ">
        {/* Map through articles */}
        {articles.slice(2, 9).map((article) => (
          <div
            key={uuidv4()}
            className="grid grid-cols-[40%_60%] gap-1 items-center border-gray-300/50 border-b-2 pb-5 my-4"
          >
            {/* Image Column */}
            <div className="relative">
              <img
                src={article.image}
                alt={article.title}
                className="w-32 h-32 object-cover "
              />
            </div>

            {/* Text Column */}
            <div className="flex flex-col justify-center p-2">
              <h6 className="text-md font-semibold line-clamp-2 leading-5">
                {article.title}
              </h6>
              <p className="text-xs text-green-900 line-clamp-2 mt-1">
                {article.description}
              </p>
              <div className="flex justify-between mt-5">
                <p className="text-[0.6rem] text-gray-600">{article.source}</p>
                <p className="text-[0.6rem] text-gray-600">
                  {article.published_at.slice(0, 10)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trendings;
