import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import UserContext from "../services/UserContext";

import "../styles/AddPost.css";

export default function AddPost() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const [form, setForm] = useState({
    content: "",
    user_id: user.id,
  });

  const handleChangeForm = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const submitPost = (event) => {
    event.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/posts`, form, {
        withCredentials: true,
      })
      .then((response) => {
        console.info(response);
        navigate("/feed");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="add_post">
      <form onSubmit={submitPost}>
        <label htmlFor="content">Contenu du post :</label>
        <textarea
          name="content"
          onChange={handleChangeForm}
          id="content"
          placeholder="Tapez votre texte ici..."
        />
        <input type="submit" />
      </form>
    </div>
  );
}
