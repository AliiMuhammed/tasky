import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"; // ✅ FIXED: use react-router-dom not 'react-router'
import { FaPlus, FaMoon, FaSun } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";

import { getAuthUser } from "../Helper/Storage";
import "../style/navbar.css";

const NavBar = () => {
  const user = getAuthUser();
  const [isDarkMode, setIsDarkMode] = useState(false);

  // ✅ Load dark mode preference on mount
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    const darkModeEnabled = savedMode === "true";
    setIsDarkMode(darkModeEnabled);
    if (darkModeEnabled) {
      document.body.classList.add("dark-mode");
    }
  }, []);

  // ✅ Toggle and persist dark mode
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
    document.body.classList.toggle("dark-mode", newMode);
  };

  return (
    <header>
      <nav>

          <ul className="nav-links">
            <li>
              {user && (
                <button className="add-task">
                  <FaPlus />
                </button>
              )}
            </li>
            <li>
              <button onClick={toggleDarkMode} className="dark-btn">
                {isDarkMode ? <FaSun /> : <FaMoon />}
              </button>
            </li>
            {user ? (
              <li>
                <NavLink to="/profile">
                  <img src={user.photo} alt="Profile" className="profile-pic" />
                </NavLink>
              </li>
            ) : (
              <li>
                <NavLink to="/login">
                  <FiLogIn />
                </NavLink>
              </li>
            )}
          </ul>
      </nav>
    </header>
  );
};

export default NavBar;
