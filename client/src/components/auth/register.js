import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { userSignup } from "../../redux/Actions/userActions";
class Loginn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      nameError: "",
      emailError: "",
      passwordError: ""
    };
  }
  validate = () => {
    let nameError = "";
    let emailError = "";
    let passwordError = "";

    if (!this.state.name) {
      nameError = "Veillez entrer votre nom";
    }

    if (
      !this.state.email.match(
        /[a-z0-9!#$%&'*+\/=?^_{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9][a-z0-9-]*[a-z0-9]/
      )
    ) {
      emailError = "Veuillez entrer une adresse email valide";
    }
    if (!this.state.password.match(/[a-zA-Z]{6,}/)) {
      passwordError = "Le mot de passe doit contenir au moins 6 caractères";
    }
    if (emailError || nameError || passwordError) {
      this.setState({ emailError, nameError, passwordError });
      return false;
    } else {
      return true;
    }
  };
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      const newUser = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      };
      this.props.userSignup(newUser);
      this.props.history.push("/login");
    }
  };

  render() {
    return (
      <div className="container register-form">
        <div className="col-md-6 mx-auto text-center">
          <div className="header-title">
            <h2 className="heading--subtitle">Créer un compte gratuit</h2>
          </div>
        </div>
        <div className=" register-form row">
          <div className="col-md-4 mx-auto">
            <div className="myform form ">
              <form name=" register-form login">
                <div className="form-group-auth">
                  <input
                    onChange={this.onChange}
                    type="text"
                    name="name"
                    className="form-control my-input"
                    id="name"
                    placeholder="Name"
                  />
                  <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.nameError}
                  </div>
                </div>
                <div className="form-group-auth">
                  <input
                    onChange={this.onChange}
                    type="email"
                    name="email"
                    className="form-control my-input"
                    id="email"
                    placeholder="Email"
                  />
                  <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.emailError}
                  </div>
                </div>
                <div className="form-group-auth">
                  <input
                    onChange={this.onChange}
                    type="password"
                    name="password"
                    id="password"
                    className="form-control my-input"
                    placeholder="Password"
                  />
                  <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.passwordError}
                  </div>
                </div>
                <div className="text-center ">
                  <button
                    onClick={this.onSubmit}
                    type="submit"
                    className=" btn btn-block send-button tx-tfm"
                  >
                    S'enregistrer
                  </button>
                </div>

                <div className="form-group-auth">
                  <Link to="/login" className="btn btn-block g-button">
                    Se connecter
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { userSignup }
)(Loginn);
