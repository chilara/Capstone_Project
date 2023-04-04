import React from "react";
import Navbar from "./Navbar";

const CreateNews = () => {
  return (
    <div>
      <Navbar />
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

export default CreateNews;
