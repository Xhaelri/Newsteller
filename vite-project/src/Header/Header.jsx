import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-14">
      <div className="mt-5">
        <h1 className=" text-4xl font-bold cursor-pointer text-white">NEWSLETTER</h1>
      </div>
      <div className="mt-5 flex justify-center items-center">
        <input
          className=" w-96 px-4 bg-[#04594D] text-base text-white h-9"
          type="text"
          placeholder="Search for headlines"
        />
        <div>
        <button className=" px-4 bg-[#8E4042] text-base text-white h-9">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
