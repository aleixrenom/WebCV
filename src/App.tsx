import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AboutMe from "./pages/AboutMe";
import Education from "./pages/Education";
import OtherExperience from "./pages/OtherExperience";
import WorkExperience from "./pages/WorkExperience";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Home />,
    children: [
      {
        path: "/education",
        element: <Education />,
      },
      {
        path: "/aboutme",
        element: <AboutMe />,
      },
      {
        path: "/workexperience",
        element: <WorkExperience />,
      },
      {
        path: "/otherexperience",
        element: <OtherExperience />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
