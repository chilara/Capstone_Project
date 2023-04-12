import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Comment from "../Components/Comment";
import AddImage from "../Components/AddImage";
import CreateNews from "../Components/CreateNews";
import NewsDetails from "../Components/NewsDetails";
import UpdateNews from "../Components/UpdateNews";
import ViewAllImages from "../Components/ViewAllImages";

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
