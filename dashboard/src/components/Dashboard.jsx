import App from "./App.jsx";
import Funds from "./Funds.jsx";
import Holdings from "./Holdings.jsx";
import Order from "./Order.jsx";
import Positions from "./Positions.jsx";
import Summary from "./Summary.jsx";
import { WatchList } from "./WatchList.jsx";
import { Routes, Route } from "react-router-dom";

import React from 'react';
import { GeneralContextProvider } from "./GeneralContext.jsx";

export default function Dashboard() {
    return (
        <div className="dashboard-container">
            <GeneralContextProvider>
                <WatchList />
            </GeneralContextProvider>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Summary />} />
                    <Route path="/Order" element={<Order />} />
                    <Route path="/Holdings" element={<Holdings />} />
                    <Route path="/funds" element={<Funds />} />
                    <Route path="/Positions" element={<Positions />} />
                    <Route path="/App" element={<App />} />
                    <Route path="/logout" element={<logout />} />
                </Routes>
            </div>
        </div>
    )
}
