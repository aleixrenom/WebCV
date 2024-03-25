import React from "react";
import Button from "./Button";
import { NavbarProps } from "../types/types";

const Navbar = ({ buttons }: NavbarProps) => {
  return (
    <div className="flex justify-center pb-6">
      {buttons.map((button, index) => (
        <Button key={index} {...button} />
      ))}
    </div>
  );
};

export default Navbar;
