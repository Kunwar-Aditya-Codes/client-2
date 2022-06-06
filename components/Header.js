import React, { useEffect, useState } from "react";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaLinkedinIn,
} from "react-icons/fa";
import Image from "next/image";
import Sidenav from "./Sidenav";
import Dropdown from "./Dropdown";

const Header = () => {
  const [topShow, setTopShow] = useState(false);

  const scroll = () => {
    if (window.scrollY > 100) {
      setTopShow(true);
    } else {
      setTopShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, []);

  return (
    <div
      className={`${
        topShow ? "-top-14" : "top-0"
      } bg-indigo-600 h-48 lg:h-60 z-50 fixed w-full transition-all duration-200 ease-linear  shadow-md text-white `}
    >
      {/* /////////////////////////////////// */}
      {/* Top */}
      <div className="bg-gray-100 md:rounded-b-lg  text-black flex items-center justify-between h-14  md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto">
        {/* left */}
        <div className="flex  md:pl-5 flex-grow md:flex-[0.7] lg:flex-[0.8] items-center justify-evenly md:justify-start md:space-x-8   h-full">
          <div className="flex items-center space-x-1">
            <AiFillPhone className="h-7 w-7 rounded-full text-indigo-600 p-1" />
            <p className="lg:text-lg">+91-xxxxxxxxx</p>
          </div>
          <div className="flex items-center space-x-1 ">
            <AiOutlineMail className="h-7 w-7  rounded-full text-indigo-600 p-1" />
            <p className="lg:text-lg">test@email.com</p>
          </div>
        </div>

        {/* right */}
        <div className=" flex justify-around flex-grow md:flex-[0.3] lg:flex-[0.2] text-white h-full items-center">
          <FaFacebookF className="h-6 w-6 bg-indigo-600 rounded-full p-1 cursor-pointer hover:scale-110 hover:bg-indigo-400 transition ease-out  " />
          <FaTwitter className="h-6 w-6 bg-indigo-600 rounded-full p-1 cursor-pointer hover:scale-110 hover:bg-indigo-400 transition ease-out " />
          <FaGooglePlusG className="h-6 w-6 bg-indigo-600 rounded-full p-1 cursor-pointer hover:scale-110 hover:bg-indigo-400 transition ease-out " />
          <FaLinkedinIn className="h-6 w-6 bg-indigo-600 rounded-full p-1 cursor-pointer hover:scale-110 hover:bg-indigo-400 transition ease-out " />
        </div>
      </div>

      {/* /////////////////////////////////// */}
      {/* middle */}
      <div className="h-32 flex justify-between lg:justify-center lg:border-b px-4 md:px-0 items-center  md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto ">
        <div className="relative ">
          <Image
            src={
              "https://images.unsplash.com/photo-1554463529-e27854014799?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGxvZ298ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            }
            height="100"
            width="100"
          />
        </div>
        <div className="lg:hidden  w-full">
          <Sidenav />
        </div>
      </div>

      {/* /////////////////////////////////// */}
      {/* Bottom */}
      <div className="hidden lg:block lg:max-w-5xl xl:max-w-7xl mx-auto">
        <ul className="flex items-center justify-around mt-4 text-lg">
          <li className="cursor-pointer">Home</li>
          <Dropdown
            title={"About"}
            drop1={"test"}
            drop2={"test"}
            drop3={"test"}
            drop4={"test"}
          />
          <li>Call for paper</li>
          <li>Important Dates</li>
          <Dropdown
            title={"Author Info"}
            drop1={"test"}
            drop2={"test"}
            drop3={"test"}
            drop4={"test"}
          />
          <Dropdown
            title={"Registration Info"}
            drop1={"test"}
            drop2={"test"}
            drop3={"test"}
            drop4={"test"}
          />
        </ul>
      </div>
    </div>
  );
};

export default Header;
