import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function Register() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3310/api/users/", form)
      .then((response) => {
        console.info(response.data);
        navigate("/login");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="register">
      <h3>Créez votre compte dés maintenant</h3>
      <div className="register_form">
        <input
          onChange={handleChange}
          id="firstname"
          name="firstname"
          type="text"
          placeholder="Prénom"
        />
        <input
          onChange={handleChange}
          id="lastname"
          name="lastname"
          type="text"
          placeholder="Nom"
        />
        <input
          onChange={handleChange}
          id="email"
          name="email"
          type="email"
          placeholder="Adresse e-mail"
        />
        <input
          onChange={handleChange}
          id="password"
          type="password"
          name="password"
          placeholder="Mot de passe"
        />
        <button type="submit" onClick={submitForm}>
          M'inscire
        </button>
      </div>
    </div>
  );
}

export default Register;
