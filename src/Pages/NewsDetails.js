import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { base_url } from "../Utils/Constant";
import NewsDetailCard from "../Components/NewsDetailCard";

const NewsDetails = () => {
  // extracting the param from the url
  const location = useLocation();
  const queryParameters = new URLSearchParams(location.search);
  const id = queryParameters.get("id");

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  // getting single news detail and comments
  useEffect(() => {
    const getSingleNews = async (id) => {
      try {
        setLoading(true);
        const response = axios(`${base_url}/news/${id}`);
        const responseComment = axios(`${base_url}/news/${id}/comments`);
        const responseArray = await Promise.all([response, responseComment]);
        setData(responseArray[0].data);
        setCommentData(responseArray[1].data);
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
      to="/Home"
      style={{
        textDecoration: "none",
      }}
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
            alignItems: "center",
            height: "470px",
            marginTop: "3%",
            width: "90%",
            marginLeft: "5%",
            // backgroundImage:
            // "url(https://i.pinimg.com/736x/f1/dd/40/f1dd40d36b17542578727c3d6e863903--backgrounds-wallpapers-blue-backgrounds.jpg)",
          }}
        >
          <NewsDetailCard
            avatar={data?.avatar}
            title={data?.title}
            url={data?.url}
            author={`Published by ${data?.author}`}
            comments={commentData}
            id={id}
          />
        </div>
      )}
    </div>
  );
};

export default NewsDetails;
