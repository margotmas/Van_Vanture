import React from "react";
import { Link } from "react-router-dom";
import Post from "../components/Post";

import "../styles/Feed.css";

function Feed() {
  return (
    <>
      <div className="nav">
        <Link to="/feed">
          <img
            src="http://localhost:3310/public/assets/images/Van_vanture2.png"
            alt="logo Van Vanture"
            className="logo_nav"
          />
        </Link>
        <div className="logos">
          <Link to="/add">
            <img
              src="http://localhost:3310/public/assets/images/add.png"
              alt="logo add"
              className="logo_add"
            />
          </Link>
          <Link to="/profile">
            <img
              src="http://localhost:3310/public/assets/images/user.png"
              alt="logo profil"
              className="logo_user"
            />
          </Link>
        </div>
      </div>
      <Post />
    </>
  );
}

export default Feed;
