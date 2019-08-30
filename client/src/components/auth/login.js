import React, { Component } from "react";
import { userSignin } from "../../redux/Actions/userActions";
import { connect } from "react-redux";

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
    console.log(userInfo);
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
                      type="text"
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

                    <a href="#" className="text-info">
                      S'enregistrer ici
                    </a>
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

export default connect(
  null,
  { userSignin }
)(Login);
