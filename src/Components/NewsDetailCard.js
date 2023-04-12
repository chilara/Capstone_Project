import React from "react";
import { Link } from "react-router-dom";
import { BiCommentAdd } from "react-icons/bi";
import { BiImageAdd } from "react-icons/bi";
import { BiCommentEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";

const NewsDetailCard = ({ avatar, title, url, author, comments, id }) => {
  return (
    <div className="detailCard">
      <div className="img-btn">
        <img src={avatar} id="img" alt="" />
        <div>
          <Link to={`/Comment?id=${id}`} target="_blank" className="BtnC">
            <BiCommentAdd />
          </Link>
          <Link to={`/AddImage?id=${id}`} target="_blank" className="BtnC">
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
      <div>
        <ul id="comments">
          {comments.map((item) => (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <li style={{ marginBottom: 10 }}>{item.comment}</li>
              <div style={{ display: "flex" }}>
                <Link className="BtnC">
                  <BiCommentEdit />
                </Link>
                <Link className="parentBtnD">
                  <MdDeleteForever />
                </Link>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NewsDetailCard;
