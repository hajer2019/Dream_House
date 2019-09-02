import React from "react";
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
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contactpage} />
          <Route path="/add" component={Add} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/:annonce_id" component={AnnonceInfo} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
