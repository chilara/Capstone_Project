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
          <AuthenticatedRoute authenticated={authenticated}>
            <Home />
          </AuthenticatedRoute>
        }
      />
      <Route
        path="/Comment"
        element={
          <AuthenticatedRoute authenticated={authenticated}>
            <Comment />
          </AuthenticatedRoute>
        }
      />
      <Route
        path="/AddImage"
        element={
          <AuthenticatedRoute authenticated={authenticated}>
            <AddImage />
          </AuthenticatedRoute>
        }
      />
      <Route
        path="/CreateNews"
        element={
          <AuthenticatedRoute authenticated={authenticated}>
            <CreateNews />
          </AuthenticatedRoute>
        }
      />
      <Route
        path="/ViewAllImages"
        element={
          <AuthenticatedRoute authenticated={authenticated}>
            <ViewAllImages />
          </AuthenticatedRoute>
        }
      />
      <Route
        path="/NewsDetails"
        element={
          <AuthenticatedRoute authenticated={authenticated}>
            <NewsDetails />
          </AuthenticatedRoute>
        }
      />
      <Route
        path="/UpdateNews"
        element={
          <AuthenticatedRoute authenticated={authenticated}>
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
