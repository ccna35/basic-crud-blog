import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";

function HomePage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("http://localhost:8000/posts")
        .then((response) => {
          // handle success
          setPosts(response.data);
          setLoading(true);
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    };

    fetchData();
  }, []);

  return (
    <main className="homepage">
      <div className="container">
        {loading
          ? posts.map((post) => {
              return <Post post={post} key={post._id} />;
            })
          : "Please wait..."}
      </div>
    </main>
  );
}

export default HomePage;
