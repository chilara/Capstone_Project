import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import { base_url } from "../Utils/Constant";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateNews = () => {
  // extracting the param from the url
  const location = useLocation();
  const queryParameters = new URLSearchParams(location.search);
  const id = queryParameters.get("id");
  const navigate = useNavigate();

  const [loading, setLoading] = useState("");
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [avatar, setAvatar] = useState("");
  const [updating, setUpdating] = useState(false);

  // getting single news detail
  useEffect(() => {
    const getSingleNews = async (id) => {
      try {
        setLoading(true);
        const response = await axios(`${base_url}/news/${id}`);
        const data = response.data;
        setAuthor(data.author);
        setTitle(data.title);
        setUrl(data.url);
        setAvatar(data.avatar);
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    };
    getSingleNews(id);
  }, []);

  const changeAuthorHandler = (e) => {
    setAuthor(e.target.value);
  };

  const changeTitleHandler = (e) => {
    setTitle(e.target.value);
  };

  const changeUrlHandler = (e) => {
    setUrl(e.target.value);
  };

  const changeAvatarHandler = (e) => {
    setAvatar(e.target.value);
  };

  // update news
  const onSubmit = async (e) => {
    e.preventDefault();

    let body = {
      method: "PUT",
      url: `${base_url}/news/${id}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        author: author,
        title: title,
        url: url,
        avatar: avatar,
      },
    };

    try {
      setUpdating(true);
      await axios(body);
      navigate("/Home");
    } catch (error) {
      alert(error);
    } finally {
      setUpdating(false);
    }
  };

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
      {updating && (
        <p className="loadingStatus" style={{ color: "white" }}>
          updating..
        </p>
      )}
      {loading ? (
        <p className="loadingStatus">Loading...</p>
      ) : (
        <form id="createForm">
          <h3 class="fill">Fill Details</h3>
          <br />
          <label for="">Author</label>
          <input
            type="text"
            id="author1"
            required
            value={author}
            onChange={changeAuthorHandler}
          />
          <br />
          <label for="">News Title</label>
          <input
            type="text"
            id="newsTitle"
            required
            value={title}
            onChange={changeTitleHandler}
          />
          <br />
          <label for="">News URL</label>
          <input
            type="text"
            id="newsUrl"
            required
            value={url}
            onChange={changeUrlHandler}
          />
          <br />
          <label for="">Avatar Link</label>
          <input
            type="text"
            id="avatarLink"
            required
            value={avatar}
            onChange={changeAvatarHandler}
          />
          <br />
          <button type="submit" id="createBtn" onClick={onSubmit}>
            Update
          </button>
        </form>
      )}
    </div>
  );
};

export default UpdateNews;
