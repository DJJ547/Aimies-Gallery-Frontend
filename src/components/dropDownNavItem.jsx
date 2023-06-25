import React, { useState, useEffect, useRef } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";

export default function NavItem({ content }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
  });

  return (
    <li className="text-lg font-semibold">
      <button
        className="mt-1 flex text-xl font-semibold text-white hover:text-gray-500 active:text-primary-700"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
        ref={menuRef}
        type="button"
      >
        {content}
        {!isDropdownOpen ? (
          <AiOutlineCaretUp className="ml-1 h-8"></AiOutlineCaretUp>
        ) : (
          <AiOutlineCaretDown className="ml-1 h-8"></AiOutlineCaretDown>
        )}
      </button>

      <div
        //   className="bg-black absolute top-20 flex flex-col items-center max-w-auto"
        className={`dropdown-menu ${isDropdownOpen ? "unhidden" : "hidden"} bg-black absolute top-20 flex flex-col items-center max-w-auto`}
        ref={menuRef}
      >
        <ul className="p-2 text-lg text-white">
          <li>
            <a
              href="/clayworks"
              className="block px-4 py-2 hover:text-gray-500"
            >
              Clayworks
            </a>
          </li>
          <li>
            <a
              href="/arts/digital"
              className="block px-4 py-2 hover:text-gray-500"
            >
              Digital
            </a>
          </li>
          <li>
            <a
              href="/arts/drawings"
              className="block px-4 py-2 hover:text-gray-500"
            >
              Drawings
            </a>
          </li>
          <li>
            <a
              href="/arts/paintings"
              className="block px-4 py-2 hover:text-gray-500"
            >
              Paintings
            </a>
          </li>
          <li>
            <a
              href="/arts/photography"
              className="block px-4 py-2 hover:text-gray-500"
            >
              Photography
            </a>
          </li>
        </ul>
      </div>
    </li>
  );
}
