import React from "react";
import { Link } from "react-router-dom";

const Card = ({ avatar, title, id, removeUser }) => {
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
      <section>
        <div className="imgBtn">
          <img src={avatar} style={{ width: 150 }} />
          <Link
            to="/ViewAllImages"
            style={{
              textDecoration: "none",
            }}
            target="_blank"
          >
            <a className="parentBtnImg">Images</a>
          </Link>
        </div>
        <h4>{title}</h4>
        <div className="btnContainer">
          <Link
            to={`/NewsDetails?id=${id}`}
            style={{
              textDecoration: "none",
            }}
            target="_blank"
          >
            <a className="parentBtn">Details</a>
          </Link>
          <Link
            to="/UpdateNews"
            style={{
              textDecoration: "none",
            }}
            target="_blank"
          >
            <a className="parentBtn">Update</a>
          </Link>
          <Link
            style={{
              textDecoration: "none",
            }}
          >
            <a
              className="parentBtnD"
              onClick={() => removeUser(id)}
              type="submit"
            >
              Delete
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Card;
