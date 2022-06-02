import React from "react";
import { render } from "react-dom";
import App from "./App";
import "./assets/index.css";
import { BrowserRouter } from "react-router-dom";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.body
);
