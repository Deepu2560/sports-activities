import React from "react";
import "./App.css";
import { Topheader } from "./Assets/components/header/headers";
import { Allroutes } from "./Assets/router";

function App() {
  return (
    <div className="App">
      <Topheader />
      <Allroutes />
    </div>
  );
}

export default App;
