import { useRouter } from "next/router";
import React from "react";
import { AiFillCaretDown } from "react-icons/ai";

const Dropdown = ({ title, drop1, drop2, drop3, drop4 }) => {
  const router = useRouter();
  return (
    <div className="relative group">
      <li className="flex items-center space-x-1 cursor-pointer">
        <p>{title}</p>
        <AiFillCaretDown className="w-3 h-3" />
      </li>
      <ul
        className={`scale-0 group-hover:scale-100 absolute transition delay-100  duration-200 z-50  left-0 top-full w-28 space-y-2 bg-indigo-800 shadow-lg rounded-md p-2`}
      >
        <li className="hover:bg-amber-500 rounded-md px-1">{drop1}</li>
        <li className="hover:bg-amber-500 rounded-md px-1">{drop2}</li>
        <li className="hover:bg-amber-500 rounded-md px-1">{drop3}</li>
        <li className="hover:bg-amber-500 rounded-md px-1">{drop4}</li>
      </ul>
    </div>
  );
};

export default Dropdown;
