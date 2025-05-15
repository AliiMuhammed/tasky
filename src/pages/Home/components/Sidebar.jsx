import React from "react";
import { NavLink } from "react-router-dom"; // ✅ FIXED: use react-router-dom not 'react-router'
import "../style/sidebar.css";
const Sidebar = () => {
  return (
    <section className="sideBar">
      <div className="sideBar_header">
        <div className="logo">
          <NavLink to="/">Tasky</NavLink>
        </div>
      </div>
      <div className="sideBar_content">
        <ul>
          <li>All Tasks</li>
          <li>Projects</li>
          <li>Tags</li>
          <li>Settings</li>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
