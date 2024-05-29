import React from "react";
import NavButton from "../components/NavButton";

const Error = () => {
  return (
    <div className="flex flex-col items-center p-5">
      <h1 className="text-5xl text-bold">404</h1>
      <p className="text-bold">Page not found</p>
      <div className="p-5">
        <NavButton text="Return" route="/" />
      </div>
    </div>
  );
};

export default Error;
