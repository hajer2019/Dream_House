import React, { Component } from "react";
import { userSignin } from "../../redux/Actions/userActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const userInfo = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.userSignin(userInfo);
  };
  render() {
    return (
      <div className="container" id="login">
        <div className="container">
          <div
            id="login-row"
            className="row justify-content-center align-items-center"
          >
            <div id="login-column" className="col-md-6">
              <div id="login-box" className="col-md-12">
                <form id="login-form" className="form">
                  <h3 className="text-center text-info">Login</h3>
                  <div className="form-group-auth">
                    <label for="username" className="text-info">
                      Email:
                    </label>
                    <br />
                    <input
                      onChange={this.onChange}
                      type="email"
                      name="email"
                      className=" form-control form-control-login"
                    />
                  </div>
                  <div className="form-group-auth">
                    <label for="password" className="text-info">
                      Password:
                    </label>
                    <br />
                    <input
                      onChange={this.onChange}
                      type="password"
                      name="password"
                      className="form-control form-control-login"
                    />
                  </div>
                  <div className="form-group-auth login-group">
                    <button
                      onClick={this.onSubmit}
                      className="btn btn-primary btn-lg btn-login"
                    >
                      Se connecter
                    </button>

                    <Link to="/register" className="text-info">
                      S'enregistrer ici
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuth: state.userReducer.isAuth
  };
};

export default connect(
  mapStateToProps,
  { userSignin }
)(Login);
