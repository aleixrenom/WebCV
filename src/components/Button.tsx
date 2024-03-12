import React from "react";
import { ButtonProps } from "../types/types";

const Button = ({
  text,
  onClick = () => {},
  className = "p-2 mx-2 w-20 rounded-lg bg-blue-500 hover:bg-blue-600 text-white",
}: ButtonProps) => {
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
};

export default Button;
