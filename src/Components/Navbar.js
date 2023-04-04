import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <header>
        <nav>
          <Link
            to="/CreateNews"
            style={{
              textDecoration: "none",
            }}
            target="_blank"
          >
            <button className="nav-btn">Create News</button>
          </Link>
        </nav>
        <h1>Docre Blog</h1>
      </header>
    </div>
  );
};

export default Navbar;
