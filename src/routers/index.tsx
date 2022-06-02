import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Todo from "../pages/Todo";
import Country from "../pages/Country";
function index() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/country" element={<Country />} />
    </Routes>
  );
}

export default index;
