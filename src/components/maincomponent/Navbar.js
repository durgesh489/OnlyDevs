"use client";
import React from "react";

import { Link } from "react-router-dom";

// import Image from "next/image";

const Navbar = () => {
  //   console.log(isScrolled);
  return (
    <React.Fragment>
      <div className=" non-italic bg-sky-600  w-full flex justify-center  items-center">
        <div className="flex bg-sky-600  translate-y-2 p-2 z-100 w-full justify-between transition-all">
          <div className="flex items-center ">
            <p className="text-2xl font-bold text-white ml-4 p-2 ">
              <Link to="/"> OnlyDevs</Link>
            </p>
          </div>
          <div>
            <ul className=" text-lg text-white font-bold flex px-[0.8rem] items-center">
              <li className="px-[1rem] mx-2 cursor-pointer hover:py-1 hover:bg-white hover:rounded-xl hover:text-black">
                <Link to="/Landingpage">Work</Link>
              </li>
              <li className="px-[1rem] mx-2 cursor-pointer hover:py-1 hover:bg-white hover:rounded-xl hover:text-black">
                About
              </li>
              <li className="px-[1rem] mx-2 cursor-pointer hover:py-1 hover:bg-white hover:rounded-xl hover:text-black ">
                Contact
              </li>

              <li className="px-[1rem] mx-2">
                <Link to="/SignIn">
                  <button className="broder-white bg-slate-700  rounded-full w-[8rem] p-[0.5rem] hover:text-white hover:bg-black ">
                    Sign In
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
