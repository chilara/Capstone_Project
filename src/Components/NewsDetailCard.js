import React from "react";
import { Link } from "react-router-dom";
import { BiCommentAdd } from "react-icons/bi";
import { BiImageAdd } from "react-icons/bi";

const NewsDetailCard = ({ avatar, title, url, author, comments }) => {
  return (
    <div className="detailCard">
      <div className="img-btn">
        <img src={avatar} id="img" alt="" />
        <div>
          <Link to="/addComments" target="_blank" className="BtnC">
            <BiCommentAdd />
          </Link>
          <Link to="/AddImage" target="_blank" className="BtnC">
            <BiImageAdd />
          </Link>
        </div>
      </div>
      <br />
      <p id="title">{title}</p>
      <br />
      <p id="url">{url}</p>
      <br />
      <p id="author">{author}</p>
      <br />
      <div id="divider">
        {/* <ul id="comments">
            {comments.map((item) => (
              <li>{item.comment}</li>
            ))}
          </ul> */}
      </div>
    </div>
  );
};

export default NewsDetailCard;
