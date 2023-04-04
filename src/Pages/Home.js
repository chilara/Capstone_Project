import React, { useEffect, useState } from "react";
import axios from "axios";
import { base_url } from "../Utils/Constant";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";

const Home = () => {
  const [loading, setLoading] = useState("");
  const [data, setData] = useState(null);
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

  return (
    <div>
      <Navbar />
      {loading ? (
        <p>Loading..</p>
      ) : (
        <section className="articleContainer">
          {data?.map((items) => (
            <Card avatar={items.avatar} title={items.title} />
          ))}
        </section>
      )}
    </div>
  );
};

export default Home;
