import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const ViewAllImages = () => {
  const buttonTag = (
    <Link
      to="/"
      style={{
        textDecoration: "none",
      }}
      target="_blank"
    >
      <button className="nav-btn">Home</button>
    </Link>
  );

  return (
    <div>
      <Navbar button={buttonTag} />
    </div>
  );
};

export default ViewAllImages;
