import React from "react";
import Main from "../Main/Main";
import Trendings from "../Trendings/Trendings";

const Body = ({ newsData, handleButtonClick, page,isLoading }) => {
  return (
    <div>
      <div className="container grid grid-cols-[70%_30%] mt-8 space-x-4 max-lg:space-x-0 max-lg:grid-cols-1">
        <Main newsData={newsData} handleButtonClick={handleButtonClick} page={page}  isLoading={isLoading}/>
        <Trendings newsData={newsData} />
      </div>
    </div>
  );
};

export default Body;