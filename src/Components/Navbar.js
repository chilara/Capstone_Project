import React from "react";
import { Navigate } from "react-router-dom";

const Navbar = ({ button }) => {
  return (
    <div className="navbar">
      <header>
        <nav>{button}</nav>
        {/* 
        <button
          onClick={() => {
            localStorage.clear();
            Navigate("/Login");
          }}
          className="nav-btn-log"
        >
          Logout
        </button> */}

        <h1>
          Welcome to Docre Blog
          <br />
          <span
            style={{ fontSize: "20px", marginBottom: "10px", color: "grey" }}
          >
            News, Events, Entertainment, Lifestyle, Fashion, Beauty,
            Inspiration..
          </span>
        </h1>
      </header>
    </div>
  );
};

export default Navbar;
