import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "../../redux/Actions/userActions";

class DashboardMenu extends Component {
  onlogout = () => {
    this.props.logOut();
    this.props.history.push("/");
  };
  render() {
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
            <a onClick={this.onlogout}>
              <i className="fas fa-sign-out-alt"></i> Se deconnecter
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default connect(
  null,
  { logOut }
)(withRouter(DashboardMenu));
