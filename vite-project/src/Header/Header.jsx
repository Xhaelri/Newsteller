import React from "react";
import { Link } from "react-router-dom"; 

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-14 max-lg:flex-wrap">
      <div className="mt-5">
        <Link to="/">
          <h1 className="text-4xl font-bold cursor-pointer text-white">
            NEWSLETTER
          </h1>
        </Link>
      </div>
      <div className="mt-5 flex justify-center items-center">
        <input
          className="w-96 px-4 bg-[#04594D] text-base text-white h-9 max-lg:w-48"
          type="text"
          placeholder="Search for headlines"
        />
        <div>
          <button className="px-4 bg-[#8E4042] text-base text-white h-9">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;