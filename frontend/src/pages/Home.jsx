import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <p>
        Découvrez le monde de la vanlife et partagez vos aventures avec une
        communauté passionnée. Rejoignez-nous dès maintenant pour partager vos
        expériences et découvrir de nouveaux horizons !
      </p>
      <button type="button">
        <Link to="/login">Se connecter</Link>
      </button>
      <button type="button">
        <Link to="/register">S'inscrire</Link>
      </button>
    </>
  );
}

export default Home;
