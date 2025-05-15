import React from "react";
import "./style/home.css";
import Sidebar from "./components/Sidebar.jsx";
import NavBar from "./../../shared/NavBar";
const Home = () => {
  return (
    <section className="home-section">
      <div className="left">
        <Sidebar />
      </div>
      <div className="right">
        <NavBar />
      </div>
    </section>
  );
};

export default Home;
