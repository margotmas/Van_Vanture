import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import UserContext from "../services/UserContext";

import "../styles/Profile.css";

function Profile() {
  const [posts, setPosts] = useState([]);
  const [updatedPostData, setUpdatedPostData] = useState({
    content: "",
  });
  const [editMode, setEditMode] = useState({});

  const { user } = useContext(UserContext);

  const url = import.meta.env.VITE_BACKEND_URL;

  const fetchUserPosts = () => {
    axios
      .get(`${url}/api/profile/${user.id}/posts`, posts)
      .then((response) => {
        console.info("ici mes posts", response);
        setPosts(response.data);
      })
      .catch((error) => console.error(error));
  };

  const deletePost = (postId) => {
    axios
      .delete(`${url}/api/posts/${postId}`)
      .then((response) => {
        console.info(response);
        fetchUserPosts();
      })
      .catch((error) => console.error(error));
  };

  const updatePost = (postId) => {
    axios
      .put(`${url}/api/posts/${postId}`, updatedPostData)
      .then((response) => {
        console.info(response);
        fetchUserPosts();
        setEditMode({ ...editMode, [postId]: false });
      })
      .catch((error) => console.error(error));
  };

  const handleInputChange = (event) => {
    setUpdatedPostData({
      ...updatedPostData,
      [event.target.name]: event.target.value,
    });
  };

  const toggleEditMode = (postId) => {
    setEditMode({ ...editMode, [postId]: !editMode[postId] });
  };

  useEffect(() => {
    fetchUserPosts();
  }, [user]);

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
      <div className="profile">
        <h2>Mes posts</h2>
        {posts.map((post) => (
          <div key={post.id} className="post">
            <h3>
              {post.firstname}&nbsp;
              {post.lastname}
            </h3>
            <p>{post.content}</p>
            <p className="dateandhour">{post.created_at}</p>
            {editMode[post.id] ? (
              <div>
                <input
                  type="text"
                  name="content"
                  value={updatedPostData.content}
                  onChange={handleInputChange}
                  placeholder="Nouveau contenu du post"
                />
                <button type="button" onClick={() => updatePost(post.id)}>
                  Enregistrer
                </button>
              </div>
            ) : (
              <button type="button" onClick={() => toggleEditMode(post.id)}>
                Modifier
              </button>
            )}
            <button type="button" onClick={() => deletePost(post.id)}>
              Supprimer
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Profile;
