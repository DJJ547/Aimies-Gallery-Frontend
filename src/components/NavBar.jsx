import React, { useState } from "react";
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3 } from "react-icons/hi";

import NavItem from "./NavItem";
import { Link } from "react-router-dom";
import CartNavigatorIcon from "./CartNavigatorIcon";

export default function NavBar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="md:flex justify-between items-center bg-black sticky top-0 z-20">
      <div className="flex items-center justify-between">
      <Link to="/">
          <img className="w-12 h-12 p-2" src="/logo192.png" alt="logo" />
        </Link>

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
          " md:static fixed bottom-0 top-12 md:flex md:space-x-7 items-center md:bg-transparent bg-black bg-opacity-95 md:w-auto w-10/12 md:text-black text-white md:space-y-0 space-y-5 p-2 transition-left"
        }
      >
        <NavItem content="Home" href="/" />
        <NavItem content="Shop" href="/shop" />
        <NavItem content="Contact" href="/contact" />
        <NavItem content="About" href="/about" />
        <Link to="/shoppingcart"><CartNavigatorIcon className="hidden md:flex" count={8} /></Link>
      </ul>
    </nav>
  );
}