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
          <p className="dateandhour">{post.created_at}</p>
          <p>{post.content}</p>
          <div className="likes_comments">
            <div className="likes">
              <img
                src="http://localhost:3310/public/assets/images/likes.png"
                alt="logo Van Vanture"
                className="img_likes"
              />
              <p>0</p>
            </div>
            <p>2 commentaires</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Post;
