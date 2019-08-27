import React from "react";
import "./App.css";
import Home from "./pages/home";
import Footer from "./components/footer";
import Header from "./components/header";
import Contactpage from "./pages/contact";
import Add from "./pages/add";
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route path="/home" component={Home} />
        <Route path="/contact" component={Contactpage} />
        <Route path="/Add" component={Add} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
