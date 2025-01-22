import React from "react";

const Nav = () => {
  return (
    <div>
      <nav className="bg-[#1A1A1A]">
        <div className="max-w-screen-xl   mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex flex-row font-medium mt-0  rtl:space-x-reverse text-sm">
                <a
                  href="#"
                  className="text-white h-10 px-4 py-2 hover:bg-green-800 "
                  aria-current="page"
                >
                  Politics
                </a>
                <a
                  href="#"
                  className="text-white h-10 px-4 py-2  hover:bg-green-800 "
                  aria-current="page"
                >
                  World
                </a>
                <a
                  href="#"
                  className="text-white h-10 px-4 py-2  hover:bg-green-800 "
                  aria-current="page"
                >
                  
                  Economy
                </a>
                <a
                  href="#"
                  className="text-white h-10 px-4 py-2  hover:bg-green-800 "
                  aria-current="page"
                >
                  Science & Tech
                </a>
                <a
                  href="#"
                  className="text-white h-10 px-4 py-2  hover:bg-green-800 "
                  aria-current="page"
                >
                  Business
                </a>
                <a
                  href="#"
                  className="text-white h-10 px-4 py-2  hover:bg-green-800 "
                  aria-current="page"
                >
                  Travel
                </a>
                <a
                  href="#"
                  className="text-white h-10 px-4 py-2  hover:bg-green-800 "
                  aria-current="page"
                >
                  Climate
                </a>
                <a
                  href="#"
                  className="text-white h-10 px-4 py-2  hover:bg-green-800 "
                  aria-current="page"
                >
                  Lifestyle
                </a>
                <a
                  href="#"
                  className="text-white h-10 px-4 py-2  hover:bg-green-800 "
                  aria-current="page"
                >
                  Food
                </a>
                <a
                  href="#"
                  className="text-white h-10 px-4 py-2  hover:bg-green-800 "
                  aria-current="page"
                >
                  Sports
                </a>
            </div>
            <p className="pe-6 text-white text-sm">13:40 24C</p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
