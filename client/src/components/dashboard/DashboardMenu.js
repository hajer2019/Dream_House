import React from "react";
import { Link } from "react-router-dom";

function DashboardMenu() {
  return (
    <div>
      <ul className="dashboard-menu">
        <li className="dashboard-menu-link">
          <Link to="/">
            <i className="fas fa-home"></i> Accueil
          </Link>
        </li>
        <li className="dashboard-menu-link">
          <a href="#profile">
            <i className="far fa-user"></i>
            <span> Profile</span>
          </a>
        </li>
        <li className="dashboard-menu-link">
          <a href="#collection">
            <i className="far fa-heart"></i> Collection
          </a>
        </li>
        <li className="dashboard-menu-link">
          <Link to="/add">
            <i className="far fa-plus-square"></i> Ajouter une annonce
          </Link>
        </li>

        <li className="dashboard-menu-link">
          <a href="#">
            <i className="fas fa-sign-out-alt"></i> Se deconnecter
          </a>
        </li>
      </ul>
    </div>
  );
}

export default DashboardMenu;
