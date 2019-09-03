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
        </ul>
      </div>
    </div>
  );
}
export default Header;
