import React from "react";

interface ButtonProps {
  name?: string;
  content?: React.ReactNode | string;
  onClick?: () => void;
  twStyle?: string;
}

const Button = ({
  name = "button",
  content = "Button",
  onClick = () => {},
  twStyle = "",
}: ButtonProps) => {
  return (
    <button className={twStyle} type="button" onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;
