import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";

const NewsDetails = () => {
  return (
    <div>
      <Navbar />
      <div id="loadingStatus"></div>
      <div class="jumbotron-parent">
        <div class="jumbotron" id="jumbotron">
          <div class="img-btn">
            <img id="img" alt="" />
            <br />
            <a href="" id="add" class="commentBtn"></a>
            <a href="" id="btnImg" class="btnImg"></a>
          </div>
          <p id="title"></p>
          <br />
          <p id="url"></p>
          <br />
          <p id="author"></p>
          <br />
          <div id="divider">
            <ul id="comments"></ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
