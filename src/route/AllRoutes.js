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
      <Route
        path="/Home"
        element={
          <AuthenticatedRoute>
            <Home />
          </AuthenticatedRoute>
        }
      />
      <Route
        path="/Comment"
        element={
          <AuthenticatedRoute>
            <Comment />
          </AuthenticatedRoute>
        }
      />
      <Route
        path="/AddImage"
        element={
          <AuthenticatedRoute>
            <AddImage />
          </AuthenticatedRoute>
        }
      />
      <Route
        path="/CreateNews"
        element={
          <AuthenticatedRoute>
            <CreateNews />
          </AuthenticatedRoute>
        }
      />
      <Route
        path="/ViewAllImages"
        element={
          <AuthenticatedRoute>
            <ViewAllImages />
          </AuthenticatedRoute>
        }
      />
      <Route
        path="/NewsDetails"
        element={
          <AuthenticatedRoute>
            <NewsDetails />
          </AuthenticatedRoute>
        }
      />
      <Route
        path="/UpdateNews"
        element={
          <AuthenticatedRoute>
            <UpdateNews />
          </AuthenticatedRoute>
        }
      />

      <Route path="/" element={<Register />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
};

export default AllRoutes;
