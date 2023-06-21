import React, { useState } from "react";
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";

import NavItem from "./NavItem";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [showNav, setShowNav] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="md:flex justify-between items-center bg-black sticky top-0 z-20 p-2">
      <Link to="/">
        <h1 className="text-white font-dancingScript text-4xl">Aimie Fung</h1>
      </Link>
      <div className="flex items-center justify-between">

        {showNav ? (
          <HiOutlineMenuAlt3
            color={"white"}
            onClick={() => setShowNav(!showNav)}
            className="md:hidden block w-10 h-10 p-2 cursor-pointer"
          />
        ) : (
          <HiOutlineMenuAlt2
            color={"white"}
            onClick={() => setShowNav(!showNav)}
            className="md:hidden block w-10 h-10 p-2 cursor-pointer"
          />
        )}
      </div>

      <ul
        className={
          (showNav ? "left-0" : "-left-full") +
          " md:static fixed bottom-0 top-12 md:flex md:space-x-7 items-center md:bg-transparent bg-black bg-opacity-80 md:w-auto w-10/12 md:space-y-0 space-y-5 p-2 transition-left"
        }
      >
        <NavItem content="Home" href="/" />
        <button
          onClick={() => setIsDropdownOpen((prev) => !prev)}
          class="flex text-lg font-semibold text-white hover:text-gray-500 active:text-primary-700"
          type="button"
        >
          Art
          {!isDropdownOpen ? (
            <AiOutlineCaretUp className="ml-1 h-8"></AiOutlineCaretUp>
          ) : (
            <AiOutlineCaretDown className="ml-1 h-8"></AiOutlineCaretDown>
          )}
        </button>

        {isDropdownOpen && (
          <div className="bg-black absolute top-10 flex flex-col items-center p-2 max-w-50">
            <ul
              className="p-2 text-lg text-white"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:text-gray-500"
                >
                  Clayworks
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:text-gray-500"
                >
                  Digital
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:text-gray-500"
                >
                  Drawings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:text-gray-500"
                >
                  Paintings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:text-gray-500"
                >
                  Photography
                </a>
              </li>
            </ul>
          </div>
        )}

        <NavItem content="Contact" href="/contact" />
        <NavItem content="About" href="/about" />
        {/* <Link to="/shoppingcart">
          <CartNavigatorIcon className="hidden md:flex" count={8} />
        </Link> */}
      </ul>
    </nav>
  );
}
