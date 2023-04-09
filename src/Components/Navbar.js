import React from "react";

const Navbar = ({ button }) => {
  return (
    <div className="navbar">
      <header>
        <nav>{button}</nav>
        <h1>Docre Blog</h1>
      </header>
    </div>
  );
};

export default Navbar;
