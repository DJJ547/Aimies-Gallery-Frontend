import React, { useState, useEffect, useRef } from "react";
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3 } from "react-icons/hi";

import NavItem from "./navItem";
import DropDownNavItem from './dropDownNavItem'
import { Link } from "react-router-dom";

export default function NavBar() {
  const [showNav, setShowNav] = useState(false);
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShowNav(false);
      }
    };
    document.addEventListener("mousedown", handler);
  });

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
          " md:static fixed bottom-0 top-20 md:flex md:space-x-7 items-center md:bg-transparent bg-black bg-opacity-80 md:w-auto w-1/5 md:space-y-0 space-y-5 p-2 transition-left"
        }
        ref={menuRef}
      >
        <NavItem content="Home" href="/" />
        <DropDownNavItem content="Arts" />
        <NavItem content="Contact" href="/contact" />
        <NavItem content="About" href="/about" />
      </ul>
    </nav>
  );
}
