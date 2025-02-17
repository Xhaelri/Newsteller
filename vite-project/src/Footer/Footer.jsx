import React from "react";

const Footer = () => {
  return (
    <div className="container w-5/6 mx-auto pt-5 bg-black ">
      <div className="flex justify-between mb-14 gap-10  max-lg:flex-col max-lg:items-center">
        <div className="mt-5">
          <h1 className=" text-5xl sm:text-3xl font-bold cursor-pointer text-white me-10 sm:me-0 max-lg:hidden ">
            NEWSTELLER
          </h1>
        </div>
        <div>
          <div className="max-lg:flex flex-col justify-center items-center">
            <ul className="flex flex-row text-white gap-8 mt-8 text-xs text-nowrap md:gap-4 max-xl:flex-col md:text-center max-lg:flex-row max-lg:gap-2  ">
              <li className="cursor-pointer">Privacy Policy</li>
              <li className="cursor-pointer">Terms of Service</li>
              <li className="cursor-pointer">Copyright Policy</li>
              <li className="cursor-pointer">Data Policy</li>
              <li className="cursor-pointer">Accessibility</li>
              <li className="cursor-pointer">Help</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-2 text-white text-base ms-10 p-3   max-lg:text-center max-lg:text-xl max-lg:">
          <div>
            <ul className="text-nowrap">
              <li className="cursor-pointer">Politics</li>
              <li className="cursor-pointer">World</li>
              <li className="cursor-pointer">Economy</li>
              <li className="cursor-pointer md:text-wrap">Science & Tech</li>
              <li className="cursor-pointer">Business</li>
            </ul>
          </div>
          <div>
            <ul className="text-nowrap sm:ms-8">
              <li className="cursor-pointer">Travel</li>
              <li className="cursor-pointer">Climate</li>
              <li className="cursor-pointer">Lifestyle</li>
              <li className="cursor-pointer">Food</li>
              <li className="cursor-pointer">Sports</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <h6 className="text-white mt-5 text-center text-xs max-lg:pb-5 ">
          © 2025 Newsletter. All rights reserved
        </h6>
      </div>
    </div>
  );
};

export default Footer;
