import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { NavButtonProps } from "../types/types";
import Header from "../components/Header";

const buttons: NavButtonProps[] = [
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

const Layout = () => {
  const entryPage: string = "/aboutme";

  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  useEffect(() => {
    if (currentPath === "/") navigate(entryPage);
  }, [navigate, currentPath]);

  return (
    <div>
      <Header header={"Aleix Renom Cisa"} />
      <Navbar buttons={buttons} />
      <Outlet />
    </div>
  );
};

export default Layout;
