import React from "react";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { MdDetails } from "react-icons/md";
import { BsImages } from "react-icons/bs";

const Card = ({ avatar, title, id, removeUser }) => {
  return (
    <div className="card">
      <div className="imgBtn">
        <img src={avatar} style={{ width: "100%" }} />
      </div>
      <h4>{title}</h4>
      <div className="btnContainer">
        <Link
          to={`/NewsDetails?id=${id}`}
          style={{
            textDecoration: "none",
          }}
          target="_blank"
          className="parentBtn"
        >
          <MdDetails />
        </Link>
        <Link
          to="/UpdateNews"
          style={{
            textDecoration: "none",
          }}
          target="_blank"
          className="parentBtn"
        >
          <GrUpdate />
        </Link>
        <Link
          to="/ViewAllImages"
          style={{
            textDecoration: "none",
          }}
          target="_blank"
          className="parentBtn"
        >
          <BsImages />
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
            <MdDeleteForever />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Card;
