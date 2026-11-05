import React from "react";
import Menu from "./Menu.jsx";
import "./TopBar.css";

export default function TopBar() {
    return (
        <header className="topbar-container">

            {/* Market Indices */}
            <div className="indices-container">

                <div className="index-card">
                    <div className="index-info">
                        <span className="index">NIFTY 50</span>
                        <span className="index-points">100.2</span>
                    </div>
                    <span className="index-change positive">
                        +0.25%
                    </span>
                </div>

                <div className="index-card">
                    <div className="index-info">
                        <span className="index">SENSEX</span>
                        <span className="index-points">100.2</span>
                    </div>
                    <span className="index-change positive">
                        +0.18%
                    </span>
                </div>

            </div>

            {/* Navigation */}
            <Menu />

        </header>
    );
}
