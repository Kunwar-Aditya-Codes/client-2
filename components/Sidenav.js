import React, { useEffect, useRef, useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { RiCloseCircleFill } from "react-icons/ri";
import Submenu from "./Submenu";

const Sidenav = () => {
  const [open, setOpen] = useState(false);

  const sidenavRef = useRef();
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidenavRef.current.contains(e.target)) {
        return;
      }
      setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="h-full flex justify-end ">
      <div
        ref={sidenavRef}
        className={`${
          open
            ? "translate-x-1/2 md:translate-x-2/3 ease-in"
            : "translate-x-full ease-out"
        } fixed transform  duration-200 transition-all  flex flex-col pl-5 space-y-20  h-screen bg-indigo-500 border-l-4 border-indigo-900 top-0 w-full right-0 `}
      >
        <RiCloseCircleFill
          onClick={() => setOpen(!open)}
          className="mt-5 z-50 cursor-pointer w-6 h-6 hover:animate-spin"
        />
        <ul className="space-y-10 text-black">
          <li className="bg-white  w-44 p-1 rounded-md font-medium  cursor-pointer hover:bg-indigo-50 transition ease-in-out duration-200 ">
            Home
          </li>
          <li className="bg-white w-44 p-1 rounded-md font-medium  cursor-pointer hover:bg-indigo-50 transition ease-in-out duration-200 ">
            Call for Paper
          </li>
          <li className="bg-white w-44 p-1 rounded-md font-medium  cursor-pointer hover:bg-indigo-50 transition ease-in-out duration-200 ">
            Important Dates
          </li>
          <Submenu
            title={"About"}
            sub1={"test"}
            sub2={"test"}
            sub3={"test"}
            sub4={"test"}
          />
          <Submenu
            title={" Author Info"}
            sub1={"test"}
            sub2={"test"}
            sub3={"test"}
            sub4={"test"}
          />
          <Submenu
            title={" Registration Info"}
            sub1={"test"}
            sub2={"test"}
            sub3={"test"}
            sub4={"test"}
          />
        </ul>
        <ul>
          <li className="bg-white text-indigo-500 p-2 rounded-md font-medium cursor-pointer text-xl shadow-md w-fit">
            Submit Paper
          </li>
        </ul>
      </div>

      <HiOutlineMenuAlt4
        className="cursor-pointer h-6 w-6 "
        onClick={() => setOpen(!open)}
      />
    </div>
  );
};

export default Sidenav;
