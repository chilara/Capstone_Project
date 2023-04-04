import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";

const NewsDetails = () => {
  return (
    <div>
      <Navbar />
      <div id="loadingStatus"></div>
      <Card />
    </div>
  );
};

export default NewsDetails;
