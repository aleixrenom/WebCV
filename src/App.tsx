import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { ButtonProps } from "./types/types";

function App() {
  const buttons: ButtonProps[] = [
    {
      text: "One",
      onClick: () => {
        console.log("One");
      },
    },
    { text: "Two" },
    { text: "Three" },
  ];

  return (
    <div>
      <h1 className="text-center font-bold text-5xl m-5">Aleix Renom Cisa</h1>
      <div className="NavBar">
        <Navbar buttons={buttons} />
      </div>
    </div>
  );
}

export default App;
