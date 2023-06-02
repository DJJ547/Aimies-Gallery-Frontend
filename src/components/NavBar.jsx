import React, { useState } from "react";
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3 } from "react-icons/hi";

import NavItem from "./NavItem";
import { Link } from "react-router-dom";
import CartNavigatorIcon from "./CartNavigatorIcon";

export default function NavBar() {
  const [showNav, setShowNav] = useState(false);


  return (
    <nav className="md:flex justify-between items-center bg-black sticky top-0 z-20">
      <Link to="/">
          <img className="w-12 h-12 p-2" src="/logo192.png" alt="logo" />
      </Link>
      <div className="flex items-center justify-between">
        <CartNavigatorIcon className="md:hidden flex" count={8} />

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
          id="dropdownNavbarLink"
          data-dropdown-toggle="dropdownNavbar"
          className="text-lg font-semibold flex justify-between items-center w-full text-white rounded hover:bg-gray-400 hover:text-blue-500 md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
        >
          Arts{" "}
          <svg
            className="ml-1 w-5 h-5"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          id="dropdownNavbar"
          className="hidden z-10 w-44 font-normal bg-black rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
        >
          <ul
            className="py-1 text-sm text-gray-700 dark:text-gray-400"
            aria-labelledby="dropdownLargeButton"
          >
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
          </ul>
          <div className="py-1">
            <a
              href="#"
              className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
            >
              Sign out
            </a>
          </div>
        </div>
        <NavItem content="Contact" href="/contact" />
        <NavItem content="About" href="/about" />
        <Link to="/shoppingcart">
          <CartNavigatorIcon className="hidden md:flex" count={8} />
        </Link>
      </ul>
    </nav>
  );
}
