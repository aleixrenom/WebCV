import React from "react";

interface CardProps {
  children?: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return <div className="bg-slate-200 flex flex-row p-5">{children}</div>;
};

export default Card;
