import React from "react";
import { Link } from "react-router-dom";

import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
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
      <button type="button" className="login_button">
        <Link to="/login">Se connecter</Link>
      </button>
      <button type="button" className="register_button">
        <Link to="/register">S'inscrire</Link>
      </button>
    </div>
  );
}

export default Home;
