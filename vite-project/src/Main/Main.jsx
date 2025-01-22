import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import HeaderMain from '../HeaderMain/HeaderMain';

const Main = ({ newsData }) => {
  // Check if newsData exists and has data
  if (!newsData || !newsData.data || newsData.data.length === 0) {
    return <div>No news data available.</div>;
  }

  // Limit the articles to 8
  const articles = newsData.data.slice(0, 8);

  return (
    <div>
      <HeaderMain/>
    <div className="grid grid-cols-2 gap-4">
      {/* First Column */}
      <div>
        {articles.slice(4, 8).map((article) => (
          <div key={uuidv4()} className="mb-4 relative hover:shadow-lg transition-shadow">
            {/* Image with Smoky Overlay */}
            <div className="relative">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-72 object-cover "
              />
              {/* Smoky Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              {/* Text on Image */}
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-xl sm:text-lg font-semibold text-white line-clamp-1">
                  {article.title}
                </h3>
                <p className="text-gray-200 text-sm sm:text-xs line-clamp-2">
                  {article.description}
                </p>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Second Column */}
      <div>
        {articles.slice(0, 4).map((article) => (
          <div key={uuidv4()} className="mb-4 relative hover:shadow-lg transition-shadow">
            {/* Image with Smoky Overlay */}
            <div className="relative">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-72 object-cover "
              />
              {/* Smoky Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              {/* Text on Image */}
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-xl sm:text-lg font-semibold text-white line-clamp-1">
                  {article.title}
                </h3>
                <p className="text-gray-200 text-sm sm:text-xs line-clamp-2">
                  {article.description}
                </p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>

    </div>
  );
};

export default Main;