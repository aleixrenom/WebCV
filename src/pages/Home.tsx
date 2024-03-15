import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { NavButtonProps } from "../types/types";
import Header from "../components/Header";

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
      <Header header="Aleix Renom Cisa" />
      <Navbar buttons={buttons} />
      <Outlet />
    </div>
  );
};

export default Home;
