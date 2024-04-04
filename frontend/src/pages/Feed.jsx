import React from "react";
import { Link } from "react-router-dom";
import Post from "../components/Post";

import "../styles/Feed.css";

function Feed() {
  return (
    <>
      <Link to="/add">
        <img
          src="http://localhost:3310/public/assets/images/add.png"
          alt="logo add"
        />
      </Link>
      <Link to="/profile">
        <img
          src="http://localhost:3310/public/assets/images/user.png"
          alt="logo add"
        />
      </Link>
      <Post />
    </>
  );
}

export default Feed;
