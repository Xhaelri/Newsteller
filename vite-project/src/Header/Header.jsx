import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-14">
      <div className="mt-5">
        <h1 className=" text-4xl font-bold cursor-pointer text-white">NEWSLETTER</h1>
      </div>
      <div>
        <input
          className="mt-5 w-96 py-1 px-4 bg-green-900 text-base text-white"
          type="text"
          placeholder="Search for headlines"
        />
        <button className="py-1 px-4 bg-red-900 text-base text-white">Search</button>
      </div>
    </div>
  );
};

export default Header;
