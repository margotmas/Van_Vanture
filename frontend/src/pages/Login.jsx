import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import UserContext from "../services/UserContext";

import "../App.css";
import "../styles/Login.css";

function Login() {
  const { setUser } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
    axios
      .post(
        "http://localhost:3310/api/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        console.info(response);
        setUser({
          id: response.data.id,
          email: response.data.email,
          firstname: response.data.firstname,
          lastname: response.data.lastname,
        });
        navigate("/feed", { replace: true });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="home_login">
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

      <div className="login_form">
        <h3>Nous sommes heureux de te revoir !</h3>
        <form onSubmit={submitForm}>
          <input
            type="email"
            required
            onChange={handleChangeEmail}
            id="email"
            placeholder="Adresse e-mail"
          />
          <input
            type="password"
            required
            onChange={handleChangePassword}
            id="password"
            placeholder="Mot de passe"
          />
          <input type="submit" value="Me connecter" className="login_button" />
        </form>
      </div>
    </div>
  );
}

export default Login;
