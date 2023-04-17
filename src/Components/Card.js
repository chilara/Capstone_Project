import React from "react";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";
import { BiDetail } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { BsImages } from "react-icons/bs";

const Card = ({ avatar, title, id, removeUser }) => {
  return (
    <div className="card">
      <div className="imgBtn">
        <img src={avatar} style={{ width: "100%", height: "100%" }} />
      </div>
      <h4>{title}</h4>
      <div className="btnContainer">
        <Link
          to={`/NewsDetails?id=${id}`}
          style={{
            textDecoration: "none",
          }}
          className="parentBtn"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Details"
          data-tooltip-place="top"
        >
          <BiDetail />
        </Link>
        <Tooltip id="my-tooltip" />
        <Link
          to={`/UpdateNews?id=${id}`}
          style={{
            textDecoration: "none",
          }}
          className="parentBtn"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Update"
          data-tooltip-place="top"
        >
          <BiEdit />
        </Link>
        <Tooltip id="my-tooltip" />
        <Link
          to={`/ViewAllImages?id=${id}`}
          style={{
            textDecoration: "none",
          }}
          className="parentBtn"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Images"
          data-tooltip-place="top"
        >
          <BsImages />
        </Link>
        <Tooltip id="my-tooltip" />
        <Link
          style={{
            textDecoration: "none",
          }}
          className="parentBtnD"
          onClick={() => removeUser(id)}
          type="submit"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Delete"
          data-tooltip-place="top"
        >
          <MdDeleteForever />
        </Link>
        <Tooltip id="my-tooltip" />
      </div>
    </div>
  );
};

export default Card;
