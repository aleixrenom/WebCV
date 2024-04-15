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
            ? "p-2 mx-2 w-20 text-black underline underline-offset-8 decoration-2"
            : "p-2 mx-2 w-20 text-gray-400 hover:text-gray-800";
        }}
      >
        {text}
      </NavLink>
    </div>
  );
};

export default NavButton;
