import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = ({ navbarItems }) => {
  return (
    <nav>
      <ul className="navbar">
        {navbarItems.map((item) => (((item.path === "/albums") || (item.path === "/shop")) ? (
          <li className="nav-item" key={item.path}>
            <NavLink className="nav-link" to={item.path}>
              {item.label}
              <i className="fa fa-angle-down fa-lg" />
            </NavLink>
          </li>) : (
            <li className="nav-item" key={item.path}>
            <NavLink className="nav-link" to={item.path}>
              {item.label}
            </NavLink>
            </li>
          )
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
