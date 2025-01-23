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

  const formattedTime = currentDate.toLocaleTimeString().slice(0, 5);

  return (
    <div>
      <nav className="bg-[#1A1A1A]">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex flex-row font-medium mt-0 rtl:space-x-reverse text-sm">
              <Link
                to="/politics"
                className="text-white h-10 px-4 py-2 hover:bg-green-800"
              >
                Politics
              </Link>
              <Link
                to="/world"
                className="text-white h-10 px-4 py-2 hover:bg-green-800"
              >
                World
              </Link>
              <Link
                to="/economy"
                className="text-white h-10 px-4 py-2 hover:bg-green-800"
              >
                Economy
              </Link>
              <Link
                to="/science"
                className="text-white h-10 px-4 py-2 hover:bg-green-800"
              >
                Science & Tech
              </Link>
              <Link
                to="/business"
                className="text-white h-10 px-4 py-2 hover:bg-green-800"
              >
                Business
              </Link>
              <Link
                to="/travel"
                className="text-white h-10 px-4 py-2 hover:bg-green-800"
              >
                Travel
              </Link>
              <Link
                to="/climate"
                className="text-white h-10 px-4 py-2 hover:bg-green-800"
              >
                Climate
              </Link>
              <Link
                to="/lifestyle"
                className="text-white h-10 px-4 py-2 hover:bg-green-800"
              >
                Lifestyle
              </Link>
              <Link
                to="/food"
                className="text-white h-10 px-4 py-2 hover:bg-green-800"
              >
                Food
              </Link>
              <Link
                to="/sports"
                className="text-white h-10 px-4 py-2 hover:bg-green-800"
              >
                Sports
              </Link>
            </div>
            <p className="pe-6 text-white text-sm">{formattedTime}</p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;