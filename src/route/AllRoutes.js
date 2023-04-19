import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "../Pages/Home";
import Comment from "../Pages/Comment";
import AddImage from "../Pages/AddImage";
import CreateNews from "../Pages/CreateNews";
import NewsDetails from "../Pages/NewsDetails";
import UpdateNews from "../Pages/UpdateNews";
import ViewAllImages from "../Pages/ViewAllImages";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import jwtDecode from "jwt-decode";
import { AuthenticatedRoute } from "./protectRoute";

let authenticated;

const AllRoutes = () => {
  const navigate = useNavigate();
  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("invalid");
      jwtDecode(token);
      navigate("/Home");
      authenticated = true;
    } catch (error) {
      authenticated = false;
    }
  }, [navigate]);
  return (
    <Routes>
      <Route element={<AuthenticatedRoute authenticated={authenticated} />}>
        <Route path="/Home" element={<Home />} />
        <Route path="/Comment" element={<Comment />} />
        <Route path="/AddImage" element={<AddImage />} />
        <Route path="/CreateNews" element={<CreateNews />} />
        <Route path="/ViewAllImages" element={<ViewAllImages />} />
        <Route path="/NewsDetails" element={<NewsDetails />} />
        <Route path="/UpdateNews" element={<UpdateNews />} />
      </Route>
      <Route path="/" element={<Register />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
};

export default AllRoutes;
