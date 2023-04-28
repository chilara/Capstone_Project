import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { base_url } from "../Utils/Constant";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const AddImage = () => {
  // extracting the param from the url
  const location = useLocation();
  const queryParameters = new URLSearchParams(location.search);
  const id = queryParameters.get("id");

  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [uploading, setUploading] = useState(false);

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const add = async (e) => {
    e.preventDefault();
    let body = {
      method: "POST",
      url: `${base_url}/news/${id}/images`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        image: inputValue,
        newsId: id,
      },
    };

    try {
      setUploading(true);
      await axios(body);
      navigate(`/NewsDetails?id=${id}`);
    } catch (error) {
      alert(error || error.message);
    } finally {
      setUploading(false);
      setInputValue("");
    }
  };

  return (
    <div>
      <Navbar />
      {uploading ? (
        <p className="loadingStatus" style={{ color: "white" }}>
          uploading..
        </p>
      ) : (
        ""
      )}
      <form id="createForm">
        <h3 className="fill">Upload Image</h3>
        <br />
        <label>Image</label>
        <input
          type="file"
          value={inputValue}
          onChange={changeHandler}
          id="author1"
          accept="image/png, image/gif, image/jpeg"
        />
        <br />
        <button type="submit" id="createBtn" onClick={add}>
          Add
        </button>
      </form>
    </div>
  );
};
export default AddImage;
