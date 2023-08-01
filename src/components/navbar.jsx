import React, { useState, useEffect, useRef } from "react";
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3 } from "react-icons/hi";

import NavItem from "./navItem";
import DropDownNavItem from "./dropDownNavItem";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [switchNavButton, setSwitchNavButton] = useState(false);
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setSwitchNavButton(false);
      }
    };
    document.addEventListener("mousedown", handler);
  });

  return (
    <nav className="flex justify-between items-center bg-black sticky top-0 z-30 p-2 bg-opacity-80">
      <Link to="/">
        <h1 className="text-white font-dancingScript text-4xl">Aimie Fung</h1>
      </Link>
      <div className="flex items-center justify-between">
        {switchNavButton ? (
          <HiOutlineMenuAlt2
            color={"white"}
            onClick={() => {
              setSwitchNavButton(false);
            }}
            className="md:hidden block w-10 h-10 p-2 cursor-pointer"
          />
        ) : (
          <HiOutlineMenuAlt3
            color={"white"}
            onClick={() => {
              setSwitchNavButton(true);
            }}
            className="md:hidden block w-10 h-10 p-2 cursor-pointer"
          />
        )}
      </div>

      <ul
        className={
          (switchNavButton ? "left-0" : "right-full") +
          " fixed md:static bottom-0 top-0 md:flex md:space-x-7 items-center md:bg-transparent bg-black bg-opacity-80 md:w-auto w-1/5 md:space-y-0 space-y-5 p-2 transition-left"
        }
        ref={menuRef}
      >
        <NavItem content="Home" href="/home" />
        <DropDownNavItem content="Art" />
        <NavItem content="Contact" href="/contact" />
        <NavItem content="About" href="/about" />
      </ul>
    </nav>
  );
}
