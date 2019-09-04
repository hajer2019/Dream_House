import React, { Component } from "react";
import logoImage from "../images/log1.png";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "../redux/Actions/userActions";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onLogOut = () => {
    this.props.logOut();
    this.props.history.push("/");
  };
  render() {
    const guestLinks = (
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
    );
    const userLinks = (
      <ul className="nav">
        <li className="nav-item">
          <Link to="/add" className="nav-link">
            Ajouter une annonce
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/dashboard" className="nav-link">
            Profil
          </Link>
        </li>
        <li className="nav-item">
          <Link onClick={this.onLogOut} className="nav-link">
            Se déconnecter
          </Link>
        </li>
      </ul>
    );
    return (
      <nav className="navbar  ">
        <Link to="/">
          <div className="logo">
            <Link to="/">
              {" "}
              <img src={logoImage} alt="" />
            </Link>
          </div>
        </Link>

        <div className=" menu">
          {this.props.isAuth ? userLinks : guestLinks}
        </div>
      </nav>
    );
  }
}
const MSTP = state => {
  return {
    isAuth: state.userReducer.isAuth
  };
};

export default connect(
  MSTP,
  { logOut }
)(withRouter(Header));
