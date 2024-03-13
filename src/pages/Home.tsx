import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { NavButtonProps } from "../types/types";

const buttons: NavButtonProps[] = [
  { text: "Home", route: "/" },
  {
    text: "About me",
    route: "/aboutme",
  },
  { text: "Education", route: "/education" },
  {
    text: "Work experience",
    route: "/workexperience",
  },
  {
    text: "Other experience",
    route: "/otherexperience",
  },
];

const Home = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-5xl m-5">Aleix Renom Cisa</h1>
      <Navbar buttons={buttons} />
      <Outlet />
    </div>
  );
};

export default Home;
