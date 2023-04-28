import React from "react";
import { Link } from "react-router-dom";
import landingImg from "../Assets/landingImg.png";

const Sidebar = () => {
  return (
    <div className="sideBar">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          marginTop: "5%",
        }}
      >
        <h1 style={{ color: "white", fontSize: "50px" }}>
          Publish your passions, your way{" "}
        </h1>
        <br />
        <h5 style={{ color: "white", fontSize: "20px" }}>
          Create a unique and beautiful blog easily.
        </h5>
        <br />
        <div
          style={{
            width: "350px",
          }}
        >
          <img
            src={landingImg}
            style={{
              width: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
