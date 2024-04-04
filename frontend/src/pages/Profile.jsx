import { useState, useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "../services/UserContext";

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
    <div>
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
  );
}

export default Profile;
