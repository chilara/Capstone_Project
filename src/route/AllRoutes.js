import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Comment from "../Pages/Comment";
import AddImage from "../Pages/AddImage";
import CreateNews from "../Pages/CreateNews";
import NewsDetails from "../Pages/NewsDetails";
import UpdateNews from "../Pages/UpdateNews";
import ViewAllImages from "../Pages/ViewAllImages";

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Comment" element={<Comment />} />
        <Route path="/AddImage" element={<AddImage />} />
        <Route path="/CreateNews" element={<CreateNews />} />
        <Route path="/ViewAllImages" element={<ViewAllImages />} />
        <Route path="/NewsDetails" element={<NewsDetails />} />
        <Route path="/UpdateNews" element={<UpdateNews />} />
      </Routes>
    </Router>
  );
};

export default AllRoutes;
