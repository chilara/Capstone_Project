// import React from "react";

const Card = ({ avatar, title, id, removeUser, deleting }) => {
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
      {deleting ? (
        <span id="delStatus">Deleting</span>
      ) : (
        <section>
          <div className="imgBtn">
            <img src={avatar} style={{ width: 150 }} />
            <a className="parentBtnImg">Images</a>
          </div>
          <h4>{title}</h4>
          <div className="btnContainer">
            <a className="parentBtn">Details</a>
            <a className="parentBtn">Update</a>
            <a className="parentBtnD" onClick={() => removeUser(id)}>
              Delete
            </a>
          </div>
        </section>
      )}
    </div>
  );
};

export default Card;
