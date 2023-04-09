import React from "react";

const NewsDetailCard = ({ avatar, title, url, author, comments }) => {
  return (
    <div
      className="card"
      style={{
        padding: 10,
        boxShadow: "3px 10px 13px -2px rgba(0, 0, 0, 0.15)",
        marginBottom: 100,
        borderRadius: 5,
      }}
    >
      <div class="jumbotron" id="jumbotron">
        <div class="img-btn">
          <img src={avatar} id="img" alt="" />
          <br />
          <a href="" id="add" class="commentBtn">
            add comment
          </a>
          <a href="" id="btnImg" class="btnImg">
            add image
          </a>
        </div>
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
    </div>
  );
};

export default NewsDetailCard;
