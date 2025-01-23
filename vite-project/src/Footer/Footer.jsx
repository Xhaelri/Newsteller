import React from "react";

const Footer = () => {
  return (
    <div className="container w-5/6 mx-auto pt-5 bg-black">
      <div className="flex mb-14 gap-10">
        <div className="mt-5">
          <h1 className=" text-5xl font-bold cursor-pointer text-white me-10">
            NEWSLETTER
          </h1>
        </div>
        <div>
        <div className="">
          <ul className="flex flex-row text-white gap-10 mt-8 text-sm text-nowrap ">
            <li className="cursor-pointer">Privacy Policy</li>
            <li className="cursor-pointer">Terms of Service</li>
            <li className="cursor-pointer">Copyright Policy</li>
            <li className="cursor-pointer">Data Policy</li>
            <li className="cursor-pointer">Accessibility</li>
            <li className="cursor-pointer">Help</li>
          </ul>
        </div>
        <div><h6 className="text-white mt-5 text-center text-xs">© 2023 The New York Times Company</h6></div>
        </div>
        <div className="grid grid-cols-2 text-white ms-7 p-3 space-x-2">
          <div>
            <ul>
              <li className="cursor-pointer">Politics</li>
              <li className="cursor-pointer">World</li>
              <li className="cursor-pointer">Economy</li>
              <li className="cursor-pointer">Science & Tech</li>
              <li className="cursor-pointer">Business</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="cursor-pointer">Travel</li>
              <li className="cursor-pointer">Climate</li>
              <li className="cursor-pointer">Lifestyle</li>
              <li className="cursor-pointer">Food & Tech</li>
              <li className="cursor-pointer">Sports</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
