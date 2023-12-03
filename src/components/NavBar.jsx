import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navigation">
          <ul className="navlink-wrapper">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="dashboard">Dashboard</NavLink>
            </li>
          </ul>

          <ul className="nav-profile">
            <li>
              <NavLink to="login">Login</NavLink>
            </li>

            <li>
              <NavLink to="register">Register</NavLink>
            </li>

            <li>
              <NavLink to="profile">Profile</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
