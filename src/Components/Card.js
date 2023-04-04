import React from "react";
import { useEffect, useState } from "react";

const Card = ({ avatar, title }) => {
  const [loading, seLoading] = useState("");
  return (
    <div className="card" style={{ padding: 10, border: "1px solid red" }}>
      <span id="delStatus"></span>
      <span></span>
      <div>
        <img src={avatar} style={{ width: 120 }} />
        <button
          style={{ border: "1px solid red", width: 50, padding: 10 }}
        ></button>
      </div>
      <h4>{title}</h4>
      <button
        style={{ border: "1px solid red", width: 50, padding: 10 }}
      ></button>
      <button
        style={{ border: "1px solid red", width: 50, padding: 10 }}
      ></button>
    </div>
  );
};

export default Card;
