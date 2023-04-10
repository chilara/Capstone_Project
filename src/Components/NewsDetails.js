import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { base_url } from "../Utils/Constant";
import NewsDetailCard from "./NewsDetailCard";

const NewsDetails = () => {
  // extracting the param from the url
  const location = useLocation();
  const queryParameters = new URLSearchParams(location.search);
  const id = queryParameters.get("id");

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");

  // getting single news detail
  useEffect(() => {
    const getSingleNews = async (id) => {
      try {
        setLoading(true);
        const response = await axios(`${base_url}/news/${id}`);
        setData(response.data);
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    };
    getSingleNews(id);
  }, []);

  const buttonTag = (
    <Link
      to="/"
      style={{
        textDecoration: "none",
      }}
      target="_blank"
    >
      <button className="nav-btn">Home</button>
    </Link>
  );

  return (
    <div>
      <Navbar button={buttonTag} />
      {loading ? (
        <p className="loadingStatus">Loading...</p>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "3%",
          }}
        >
          <NewsDetailCard
            avatar={data.avatar}
            title={data.title}
            url={data.url}
            author={`Published by ${data.author}`}
            comments={data.comment}
          />
        </div>
      )}
      ;
    </div>
  );
};

export default NewsDetails;
