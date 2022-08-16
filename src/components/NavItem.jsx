import React from "react";
import { NavLink } from "react-router-dom";

export default function NavItem({ content, href }) {

  return (
    <li className="text-lg font-semibold">
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-blue-500 underline decoration-double" : "text-white"
        }
        to={href}
      >
        <h1 className="hover:bg-gray-400" >
          {content}
        </h1>
      </NavLink>
    </li>
  );
}