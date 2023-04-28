import React, { useEffect, useState } from "react";
import axios from "axios";
import { base_url } from "../Utils/Constant";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  // getting all news
  useEffect(() => {
    const getAllNews = async () => {
      try {
        setLoading(true);
        const response = await axios(`${base_url}/news`);
        setData(response.data);
        console.log(response.data);
      } catch (err) {
        alert(err);
      } finally {
        setLoading(false);
      }
    };
    getAllNews();
  }, []);

  // deleting a single news detail
  const removeUser = async (id) => {
    try {
      await axios.delete(`${base_url}/news/${id}`);
      const newData = data.filter((item) => item.id != id);
      alert("Item successfully deleted.");
      setData(newData);
    } catch (error) {
      alert(error);
    }
  };

  const buttonTag = (
    <div>
      <Link
        to="/CreateNews"
        style={{
          textDecoration: "none",
          marginLeft: "25px",
        }}
      >
        <button className="nav-btn">Create Content</button>
      </Link>
    </div>
  );

  return (
    <div>
      <Navbar button={buttonTag} />
      {loading ? (
        <p className="loadingStatus">Loading...</p>
      ) : (
        <section className="articleContainer">
          {data?.map((items) => (
            <Card
              avatar={items.avatar}
              title={items.title}
              id={items.id}
              removeUser={removeUser}
            />
          ))}
        </section>
      )}
    </div>
  );
};

export default Home;
