import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ button }) => {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.clear();
    navigate("/Login", { replace: true });
  };
  return (
    <div className="navbar">
      <header>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {button}

          <button className="nav-btn-log" onClick={logOut}>
            Logout
          </button>
        </nav>
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
