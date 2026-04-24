import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AboutMe from "./pages/AboutMe";
import Education from "./pages/Education";
import OtherExperience from "./pages/OtherExperience";
import WorkExperience from "./pages/WorkExperience";
import Layout from "./pages/Layout";
import Error from "./pages/Error";
import VocabularyQuiz from "./quiz/VocabularyQuiz";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
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
  {
    path: "/quiz",
    element: <VocabularyQuiz />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
