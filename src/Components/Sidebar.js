import React from "react";
import { Link } from "react-router-dom";
import landingImg from "../Assets/landingImg.png";

const Sidebar = () => {
  let token = localStorage.getItem("token");

  const logOut = () => {
    localStorage.removeItem("token");
  };

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
      {/* <ul>
        {!token ? (
          <>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <li>Register</li>
            </Link>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <li>Login</li>
            </Link>
          </>
        ) : (
          <Link to="/login" style={{ textDecoration: "none" }} onClick={logOut}>
            <li>Logout</li>
          </Link>
        )}
      </ul> */}
    </div>
  );
};

export default Sidebar;
