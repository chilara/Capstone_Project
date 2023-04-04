import React from "react";
import Navbar from "./Navbar";

const AddComment = () => {
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
        <label for="">Avatar</label>
        <input type="text" id="avatar-comment" required />
        <br />
        <label for="">Comment</label>
        <input type="text" id="comment-input" required />
        <br />
        <button type="submit" id="createBtn">
          Create
        </button>
      </form>
    </div>
  );
};

export default AddComment;
