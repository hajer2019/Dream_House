import React from "react";
import logoImage from "../images/log1.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="logo">
          <Link to="/">
            {" "}
            <img src={logoImage} alt="" />
          </Link>
        </div>
      </Link>

      <div className="menu">
        <ul className="nav">
          {/* <Link to="/home" className="nav-link ">
            <li className="nav-item">Accueil</li>
          </Link>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li> */}

          <li className="nav-item">
            <Link to="/add" className="nav-link">
              Ajouter une annonce
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Connexion
            </Link>
          </li>

          {/* <li className="nav-item">
            <Link to="/register" className="nav-link">
              Inscription
            </Link>
          </li> */}
        </ul>

        {/* <div className="auth">
          <div className="addAnnonce">Ajouter une annonce</div>
          <div className="login">Login</div>
          <div className="signup">Sign Up </div>
        </div> */}
      </div>
    </div>
  );
}
export default Header;
