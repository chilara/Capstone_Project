import React from "react";

const Navbar = ({ button }) => {
  return (
    <div className="navbar">
      <header>
        <nav>{button}</nav>
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
