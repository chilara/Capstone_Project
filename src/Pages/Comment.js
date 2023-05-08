import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { base_url } from "../Utils/Constant";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Comment = () => {
  // extracting the param from the url
  const location = useLocation();
  const queryParameters = new URLSearchParams(location.search);
  const id = queryParameters.get("id");
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [comment, setComment] = useState("");
  const [adding, setAdding] = useState(false);

  const changeNameHandler = (e) => {
    setName(e.target.value);
  };

  const changeAvatarHandler = (e) => {
    setAvatar(e.target.value);
  };

  const changeCommentHandler = (e) => {
    setComment(e.target.value);
  };

  const add = async (e) => {
    let body = {
      method: "POST",
      url: `${base_url}/news/${id}/comments`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        newsId: id,
        avatar: avatar,
        comment,
      },
    };

    try {
      setAdding(true);
      e.preventDefault();
      await axios(body);
      navigate(`/NewsDetails?id=${id}`);
    } catch (error) {
      alert(error);
    } finally {
      setAdding(false);
    }
  };

  return (
    <div>
      <Navbar />
      {adding && (
        <p className="loadingStatus" style={{ color: "white" }}>
          adding..
        </p>
      )}
      <form id="createForm">
        <h3 class="fill">Fill Details</h3>
        <br />
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          id="name-comment"
          required
          onChange={changeNameHandler}
        />
        <br />
        <label>Avatar</label>
        <input
          type="text"
          name="avatar"
          value={avatar}
          id="avatar-comment"
          required
          onChange={changeAvatarHandler}
        />
        <br />
        <label>Comment</label>
        <input
          type="text"
          name="comment"
          value={comment}
          id="comment-input"
          required
          onChange={changeCommentHandler}
        />
        <br />
        <button type="submit" id="createBtn" onClick={add}>
          Add
        </button>
      </form>
    </div>
  );
};

export default Comment;
