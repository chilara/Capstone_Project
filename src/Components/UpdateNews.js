import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const UpdateNews = () => {
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
      <p id="serverMsg"></p>
      <form id="createForm">
        <h3 class="fill">Fill Details</h3>
        <br />
        <label for="">Author</label>
        <input type="text" id="author1" required />
        <br />
        <label for="">News Title</label>
        <input type="text" id="newsTitle" required />
        <br />
        <label for="">News URL</label>
        <input type="text" id="newsUrl" required />
        <br />
        <label for="">Avatar Link</label>
        <input type="text" id="avatarLink" required />
        <br />
        <button type="submit" id="createBtn">
          Create
        </button>
      </form>
    </div>
  );
};

export default UpdateNews;
