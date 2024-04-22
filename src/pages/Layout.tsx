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
    <div className="bg-primary">
      <div className="flex flex-row justify-between p-4">
        <Header name="Aleix" surname="Renom Cisa" />
        <Navbar buttons={buttons} />
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
