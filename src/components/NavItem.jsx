import React from "react";
import { NavLink } from "react-router-dom";

export default function NavItem({ content, href }) {

  return (
    <li className="text-lg font-semibold">
      <NavLink
        rel="preload"
        className={({ isActive }) =>
          isActive ? "text-blue-500 underline decoration-single" : "text-white"
        }
        to={href}
      >
        <h1 className="hover:text-gray-500" >
          {content}
        </h1>
      </NavLink>
    </li>
  );
}