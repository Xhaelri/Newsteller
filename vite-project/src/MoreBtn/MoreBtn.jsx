import React from "react";
import Spinner from "../Spinner/Spinner";
const MoreBtn = ({ handleButtonClick,isLoading }) => {
  return (
    <div className="justify-center items-center">
      <button className="text-white px-4 py-1 bg-green-900" onClick={handleButtonClick} disabled={isLoading}>{isLoading ? <Spinner /> : 'View More'}</button>
    </div>
  );
};

export default MoreBtn;
