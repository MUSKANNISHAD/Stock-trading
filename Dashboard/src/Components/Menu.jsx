import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Menu.css";

const navigationLinks = [
    { label: "Dashboard", path: "/" },
    { label: "Orders", path: "/Order" },
    { label: "Holdings", path: "/Holdings" },
    { label: "Positions", path: "/Positions" },
    { label: "Funds", path: "/funds" },
    { label: "Apps", path: "/App" },
];

export default function Menu() {
    const [isProfileDropDown, setIsProfileDropDown] = useState(false);

    return (
        <div className="menu-container">

            {/* Logo */}
            <Link to="/" className="brand-logo">
                <img src="/logo.png" alt="Stock Trading Logo" />
            </Link>

            {/* Navigation */}
            <div className="menus">

                <nav className="navigation">
                    {navigationLinks.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.path === "/"}
                            className={({ isActive }) =>
                                isActive ? "menu selected" : "menu"
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                {/* User Profile */}
                <div className="profile-wrapper">

                    <button
                        className="profile"
                        onClick={() =>
                            setIsProfileDropDown(!isProfileDropDown)
                        }
                    >
                        <div className="avatar">ZU</div>

                        <span className="username">USERID</span>

                        <span className="profile-arrow">
                            {isProfileDropDown ? "▲" : "▼"}
                        </span>
                    </button>

                    {isProfileDropDown && (
                        <div className="profile-dropdown">

                            <div className="dropdown-user">
                                <div className="avatar">ZU</div>

                                <div>
                                    <p className="dropdown-name">
                                        User Name
                                    </p>

                                    <p className="dropdown-email">
                                        user@example.com
                                    </p>
                                </div>
                            </div>

                            <hr />

                            <Link
                                to="/"
                                onClick={() => setIsProfileDropDown(false)}
                            >
                                Dashboard
                            </Link>

                            <Link
                                to="/funds"
                                onClick={() => setIsProfileDropDown(false)}
                            >
                                Manage Funds
                            </Link>

                            <Link
                                to="/logout"
                                onClick={() => setIsProfileDropDown(false)}
                            >
                                Logout
                            </Link>

                        </div>
                    )}

                </div>

            </div>
        </div>
    );
}
