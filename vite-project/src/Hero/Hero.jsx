import React from "react";

const Hero = ({ newsData }) => {
  // Check if newsData exists and has data
  if (!newsData || !newsData.data || newsData.data.length === 0) {
    return <div>No news data available.</div>;
  }

  // Get the first article from newsData
  const article = newsData.data[3];
  const article2 = newsData.data[7];
  const article3 = newsData.data[14];
  const article4 = newsData.data[15];

  return (
    <div className="grid grid-cols-2 g-0">
      {/* First Column */}
      <div className="bg-white p-4 grid grid-rows-[80%_25%]">
        <div className="bg-white h-72 shadow-lg  relative">
          {/* Image Container */}
          <div className="relative">
            <img
              className=" w-full h-72 object-cover"
              src={article.image}
              alt={article.title}
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4">
              <h5 className="text-2xl font-bold text-white">{article.title}</h5>
              <p className="text-gray-200">{article.source}</p>
            </div>
          </div>
        </div>
        {/* second row */}
        <div className="py-2 grid grid-cols-[70%_30%] gap-8  ">
          <div className="flex flex-col justify-center -mt-9">
            <h6 className="text-sm font-semibold line-clamp-1">
              {article2.title}
            </h6>
            <p className="text-xs text-green-800 line-clamp-2">
              {article2.description}
            </p>
          </div>
          <img
            className="w-28 h-15 object-cover "
            src={article2.image}
            alt={article2.title}
          />
        </div>
      </div>

      {/* Second Column */}
      <div className="grid grid-rows-2 ">
        <div className="bg-[#1A1A1A]">
          <div className="grid grid-cols-2 relative">
            {/* Text Content */}
            <div className="flex flex-col justify-center p-4 relative z-10">
              <p className="text-gray-200">{article3.description}</p>
            </div>

            {/* Image with Smoky Effect */}
            <div className="relative">
              <img
                src={article3.image}
                alt={article3.title}
                className="w-full h-56 object-cover"
              />
              {/* Smoky Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_top,_rgba(26,26,26,0.9)_10%,_transparent_50%)]"></div>
            </div>
          </div>
        </div>
        <div className="bg-white py-5">
        <div className="grid grid-cols-[29%_2%_69%] relative ">
            {/* Text Content */}

            {/* Image with Smoky Effect */}
            <div className="relative">
              <img
                src={article4.image}
                alt={article4.title}
                className="w-full h-44 object-cover"
              />
            </div>
              <div className="border border-gray-300 bg-gray-300 w-[2px] opacity-35 h-[9.5rem] rounded mt-3 mx-2"></div>
            <div className="flex flex-col justify-center p-4 relative z-10">
              <h4 className=" font-semibold">{article4.title}</h4>
              <p className="text-xs text-gray-500">{article4.source}</p>
              <div className="border border-gray-300 bg-gray-300 w-72 opacity-35 h-[2px] rounded  ms-4"></div>
              <p className="text-green-800 text-xs font-semibold p-1">{article4.description}</p>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Hero;
