import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Details from "./Components/Details";
import Create from "./Components/Create";
import Edit from "./Components/Edit";

const App = () => {
  return (
    <div className="h-screen w-screen flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/create" element={<Create />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
      </Routes>
    </div>
  );
};

export default App;
