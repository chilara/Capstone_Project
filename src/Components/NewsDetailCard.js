import React from "react";
import { Tooltip } from "react-tooltip";
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
          <Link
            to={`/Comment?id=${id}`}
            className="BtnC"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Add Comment"
            data-tooltip-place="right"
          >
            <BiCommentAdd />
          </Link>
          <Tooltip id="my-tooltip" />
          <Link
            to={`/AddImage?id=${id}`}
            className="BtnC"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Add Image"
            data-tooltip-place="right"
          >
            <BiImageAdd />
          </Link>
          <Tooltip id="my-tooltip" />
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
                <Link
                  className="BtnC"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Edit"
                  data-tooltip-place="left"
                >
                  <BiCommentEdit />
                </Link>
                <Tooltip id="my-tooltip" />
                <Link
                  className="parentBtnD"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Delete"
                  data-tooltip-place="right"
                >
                  <MdDeleteForever />
                </Link>
                <Tooltip id="my-tooltip" />
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NewsDetailCard;
