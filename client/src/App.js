import React, { Component } from "react";
import Home from "./pages/home";
import Footer from "./components/footer";
import Header from "./components/header";
import Contactpage from "./pages/contact";
import Add from "./pages/add";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import AnnonceInfo from "./components/AnnoncesList/AnnonceInfo";
import AboutUs from "./pages/AboutUs";
import Dashboard from "./components/dashboard/Dashboard";
import requireAuth from "./utils/requireAuth";
import { setUser } from "./redux/Actions/userActions";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  componentWillMount() {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      this.props.setUser(token);
    }
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contactpage} />
            <Route path="/add" component={requireAuth(Add)} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/dashboard" component={requireAuth(Dashboard)} />
            <Route path="/:annonce_id" component={AnnonceInfo} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
export default connect(
  null,
  { setUser }
)(App);
