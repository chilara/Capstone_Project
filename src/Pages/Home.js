import React, { useEffect, useState } from "react";
import axios from "axios";
import { base_url } from "../Utils/Constant";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [deleting, setDeleting] = useState(false);

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

  const removeUser = async (id) => {
    try {
      setDeleting(true);
      await axios.delete(`${base_url}/news/${id}`);
      const newData = data.filter((item) => item.id != id);
      console.log("Item successfully deleted.");
      setData(newData);
    } catch (error) {
      alert(error);
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div>
      <Navbar />
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
              deleting={deleting}
            />
          ))}
        </section>
      )}
    </div>
  );
};

export default Home;
