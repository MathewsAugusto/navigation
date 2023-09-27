import { useState } from "react";

import "./App.css";
import { Outlet } from "react-router-dom";
import { NavBar } from "./components/navbar";

function App() {
  return (
    <div className="h-screen w-screen bg-cyan-400">
      
      <NavBar />

      <Outlet />

    
    </div>
  );
}

export default App;
