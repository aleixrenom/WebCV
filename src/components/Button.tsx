import React from "react";
import { NavButtonProps } from "../types/types";
import { NavLink } from "react-router-dom";

const NavButton = ({ text, route }: NavButtonProps) => {
  return (
    <div>
      <NavLink
        to={route}
        className={({ isActive }) => {
          return isActive
            ? "p-2 mx-2 w-20 rounded-lg bg-blue-700 text-white"
            : "p-2 mx-2 w-20 rounded-lg bg-blue-500 hover:bg-blue-600 text-white";
        }}
      >
        {text}
      </NavLink>
    </div>
  );
};

export default NavButton;
