import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import Orders from "./components/Orders";
import Holdings from "./components/Holdings";
import Positions from "./components/Positions";
import Apps from "./components/Apps";
import Funds from "./components/Funds";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/holdings" element={<Holdings />} />
        <Route path="positions" element={<Positions />} />
        <Route path="/funds" element={<Funds />} />
        <Route path="/apps" element={<Apps />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode >
);
