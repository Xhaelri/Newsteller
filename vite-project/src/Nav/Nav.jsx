import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link

const Nav = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  const timeRegex = /^(\d{1,2}:\d{2})/;

  const formattedTime = currentDate.toLocaleTimeString().match(timeRegex)[1];

  return (
    <div>
      <nav className="bg-[#1A1A1A] w-full max-lg:overflow-hidden">
        <div className=" mx-auto">
          <div className="flex items-center justify-between max-lg:overflow-hidden ">
            <div className="flex flex-row font-medium mt-0 rtl:space-x-reverse text-sm max-lg:text-[0.7rem] max-lg:flex-wrap ">
              <Link
                to="/politics"
                className="text-white h-10 px-4 py-2 max-lg:px-2 hover:bg-green-800"
              >
                Politics
              </Link>
              <Link
                to="/world"
                className="text-white h-10 px-4 py-2 max-lg:px-2 hover:bg-green-800"
              >
                World
              </Link>
              <Link
                to="/economy"
                className="text-white h-10 px-4 py-2 max-lg:px-2 hover:bg-green-800"
              >
                Economy
              </Link>
              <Link
                to="/science"
                className="text-white h-10 px-4 py-2 max-lg:px-2 hover:bg-green-800 text-nowrap"
              >
                Science & Tech
              </Link>
              <Link
                to="/business"
                className="text-white h-10 px-4 py-2 max-lg:px-2 hover:bg-green-800"
              >
                Business
              </Link>
              <Link
                to="/travel"
                className="text-white h-10 px-4 py-2 max-lg:px-2 hover:bg-green-800"
              >
                Travel
              </Link>
              <Link
                to="/climate"
                className="text-white h-10 px-4 py-2 max-lg:px-2 hover:bg-green-800"
              >
                Climate
              </Link>
              <Link
                to="/lifestyle"
                className="text-white h-10 px-4 py-2 max-lg:px-2 hover:bg-green-800"
              >
                Lifestyle
              </Link>
              <Link
                to="/food"
                className="text-white h-10 px-4 py-2 max-lg:px-2 hover:bg-green-800"
              >
                Food
              </Link>
              <Link
                to="/sports"
                className="text-white h-10 px-4 py-2 max-lg:px-2 hover:bg-green-800"
              >
                Sports
              </Link>
            </div>
            <p className="pe-6 text-white text-sm max-lg:text-xs ">{formattedTime}</p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;