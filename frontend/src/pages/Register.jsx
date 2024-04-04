import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import "../App.css";
import "../styles/Register.css";

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
    <div className="home_register">
      <img
        src="http://localhost:3310/public/assets/images/Van_vanture.png"
        alt="Logo Van Vanture"
        className="logo_vanvanture"
      />
      <p>
        Découvrez le monde de la vanlife et partagez vos aventures avec une
        communauté passionnée. Rejoignez-nous dès maintenant pour partager vos
        expériences et découvrir de nouveaux horizons !
      </p>
      <div className="register">
        <div className="register_form">
          <h3>Créez votre compte dés maintenant !</h3>
          <form>
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
            <button
              type="submit"
              onClick={submitForm}
              className="register_button"
            >
              M'inscire
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
