import React, { useState } from "react";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";

const Submenu = ({ title, sub1, sub2, sub3, sub4 }) => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  return (
    <ul className="space-y-10 text-black ">
      <li className="bg-white relative w-44 p-1 rounded-md font-medium  cursor-pointer hover:bg-indigo-50 transition ease-in-out duration-200">
        <p
          className="flex items-center justify-between"
          onClick={() => setDropdownIsOpen(!dropdownIsOpen)}
        >
          {title}
          {dropdownIsOpen ? <AiFillCaretUp /> : <AiFillCaretDown />}
        </p>
        <ul
          className={`${
            dropdownIsOpen ? "scale-1 ease-in" : "scale-0 ease-out"
          } transition transform delay-150 z-50 duration-200 absolute bg-white w-full rounded-b-md  left-0 px-1 py-2  space-y-2 `}
        >
          <li className="hover:bg-indigo-400 w-32 p-1 rounded-md transition ease-out">
            {sub1}
          </li>
          <li className="hover:bg-indigo-400 w-32 p-1 rounded-md transition ease-out">
            {sub2}
          </li>
          <li className="hover:bg-indigo-400 w-32 p-1 rounded-md transition ease-out">
            {sub3}
          </li>
          <li className="hover:bg-indigo-400 w-32 p-1 rounded-md transition ease-out">
            {sub4}
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default Submenu;
