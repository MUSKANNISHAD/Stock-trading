import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Menu() {

  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropDown, setIsProfileDropDown] = useState(0);

  const handleClickMenu = (index) => {
    setSelectedMenu(index);
  }

  const handleProfileDropDown = (index) => {
    setIsProfileDropDown(!isProfileDropDown);
  }

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className='menu-container'>
      <img src="logo.png" style={{ width: "50px" }} />
      <div className='menus'>
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleClickMenu(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboards</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }}
              to="/Order"
              onClick={() => handleClickMenu(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }}
              to="/Holdings"
              onClick={() => handleClickMenu(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }}
              to="/Positions"
              onClick={() => handleClickMenu(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleClickMenu(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }}
              to="/App"
              onClick={() => handleClickMenu(5)}
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className='profile' onClick={handleProfileDropDown}>
          <div className='avatar'>ZU</div>
          <p className='username'>USERID</p>
        </div>
      </div>

    </div>
  )
}
