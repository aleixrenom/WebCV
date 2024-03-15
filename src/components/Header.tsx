import React from "react";
import { HeaderProps } from "../types/types";

const Header = ({ header }: HeaderProps) => {
  return (
    <div>
      <h1 className="text-center font-bold text-5xl m-5">{header}</h1>
    </div>
  );
};

export default Header;
