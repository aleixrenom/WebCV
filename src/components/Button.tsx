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
            ? "p-2 mx-2 w-20 text-secondary underline underline-offset-8 decoration-tertiary decoration-2"
            : "p-2 mx-2 w-20 text-secondary";
        }}
      >
        {text}
      </NavLink>
    </div>
  );
};

export default NavButton;
