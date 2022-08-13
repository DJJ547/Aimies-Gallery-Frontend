import React from "react";
import { Link } from "react-router-dom";

export default function NavItem({ content, href }) {
  return (
    <li className="text-lg font-semibold">
      <Link
        className={({ isActive }) =>
          isActive ? "text-blue-500" : "text-gray-500"
        }
        to={href}
      >
        <a className="text-white">
          {content}
        </a>
      </Link>
    </li>
  );
}