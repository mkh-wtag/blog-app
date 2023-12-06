import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const NavBar = () => {
  const { name, setIsLoggedIn } = useContext(UserContext);

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("name");
  };

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
            {name ? (
              <>
                <li>
                  Welcome, &nbsp;
                  <NavLink to="profile">{name}</NavLink>
                </li>

                <li>
                  <NavLink to="login" onClick={logout}>
                    Logout
                  </NavLink>
                </li>
              </>
            ) : (
              <li>
                <NavLink to="login">Login</NavLink>
              </li>
            )}

            {/* <li>
              <NavLink to="register">Register</NavLink>
            </li> */}

            {/* <li>
              <NavLink to="profile">Profile</NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
