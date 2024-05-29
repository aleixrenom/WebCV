import React from "react";
import Button from "./NavButton";
import { NavbarProps } from "../types/types";

const Navbar = ({ buttons }: NavbarProps) => {
  return (
    <div className="flex justify-center">
      {buttons.map((button, index) => (
        <Button key={index} {...button} />
      ))}
    </div>
  );
};

export default Navbar;
