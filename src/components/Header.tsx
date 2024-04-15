import React from "react";
import { HeaderProps } from "../types/types";

const Header = ({ name, surname }: HeaderProps) => {
  return (
    <div>
      <h1 className="text-xl">
        <span className="font-bold">{name}</span>{" "}
        <span className="font-thin">{surname}</span>
      </h1>
    </div>
  );
};

export default Header;
