import { useState, useEffect } from "react";
import axios from "axios";

import "../styles/Feed.css";

function Post() {
  const [posts, setPosts] = useState([]);
  const url = import.meta.env.VITE_BACKEND_URL;

  const fetchPosts = () => {
    axios
      .get(`${url}/api/posts`)
      .then((response) => {
        console.info("ici le contenu du post", response);
        setPosts(response.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h3>
            {post.firstname}&nbsp;
            {post.lastname}
          </h3>
          <p>{post.content}</p>
          <p className="dateandhour">{post.created_at}</p>
        </div>
      ))}
    </div>
  );
}

export default Post;
