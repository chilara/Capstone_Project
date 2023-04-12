import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { base_url } from "../Utils/Constant";
import axios from "axios";
import { useLocation } from "react-router-dom";

const AddImage = () => {
  // extracting the param from the url
  const location = useLocation();
  const queryParameters = new URLSearchParams(location.search);
  const id = queryParameters.get("id");

  const [inputValue, setInputValue] = useState("");

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const add = (values) => async () => {
    let body = {
      method: "post",
      url: `${base_url}/news/${id}/images`,
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };

    try {
      const response = await axios(body);
      setInputValue(response.data);
      console.log(JSON.stringify(response.data));
    } catch (error) {
      alert(error);
    } finally {
      setInputValue("");
    }
  };

  return (
    <div>
      <Navbar />
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
        <button type="submit" id="createBtn" onClick={add()}>
          Add
        </button>
      </form>
    </div>
  );
};
export default AddImage;
